import { useEffect, useState } from "react"
import { platformDirectoryService } from "../services/platformDirectoryService"
import "./AdminApp.css"

const SESSION_KEY = "elankav_admin_access_token"

function PlatformEditor({ platform, accessToken, onSaved, onDeleted }) {
  const [draft, setDraft] = useState(platform)
  const [saving, setSaving] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [message, setMessage] = useState("")

  useEffect(() => setDraft(platform), [platform])

  const update = (field, value) => setDraft((current) => ({ ...current, [field]: value }))

  const save = async () => {
    setSaving(true)
    setMessage("")
    try {
      const saved = await platformDirectoryService.savePlatform(draft, accessToken)
      setMessage("Cambios guardados correctamente.")
      onSaved(saved)
    } catch (error) {
      setMessage(error.message || "No fue posible guardar los cambios.")
    } finally {
      setSaving(false)
    }
  }

  const upload = async (event) => {
    const file = event.target.files?.[0]
    if (!file) return

    setUploading(true)
    setMessage("")
    try {
      const logoUrl = await platformDirectoryService.uploadLogo(file, draft.slug, accessToken)
      setDraft((current) => ({ ...current, logoUrl }))
      setMessage("Logo cargado. Guardá la plataforma para confirmar el cambio.")
    } catch (error) {
      setMessage(error.message || "No fue posible cargar el logo.")
    } finally {
      setUploading(false)
      event.target.value = ""
    }
  }

  const remove = async () => {
    if (!draft.id || !window.confirm(`¿Eliminar ${draft.name || "esta plataforma"}?`)) return
    setSaving(true)
    try {
      await platformDirectoryService.deletePlatform(draft.id, accessToken)
      onDeleted(draft.id)
    } catch (error) {
      setMessage(error.message || "No fue posible eliminar la plataforma.")
      setSaving(false)
    }
  }

  return (
    <article className="admin-platform-card">
      <div className="admin-platform-preview">
        {draft.logoUrl ? <img src={draft.logoUrl} alt={`Logo ${draft.name}`} /> : <strong>{draft.name || "NUEVA"}</strong>}
      </div>

      <div className="admin-field-grid">
        <label>
          Nombre
          <input value={draft.name} onChange={(event) => update("name", event.target.value)} />
        </label>
        <label>
          Identificador
          <input value={draft.slug} onChange={(event) => update("slug", event.target.value)} placeholder="elanvisual" />
        </label>
        <label className="admin-field-wide">
          Descripción
          <textarea rows="4" value={draft.description} onChange={(event) => update("description", event.target.value)} />
        </label>
        <label className="admin-field-wide">
          Ruta pública
          <input type="url" value={draft.routeUrl} onChange={(event) => update("routeUrl", event.target.value)} placeholder="https://visual.elankav.com/" />
        </label>
        <label className="admin-field-wide">
          URL del logo
          <input type="url" value={draft.logoUrl} onChange={(event) => update("logoUrl", event.target.value)} placeholder="https://..." />
        </label>
        <label>
          Orden
          <input type="number" value={draft.sortOrder} onChange={(event) => update("sortOrder", Number(event.target.value))} />
        </label>
        <label className="admin-checkbox">
          <input type="checkbox" checked={draft.active} onChange={(event) => update("active", event.target.checked)} />
          Visible en el portal
        </label>
      </div>

      <div className="admin-upload-row">
        <label className="admin-upload-button">
          {uploading ? "Cargando logo..." : "Subir logo"}
          <input type="file" accept="image/*" onChange={upload} disabled={uploading} />
        </label>
        <span>PNG, JPG, WebP o SVG. Máximo 3 MB.</span>
      </div>

      {message && <p className="admin-message">{message}</p>}

      <div className="admin-card-actions">
        <button className="admin-save" onClick={save} disabled={saving}>{saving ? "Guardando..." : "Guardar"}</button>
        {draft.id && <button className="admin-delete" onClick={remove} disabled={saving}>Eliminar</button>}
      </div>
    </article>
  )
}

export default function AdminApp() {
  const [accessToken, setAccessToken] = useState(() => sessionStorage.getItem(SESSION_KEY) || "")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [platforms, setPlatforms] = useState([])
  const [loading, setLoading] = useState(Boolean(accessToken))
  const [message, setMessage] = useState("")

  const loadPlatforms = async (token = accessToken) => {
    if (!token) return
    setLoading(true)
    setMessage("")
    try {
      setPlatforms(await platformDirectoryService.getAdminPlatforms(token))
    } catch (error) {
      sessionStorage.removeItem(SESSION_KEY)
      setAccessToken("")
      setMessage(error.message || "La sesión no es válida o no tiene permisos administrativos.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (accessToken) loadPlatforms(accessToken)
  }, [])

  const signIn = async (event) => {
    event.preventDefault()
    setLoading(true)
    setMessage("")
    try {
      const token = await platformDirectoryService.signIn(email, password)
      sessionStorage.setItem(SESSION_KEY, token)
      setAccessToken(token)
      setPassword("")
      await loadPlatforms(token)
    } catch (error) {
      setMessage(error.message || "No fue posible iniciar sesión.")
      setLoading(false)
    }
  }

  const signOut = () => {
    sessionStorage.removeItem(SESSION_KEY)
    setAccessToken("")
    setPlatforms([])
  }

  const handleSaved = (saved) => {
    setPlatforms((current) => {
      const exists = current.some((item) => item.id === saved.id)
      const next = exists ? current.map((item) => (item.id === saved.id ? saved : item)) : [...current, saved]
      return next.sort((a, b) => a.sortOrder - b.sortOrder)
    })
  }

  if (!accessToken) {
    return (
      <main className="admin-shell admin-login-shell">
        <section className="admin-login-panel">
          <a href="/" className="admin-back-link">← Volver a ELANKAV</a>
          <span>ADMINISTRACIÓN CENTRAL</span>
          <h1>Plataformas ELANKAV</h1>
          <p>Gestioná logos, descripciones, rutas y visibilidad desde una sola fuente oficial.</p>
          <form onSubmit={signIn}>
            <label>Correo administrativo<input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required /></label>
            <label>Contraseña<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required /></label>
            <button type="submit" disabled={loading}>{loading ? "Validando..." : "Ingresar"}</button>
          </form>
          {message && <p className="admin-message">{message}</p>}
        </section>
      </main>
    )
  }

  return (
    <main className="admin-shell">
      <header className="admin-header">
        <div><span>ELANKAV MASTER</span><h1>Directorio de plataformas</h1></div>
        <div className="admin-header-actions"><a href="/" target="_blank" rel="noreferrer">Ver portal</a><button onClick={signOut}>Cerrar sesión</button></div>
      </header>

      <section className="admin-content">
        <div className="admin-intro">
          <div><h2>Unidades del ecosistema</h2><p>Los cambios guardados alimentan directamente la sección pública “Nuestras unidades”.</p></div>
          <button onClick={() => setPlatforms((current) => [...current, platformDirectoryService.createEmptyPlatform()])}>+ Agregar plataforma</button>
        </div>

        {loading ? <p className="admin-status">Cargando plataformas...</p> : platforms.map((platform, index) => (
          <PlatformEditor
            key={platform.id || `new-${index}`}
            platform={platform}
            accessToken={accessToken}
            onSaved={handleSaved}
            onDeleted={(id) => setPlatforms((current) => current.filter((item) => item.id !== id))}
          />
        ))}

        {message && <p className="admin-message">{message}</p>}
      </section>
    </main>
  )
}
