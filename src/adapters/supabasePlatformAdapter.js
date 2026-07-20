const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL?.replace(/\/$/, "")
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY
const TABLE = "elankav_platforms"
const LOGO_BUCKET = "elankav-platform-logos"

function assertConfigured() {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    throw new Error("SUPABASE_NOT_CONFIGURED")
  }
}

async function parseResponse(response) {
  const text = await response.text()
  const payload = text ? JSON.parse(text) : null

  if (!response.ok) {
    const message = payload?.message || payload?.error_description || payload?.error || `HTTP_${response.status}`
    throw new Error(message)
  }

  return payload
}

function headers(accessToken, extra = {}) {
  return {
    apikey: SUPABASE_ANON_KEY,
    Authorization: `Bearer ${accessToken || SUPABASE_ANON_KEY}`,
    ...extra,
  }
}

export const supabasePlatformAdapter = {
  isConfigured() {
    return Boolean(SUPABASE_URL && SUPABASE_ANON_KEY)
  },

  async signIn(email, password) {
    assertConfigured()
    const response = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
      method: "POST",
      headers: headers(null, { "Content-Type": "application/json" }),
      body: JSON.stringify({ email, password }),
    })
    return parseResponse(response)
  },

  async listPlatforms({ accessToken, includeInactive = false } = {}) {
    assertConfigured()
    const activeFilter = includeInactive ? "" : "&active=eq.true"
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/${TABLE}?select=*&order=sort_order.asc${activeFilter}`,
      { headers: headers(accessToken) },
    )
    return parseResponse(response)
  },

  async savePlatform(platform, accessToken) {
    assertConfigured()
    const isUpdate = Boolean(platform.id)
    const endpoint = isUpdate
      ? `${SUPABASE_URL}/rest/v1/${TABLE}?id=eq.${encodeURIComponent(platform.id)}`
      : `${SUPABASE_URL}/rest/v1/${TABLE}`

    const response = await fetch(endpoint, {
      method: isUpdate ? "PATCH" : "POST",
      headers: headers(accessToken, {
        "Content-Type": "application/json",
        Prefer: "return=representation",
      }),
      body: JSON.stringify(platform),
    })
    const payload = await parseResponse(response)
    return Array.isArray(payload) ? payload[0] : payload
  },

  async deletePlatform(id, accessToken) {
    assertConfigured()
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/${TABLE}?id=eq.${encodeURIComponent(id)}`,
      { method: "DELETE", headers: headers(accessToken) },
    )
    await parseResponse(response)
  },

  async uploadLogo(file, slug, accessToken) {
    assertConfigured()
    const extension = file.name.split(".").pop()?.toLowerCase() || "png"
    const safeSlug = String(slug || "platform").replace(/[^a-z0-9-]/gi, "-").toLowerCase()
    const objectPath = `${safeSlug}/${Date.now()}.${extension}`
    const response = await fetch(
      `${SUPABASE_URL}/storage/v1/object/${LOGO_BUCKET}/${objectPath}`,
      {
        method: "POST",
        headers: headers(accessToken, {
          "Content-Type": file.type || "application/octet-stream",
          "x-upsert": "true",
        }),
        body: file,
      },
    )
    await parseResponse(response)
    return `${SUPABASE_URL}/storage/v1/object/public/${LOGO_BUCKET}/${objectPath}`
  },
}
