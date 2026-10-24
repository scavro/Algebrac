# Publicar Algebrac en Cloudflare

## Causa del fallo del 24 de octubre de 2026

El registro ejecuta `npx wrangler deploy` con Wrangler 4.152.0 y falla con:

> Could not detect a directory containing static files (e.g. html, css and js) for the project

La comprobación de GitHub mostró que `main` solo contenía `README.md` (commit `fdd047094e82febd19a37f97acb86644270a0ecc`). `index.html`, `assets` y los demás archivos del curso estaban en el disco local pero sin añadir a Git. Cloudflare clona el repositorio de GitHub, no esta carpeta del ordenador.

## Configuración preparada: Workers Static Assets

`wrangler.jsonc` identifica el Worker como `algebrac` y publica `dist`. No se necesita código de servidor, bindings, base de datos ni claves en el código del curso.

`node scripts/build_site.cjs` prepara `dist` con el HTML, los recursos, los seis materiales enlazados y el informe de fuentes enlazado. Conserva los originales sin modificación. No publica `.git`, herramientas, capturas, registros, credenciales ni otros informes de trabajo. Si ya existe un `dist` que no ha generado el script, se detiene sin borrarlo.

En Cloudflare → Workers & Pages → **algebrac** → configuración de compilaciones:

| Campo | Valor |
|---|---|
| Repositorio | `scavro/Algebrac` |
| Rama de producción | `main` |
| Directorio raíz | raíz del repositorio; sin subcarpeta |
| Build command / comando de compilación | `npm run build` |
| Deploy command / comando de despliegue | `npx wrangler deploy` |

La instalación automática debe incluir las dependencias de desarrollo. Si has personalizado esa fase, utiliza `npm ci --include=dev`; no configures `npm ci --omit=dev`. El `package-lock.json` fija Wrangler y sus dependencias.

El nombre del Worker del panel debe coincidir con `name` en `wrangler.jsonc`: `algebrac`.

## Archivos que deben estar en GitHub

Antes de confirmar el commit, revisa `git diff --cached --stat`. Incluye al menos:

```text
git add .gitignore README.md CLOUDFLARE.md package.json package-lock.json wrangler.jsonc
git add index.html assets materiales scripts revision/auditoria-fuentes.md
git diff --cached --stat
git commit -m "Prepare static course deployment on Cloudflare"
git push origin main
```

El push puede iniciar automáticamente un despliegue si el repositorio sigue conectado a Workers Builds. Esta preparación no ha efectuado ese push ni una publicación remota.

No añadas `dist` ni `node_modules`: se generan en la compilación. La carpeta `materiales` incluye los documentos descargables y se publicará junto con el curso, conservando los originales y sus avisos de autoría/licencia.

## Comprobar antes de publicar

Para desarrollo/despliegue se necesita Node.js 22 o posterior; para estudiar abriendo `index.html`, no.

```text
npm ci --include=dev
npm test
npm run deploy:check
```

`deploy:check` valida el empaquetado mediante `wrangler deploy --dry-run`: no sube ni publica el sitio. No demuestra por sí solo que la configuración de la cuenta ni el despliegue remoto estén correctos.

Comprobación local realizada el 24 de octubre: `npm test` y `npm run deploy:check` terminaron correctamente con Wrangler 4.152.0. El paquete contiene 79 archivos de contenido (14.295.180 bytes en total); el mayor tiene 6.925.315 bytes. Se verificaron las copias frente a los originales, las rutas del HTML y las fuentes de KaTeX. Los controles existentes también pasaron: 32 lecciones, 115 ejercicios de práctica y 715 fórmulas renderizables. No se ha efectuado un despliegue remoto.

Para un despliegue manual expresamente decidido por ti, `npm run deploy` compila y publica utilizando tu autenticación de Cloudflare. No pegues tokens en el chat ni los guardes en Git.

## Plan gratuito y límites

El curso solo sirve archivos estáticos. Cloudflare documenta peticiones gratuitas e ilimitadas a Static Assets, sin coste adicional de almacenamiento de Assets. Workers Free permite 20.000 archivos por versión y 25 MiB por archivo. El paquete preparado queda por debajo de ambos límites. No se activa `run_worker_first` ni servicios de pago.

Referencias consultadas el 24 de octubre de 2026:

- https://developers.cloudflare.com/workers/static-assets/binding/
- https://developers.cloudflare.com/workers/static-assets/billing-and-limitations/
- https://developers.cloudflare.com/workers/platform/limits/#static-assets
- https://developers.cloudflare.com/workers/ci-cd/builds/configuration/

## Si el proyecto fuese Pages

El log recibido corresponde a Workers. Para un proyecto Pages existente, el mismo empaquetado estático sirve con preset `None`, comando de compilación `node scripts/build_site.cjs` y directorio de salida `dist`. En Pages no se utiliza el comando de despliegue de Workers.
