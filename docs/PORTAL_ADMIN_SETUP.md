# PORTAL-ADMIN-01 — Activación controlada

## Estado

El código del portal y del administrador está preparado, pero no debe integrarse ni desplegarse hasta completar Preview y configurar Supabase.

## Arquitectura

```text
Supabase Auth
    ↓
SupabasePlatformAdapter
    ↓
PlatformDirectoryService
    ↓
Units / AdminApp
```

La interfaz nunca escribe directamente en Supabase fuera del Adapter.

## 1. Aplicar migración

Ejecutar en el proyecto Supabase oficial de ELANKAV:

```text
supabase/migrations/20260720_portal_platform_directory.sql
```

La migración crea:

- `public.elankav_platforms`;
- `public.elankav_admin_users`;
- función `public.is_elankav_admin()`;
- políticas RLS;
- bucket público `elankav-platform-logos`;
- políticas de escritura para administradores;
- registros iniciales de ELANVISUAL y ELANPET.

## 2. Crear usuario administrativo

Crear el usuario mediante Supabase Auth. Después autorizarlo usando su UUID:

```sql
insert into public.elankav_admin_users (user_id)
values ('UUID_DEL_USUARIO_AUTH');
```

No usar contraseñas escritas en el frontend ni permisos públicos de escritura.

## 3. Configurar Vercel Preview

Agregar en Preview:

```text
VITE_SUPABASE_URL
VITE_SUPABASE_ANON_KEY
```

Usar únicamente la clave pública `anon`. Nunca colocar `service_role` en Vite.

## 4. Validación requerida

### Portal público

- abre `/` sin errores;
- muestra únicamente plataformas con `active = true`;
- ELANVISUAL abre `https://visual.elankav.com/`;
- ELANPET abre `https://pet.elankav.com/`;
- logo, descripción y orden coinciden con Supabase;
- si Supabase no responde, aparece el fallback sin romper la portada.

### Administrador

- abre `/admin`;
- rechaza usuarios no autorizados por RLS;
- permite editar nombre, descripción, ruta, orden y visibilidad;
- permite cargar imágenes de hasta 3 MB;
- un cambio guardado se refleja al recargar el portal público;
- la sesión vive en `sessionStorage`, no como fuente de datos.

### Calidad

- `npm run lint`;
- `npm run build`;
- validación visual en escritorio;
- validación visual en móvil;
- no merge hasta cerrar todos los puntos.
