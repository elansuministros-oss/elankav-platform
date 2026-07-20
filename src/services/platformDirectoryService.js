import { supabasePlatformAdapter } from "../adapters/supabasePlatformAdapter"
import { PLATFORM_DEFAULTS } from "../config/platformDefaults"

function fromRecord(record) {
  return {
    id: record.id,
    slug: record.slug,
    name: record.name,
    description: record.description || "",
    routeUrl: record.route_url || "",
    logoUrl: record.logo_url || "",
    active: Boolean(record.active),
    sortOrder: Number(record.sort_order || 0),
  }
}

function toRecord(platform) {
  return {
    ...(platform.id ? { id: platform.id } : {}),
    slug: String(platform.slug || "").trim().toLowerCase(),
    name: String(platform.name || "").trim(),
    description: String(platform.description || "").trim(),
    route_url: String(platform.routeUrl || "").trim(),
    logo_url: String(platform.logoUrl || "").trim(),
    active: Boolean(platform.active),
    sort_order: Number(platform.sortOrder || 0),
  }
}

function validate(platform) {
  if (!platform.name?.trim()) throw new Error("El nombre de la plataforma es obligatorio.")
  if (!platform.slug?.trim()) throw new Error("El identificador de la plataforma es obligatorio.")

  if (platform.routeUrl) {
    const parsed = new URL(platform.routeUrl)
    if (parsed.protocol !== "https:") throw new Error("La ruta debe utilizar HTTPS.")
  }

  if (platform.logoUrl) {
    const parsed = new URL(platform.logoUrl)
    if (parsed.protocol !== "https:") throw new Error("El logo debe utilizar una URL HTTPS.")
  }
}

export const platformDirectoryService = {
  async getPublicPlatforms() {
    if (!supabasePlatformAdapter.isConfigured()) return PLATFORM_DEFAULTS.filter((item) => item.active)

    try {
      const records = await supabasePlatformAdapter.listPlatforms()
      return records.map(fromRecord)
    } catch (error) {
      console.error("No fue posible cargar el directorio desde Supabase.", error)
      return PLATFORM_DEFAULTS.filter((item) => item.active)
    }
  },

  async signIn(email, password) {
    const session = await supabasePlatformAdapter.signIn(email.trim(), password)
    if (!session?.access_token) throw new Error("No fue posible iniciar sesión.")
    return session.access_token
  },

  async getAdminPlatforms(accessToken) {
    const records = await supabasePlatformAdapter.listPlatforms({ accessToken, includeInactive: true })
    return records.map(fromRecord)
  },

  async savePlatform(platform, accessToken) {
    validate(platform)
    const saved = await supabasePlatformAdapter.savePlatform(toRecord(platform), accessToken)
    return fromRecord(saved)
  },

  async deletePlatform(id, accessToken) {
    if (!id) return
    await supabasePlatformAdapter.deletePlatform(id, accessToken)
  },

  async uploadLogo(file, slug, accessToken) {
    if (!file) throw new Error("Seleccioná un archivo de imagen.")
    if (!file.type.startsWith("image/")) throw new Error("El archivo debe ser una imagen.")
    if (file.size > 3 * 1024 * 1024) throw new Error("El logo no puede superar 3 MB.")
    return supabasePlatformAdapter.uploadLogo(file, slug, accessToken)
  },

  createEmptyPlatform() {
    return {
      slug: "",
      name: "",
      description: "",
      routeUrl: "",
      logoUrl: "",
      active: false,
      sortOrder: 100,
    }
  },
}
