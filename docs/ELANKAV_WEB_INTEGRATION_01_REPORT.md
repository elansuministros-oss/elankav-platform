# ELANKAV-WEB-INTEGRATION-01 — Informe de implementación

## Estado

Movimiento completado y aprobado para producción.

## Repositorio

`elansuministros-oss/elankav-platform`

## Rama de trabajo

`feature/ELANKAV-WEB-INTEGRATION-01`

## Pull Request

`PR #3`

## Objetivo

Integrar en el portal institucional ELANKAV las unidades públicas activas del ecosistema, preservando la separación técnica entre plataformas y manteniendo una presentación visual limpia, institucional y coherente.

## Resultado implementado

- ELANVISUAL enlazada a `https://visual.elankav.com`.
- ELANPET enlazada a `https://pet.elankav.com`.
- Se ocultaron temporalmente las unidades sin activación pública confirmada.
- Las tarjetas utilizan la portada real de cada plataforma.
- Las portadas se muestran en blanco y negro por defecto.
- Al pasar el cursor recuperan el color y aplican un zoom ligero.
- Toda la tarjeta funciona como enlace.
- Se eliminaron nombre, descripción y dominio superpuestos sobre las portadas.
- Solo permanecen número, estado `UNIDAD ACTIVA` y flecha de acceso.
- Se eliminó del flujo principal la sección repetida `Units`, evitando duplicación de ELANVISUAL y ELANPET.

## Archivos modificados

- `src/App.jsx`
- `src/components/Projects.jsx`
- `src/components/Ecosystem.css`
- `src/data/ecosystemPlatforms.js`
- `src/components/Units.jsx`

## Límites respetados

- No se modificó ELANVISUAL.
- No se modificó ELANPET.
- No se modificó Supabase.
- No se generaron imágenes.
- No se alteraron servicios externos.

## Validación

- Build de Preview validado mediante Vercel.
- Enlaces oficiales conservados.
- Tarjetas activas y clicables.
- Sección duplicada retirada del render principal.
- PR listo para integración a `main`.

## Criterio de cierre

El movimiento se considera cerrado cuando el PR #3 sea integrado en `main` y el despliegue de producción de Vercel finalice correctamente.
