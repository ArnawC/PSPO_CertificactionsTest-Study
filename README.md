# PSPO I Trainer

Entrenador de examen para la certificación **PSPO I** (Professional Scrum
Product Owner I) de Scrum.org, basado en la Scrum Guide de noviembre de 2020.

**🔗 App en vivo (web):**
[https://arnawc.github.io/PSPO_CertificactionsTest-Study/app/index.html](https://arnawc.github.io/PSPO_CertificactionsTest-Study/app/index.html)

También está disponible como aplicación de escritorio para Windows (Electron),
usando exactamente el mismo código que la versión web.

## Índice

- [Funcionalidades](#funcionalidades)
- [Usar la app](#usar-la-app)
  - [Como web](#como-web-recomendado)
  - [Instalar en el móvil (iPhone/Android)](#instalar-en-el-móvil-iphoneandroid)
  - [Como app de escritorio (Electron)](#como-app-de-escritorio-electron)
- [Idiomas](#idiomas)
- [Datos y privacidad](#datos-y-privacidad)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Historial de versiones](#historial-de-versiones)

## Funcionalidades

**Temario**
- Teoría de cada tema (basada en la Scrum Guide 2020), con vista individual
  y vista de "Temario completo".
- Lectura en voz alta (texto a voz) de cualquier tema, con soporte de
  controles en la pantalla de bloqueo (Media Session API).
- Buscador de conceptos dentro del temario, con fragmento de contexto
  resaltado.
- Diagramas visuales para ilustrar conceptos clave (p. ej. el ciclo de
  los tres pilares del empirismo).

**Tests**
- Test por tema, con recuento configurable de preguntas por tipo.
- Test general (todos los temas mezclados) y simulación de examen final
  (con temporizador, igual que el examen real).
- Atajos de teclado durante el test: `1`-`6` / `A`-`F` para elegir una
  opción, `Enter` para comprobar/continuar.
- Retroalimentación detallada por opción tras cada pregunta, distinguiendo
  claramente aciertos, fallos y respuestas correctas que no marcaste.

**Modos especiales**
- **Bucle de fallo continuo**: repite solo las preguntas falladas hasta
  acertarlas 3 veces seguidas.
- **Test de redención**: un test de una sola pasada con todo lo pendiente
  en el registro de errores.
- **Repaso espaciado**: prioriza qué preguntas falladas tocan repasar hoy,
  con un algoritmo de repetición espaciada (SM-2 simplificado).
- **Verdadero/Falso masivo**: convierte cada opción de preguntas de
  opción única/múltiple en un ítem independiente de V/F.
- **Preguntas trampa**: agrupa preguntas con patrones típicos de trampa
  de examen ("siempre", "nunca", "únicamente"...).
- **Flashcards**: tarjetas rápidas de término/definición extraídas del
  propio temario, con seguimiento de "lo sabía" / "no lo sabía".

**Preguntas propias**
- Crea tus propias preguntas (opción única, múltiple o V/F), con
  explicación por opción y nota de examen. Se integran automáticamente
  en el resto de modos de test.

**Historial y estadísticas**
- Resumen global, evolución del rendimiento, precisión por tipo de
  pregunta y por tipo de test.
- Mapa de calor de conocimiento por tema y predicción de nota del
  examen real según tu progreso.
- Historial de errores con la racha de aciertos consecutivos de cada uno.
- Filtros combinables por tipo de test, tema y rango de fechas.
- **Copia de seguridad**: descarga tus datos (historial, preguntas
  propias y errores) en un JSON y recupéralos en otro dispositivo o
  tras borrar caché/cookies.

**Personalización**
- Modo claro / oscuro.
- Idioma de la interfaz y del banco de preguntas: español / inglés.
- Tamaño de letra ajustable (Normal / Grande / Muy grande) para el
  contenido de lectura.
- Pomodoro integrado (temporizador de enfoque/descanso).
- Menú lateral colapsable y diseño responsive para pantallas de móvil.

**Sobre la app**
- Número de versión visible y un historial de versiones con la
  descripción de cada cambio (enlazado al repositorio de GitHub).

## Usar la app

### Como web (recomendado)

Abre directamente:
👉 **https://arnawc.github.io/PSPO_CertificactionsTest-Study/app/index.html**

No requiere instalación ni cuenta. Todos los datos (historial, preguntas
propias, preferencias) se guardan localmente en tu navegador.

### Instalar en el móvil (iPhone/Android)

1. Abre el enlace de arriba en **Safari** (iPhone) o **Chrome** (Android).
2. Toca **Compartir** → **Añadir a pantalla de inicio**.
3. Se creará un icono que abre la app a pantalla completa, sin la barra
   del navegador.

### Como app de escritorio (Electron)

Requiere [Node.js](https://nodejs.org/).

```bash
npm install
npm start
```

Para generar un ejecutable de Windows en `dist/`:

```bash
npm run package-win
```

El código de la app (`app/`) es idéntico al de la versión web; Electron
solo lo carga dentro de una ventana nativa (`main.js`).

## Idiomas

La interfaz y el banco de preguntas están disponibles en **español** e
**inglés**, conmutable desde el sidebar. El cambio de idioma no reinicia
tu progreso: historial, preguntas propias y errores son independientes
del idioma.

## Datos y privacidad

Todos los datos de uso (historial de tests, preguntas propias, registro
de errores, preferencias) se guardan con `localStorage` **en tu propio
navegador o dispositivo** — no se envían a ningún servidor. Esto significa
que:

- No se sincronizan automáticamente entre dispositivos o navegadores.
- Se pierden si borras los datos de navegación de ese sitio, pero
  **no** al reiniciar el ordenador o cerrar la app.
- Puedes hacer una copia de seguridad exportable desde
  *Historial y estadísticas → Copia de seguridad* para migrarlos a otro
  dispositivo o restaurarlos tras un borrado accidental.

## Estructura del proyecto

```
app/
├── index.html          Punto de entrada (web y Electron)
├── app.js              Lógica de la aplicación (UI, tests, modos, stats...)
├── style.css            Estilos
├── data.es.js            Banco de temas/preguntas en español
├── data.en.js            Banco de temas/preguntas en inglés
├── changelog.js         Historial de versiones mostrado en "Sobre la app"
├── manifest.json         Manifest de web app (icono, nombre, tema)
├── apple-touch-icon.png  Icono para "Añadir a pantalla de inicio" (iOS)
└── icon-512.png          Icono de alta resolución (Android/PWA)
main.js                  Proceso principal de Electron
package.json             Dependencias y scripts de Electron
CHANGELOG.md             Historial de versiones (código fuente de changelog.js)
```

## Historial de versiones

Cada commit incrementa la versión de la app. El historial completo está
en [`CHANGELOG.md`](./CHANGELOG.md) y también es visible dentro de la
propia app, en *Sobre la app → Ver historial de versiones*.

Repositorio: https://github.com/ArnawC/PSPO_CertificactionsTest-Study
