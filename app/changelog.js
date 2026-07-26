// Font: es manté sincronitzat manualment amb /CHANGELOG.md (arrel del repo, en català).
// Cada commit incrementa APP_VERSION i afegeix una entrada aquí (la més nova primer),
// amb la descripció traduïda a es/en perquè es mostri en l'idioma actiu de la interfície.
const APP_VERSION = "1.23.0";
const REPO_URL = "https://github.com/ArnawC/PSPO_CertificactionsTest-Study";
const CHANGELOG = [
  { version: "1.23.0", date: "2026-07-26", desc: {
    es: "Corrige la retroalimentación de preguntas de respuesta múltiple: las opciones correctas que NO marcaste ahora se distinguen (verde discontinuo + etiqueta \"correcta, no marcada\") de las que sí acertaste, en vez de mostrarse todas en verde sólido.",
    en: "Fixes multi-choice answer feedback: correct options you did NOT select are now visually distinguished (dashed green + a \"correct, not selected\" tag) from the ones you actually got right, instead of all showing solid green."
  }},
  { version: "1.22.0", date: "2026-07-26", desc: {
    es: "Añade icono apple-touch-icon y manifest.json para que \"Añadir a pantalla de inicio\" en iPhone detecte el logo correctamente.",
    en: "Adds an apple-touch-icon and manifest.json so \"Add to Home Screen\" on iPhone correctly detects the app logo."
  }},
  { version: "1.21.0", date: "2026-07-26", desc: {
    es: "Añade un diagrama visual (ciclo de los tres pilares) en el temario de Empirismo, tras la frase que explica cómo se refuerzan en cadena.",
    en: "Adds a visual diagram (the three-pillars cycle) to the Empiricism theory, right after the sentence explaining how they reinforce each other."
  }},
  { version: "1.20.0", date: "2026-07-26", desc: {
    es: "Añade tamaño de letra ajustable (Normal/Grande/Muy grande) y un nuevo modo Flashcards en Modos especiales, con tarjetas término/definición extraídas del temario.",
    en: "Adds adjustable font size (Normal/Large/Extra large) and a new Flashcards mode under Special modes, with term/definition cards pulled from the theory."
  }},
  { version: "1.19.0", date: "2026-07-26", desc: {
    es: "Añade repaso espaciado (SM-2) como nuevo modo especial, atajos de teclado en el test (1-6/A-F y Enter) y buscador de conceptos en el temario.",
    en: "Adds spaced review (SM-2) as a new special mode, keyboard shortcuts in tests (1-6/A-F and Enter), and a concept search box in the theory section."
  }},
  { version: "1.18.0", date: "2026-07-26", desc: {
    es: "Añade botones de descargar e importar copia de seguridad (historial, preguntas propias y errores) en Historial y estadísticas.",
    en: "Adds download/import backup buttons (history, custom questions, and errors) under History and statistics."
  }},
  { version: "1.17.0", date: "2026-07-26", desc: {
    es: "Corrige el contraste del botón \"Abandonar\" en la tarjeta de pregunta y hace que la barra de progreso muestre las respuestas correctas en verde (antes naranja).",
    en: "Fixes the \"Abandon\" button contrast on the question card and makes the progress bar show correct answers in green (previously orange)."
  }},
  { version: "1.16.0", date: "2026-07-26", desc: {
    es: "Añade número de versión de la app y un historial de versiones (cada commit) en \"Sobre la app\".",
    en: "Adds an app version number and a per-commit version history under \"About the app\"."
  }},
  { version: "1.15.0", date: "2026-07-26", desc: {
    es: "Hace que \"Simular examen completo\" en el panel haga scroll directo a su sección.",
    en: "Makes \"Simulate full exam\" on the dashboard scroll directly to its section."
  }},
  { version: "1.14.0", date: "2026-07-26", desc: {
    es: "Hace que el temario ocupe todo el ancho y añade un menú lateral colapsable en móvil.",
    en: "Makes the theory pages use the full width and adds a collapsible mobile sidebar menu."
  }},
  { version: "1.13.0", date: "2026-07-24", desc: {
    es: "Añade lectura en voz alta del temario con soporte de pantalla bloqueada.",
    en: "Adds text-to-speech for the theory pages, with lock-screen support."
  }},
  { version: "1.12.0", date: "2026-07-24", desc: {
    es: "Hace que la barra lateral tenga scroll propio en pantallas de poca altura.",
    en: "Makes the sidebar scroll independently on short screens."
  }},
  { version: "1.11.0", date: "2026-07-24", desc: {
    es: "Simplifica la navegación: Temario con vista completa, Test general y final unificados.",
    en: "Simplifies navigation: full-view Theory, unified general + final test."
  }},
  { version: "1.10.0", date: "2026-07-24", desc: {
    es: "El banco de preguntas del examen ahora sigue el idioma de la interfaz (es/en).",
    en: "The exam question bank now follows the interface language (es/en)."
  }},
  { version: "1.9.0", date: "2026-07-24", desc: {
    es: "Amplía y verifica el banco de preguntas ES/EN con contenido real basado en la Scrum Guide 2020.",
    en: "Expands and verifies the ES/EN question bank with real content based on the 2020 Scrum Guide."
  }},
  { version: "1.8.0", date: "2026-07-24", desc: {
    es: "Separa el banco de preguntas por idioma y abre la app maximizada.",
    en: "Splits the question bank by language and opens the app maximized."
  }},
  { version: "1.7.0", date: "2026-07-24", desc: {
    es: "Sistema de idiomas ES/EN y correcciones de texto.",
    en: "ES/EN language system and text fixes."
  }},
  { version: "1.6.0", date: "2026-07-24", desc: {
    es: "Bloques 4 y 5: Pomodoro y pantalla \"Sobre la app\".",
    en: "Blocks 4 and 5: Pomodoro and the \"About the app\" screen."
  }},
  { version: "1.5.0", date: "2026-07-24", desc: {
    es: "Bloque 3: mapa de calor, predicción de nota e historial de errores en Estadísticas.",
    en: "Block 3: knowledge heatmap, grade prediction, and error history in Statistics."
  }},
  { version: "1.4.0", date: "2026-07-24", desc: {
    es: "Bloque 2: hub de modos especiales.",
    en: "Block 2: special modes hub."
  }},
  { version: "1.3.0", date: "2026-07-24", desc: {
    es: "Bloque 1: motor de test — lector de voz y Duda Extrema.",
    en: "Block 1: quiz engine — voice reader and Extreme Doubt."
  }},
  { version: "1.2.0", date: "2026-07-24", desc: {
    es: "Añade preguntas propias, modo claro/oscuro y filtros de estadísticas.",
    en: "Adds custom questions, light/dark mode, and statistics filters."
  }},
  { version: "1.1.0", date: "2026-07-23", desc: {
    es: "Importa el código fuente de PSPO I Trainer (app Electron).",
    en: "Imports the PSPO I Trainer source code (Electron app)."
  }},
  { version: "1.0.0", date: "2026-07-23", desc: {
    es: "Commit inicial.",
    en: "Initial commit."
  }}
];
