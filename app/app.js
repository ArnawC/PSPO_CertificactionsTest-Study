const STORAGE_KEY = "pspo_i_trainer_history_v1";
const CUSTOM_KEY = "pspo_i_trainer_custom_questions_v1";
const THEME_KEY = "pspo_i_trainer_theme_v1";
const ERROR_KEY = "pspo_i_trainer_errors_v1";
const LANG_KEY = "pspo_i_trainer_lang_v1";
const EXAM_TOTAL_Q = 80;
const EXAM_TOTAL_SEC = 60 * 60;

// ---------------- I18N ----------------
const STRINGS = {
  es: {
    "brand.subtitle": "Entrenador de examen",
    "nav.menu": "Menú",
    "nav.dashboard": "Inicio",
    "nav.theoryList": "Temario",
    "nav.topicTest": "Test por tema",
    "nav.testConfig": "Test general y examen",
    "nav.specialModes": "Modos especiales",
    "nav.customQuestions": "Preguntas propias",
    "nav.stats": "Historial y estadísticas",
    "nav.info": "Sobre la app",
    "pomo.focus": "Enfoque",
    "pomo.break": "Descanso",
    "pomo.start": "Iniciar",
    "pomo.pause": "Pausa",
    "pomo.resetTitle": "Reiniciar",
    "theme.toLight": "Modo claro",
    "theme.toDark": "Modo oscuro",
    "theme.switchTitle": "Cambiar el tema",
    "lang.switchTitle": "Cambiar idioma / Switch language",
    "lang.toEnglish": "English",
    "lang.toSpanish": "Español",
    "dashboard.welcome": "Bienvenido/a de nuevo",
    "dashboard.subtitle": "Preparación para el PSPO I — Scrum Guide 2020",
    "dashboard.testsCompleted": "Tests realizados",
    "dashboard.globalAvg": "Media global",
    "dashboard.questionBank": "Banco de preguntas",
    "dashboard.weakestTopic": "Tema más flojo",
    "dashboard.notEnoughData": "aún no hay suficientes datos",
    "dashboard.startGeneral": "Hacer un test general ↗",
    "dashboard.startFinal": "Simular examen completo ↗",
    "dashboard.progressByTopic": "Progreso por tema",
    "dashboard.questionsInBank": "preguntas en el banco",
    "dashboard.correctPct": "% acierto",
    "dashboard.noAttempts": "sin intentos",
    "theory.title": "Temario",
    "theory.subtitle": "Repasa cada bloque antes de hacer el test correspondiente",
    "theory.practiceQuestions": "preguntas de práctica",
    "theory.backToTopics": "← Todos los temas",
    "theory.startTopicTest": "Hacer test de este tema ↗",
    "theory.viewAll": "Ver todo el temario completo ↗",
    "theory.viewAllTitle": "Temario completo",
    "theory.listenTopic": "Escuchar este tema",
    "theory.listenAll": "Escuchar todo el temario",
    "theory.stopListening": "Detener lectura",
    "theory.searchPlaceholder": "Buscar un concepto en el temario...",
    "theory.searchNoResults": "No se han encontrado coincidencias.",
    "typeLabel.single": "Opción única",
    "typeLabel.multi": "Respuesta múltiple",
    "typeLabel.tf": "Verdadero / Falso",
    "topicConfig.title": "Test por tema",
    "topicConfig.subtitle": "Elige el tema y cuántas preguntas de cada tipo quieres practicar",
    "topicConfig.topicLabel": "Tema",
    "topicConfig.max": "máx.",
    "topicConfig.randomOrder": "Orden aleatorio y preguntas distintas cada vez",
    "topicConfig.alwaysOn": "siempre activo",
    "topicConfig.timer": "Temporizador (relativo a 60 min / 80 preguntas)",
    "action.startTest": "Empezar test ↗",
    "generalConfig.title": "Test general",
    "generalConfig.subtitle": "Preguntas de todos los temas mezcladas. Elige cuántas quieres de cada tipo (hasta el máximo disponible: {n}).",
    "finalConfig.title": "Test final — simulación de examen",
    "finalConfig.subtitle": "Mezcla todos los temas y todos los tipos de pregunta, con temporizador fijo, igual que el examen real ({n} preguntas / 60 min).",
    "finalConfig.questionsInTest": "Preguntas de este test",
    "finalConfig.available": "{n} de {total} disponibles",
    "finalConfig.timeAvailable": "Tiempo disponible",
    "finalConfig.proportional": "{mins} min (proporcional si hay menos de {n})",
    "finalConfig.order": "Orden",
    "finalConfig.randomOrder": "totalmente aleatorio, distinto cada vez",
    "finalConfig.startExam": "Empezar examen ↗",
    "quiz.questionOf": "Pregunta {i} / {n} — {label}",
    "quiz.listen": "Escuchar",
    "quiz.listenTitle": "Escuchar la pregunta",
    "quiz.markReview": "Marcar para revisar",
    "quiz.marked": "Marcada",
    "quiz.markReviewTitle": "Marcar para revisar (Duda Extrema)",
    "quiz.selectAll": "Selecciona todas las que correspondan",
    "quiz.keyboardHint": "Atajos: 1-6 o A-F para elegir · Enter para comprobar/continuar",
    "quiz.correct": "Correcto.",
    "quiz.incorrect": "Incorrecto.",
    "quiz.examNote": "Nota de examen:",
    "quiz.abandon": "Abandonar",
    "quiz.viewResult": "Ver resultado",
    "quiz.next": "Siguiente",
    "quiz.check": "Comprobar",
    "quiz.confirmAbandon": "¿Seguro que quieres abandonar el test? Se perderá el progreso actual.",
    "quiz.ttsUnsupported": "Este entorno no admite la lectura en voz alta.",
    "quiz.selectAtLeastOne": "Selecciona al menos una pregunta.",
    "mode.topicPrefix": "Tema: {name}",
    "score.timeUp": "Tiempo agotado — ",
    "score.result": "Resultado: {label}",
    "score.correctOf": "{correct} de {total} correctas · {mins} min {secs}s",
    "score.topic": "Tema",
    "score.hits": "Aciertos",
    "score.markedForReview": "Marcadas para revisar (Duda Extrema)",
    "score.hit": "Acertada",
    "score.missed": "Fallada",
    "score.topicsToReview": "Temas a repasar: {names}. Quedan anotados en el historial.",
    "score.perfect": "100% en todos los temas de este test.",
    "score.backHome": "Volver al inicio",
    "score.repeat": "Repetir con la misma configuración ↗",
    "special.title": "Modos especiales",
    "special.subtitle": "Estrategias de repaso pensadas para reforzar exactamente lo que te falta.",
    "special.loopTitle": "Bucle de fallo continuo",
    "special.loopDesc": "Repite solo las preguntas que has fallado, en bucle, hasta que las aciertes 3 veces seguidas.",
    "special.loopMeta": "{n} pregunta{s} activa{s} en el registro de errores",
    "special.loopStart": "Empezar bucle ↗",
    "special.redemptionTitle": "Test de redención",
    "special.redemptionDesc": "Un test normal, de una sola vez, con todas las preguntas que actualmente tienes pendientes en el registro de errores.",
    "special.redemptionMeta": "{n} pregunta{s} disponible{s}",
    "special.redemptionStart": "Empezar redención ↗",
    "special.spacedTitle": "Repaso espaciado",
    "special.spacedDesc": "Repasa solo las preguntas falladas que ya tocan hoy, según cuánto las domines (repetición espaciada tipo SM-2).",
    "special.spacedMeta": "{n} pregunta{s} para repasar hoy",
    "special.spacedNoneDueMeta": "Sin repasos pendientes hoy · próximo: {date}",
    "special.spacedEmptyMeta": "Aún no hay preguntas falladas",
    "special.spacedStart": "Empezar repaso ↗",
    "special.tfTitle": "Verdadero / Falso masivo",
    "special.tfDesc": "Transforma cada opción de las preguntas de opción única y múltiple en una pregunta independiente de Verdadero/Falso. Procesa el triple de conceptos en menos tiempo.",
    "special.tfMeta": "{n} preguntas base · hasta {m} ítems V/F posibles",
    "special.tfCountLabel": "Número de ítems",
    "special.tfStart": "Empezar ↗",
    "special.trapTitle": "Preguntas trampa",
    "special.trapDesc": "Agrupa preguntas con palabras típicas de trampa de examen (\"siempre\", \"nunca\", \"únicamente\"...) u opciones muy parecidas, para entrenar la atención.",
    "special.trapMeta": "{n} pregunta{s} detectada{s}",
    "special.trapStart": "Empezar ↗",
    "special.noErrorsAlert": "No tienes preguntas pendientes en el registro de errores.",
    "special.notEnoughMcAlert": "No hay suficientes preguntas de opción única/múltiple para generar este modo.",
    "special.noTrapAlert": "No se han detectado preguntas trampa en el banco actual.",
    "tfmassive.template": "Verdadero o falso: \"{opt}\" es una respuesta correcta para — {q}",
    "tfmassive.correctExp": "Esta opción sí es una respuesta correcta a la pregunta original.",
    "tfmassive.incorrectExp": "Esta opción no es una respuesta correcta a la pregunta original.",
    "loop.header": "Bucle de fallo continuo · quedan {n} preguntas activas",
    "loop.streak": "Racha: {n}/3",
    "loop.confirmAbandon": "¿Seguro que quieres abandonar el bucle? El progreso de racha ya hecho se conserva.",
    "loop.completedTitle": "Bucle de fallo continuo completado",
    "loop.completedDesc": "Has dominado todas las preguntas activas (3 aciertos seguidos cada una)",
    "loop.backToSpecial": "Volver a modos especiales",
    "custom.title": "Preguntas propias",
    "custom.subtitle": "Añade preguntas personalizadas que se integran automáticamente en los tests por tema, generales y en el examen final. {n} pregunta{s} propia{s}.",
    "custom.newQuestion": "+ Nueva pregunta",
    "custom.added": "Preguntas añadidas",
    "custom.noneYet": "Aún no has añadido ninguna pregunta propia.",
    "custom.delete": "Eliminar",
    "custom.topicLabel": "Tema",
    "custom.typeLabel": "Tipo de pregunta",
    "custom.questionLabel": "Enunciado",
    "custom.questionPlaceholder": "Escribe la pregunta...",
    "custom.optionsLabelMulti": "Opciones (marca todas las correctas)",
    "custom.optionsLabelSingle": "Opciones (marca la correcta)",
    "custom.optionPlaceholder": "Texto de la opción {letter}",
    "custom.explanationPlaceholder": "Explicación de esta opción",
    "custom.addOption": "+ Añadir opción",
    "custom.trapLabel": "Nota de examen (trampa habitual)",
    "custom.trapPlaceholder": "Ej: no confundir X con Y...",
    "custom.cancel": "Cancelar",
    "custom.save": "Guardar pregunta",
    "custom.confirmDelete": "¿Eliminar esta pregunta propia? Esta acción no se puede deshacer.",
    "custom.alertNoQuestion": "Escribe el enunciado de la pregunta.",
    "custom.alertOptionsText": "Todas las opciones deben tener texto.",
    "custom.alertExplanations": "Hay que escribir una explicación para cada opción.",
    "custom.alertTrap": "Hay que añadir una nota de examen (trampa habitual).",
    "custom.alertOneCorrectMulti": "Marca al menos una opción correcta.",
    "custom.alertExactlyOneCorrect": "Marca exactamente una opción correcta.",
    "stats.title": "Historial y estadísticas",
    "stats.testsRegistered": "{n} tests registrados en este ordenador",
    "stats.tabSummary": "Resumen y evolución",
    "stats.tabErrors": "Historial de errores ({n})",
    "stats.all": "Todos",
    "stats.allTopics": "Todos los temas",
    "stats.tests": "Tests",
    "stats.avg": "Media",
    "stats.questionsAnswered": "Preguntas respondidas",
    "stats.timeSpent": "Tiempo dedicado",
    "stats.currentStreak": "Racha actual (≥80%)",
    "stats.testsInARow": "tests seguidos",
    "stats.strongestTopic": "Tema más fuerte",
    "stats.topicToImprove": "Tema a reforzar",
    "stats.predictedGrade": "Predicción de nota (global)",
    "stats.needMoreTests": "haz algún test",
    "stats.aboveThreshold": "por encima del ",
    "stats.belowThreshold": "por debajo del ",
    "stats.passThreshold": "umbral de aprobado ({n}%)",
    "stats.heatmap": "Mapa de calor de conocimiento",
    "stats.evolution": "Evolución del rendimiento",
    "stats.needTwoTests": "Haz al menos 2 tests para ver la curva de evolución.",
    "stats.accuracyByType": "Precisión por tipo de pregunta",
    "stats.noData": "sin datos",
    "stats.performanceByTestType": "Rendimiento por tipo de test",
    "stats.test": "test",
    "stats.testsPlural": "tests",
    "stats.progressByTopic": "Progreso por tema",
    "stats.noDataYet": "Aún no hay suficientes datos. ¡Haz algún test!",
    "stats.noMatchFilters": "No hay tests que coincidan con estos filtros. Prueba a ampliarlos o haz algún test nuevo.",
    "stats.detailedHistory": "Historial detallado",
    "stats.date": "Fecha",
    "stats.testCol": "Test",
    "stats.score": "Puntuación",
    "stats.percent": "%",
    "stats.duration": "Duración",
    "stats.noHistoryYet": "Sin historial todavía.",
    "stats.clearHistory": "Borrar historial",
    "stats.confirmClearHistory": "¿Borrar todo el historial de tests? Esta acción no se puede deshacer.",
    "stats.timedOutSuffix": " · tiempo agotado",
    "stats.backupTitle": "Copia de seguridad",
    "stats.backupDesc": "Descarga tus datos (historial, preguntas propias y errores) para poder continuar en otro dispositivo o si borras la caché/cookies.",
    "stats.exportData": "Descargar copia de seguridad ↓",
    "stats.importData": "Importar copia de seguridad ↑",
    "stats.importConfirmOverwrite": "Ya tienes datos guardados en este dispositivo. ¿Quieres sobrescribirlos con la copia importada?",
    "stats.importSuccess": "Datos importados correctamente. La app se recargará.",
    "stats.importInvalidFile": "El archivo seleccionado no es una copia de seguridad válida.",
    "errors.active": "Activas",
    "errors.mastered": "Dominadas",
    "errors.all": "Todas",
    "errors.masteredLabel": "Dominada",
    "errors.streakLabel": "Racha {n}/3",
    "errors.failedCount": "{n} fallo{s}",
    "errors.noneInCategory": "Ninguna pregunta en esta categoría.",
    "errors.clear": "Borrar registro de errores",
    "errors.confirmClear": "¿Borrar todo el registro de errores? Se perderá el progreso de rachas de dominio.",
    "mode.topic": "Test por tema",
    "mode.general": "Test general",
    "mode.final": "Test final",
    "mode.redemption": "Test de redención",
    "mode.spaced": "Repaso espaciado",
    "mode.tfmassive": "V/F masivo",
    "mode.trap": "Preguntas trampa",
    "days.all": "Todo",
    "days.7": "7 días",
    "days.30": "30 días",
    "days.90": "90 días",
    "info.title": "Sobre la aplicación",
    "info.subtitle": "Todo lo que puedes hacer con el Entrenador PSPO I",
    "info.html": `
      <h3>Temario</h3>
      <p>Repasa la teoría de cada tema (basada en la Scrum Guide noviembre 2020) antes de hacer el test correspondiente.</p>
      <h3>Tests estándar</h3>
      <ul>
        <li><b>Test por tema:</b> elige un tema y cuántas preguntas de cada tipo quieres practicar.</li>
        <li><b>Test general:</b> preguntas de todos los temas mezcladas.</li>
        <li><b>Test final (examen):</b> simulación completa con temporizador fijo, igual que el examen real ({examQ} preguntas / 60 min).</li>
      </ul>
      <h3>Modos especiales</h3>
      <ul>
        <li><b>Bucle de fallo continuo:</b> repite solo las preguntas que has fallado, en bucle, hasta acertarlas 3 veces seguidas.</li>
        <li><b>Test de redención:</b> un test normal, de una sola vez, con todas las preguntas pendientes del registro de errores.</li>
        <li><b>Verdadero/Falso masivo:</b> convierte cada opción de las preguntas de opción única y múltiple en un ítem independiente de Verdadero/Falso.</li>
        <li><b>Preguntas trampa:</b> agrupa preguntas con palabras o patrones típicos de trampa de examen ("siempre", "nunca", "únicamente"...).</li>
      </ul>
      <h3>Durante el test</h3>
      <ul>
        <li><b>Escuchar:</b> lectura en voz alta de la pregunta y las opciones.</li>
        <li><b>Marcar para revisar (Duda Extrema):</b> señala preguntas que has acertado por pura suerte, para repasarlas al final del test.</li>
      </ul>
      <h3>Preguntas propias</h3>
      <p>Crea preguntas personalizadas (opción única, múltiple o Verdadero/Falso) con explicación por opción y nota de examen. Se integran automáticamente en el Test por tema, Test general y Test final.</p>
      <h3>Historial y estadísticas</h3>
      <ul>
        <li>Resumen global, evolución del rendimiento, precisión por tipo de pregunta y rendimiento por tipo de test.</li>
        <li><b>Mapa de calor de conocimiento:</b> visión rápida de qué temas dominas y cuáles necesitas repasar.</li>
        <li><b>Predicción de nota:</b> estimación de la nota que sacarías en el examen real, según tu progreso actual.</li>
        <li><b>Historial de errores:</b> todas las preguntas falladas, con su racha de aciertos consecutivos.</li>
        <li>Filtros combinables por tipo de test, tema y rango de días.</li>
      </ul>
      <h3>Otros</h3>
      <ul>
        <li><b>Modo claro / oscuro</b> conmutable desde el sidebar.</li>
        <li><b>Idioma (ES/EN)</b> conmutable desde el sidebar.</li>
        <li><b>Pomodoro:</b> temporizador de estudio ({focusMin} min de enfoque / {breakMin} min de descanso) integrado en el sidebar.</li>
      </ul>
    `,
    "info.showVersions": "Ver historial de versiones ↓",
    "info.hideVersions": "Ocultar historial de versiones ↑",
    "info.repoLink": "Ver repositorio en GitHub ↗",
    "info.versionCol": "Versión",
    "info.dateCol": "Fecha",
    "info.descCol": "Descripción",
  },
  en: {
    "brand.subtitle": "Exam trainer",
    "nav.menu": "Menu",
    "nav.dashboard": "Home",
    "nav.theoryList": "Theory",
    "nav.topicTest": "Test by topic",
    "nav.testConfig": "General & final test",
    "nav.specialModes": "Special modes",
    "nav.customQuestions": "Custom questions",
    "nav.stats": "History & statistics",
    "nav.info": "About the app",
    "pomo.focus": "Focus",
    "pomo.break": "Break",
    "pomo.start": "Start",
    "pomo.pause": "Pause",
    "pomo.resetTitle": "Reset",
    "theme.toLight": "Light mode",
    "theme.toDark": "Dark mode",
    "theme.switchTitle": "Switch theme",
    "lang.switchTitle": "Switch language / Cambiar idioma",
    "lang.toEnglish": "English",
    "lang.toSpanish": "Español",
    "dashboard.welcome": "Welcome back",
    "dashboard.subtitle": "Preparation for the PSPO I — Scrum Guide 2020",
    "dashboard.testsCompleted": "Tests completed",
    "dashboard.globalAvg": "Global average",
    "dashboard.questionBank": "Question bank",
    "dashboard.weakestTopic": "Weakest topic",
    "dashboard.notEnoughData": "not enough data yet",
    "dashboard.startGeneral": "Take a general test ↗",
    "dashboard.startFinal": "Simulate full exam ↗",
    "dashboard.progressByTopic": "Progress by topic",
    "dashboard.questionsInBank": "questions in bank",
    "dashboard.correctPct": "% correct",
    "dashboard.noAttempts": "no attempts",
    "theory.title": "Theory",
    "theory.subtitle": "Review each block before taking its test",
    "theory.practiceQuestions": "practice questions",
    "theory.backToTopics": "← All topics",
    "theory.startTopicTest": "Take this topic's test ↗",
    "theory.viewAll": "View the complete theory ↗",
    "theory.viewAllTitle": "Complete theory",
    "theory.listenTopic": "Listen to this topic",
    "theory.listenAll": "Listen to the entire theory",
    "theory.stopListening": "Stop listening",
    "theory.searchPlaceholder": "Search a concept in the theory...",
    "theory.searchNoResults": "No matches found.",
    "typeLabel.single": "Single choice",
    "typeLabel.multi": "Multiple choice",
    "typeLabel.tf": "True / False",
    "topicConfig.title": "Test by topic",
    "topicConfig.subtitle": "Choose the topic and how many questions of each type you want to practice",
    "topicConfig.topicLabel": "Topic",
    "topicConfig.max": "max.",
    "topicConfig.randomOrder": "Random order and different questions each time",
    "topicConfig.alwaysOn": "always on",
    "topicConfig.timer": "Timer (relative to 60 min / 80 questions)",
    "action.startTest": "Start test ↗",
    "generalConfig.title": "General test",
    "generalConfig.subtitle": "Questions from every topic mixed together. Choose how many of each type you want (up to the available maximum: {n}).",
    "finalConfig.title": "Final test — exam simulation",
    "finalConfig.subtitle": "Mixes every topic and every question type, with a fixed timer, just like the real exam ({n} questions / 60 min).",
    "finalConfig.questionsInTest": "Questions in this test",
    "finalConfig.available": "{n} out of {total} available",
    "finalConfig.timeAvailable": "Time available",
    "finalConfig.proportional": "{mins} min (proportional if fewer than {n})",
    "finalConfig.order": "Order",
    "finalConfig.randomOrder": "fully random, different each time",
    "finalConfig.startExam": "Start exam ↗",
    "quiz.questionOf": "Question {i} / {n} — {label}",
    "quiz.listen": "Listen",
    "quiz.listenTitle": "Listen to the question",
    "quiz.markReview": "Mark for review",
    "quiz.marked": "Marked",
    "quiz.markReviewTitle": "Mark for review (Extreme Doubt)",
    "quiz.selectAll": "Select all that apply",
    "quiz.keyboardHint": "Shortcuts: 1-6 or A-F to pick · Enter to check/continue",
    "quiz.correct": "Correct.",
    "quiz.incorrect": "Incorrect.",
    "quiz.examNote": "Exam note:",
    "quiz.abandon": "Abandon",
    "quiz.viewResult": "View result",
    "quiz.next": "Next",
    "quiz.check": "Check",
    "quiz.confirmAbandon": "Are you sure you want to abandon the test? Current progress will be lost.",
    "quiz.ttsUnsupported": "This environment doesn't support text-to-speech.",
    "quiz.selectAtLeastOne": "Select at least one question.",
    "mode.topicPrefix": "Topic: {name}",
    "score.timeUp": "Time's up — ",
    "score.result": "Result: {label}",
    "score.correctOf": "{correct} out of {total} correct · {mins} min {secs}s",
    "score.topic": "Topic",
    "score.hits": "Correct",
    "score.markedForReview": "Marked for review (Extreme Doubt)",
    "score.hit": "Correct",
    "score.missed": "Missed",
    "score.topicsToReview": "Topics to review: {names}. They're noted in your history.",
    "score.perfect": "100% across every topic in this test.",
    "score.backHome": "Back to home",
    "score.repeat": "Repeat with the same setup ↗",
    "special.title": "Special modes",
    "special.subtitle": "Review strategies designed to reinforce exactly what you're missing.",
    "special.loopTitle": "Continuous-failure loop",
    "special.loopDesc": "Repeats only the questions you've gotten wrong, on a loop, until you get each one right 3 times in a row.",
    "special.loopMeta": "{n} active question{s} in the error log",
    "special.loopStart": "Start loop ↗",
    "special.redemptionTitle": "Redemption test",
    "special.redemptionDesc": "A normal, one-pass test with every question currently pending in your error log.",
    "special.redemptionMeta": "{n} question{s} available",
    "special.redemptionStart": "Start redemption ↗",
    "special.spacedTitle": "Spaced review",
    "special.spacedDesc": "Review only the missed questions that are due today, based on how well you know them (SM-2-style spaced repetition).",
    "special.spacedMeta": "{n} question{s} due today",
    "special.spacedNoneDueMeta": "Nothing due today · next: {date}",
    "special.spacedEmptyMeta": "No missed questions yet",
    "special.spacedStart": "Start review ↗",
    "special.tfTitle": "Mass True / False",
    "special.tfDesc": "Turns each option of single- and multiple-choice questions into an independent True/False question. Process three times the concepts in less time.",
    "special.tfMeta": "{n} base questions · up to {m} possible T/F items",
    "special.tfCountLabel": "Number of items",
    "special.tfStart": "Start ↗",
    "special.trapTitle": "Trap questions",
    "special.trapDesc": "Groups questions with typical exam-trap words (\"always\", \"never\", \"only\"...) or very similar options, to train your attention.",
    "special.trapMeta": "{n} question{s} detected",
    "special.trapStart": "Start ↗",
    "special.noErrorsAlert": "You have no pending questions in the error log.",
    "special.notEnoughMcAlert": "There aren't enough single/multiple-choice questions to generate this mode.",
    "special.noTrapAlert": "No trap questions were detected in the current bank.",
    "tfmassive.template": "True or false: \"{opt}\" is a correct answer for — {q}",
    "tfmassive.correctExp": "This option is indeed a correct answer to the original question.",
    "tfmassive.incorrectExp": "This option is not a correct answer to the original question.",
    "loop.header": "Continuous-failure loop · {n} active questions left",
    "loop.streak": "Streak: {n}/3",
    "loop.confirmAbandon": "Are you sure you want to abandon the loop? Streak progress already made is kept.",
    "loop.completedTitle": "Continuous-failure loop completed",
    "loop.completedDesc": "You've mastered every active question (3 correct answers in a row each)",
    "loop.backToSpecial": "Back to special modes",
    "custom.title": "Custom questions",
    "custom.subtitle": "Add custom questions that are automatically included in topic tests, general tests, and the final test. {n} custom question{s}.",
    "custom.newQuestion": "+ New question",
    "custom.added": "Added questions",
    "custom.noneYet": "You haven't added any custom questions yet.",
    "custom.delete": "Delete",
    "custom.topicLabel": "Topic",
    "custom.typeLabel": "Question type",
    "custom.questionLabel": "Question text",
    "custom.questionPlaceholder": "Write the question...",
    "custom.optionsLabelMulti": "Options (mark all correct ones)",
    "custom.optionsLabelSingle": "Options (mark the correct one)",
    "custom.optionPlaceholder": "Text for option {letter}",
    "custom.explanationPlaceholder": "Explanation for this option",
    "custom.addOption": "+ Add option",
    "custom.trapLabel": "Exam note (common trap)",
    "custom.trapPlaceholder": "E.g.: don't confuse X with Y...",
    "custom.cancel": "Cancel",
    "custom.save": "Save question",
    "custom.confirmDelete": "Delete this custom question? This action cannot be undone.",
    "custom.alertNoQuestion": "Write the question text.",
    "custom.alertOptionsText": "Every option must have text.",
    "custom.alertExplanations": "An explanation is required for every option.",
    "custom.alertTrap": "You must add an exam note (common trap).",
    "custom.alertOneCorrectMulti": "Mark at least one correct option.",
    "custom.alertExactlyOneCorrect": "Mark exactly one correct option.",
    "stats.title": "History & statistics",
    "stats.testsRegistered": "{n} tests recorded on this computer",
    "stats.tabSummary": "Summary & evolution",
    "stats.tabErrors": "Error history ({n})",
    "stats.all": "All",
    "stats.allTopics": "All topics",
    "stats.tests": "Tests",
    "stats.avg": "Average",
    "stats.questionsAnswered": "Questions answered",
    "stats.timeSpent": "Time spent",
    "stats.currentStreak": "Current streak (≥80%)",
    "stats.testsInARow": "tests in a row",
    "stats.strongestTopic": "Strongest topic",
    "stats.topicToImprove": "Topic to reinforce",
    "stats.predictedGrade": "Predicted grade (global)",
    "stats.needMoreTests": "take a test first",
    "stats.aboveThreshold": "above the ",
    "stats.belowThreshold": "below the ",
    "stats.passThreshold": "passing threshold ({n}%)",
    "stats.heatmap": "Knowledge heatmap",
    "stats.evolution": "Performance over time",
    "stats.needTwoTests": "Take at least 2 tests to see the evolution curve.",
    "stats.accuracyByType": "Accuracy by question type",
    "stats.noData": "no data",
    "stats.performanceByTestType": "Performance by test type",
    "stats.test": "test",
    "stats.testsPlural": "tests",
    "stats.progressByTopic": "Progress by topic",
    "stats.noDataYet": "Not enough data yet. Take a test!",
    "stats.noMatchFilters": "No tests match these filters. Try widening them or take a new test.",
    "stats.detailedHistory": "Detailed history",
    "stats.date": "Date",
    "stats.testCol": "Test",
    "stats.score": "Score",
    "stats.percent": "%",
    "stats.duration": "Duration",
    "stats.noHistoryYet": "No history yet.",
    "stats.clearHistory": "Clear history",
    "stats.confirmClearHistory": "Clear the entire test history? This action cannot be undone.",
    "stats.timedOutSuffix": " · timed out",
    "stats.backupTitle": "Backup",
    "stats.backupDesc": "Download your data (history, custom questions, and errors) so you can continue on another device or if you clear your cache/cookies.",
    "stats.exportData": "Download backup ↓",
    "stats.importData": "Import backup ↑",
    "stats.importConfirmOverwrite": "You already have data saved on this device. Overwrite it with the imported backup?",
    "stats.importSuccess": "Data imported successfully. The app will reload.",
    "stats.importInvalidFile": "The selected file isn't a valid backup.",
    "errors.active": "Active",
    "errors.mastered": "Mastered",
    "errors.all": "All",
    "errors.masteredLabel": "Mastered",
    "errors.streakLabel": "Streak {n}/3",
    "errors.failedCount": "{n} failure{s}",
    "errors.noneInCategory": "No questions in this category.",
    "errors.clear": "Clear error log",
    "errors.confirmClear": "Clear the entire error log? Mastery streak progress will be lost.",
    "mode.topic": "Test by topic",
    "mode.general": "General test",
    "mode.final": "Final test",
    "mode.redemption": "Redemption test",
    "mode.spaced": "Spaced review",
    "mode.tfmassive": "Mass T/F",
    "mode.trap": "Trap questions",
    "days.all": "All",
    "days.7": "7 days",
    "days.30": "30 days",
    "days.90": "90 days",
    "info.title": "About the app",
    "info.subtitle": "Everything you can do with the PSPO I Trainer",
    "info.html": `
      <h3>Theory</h3>
      <p>Review the theory for each topic (based on the November 2020 Scrum Guide) before taking its test.</p>
      <h3>Standard tests</h3>
      <ul>
        <li><b>Test by topic:</b> choose a topic and how many questions of each type you want to practice.</li>
        <li><b>General test:</b> questions from every topic, mixed together.</li>
        <li><b>Final test (exam):</b> a full simulation with a fixed timer, just like the real exam ({examQ} questions / 60 min).</li>
      </ul>
      <h3>Special modes</h3>
      <ul>
        <li><b>Continuous-failure loop:</b> repeats only the questions you've missed, on a loop, until you get each one right 3 times in a row.</li>
        <li><b>Redemption test:</b> a normal, one-pass test with every question pending in your error log.</li>
        <li><b>Mass True/False:</b> turns each option of single/multiple-choice questions into an independent True/False item.</li>
        <li><b>Trap questions:</b> groups questions with typical exam-trap words or patterns ("always", "never", "only"...).</li>
      </ul>
      <h3>During the test</h3>
      <ul>
        <li><b>Listen:</b> text-to-speech reading of the question and its options.</li>
        <li><b>Mark for review (Extreme Doubt):</b> flag questions you got right by pure luck, to review at the end of the test.</li>
      </ul>
      <h3>Custom questions</h3>
      <p>Create your own questions (single choice, multiple choice, or True/False) with an explanation per option and an exam note. They're automatically included in the topic test, general test, and final test.</p>
      <h3>History & statistics</h3>
      <ul>
        <li>Global summary, performance over time, accuracy by question type, and performance by test type.</li>
        <li><b>Knowledge heatmap:</b> a quick view of which topics you've mastered and which need review.</li>
        <li><b>Grade prediction:</b> an estimate of the score you'd get on the real exam, based on your current progress.</li>
        <li><b>Error history:</b> every question you've missed, with its consecutive-correct streak.</li>
        <li>Combinable filters by test type, topic, and day range.</li>
      </ul>
      <h3>Other</h3>
      <ul>
        <li><b>Light / dark mode</b> switchable from the sidebar.</li>
        <li><b>Language (ES/EN)</b> switchable from the sidebar.</li>
        <li><b>Pomodoro:</b> a study timer ({focusMin} min focus / {breakMin} min break) built into the sidebar.</li>
      </ul>
    `,
    "info.showVersions": "Show version history ↓",
    "info.hideVersions": "Hide version history ↑",
    "info.repoLink": "View repository on GitHub ↗",
    "info.versionCol": "Version",
    "info.dateCol": "Date",
    "info.descCol": "Description",
  }
};

function loadLang(){
  try{ return localStorage.getItem(LANG_KEY) || "es"; }catch(e){ return "es"; }
}
let currentLang = loadLang();
document.documentElement.lang = currentLang;
function t(key, vars){
  let str = (STRINGS[currentLang] && STRINGS[currentLang][key]) || STRINGS.es[key] || key;
  if(vars) Object.keys(vars).forEach(k=>{ str = str.split("{"+k+"}").join(vars[k]); });
  return str;
}
// El banc de preguntes de l'examen segueix l'idioma d'interfície (es/en); el contingut
// catala original (data.ca.js) queda com a referencia historica, no s'usa en runtime.
function topicsForLang(lang){ return lang==="en" ? TOPICS_EN : TOPICS_ES; }
function questionsForLang(lang){ return lang==="en" ? ALL_QUESTIONS_EN : ALL_QUESTIONS_ES; }
let activeTopics = topicsForLang(currentLang);
let activeQuestions = questionsForLang(currentLang);
function toggleLang(){
  currentLang = currentLang==="es" ? "en" : "es";
  try{ localStorage.setItem(LANG_KEY, currentLang); }catch(e){}
  document.documentElement.lang = currentLang;
  activeTopics = topicsForLang(currentLang);
  activeQuestions = questionsForLang(currentLang);
  render();
}

// ---------------- ERROR LOG ----------------
function simpleHash(str){
  let h = 0;
  for(let i=0;i<str.length;i++){ h = (Math.imul(31,h) + str.charCodeAt(i))|0; }
  return (h>>>0).toString(36);
}
function questionUID(q){
  return q.id ? q.id : (q.topicId + "::" + simpleHash(q.q));
}
function loadErrorLog(){
  try{
    const raw = localStorage.getItem(ERROR_KEY);
    return raw ? JSON.parse(raw) : [];
  }catch(e){ return []; }
}
function saveErrorLog(list){
  localStorage.setItem(ERROR_KEY, JSON.stringify(list));
}
function clearErrorLog(){
  localStorage.removeItem(ERROR_KEY);
}
function recordAnswerResult(q, isCorrect){
  const uid = questionUID(q);
  const log = loadErrorLog();
  let entry = log.find(e=>e.uid===uid);
  if(!entry){
    if(isCorrect) return;
    entry = {
      uid, topicId:q.topicId, topicName:q.topicName, type:q.type,
      q:q.q, opts:q.opts.slice(), exp:q.exp.slice(),
      correct:(Array.isArray(q.correct)?q.correct.slice():[q.correct]), trap:q.trap,
      failCount:0, streak:0, lastFailedAt:null, masteredAt:null
    };
    log.push(entry);
  }
  if(isCorrect){
    entry.streak = (entry.streak||0) + 1;
    if(entry.streak>=3 && !entry.masteredAt) entry.masteredAt = Date.now();
  } else {
    entry.failCount = (entry.failCount||0) + 1;
    entry.streak = 0;
    entry.masteredAt = null;
    entry.lastFailedAt = Date.now();
  }
  updateSpacedRepetition(entry, isCorrect);
  saveErrorLog(log);
}
function activeErrors(){
  return loadErrorLog().filter(e=>!e.masteredAt);
}

// Repetició espaiada (SM-2 simplificat, qualitat binaria: correcte=5, incorrecte=2).
function updateSpacedRepetition(entry, isCorrect){
  const q = isCorrect ? 5 : 2;
  let ef = entry.ef || 2.5;
  ef = ef + (0.1 - (5-q)*(0.08+(5-q)*0.02));
  if(ef < 1.3) ef = 1.3;
  entry.ef = ef;
  if(isCorrect){
    entry.reps = (entry.reps||0) + 1;
    if(entry.reps===1) entry.interval = 1;
    else if(entry.reps===2) entry.interval = 6;
    else entry.interval = Math.round((entry.interval||1) * ef);
  } else {
    entry.reps = 0;
    entry.interval = 1;
  }
  entry.dueAt = Date.now() + entry.interval*24*60*60*1000;
}
function dueErrors(){
  const now = Date.now();
  return activeErrors().filter(e => (e.dueAt||0) <= now);
}
function nextDueDate(){
  const active = activeErrors();
  if(!active.length) return null;
  return active.reduce((min,e)=> Math.min(min, e.dueAt||0), Infinity);
}

function startSpacedReviewMode(){
  const due = dueErrors();
  const pool = due.map(e=>({type:e.type, q:e.q, opts:e.opts, exp:e.exp, correct:e.correct, trap:e.trap, topicId:e.topicId, topicName:e.topicName}));
  if(!pool.length){ alert(t("special.noErrorsAlert")); return; }
  const questions = shuffle(pool).map(prepareQuestion);
  startQuiz(questions, {mode:"spaced", label:t("mode.spaced")}, null);
}

// ---------------- SPECIAL MODES ----------------
const TRAP_KEYWORDS = ["sempre","mai ","únicament","únic ","única ","exclusivament","només","tots els","totes les","cap ","l'única","l'únic","immediatament","obligatòriament","en cap cas"];
function detectTrapQuestions(pool){
  return pool.filter(q=>{
    const haystack = ((q.trap||"") + " " + q.opts.join(" ")).toLowerCase();
    return TRAP_KEYWORDS.some(k=>haystack.includes(k));
  });
}

function buildTfMassivePool(count, topicId){
  let base = getAllQuestionsPool().filter(q=>q.type!=="tf");
  if(topicId && topicId!=="all") base = base.filter(q=>q.topicId===topicId);
  let items = [];
  base.forEach(q=>{
    const correctSet = Array.isArray(q.correct) ? q.correct : [q.correct];
    q.opts.forEach((opt,i)=>{
      const isCorrectOpt = correctSet.includes(i);
      items.push({
        type:"tf",
        q: t("tfmassive.template",{opt, q:q.q}),
        opts: ["Vertader","Fals"],
        correct: [isCorrectOpt?0:1],
        exp: [
          isCorrectOpt ? (q.exp[i]||t("quiz.correct")) : t("tfmassive.incorrectExp"),
          !isCorrectOpt ? (q.exp[i]||t("quiz.incorrect")) : t("tfmassive.correctExp")
        ],
        trap: q.trap, topicId: q.topicId, topicName: q.topicName
      });
    });
  });
  return shuffle(items).slice(0, count);
}

function startRedemptionMode(){
  const pool = activeErrors().map(e=>({type:e.type, q:e.q, opts:e.opts, exp:e.exp, correct:e.correct, trap:e.trap, topicId:e.topicId, topicName:e.topicName}));
  if(!pool.length){ alert(t("special.noErrorsAlert")); return; }
  const questions = shuffle(pool).map(prepareQuestion);
  startQuiz(questions, {mode:"redemption", label:t("mode.redemption")}, null);
}

function startTfMassiveMode(){
  const countInput = document.getElementById("tfmassive-count");
  const count = countInput ? (parseInt(countInput.value,10)||20) : 20;
  const items = buildTfMassivePool(count, "all");
  if(!items.length){ alert(t("special.notEnoughMcAlert")); return; }
  const questions = items.map(prepareQuestion);
  startQuiz(questions, {mode:"tfmassive", label:t("mode.tfmassive")}, null);
}

function startTrapMode(){
  const pool = detectTrapQuestions(getAllQuestionsPool());
  if(!pool.length){ alert(t("special.noTrapAlert")); return; }
  const questions = shuffle(pool).map(prepareQuestion);
  startQuiz(questions, {mode:"trap", label:t("mode.trap")}, null);
}

function renderSpecialModes(){
  const activeErr = activeErrors();
  const due = dueErrors();
  const mcPool = getAllQuestionsPool().filter(q=>q.type!=="tf");
  const tfMax = mcPool.reduce((s,q)=>s+q.opts.length,0);
  const trapPool = detectTrapQuestions(getAllQuestionsPool());
  const es = n => n===1?"":"s";

  return `
    <h1>${t("special.title")}</h1>
    <p class="subtitle">${t("special.subtitle")}</p>
    <div class="special-grid">
      <div class="special-card">
        <h3>${t("special.loopTitle")}</h3>
        <p>${t("special.loopDesc")}</p>
        <div class="special-meta">${t("special.loopMeta",{n:activeErr.length, s:es(activeErr.length)})}</div>
        <button class="btn amber" data-action="start-loop-mode" ${activeErr.length===0?"disabled":""}>${t("special.loopStart")}</button>
      </div>

      <div class="special-card">
        <h3>${t("special.redemptionTitle")}</h3>
        <p>${t("special.redemptionDesc")}</p>
        <div class="special-meta">${t("special.redemptionMeta",{n:activeErr.length, s:es(activeErr.length)})}</div>
        <button class="btn amber" data-action="start-redemption-mode" ${activeErr.length===0?"disabled":""}>${t("special.redemptionStart")}</button>
      </div>

      <div class="special-card">
        <h3>${t("special.spacedTitle")}</h3>
        <p>${t("special.spacedDesc")}</p>
        <div class="special-meta">${
          due.length>0 ? t("special.spacedMeta",{n:due.length, s:es(due.length)})
          : activeErr.length>0 ? t("special.spacedNoneDueMeta",{date:new Date(nextDueDate()).toLocaleDateString()})
          : t("special.spacedEmptyMeta")
        }</div>
        <button class="btn amber" data-action="start-spaced-mode" ${due.length===0?"disabled":""}>${t("special.spacedStart")}</button>
      </div>

      <div class="special-card">
        <h3>${t("special.tfTitle")}</h3>
        <p>${t("special.tfDesc")}</p>
        <div class="special-meta">${t("special.tfMeta",{n:mcPool.length, m:tfMax})}</div>
        <div class="config-row">
          <label>${t("special.tfCountLabel")}</label>
          <input type="number" min="5" max="${Math.max(tfMax,5)}" value="${Math.min(20,tfMax)||5}" id="tfmassive-count"/>
        </div>
        <button class="btn amber" data-action="start-tfmassive-mode" ${tfMax===0?"disabled":""}>${t("special.tfStart")}</button>
      </div>

      <div class="special-card">
        <h3>${t("special.trapTitle")}</h3>
        <p>${t("special.trapDesc")}</p>
        <div class="special-meta">${t("special.trapMeta",{n:trapPool.length, s:es(trapPool.length)})}</div>
        <button class="btn amber" data-action="start-trap-mode" ${trapPool.length===0?"disabled":""}>${t("special.trapStart")}</button>
      </div>
    </div>
  `;
}

// ---------------- LOOP MODE (bucle de fallada contínua) ----------------
let loopQuiz = null;

function currentLoopEntry(){
  if(!loopQuiz || !loopQuiz.queue.length) return null;
  const uid = loopQuiz.queue[0];
  return loadErrorLog().find(e=>e.uid===uid) || null;
}

function advanceLoop(){
  while(loopQuiz.queue.length){
    const entry = currentLoopEntry();
    if(entry && !entry.masteredAt) break;
    loopQuiz.queue.shift();
  }
  if(!loopQuiz.queue.length){ loopQuiz.current = null; return; }
  const entry = currentLoopEntry();
  loopQuiz.current = prepareQuestion({
    type:entry.type, q:entry.q, opts:entry.opts, exp:entry.exp,
    correct:entry.correct, trap:entry.trap, topicId:entry.topicId, topicName:entry.topicName
  });
  loopQuiz.selected = [];
  loopQuiz.locked = false;
}

function startLoopMode(){
  const active = activeErrors();
  if(!active.length){ alert(t("special.noErrorsAlert")); return; }
  if(window.speechSynthesis) window.speechSynthesis.cancel();
  loopQuiz = {
    queue: shuffle(active.map(e=>e.uid)),
    current: null, selected:[], locked:false,
    correctCount:0, wrongCount:0, startedAt: Date.now()
  };
  advanceLoop();
  setView("loop-quiz");
}

function pickLoopOption(i){
  if(loopQuiz.locked) return;
  const q = loopQuiz.current;
  if(q.type==="multi"){
    const pos = loopQuiz.selected.indexOf(i);
    if(pos>=0) loopQuiz.selected.splice(pos,1); else loopQuiz.selected.push(i);
  } else {
    loopQuiz.selected = [i];
  }
  render();
}

function loopCheckAnswer(){
  const q = loopQuiz.current;
  const isRight = loopQuiz.selected.length===q.correct.length && loopQuiz.selected.every(s=>q.correct.includes(s));
  loopQuiz.locked = true;
  loopQuiz.lastResult = isRight;
  recordAnswerResult(q, isRight);
  if(isRight) loopQuiz.correctCount++; else loopQuiz.wrongCount++;
  render();
}

function loopNext(){
  if(window.speechSynthesis) window.speechSynthesis.cancel();
  const uid = loopQuiz.queue.shift();
  const entry = loadErrorLog().find(e=>e.uid===uid);
  if(entry && !entry.masteredAt) loopQuiz.queue.push(uid);
  advanceLoop();
  if(!loopQuiz.current){ setView("loop-score"); } else { render(); }
}

function renderLoopQuiz(){
  if(!loopQuiz || !loopQuiz.current) return "";
  const q = loopQuiz.current;
  const entry = currentLoopEntry();
  let optsHtml = q.opts.map((o,i)=>{
    let cls="opt";
    if(loopQuiz.locked){
      cls+=" locked";
      const isCorrect = q.correct.includes(i);
      const wasSelected = loopQuiz.selected.includes(i);
      if(isCorrect) cls+=" correct";
      else if(wasSelected) cls+=" incorrect";
    } else if(loopQuiz.selected.includes(i)){
      cls+=" selected";
    }
    return `<button class="${cls}" data-loop-pick="${i}" ${loopQuiz.locked?"disabled":""}><b>${String.fromCharCode(65+i)}</b>${o}</button>`;
  }).join("");
  let hint = (q.type==="multi" ? `<div class="hint">${t("quiz.selectAll")}</div>` : "") + `<div class="hint">${t("quiz.keyboardHint")}</div>`;
  let feedbackHtml = "";
  if(loopQuiz.locked){
    feedbackHtml = `<div class="feedback ${loopQuiz.lastResult?'ok':'bad'}">
      <strong>${loopQuiz.lastResult?t("quiz.correct"):t("quiz.incorrect")}</strong>
      <ul class="explist">${q.exp.map((e,i)=>`<li><b>${String.fromCharCode(65+i)}.</b> ${e}</li>`).join("")}</ul>
      <span class="trap">${t("quiz.examNote")} ${q.trap}</span>
    </div>`;
  }
  return `
    <div class="topbar-quiz">
      <span>${t("loop.header",{n:loopQuiz.queue.length})}</span>
      <span class="timer">${t("loop.streak",{n:entry?entry.streak:0})}</span>
    </div>
    <div class="card">
      <span class="block-tag">${q.type==="multi"?t("typeLabel.multi"):q.type==="tf"?t("typeLabel.tf"):t("typeLabel.single")} · ${q.topicName}</span>
      <div class="quiz-toolbar">
        <button type="button" class="icon-btn" data-action="speak-loop-question" title="${t('quiz.listenTitle')}">${ICON_SPEAKER}${t("quiz.listen")}</button>
      </div>
      <p class="qtext">${q.q}</p>
      ${hint}
      ${optsHtml}
      ${feedbackHtml}
      <div class="actions">
        <button class="btn secondary" data-action="quit-loop">${t("quiz.abandon")}</button>
        <button class="btn" id="btn-loop-next" ${(!loopQuiz.locked && loopQuiz.selected.length===0)?"disabled":""}>${loopQuiz.locked?t("quiz.next"):t("quiz.check")}</button>
      </div>
    </div>
  `;
}

function renderLoopScore(){
  return `
    <div class="score-screen">
      <div class="score-lbl">${t("loop.completedTitle")}</div>
      <div class="score-num">✓</div>
      <div class="score-lbl">${t("loop.completedDesc")}</div>
      <div style="display:flex; gap:10px; justify-content:center; margin-top:18px;">
        <button class="btn secondary" data-nav="dashboard">${t("score.backHome")}</button>
        <button class="btn amber" data-nav="special-modes">${t("loop.backToSpecial")}</button>
      </div>
    </div>
  `;
}

// ---------------- THEME ----------------
function loadTheme(){
  try{ return localStorage.getItem(THEME_KEY) || "dark"; }catch(e){ return "dark"; }
}
function applyTheme(theme){
  document.documentElement.setAttribute("data-theme", theme);
}
let currentTheme = loadTheme();
applyTheme(currentTheme);

function toggleTheme(){
  currentTheme = currentTheme==="dark" ? "light" : "dark";
  try{ localStorage.setItem(THEME_KEY, currentTheme); }catch(e){}
  applyTheme(currentTheme);
  render();
}

// ---------------- POMODORO ----------------
let pomodoro = {
  running:false, phase:"focus", secondsLeft:25*60,
  focusMin:25, breakMin:5, handle:null
};

function fmtTime(sec){
  const m = Math.floor(sec/60), s = sec%60;
  return `${m}:${s.toString().padStart(2,"0")}`;
}

function playChime(){
  try{
    const ctx = new (window.AudioContext||window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.frequency.value = 880;
    osc.connect(gain); gain.connect(ctx.destination);
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    osc.start();
    osc.stop(ctx.currentTime+0.35);
  }catch(e){}
}

function updatePomodoroDisplay(){
  const el = document.getElementById("pomodoro-time");
  if(el) el.textContent = fmtTime(pomodoro.secondsLeft);
}

function pomodoroTick(){
  pomodoro.secondsLeft--;
  if(pomodoro.secondsLeft<=0){
    pomodoro.phase = pomodoro.phase==="focus" ? "break" : "focus";
    pomodoro.secondsLeft = (pomodoro.phase==="focus"?pomodoro.focusMin:pomodoro.breakMin)*60;
    playChime();
    render();
    return;
  }
  updatePomodoroDisplay();
}

function pomodoroToggle(){
  if(pomodoro.running){
    clearInterval(pomodoro.handle);
    pomodoro.running = false;
  } else {
    pomodoro.running = true;
    pomodoro.handle = setInterval(pomodoroTick, 1000);
  }
  render();
}

function pomodoroReset(){
  clearInterval(pomodoro.handle);
  pomodoro.running = false;
  pomodoro.phase = "focus";
  pomodoro.secondsLeft = pomodoro.focusMin*60;
  render();
}

// ---------------- CUSTOM QUESTIONS ----------------
function loadCustomQuestions(){
  try{
    const raw = localStorage.getItem(CUSTOM_KEY);
    return raw ? JSON.parse(raw) : [];
  }catch(e){ return []; }
}
function saveCustomQuestions(list){
  localStorage.setItem(CUSTOM_KEY, JSON.stringify(list));
}
function addCustomQuestion(q){
  const list = loadCustomQuestions();
  list.push(q);
  saveCustomQuestions(list);
}
function deleteCustomQuestion(id){
  saveCustomQuestions(loadCustomQuestions().filter(q=>q.id!==id));
}
function topicQuestionCount(topicId){
  const topic = activeTopics.find(t=>t.id===topicId);
  const officialCount = topic ? topic.questions.length : 0;
  const customCount = loadCustomQuestions().filter(q=>q.topicId===topicId).length;
  return officialCount + customCount;
}
function getTopicPool(topicId){
  const topic = activeTopics.find(t=>t.id===topicId);
  const official = topic ? topic.questions.map(q=>({...q, topicId:topic.id, topicName:topic.name})) : [];
  const custom = loadCustomQuestions().filter(q=>q.topicId===topicId).map(q=>({...q, topicName: topic?topic.name:q.topicId}));
  return official.concat(custom);
}
function getAllQuestionsPool(){
  const custom = loadCustomQuestions().map(q=>{
    const topic = activeTopics.find(t=>t.id===q.topicId);
    return {...q, topicName: topic?topic.name:q.topicId};
  });
  return activeQuestions.concat(custom);
}
function escapeHtml(str){
  return String(str==null?"":str).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}
function escapeAttr(str){
  return escapeHtml(str).replace(/"/g,"&quot;");
}

function loadHistory(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  }catch(e){ return []; }
}
function saveSession(entry){
  const h = loadHistory();
  h.push(entry);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(h));
}
function clearHistory(){
  localStorage.removeItem(STORAGE_KEY);
}

function hasBackupData(){
  return loadHistory().length>0 || loadCustomQuestions().length>0 || loadErrorLog().length>0;
}

function exportBackupData(){
  const payload = {
    app: "pspo-i-trainer",
    exportedAt: new Date().toISOString(),
    appVersion: APP_VERSION,
    history: loadHistory(),
    customQuestions: loadCustomQuestions(),
    errors: loadErrorLog()
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], {type:"application/json"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `pspo-i-trainer-backup-${payload.exportedAt.slice(0,10)}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function importBackupFile(file){
  const reader = new FileReader();
  reader.onload = () => {
    let data;
    try{ data = JSON.parse(reader.result); }
    catch(e){ alert(t("stats.importInvalidFile")); return; }
    if(!data || typeof data !== "object" || !Array.isArray(data.history) || !Array.isArray(data.customQuestions) || !Array.isArray(data.errors)){
      alert(t("stats.importInvalidFile"));
      return;
    }
    if(hasBackupData() && !confirm(t("stats.importConfirmOverwrite"))) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data.history));
    localStorage.setItem(CUSTOM_KEY, JSON.stringify(data.customQuestions));
    localStorage.setItem(ERROR_KEY, JSON.stringify(data.errors));
    alert(t("stats.importSuccess"));
    location.reload();
  };
  reader.readAsText(file);
}

function shuffle(arr){
  const a = arr.slice();
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}

function countsByType(pool){
  const c = {single:0, multi:0, tf:0};
  pool.forEach(q=>{ c[q.type] = (c[q.type]||0) + 1; });
  return c;
}

function prepareQuestion(q){
  const order = shuffle(q.opts.map((_,i)=>i));
  const opts = order.map(i=>q.opts[i]);
  const exp = order.map(i=>q.exp[i]);
  const correctArr = Array.isArray(q.correct) ? q.correct : [q.correct];
  const newCorrect = [];
  order.forEach((origIdx, newIdx)=>{ if(correctArr.includes(origIdx)) newCorrect.push(newIdx); });
  return { type:q.type, q:q.q, opts, exp, trap:q.trap, topicId:q.topicId, topicName:q.topicName, correct:newCorrect };
}

function buildQuestionSet(pool, counts){
  let picked = [];
  ["single","multi","tf"].forEach(t=>{
    const ofType = pool.filter(q=>q.type===t);
    const n = Math.min(counts[t]||0, ofType.length);
    picked = picked.concat(shuffle(ofType).slice(0,n));
  });
  picked = shuffle(picked);
  return picked.map(prepareQuestion);
}

// ---------------- STATE ----------------
let state = { view:"dashboard" };
let quiz = null; // active quiz runtime object
let customDraft = null; // active custom-question form draft

const root = document.getElementById("root");

function setView(view, params={}){
  if(theorySpeechKey !== null){
    const staying = (view === "theory-detail" && params.topicId === theorySpeechKey) || (view === "theory-all" && theorySpeechKey === "all");
    if(!staying){
      window.speechSynthesis.cancel();
      theorySpeechKey = null;
      clearTheoryMediaSession();
    }
  }
  state = { view, ...params };
  render();
}

function render(){
  root.innerHTML = `
    <button type="button" class="menu-toggle" data-action="toggle-sidebar" aria-label="${t('nav.menu')}">${ICON_MENU}</button>
    <div class="sidebar-overlay ${sidebarOpen?'visible':''}" data-action="close-sidebar"></div>
    <div class="sidebar ${sidebarOpen?'open':''}">
      <div class="brand">
        <img src="logo.svg" alt="logo"/>
        <div class="name"><b>PSPO I <span class="version-tag">v${APP_VERSION}</span></b>${t("brand.subtitle")}</div>
      </div>
      ${navItem("dashboard",t("nav.dashboard"))}
      ${navItem("theory-list",t("nav.theoryList"))}
      ${navItem("test-topic-config",t("nav.topicTest"))}
      <div class="nav-sep"></div>
      ${navItem("test-config",t("nav.testConfig"))}
      ${navItem("special-modes",t("nav.specialModes"))}
      <div class="nav-sep"></div>
      ${navItem("custom-questions",t("nav.customQuestions"))}
      <div class="nav-sep"></div>
      ${navItem("stats",t("nav.stats"))}
      <div class="nav-sep"></div>
      ${navItem("info",t("nav.info"))}
      <div class="sidebar-bottom">
        <div class="pomodoro-widget">
          <div class="pomo-label">${pomodoro.phase==="focus"?t("pomo.focus"):t("pomo.break")}</div>
          <div class="pomo-time" id="pomodoro-time">${fmtTime(pomodoro.secondsLeft)}</div>
          <div class="pomo-controls">
            <button type="button" class="icon-btn" data-action="pomodoro-toggle">${pomodoro.running?t("pomo.pause"):t("pomo.start")}</button>
            <button type="button" class="icon-btn" data-action="pomodoro-reset" title="${t('pomo.resetTitle')}">↺</button>
          </div>
        </div>
        <div class="theme-toggle" data-action="toggle-lang" title="${t('lang.switchTitle')}">
          ${ICON_LANG}
          <span>${currentLang==="es" ? t("lang.toEnglish") : t("lang.toSpanish")}</span>
        </div>
        <div class="theme-toggle" data-action="toggle-theme" title="${t('theme.switchTitle')}">
          ${currentTheme==="dark" ? ICON_SUN : ICON_MOON}
          <span>${currentTheme==="dark" ? t("theme.toLight") : t("theme.toDark")}</span>
        </div>
      </div>
    </div>
    <div class="main" id="main"></div>
  `;
  document.getElementById("main").innerHTML = renderMain();
  attachHandlers();
}

const ICON_SPEAKER = '<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 6.2h2.4L8 3.2v9.6L4.9 9.8H2.5Z"/><path d="M10.3 5.8a3.4 3.4 0 0 1 0 4.4"/><path d="M12.2 4a6 6 0 0 1 0 8"/></svg>';
const ICON_FLAG = '<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 2.5h8v11l-4-2.6-4 2.6Z"/></svg>';
const ICON_STOP = '<svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><rect x="3.5" y="3.5" width="9" height="9" rx="1.5"/></svg>';

let theorySpeechKey = null;

function stripHtml(html){
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}

function speechLangCode(){
  return currentLang === "en" ? "en-US" : "es-ES";
}

// Best effort: shows lock-screen / control-center playback controls so listening can continue with the phone locked.
// Actual continuation while locked depends on the OS/browser (varies by iOS version) and isn't guaranteed.
function setupTheoryMediaSession(title){
  if(!('mediaSession' in navigator)) return;
  try{
    navigator.mediaSession.metadata = new MediaMetadata({ title, artist: "PSPO I Trainer" });
    navigator.mediaSession.playbackState = "playing";
    navigator.mediaSession.setActionHandler("play", ()=>{ window.speechSynthesis.resume(); navigator.mediaSession.playbackState = "playing"; });
    navigator.mediaSession.setActionHandler("pause", ()=>{ window.speechSynthesis.pause(); navigator.mediaSession.playbackState = "paused"; });
    navigator.mediaSession.setActionHandler("stop", ()=>{ stopTheorySpeech(); });
  }catch(e){}
}

function clearTheoryMediaSession(){
  if(!('mediaSession' in navigator)) return;
  try{
    navigator.mediaSession.playbackState = "none";
    ["play","pause","stop"].forEach(a=>{ try{ navigator.mediaSession.setActionHandler(a, null); }catch(e){} });
  }catch(e){}
}

function stopTheorySpeech(){
  if(window.speechSynthesis) window.speechSynthesis.cancel();
  theorySpeechKey = null;
  clearTheoryMediaSession();
  render();
}

function toggleTheorySpeech(key, title, html){
  if(!('speechSynthesis' in window)){ alert(t("quiz.ttsUnsupported")); return; }
  if(theorySpeechKey === key){ stopTheorySpeech(); return; }
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(stripHtml(html));
  utter.lang = speechLangCode();
  utter.onend = stopTheorySpeech;
  utter.onerror = stopTheorySpeech;
  theorySpeechKey = key;
  setupTheoryMediaSession(title);
  window.speechSynthesis.speak(utter);
  render();
}

function speakQuestion(){
  if(!('speechSynthesis' in window)){ alert(t("quiz.ttsUnsupported")); return; }
  const q = quiz.questions[quiz.idx];
  const parts = [q.q];
  q.opts.forEach((o,i)=> parts.push(`Opció ${String.fromCharCode(65+i)}: ${o}`));
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(parts.join(". "));
  utter.lang = "ca-ES";
  window.speechSynthesis.speak(utter);
}

function toggleFlag(){
  const idx = quiz.idx;
  const pos = quiz.flagged.indexOf(idx);
  if(pos>=0) quiz.flagged.splice(pos,1); else quiz.flagged.push(idx);
  render();
}

const ICON_LANG = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="5.5"/><path d="M2.5 8h11"/><path d="M8 2.5c1.7 1.6 1.7 9.4 0 11M8 2.5c-1.7 1.6-1.7 9.4 0 11"/></svg>';
const ICON_SUN = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="3"/><path d="M8 1.5v1.7M8 12.8v1.7M1.5 8h1.7M12.8 8h1.7M3.6 3.6l1.2 1.2M11.2 11.2l1.2 1.2M3.6 12.4l1.2-1.2M11.2 4.8l1.2-1.2"/></svg>';
const ICON_MOON = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M13.2 9.6A5.6 5.6 0 0 1 6.4 2.8a5.6 5.6 0 1 0 6.8 6.8Z"/></svg>';
const ICON_MENU = '<svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><path d="M2.5 4.5h11M2.5 8h11M2.5 11.5h11"/></svg>';

let sidebarOpen = false;
let versionsOpen = false;
let theorySearchQuery = "";

const NAV_ICONS = {
  "dashboard": '<path d="M2.5 8.5 8 3l5.5 5.5"/><path d="M3.8 7.2V13h8.4V7.2"/>',
  "theory-list": '<path d="M2.5 3.2h4a2 2 0 0 1 2 2v8.6a1.6 1.6 0 0 0-1.6-1.6h-4.4Z"/><path d="M13.5 3.2h-4a2 2 0 0 0-2 2v8.6a1.6 1.6 0 0 1 1.6-1.6h4.4Z"/>',
  "test-topic-config": '<circle cx="8" cy="8" r="5.2"/><circle cx="8" cy="8" r="2.1"/>',
  "test-config": '<path d="M2.5 5h3.4l2 2.2"/><path d="M2.5 11h3.4l6.6-7.4h1"/><path d="M9.9 9.8l2.6 3.2h1"/><path d="M11.5 2.7 13.5 3.6l-2 1"/><path d="M11.5 13.3 13.5 12.4l-2-1"/>',
  "special-modes": '<path d="M8.7 2.2 3.8 8.6h3.1l-1 5.2 5.4-6.9H8.3Z"/>',
  "custom-questions": '<path d="M9.8 2.9a1.4 1.4 0 0 1 2 2L5.4 11.3l-2.7.6.6-2.7Z"/><path d="M8.7 4l1.9 1.9"/>',
  "stats": '<path d="M3 13V6.5"/><path d="M7.5 13V3"/><path d="M12 13V9"/><path d="M2 13.5h12"/>',
  "info": '<circle cx="8" cy="8" r="5.3"/><path d="M8 7.3v3.7"/><circle cx="8" cy="5" r="0.75" fill="currentColor" stroke="none"/>'
};

function navItem(view, label){
  const active = state.view===view || ((state.view==="theory-detail"||state.view==="theory-all") && view==="theory-list") ? "active" : "";
  const icon = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">${NAV_ICONS[view]||""}</svg>`;
  return `<div class="nav-item ${active}" data-nav="${view}">${icon}<span>${label}</span></div>`;
}

function renderMain(){
  switch(state.view){
    case "dashboard": return renderDashboard();
    case "theory-list": return renderTheoryList();
    case "theory-detail": return renderTheoryDetail(state.topicId);
    case "theory-all": return renderTheoryAll();
    case "test-topic-config": return renderTopicConfig();
    case "test-config": return renderTestConfig();
    case "quiz": return renderQuiz();
    case "score": return renderScore();
    case "special-modes": return renderSpecialModes();
    case "loop-quiz": return renderLoopQuiz();
    case "loop-score": return renderLoopScore();
    case "custom-questions": return renderCustom();
    case "stats": return renderStats();
    case "info": return renderInfo();
    default: return "";
  }
}

// ---------------- DASHBOARD ----------------
function renderDashboard(){
  const hist = loadHistory();
  const totalTests = hist.length;
  const avgPct = totalTests ? Math.round(hist.reduce((s,h)=>s+h.pct,0)/totalTests) : null;
  const byTopic = aggregateByTopic(hist);
  let weakest = null;
  Object.entries(byTopic).forEach(([id,d])=>{
    const pct = d.total ? d.ok/d.total : 1;
    if(d.total>=3 && (weakest===null || pct < weakest.pct)) weakest = {id, name:d.name, pct};
  });

  return `
    <h1>${t("dashboard.welcome")}</h1>
    <p class="subtitle">${t("dashboard.subtitle")}</p>
    <div class="grid">
      <div class="stat-card"><div class="lbl">${t("dashboard.testsCompleted")}</div><div class="val">${totalTests}</div></div>
      <div class="stat-card"><div class="lbl">${t("dashboard.globalAvg")}</div><div class="val">${avgPct===null?"—":avgPct+"%"}</div></div>
      <div class="stat-card"><div class="lbl">${t("dashboard.questionBank")}</div><div class="val">${getAllQuestionsPool().length}</div></div>
      <div class="stat-card"><div class="lbl">${t("dashboard.weakestTopic")}</div><div class="val" style="font-size:16px; color:${weakest?'var(--red-line)':'var(--text-mute)'}">${weakest ? weakest.name : t("dashboard.notEnoughData")}</div></div>
    </div>
    <div style="display:flex; gap:12px; margin-bottom:30px;">
      <button class="btn amber" data-nav="test-config">${t("dashboard.startGeneral")}</button>
      <button class="btn secondary" data-nav="test-config" data-anchor="final-exam-section">${t("dashboard.startFinal")}</button>
    </div>
    <h1 style="font-size:18px;">${t("dashboard.progressByTopic")}</h1>
    <div class="card-list">
      ${activeTopics.map(t2=>{
        const d = byTopic[t2.id] || {ok:0, total:0};
        const pct = d.total ? Math.round(100*d.ok/d.total) : 0;
        return `<div class="topic-card" data-nav="theory-detail" data-topic="${t2.id}">
          <h3>${t2.name}</h3>
          <div class="meta">${topicQuestionCount(t2.id)} ${t("dashboard.questionsInBank")} · ${d.total ? pct+t("dashboard.correctPct") : t("dashboard.noAttempts")}</div>
          <div class="bar-bg"><div class="bar-fill" style="width:${pct}%; background:${pctColor(pct)}"></div></div>
        </div>`;
      }).join("")}
    </div>
  `;
}

function aggregateByTopic(hist){
  const agg = {};
  activeTopics.forEach(t=> agg[t.id] = {ok:0, total:0, name:t.name});
  hist.forEach(h=>{
    Object.entries(h.byTopic||{}).forEach(([id,d])=>{
      if(!agg[id]) agg[id] = {ok:0,total:0,name:d.name||id};
      agg[id].ok += d.ok; agg[id].total += d.total;
    });
  });
  return agg;
}

// ---------------- THEORY ----------------
function highlightMatch(text, query){
  if(!query) return escapeHtml(text);
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if(idx===-1) return escapeHtml(text);
  return escapeHtml(text.slice(0,idx)) + "<mark>" + escapeHtml(text.slice(idx,idx+query.length)) + "</mark>" + escapeHtml(text.slice(idx+query.length));
}

function renderTheoryList(){
  const query = theorySearchQuery.trim().toLowerCase();
  const results = activeTopics.map(tp=>{
    if(!query) return {tp, snippet:null};
    const plain = stripHtml(tp.theory);
    const nameMatch = tp.name.toLowerCase().includes(query);
    const idx = plain.toLowerCase().indexOf(query);
    if(!nameMatch && idx===-1) return null;
    let snippet = null;
    if(idx!==-1){
      const start = Math.max(0, idx-40);
      const end = Math.min(plain.length, idx+query.length+70);
      snippet = (start>0?"…":"") + plain.slice(start,end).trim() + (end<plain.length?"…":"");
    }
    return {tp, snippet};
  }).filter(Boolean);

  return `
    <h1>${t("theory.title")}</h1>
    <p class="subtitle">${t("theory.subtitle")}</p>
    <input type="text" id="theory-search" class="search-input" style="margin-bottom:16px;" placeholder="${escapeAttr(t('theory.searchPlaceholder'))}" value="${escapeAttr(theorySearchQuery)}"/>
    <button class="btn amber" data-nav="theory-all" style="width:100%; padding:18px; font-size:16px; margin-bottom:26px;">${t("theory.viewAll")}</button>
    <div class="card-list">
      ${results.length ? results.map(({tp,snippet})=>`<div class="topic-card" data-nav="theory-detail" data-topic="${tp.id}">
        <h3>${tp.name}</h3>
        <div class="meta">${topicQuestionCount(tp.id)} ${t("theory.practiceQuestions")}</div>
        ${snippet ? `<div class="meta" style="margin-top:8px; font-style:italic;">${highlightMatch(snippet, query)}</div>` : ""}
      </div>`).join("") : `<div class="empty-hint">${t("theory.searchNoResults")}</div>`}
    </div>
  `;
}

function renderTheoryAll(){
  const speaking = theorySpeechKey === "all";
  return `
    <button class="btn secondary small" data-nav="theory-list" style="margin-bottom:16px;">${t("theory.backToTopics")}</button>
    <h1>${t("theory.viewAllTitle")}</h1>
    <button type="button" class="icon-btn ${speaking?'active':''}" data-action="speak-theory-all" style="margin-bottom:20px;">${speaking?ICON_STOP:ICON_SPEAKER}${speaking?t("theory.stopListening"):t("theory.listenAll")}</button>
    ${activeTopics.map(tp=>`
      <h2 style="font-size:19px; margin:34px 0 12px;">${tp.name}</h2>
      <div class="theory-box">${tp.theory}</div>
    `).join("")}
  `;
}

function renderTheoryDetail(topicId){
  const tp = activeTopics.find(x=>x.id===topicId) || activeTopics[0];
  const speaking = theorySpeechKey === tp.id;
  return `
    <button class="btn secondary small" data-nav="theory-list" style="margin-bottom:16px;">${t("theory.backToTopics")}</button>
    <h1>${tp.name}</h1>
    <button type="button" class="icon-btn ${speaking?'active':''}" data-action="speak-theory-topic" data-topic="${tp.id}" style="margin-bottom:16px;">${speaking?ICON_STOP:ICON_SPEAKER}${speaking?t("theory.stopListening"):t("theory.listenTopic")}</button>
    <div class="theory-box">${tp.theory}</div>
    <div style="margin-top:20px;">
      <button class="btn amber" data-action="start-topic-test" data-topic="${tp.id}">${t("theory.startTopicTest")}</button>
    </div>
  `;
}

// ---------------- TEST PER TEMA — CONFIG ----------------
function renderTopicConfig(){
  const topicId = state.topicId || activeTopics[0].id;
  const topic = activeTopics.find(t=>t.id===topicId);
  const counts = countsByType(getTopicPool(topicId));
  return `
    <h1>${t("topicConfig.title")}</h1>
    <p class="subtitle">${t("topicConfig.subtitle")}</p>
    <div class="config-row config-row-tight">
      <label>${t("topicConfig.topicLabel")}</label>
      <select id="cfg-topic">
        ${activeTopics.map(tp=>`<option value="${tp.id}" ${tp.id===topicId?"selected":""}>${tp.name}</option>`).join("")}
      </select>
    </div>
    <div class="config-box">
      ${typeRow("single",t("typeLabel.single"), counts.single)}
      ${typeRow("multi",t("typeLabel.multi"), counts.multi)}
      ${typeRow("tf",t("typeLabel.tf"), counts.tf)}
      <div class="config-row">
        <label>${t("topicConfig.randomOrder")}</label>
        <span class="max">${t("topicConfig.alwaysOn")}</span>
      </div>
      <div class="config-row">
        <label>${t("topicConfig.timer")}</label>
        <input type="checkbox" id="cfg-timer"/>
      </div>
      <button class="btn amber" id="btn-start-topic" style="width:100%; margin-top:8px;">${t("action.startTest")}</button>
    </div>
  `;
}

function typeRow(key, label, max){
  const def = Math.min(max, key==="tf"?6:8);
  return `<div class="config-row">
    <label>${label}</label>
    <span class="max">${t("topicConfig.max")} ${max}</span>
    <input type="number" min="0" max="${max}" value="${def}" data-count="${key}" id="cnt-${key}"/>
  </div>`;
}

// ---------------- TEST GENERAL + FINAL — CONFIG (una sola pagina) ----------------
function renderTestConfig(){
  const pool = getAllQuestionsPool();
  const counts = countsByType(pool);
  const n = Math.min(EXAM_TOTAL_Q, pool.length);
  const secs = Math.round(EXAM_TOTAL_SEC * n / EXAM_TOTAL_Q);
  const mins = Math.round(secs/60);
  return `
    <h1>${t("nav.testConfig")}</h1>

    <h2 style="font-size:19px; margin:0 0 4px;">${t("generalConfig.title")}</h2>
    <p class="subtitle">${t("generalConfig.subtitle",{n:pool.length})}</p>
    <div class="config-box">
      ${typeRow("single",t("typeLabel.single"), counts.single)}
      ${typeRow("multi",t("typeLabel.multi"), counts.multi)}
      ${typeRow("tf",t("typeLabel.tf"), counts.tf)}
      <div class="config-row">
        <label>${t("topicConfig.timer")}</label>
        <input type="checkbox" id="cfg-timer"/>
      </div>
      <button class="btn amber" id="btn-start-general" style="width:100%; margin-top:8px;">${t("action.startTest")}</button>
    </div>

    <h2 id="final-exam-section" style="font-size:19px; margin:34px 0 4px;">${t("finalConfig.title")}</h2>
    <p class="subtitle">${t("finalConfig.subtitle",{n:EXAM_TOTAL_Q})}</p>
    <div class="config-box">
      <div class="config-row"><label>${t("finalConfig.questionsInTest")}</label><span class="max">${t("finalConfig.available",{n,total:pool.length})}</span></div>
      <div class="config-row"><label>${t("finalConfig.timeAvailable")}</label><span class="max">${t("finalConfig.proportional",{mins,n:EXAM_TOTAL_Q})}</span></div>
      <div class="config-row"><label>${t("finalConfig.order")}</label><span class="max">${t("finalConfig.randomOrder")}</span></div>
      <button class="btn amber" id="btn-start-final" style="width:100%; margin-top:8px;">${t("finalConfig.startExam")}</button>
    </div>
  `;
}

// ---------------- QUIZ ENGINE ----------------
function startQuiz(questions, meta, timerSec){
  if(window.speechSynthesis) window.speechSynthesis.cancel();
  quiz = {
    questions, idx:0, selected:[], locked:false, results:[], flagged:[],
    meta, // {mode, topicId, topicName}
    timerSec: timerSec || null,
    timeLeft: timerSec || null,
    startedAt: Date.now(),
    timerHandle: null
  };
  setView("quiz");
  if(quiz.timerSec){
    quiz.timerHandle = setInterval(()=>{
      quiz.timeLeft--;
      if(quiz.timeLeft<=0){
        clearInterval(quiz.timerHandle);
        finishQuiz(true);
      } else {
        updateTimerDisplay();
      }
    },1000);
  }
}

function updateTimerDisplay(){
  const el = document.getElementById("quiz-timer");
  if(!el) return;
  const m = Math.floor(quiz.timeLeft/60), s = quiz.timeLeft%60;
  el.textContent = `${m}:${s.toString().padStart(2,"0")}`;
  el.classList.toggle("low", quiz.timeLeft < 60);
}

function renderQuiz(){
  if(!quiz) return "";
  const q = quiz.questions[quiz.idx];
  let dots = quiz.questions.map((_,i)=>{
    let cls="dot";
    if(quiz.results[i]===true) cls+=" done";
    else if(quiz.results[i]===false) cls+=" wrong";
    return `<div class="${cls}"></div>`;
  }).join("");

  let optsHtml = q.opts.map((o,i)=>{
    let cls="opt";
    if(quiz.locked){
      cls+=" locked";
      const isCorrect = q.correct.includes(i);
      const wasSelected = quiz.selected.includes(i);
      if(isCorrect) cls+=" correct";
      else if(wasSelected) cls+=" incorrect";
    } else if(quiz.selected.includes(i)){
      cls+=" selected";
    }
    return `<button class="${cls}" data-pick="${i}" ${quiz.locked?"disabled":""}><b>${String.fromCharCode(65+i)}</b>${o}</button>`;
  }).join("");

  let hint = (q.type==="multi" ? `<div class="hint">${t("quiz.selectAll")}</div>` : "") + `<div class="hint">${t("quiz.keyboardHint")}</div>`;
  let feedbackHtml = "";
  if(quiz.locked){
    const isRight = quiz.results[quiz.idx];
    feedbackHtml = `<div class="feedback ${isRight?'ok':'bad'}">
      <strong>${isRight?t("quiz.correct"):t("quiz.incorrect")}</strong>
      <ul class="explist">${q.exp.map((e,i)=>`<li><b>${String.fromCharCode(65+i)}.</b> ${e}</li>`).join("")}</ul>
      <span class="trap">${t("quiz.examNote")} ${q.trap}</span>
    </div>`;
  }

  const timerHtml = quiz.timerSec ? `<span class="timer" id="quiz-timer">${Math.floor(quiz.timeLeft/60)}:${(quiz.timeLeft%60).toString().padStart(2,"0")}</span>` : "";
  const isLast = quiz.idx === quiz.questions.length-1;
  const isFlagged = quiz.flagged && quiz.flagged.includes(quiz.idx);

  return `
    <div class="track">${dots}</div>
    <div class="topbar-quiz">
      <span>${t("quiz.questionOf",{i:quiz.idx+1,n:quiz.questions.length,label:quiz.meta.label})}</span>
      ${timerHtml}
    </div>
    <div class="card">
      <span class="block-tag">${q.type==="multi"?t("typeLabel.multi"):q.type==="tf"?t("typeLabel.tf"):t("typeLabel.single")} · ${q.topicName}</span>
      <div class="quiz-toolbar">
        <button type="button" class="icon-btn" data-action="speak-question" title="${t('quiz.listenTitle')}">${ICON_SPEAKER}${t("quiz.listen")}</button>
        <button type="button" class="icon-btn ${isFlagged?'active':''}" data-action="toggle-flag" title="${t('quiz.markReviewTitle')}">${ICON_FLAG}${isFlagged?t("quiz.marked"):t("quiz.markReview")}</button>
      </div>
      <p class="qtext">${q.q}</p>
      ${hint}
      ${optsHtml}
      ${feedbackHtml}
      <div class="actions">
        <button class="btn secondary" data-action="quit-quiz">${t("quiz.abandon")}</button>
        <button class="btn" id="btn-quiz-next" ${(!quiz.locked && quiz.selected.length===0)?"disabled":""}>${quiz.locked ? (isLast?t("quiz.viewResult"):t("quiz.next")) : t("quiz.check")}</button>
      </div>
    </div>
  `;
}

function pickOption(i){
  if(quiz.locked) return;
  const q = quiz.questions[quiz.idx];
  if(q.type==="multi"){
    const pos = quiz.selected.indexOf(i);
    if(pos>=0) quiz.selected.splice(pos,1); else quiz.selected.push(i);
  } else {
    quiz.selected = [i];
  }
  render();
}

function checkAnswer(){
  const q = quiz.questions[quiz.idx];
  const isRight = quiz.selected.length===q.correct.length && quiz.selected.every(s=>q.correct.includes(s));
  quiz.results[quiz.idx] = isRight;
  quiz.locked = true;
  recordAnswerResult(q, isRight);
  render();
}

function nextQuestion(){
  if(window.speechSynthesis) window.speechSynthesis.cancel();
  if(quiz.idx === quiz.questions.length-1){
    finishQuiz(false);
    return;
  }
  quiz.idx++;
  quiz.selected=[];
  quiz.locked=false;
  render();
}

function finishQuiz(timedOut){
  if(window.speechSynthesis) window.speechSynthesis.cancel();
  if(quiz.timerHandle) clearInterval(quiz.timerHandle);
  const total = quiz.questions.length;
  const correctCount = quiz.results.filter(r=>r===true).length;
  const pct = total ? Math.round((correctCount/total)*100) : 0;
  const byTopic = {};
  const byType = {single:{ok:0,total:0}, multi:{ok:0,total:0}, tf:{ok:0,total:0}};
  quiz.questions.forEach((q,i)=>{
    if(!byTopic[q.topicId]) byTopic[q.topicId] = {ok:0,total:0,name:q.topicName};
    byTopic[q.topicId].total++;
    if(quiz.results[i]) byTopic[q.topicId].ok++;
    byType[q.type].total++;
    if(quiz.results[i]) byType[q.type].ok++;
  });
  const durationSec = Math.round((Date.now()-quiz.startedAt)/1000);
  const entry = { ts:Date.now(), mode:quiz.meta.mode, label:quiz.meta.label, total, correct:correctCount, pct, byTopic, byType, durationSec, timedOut };
  saveSession(entry);
  quiz.finishedEntry = entry;
  setView("score");
}

function renderScore(){
  const e = quiz.finishedEntry;
  if(!e) return "";
  const rows = Object.entries(e.byTopic).map(([id,d])=>{
    const weak = d.ok < d.total;
    return `<div class="brow"><span${weak?' class="bad-block"':''}>${d.name}</span><span${weak?' class="bad-block"':''}>${d.ok}/${d.total}</span></div>`;
  }).join("");
  const weakNames = Object.values(e.byTopic).filter(d=>d.ok<d.total).map(d=>d.name);
  const mins = Math.floor(e.durationSec/60), secs = e.durationSec%60;

  const flaggedIdxs = (quiz && quiz.flagged) || [];
  const flaggedHtml = flaggedIdxs.length ? `
    <div class="breakdown" style="margin-top:16px;">
      <div class="brow"><b>${t("score.markedForReview")}</b><b></b></div>
      ${flaggedIdxs.map(i=>{
        const fq = quiz.questions[i];
        const ok = quiz.results[i];
        return `<div class="brow"><span>${escapeHtml(fq.q)}</span><span${ok?'':' class="bad-block"'}>${ok?t("score.hit"):t("score.missed")}</span></div>`;
      }).join("")}
    </div>
  ` : "";

  return `
    <div class="score-screen">
      <div class="score-lbl">${e.timedOut ? t("score.timeUp") : ""}${t("score.result",{label:e.label})}</div>
      <div class="score-num">${e.pct}%</div>
      <div class="score-lbl">${t("score.correctOf",{correct:e.correct,total:e.total,mins,secs})}</div>
      <div class="breakdown">
        <div class="brow"><b>${t("score.topic")}</b><b>${t("score.hits")}</b></div>
        ${rows}
      </div>
      ${flaggedHtml}
      ${weakNames.length ? `<p class="muted">${t("score.topicsToReview",{names:weakNames.join(", ")})}</p>` : `<p class="muted">${t("score.perfect")}</p>`}
      <div style="display:flex; gap:10px; justify-content:center; margin-top:18px;">
        <button class="btn secondary" data-nav="dashboard">${t("score.backHome")}</button>
        <button class="btn amber" data-action="repeat-same-config">${t("score.repeat")}</button>
      </div>
    </div>
  `;
}

// ---------------- INFO ----------------
function renderInfo(){
  return `
    <h1>${t("info.title")}</h1>
    <p class="subtitle">${t("info.subtitle")}</p>
    <div class="block-tag">v${APP_VERSION}</div>
    <div class="theory-box">
      ${t("info.html",{examQ:EXAM_TOTAL_Q, focusMin:pomodoro.focusMin, breakMin:pomodoro.breakMin})}
    </div>
    <div style="margin-top:20px;">
      <button type="button" class="btn secondary small" data-action="toggle-versions">${versionsOpen ? t("info.hideVersions") : t("info.showVersions")}</button>
      ${versionsOpen ? `
        <div class="theory-box" style="margin-top:14px;">
          <p><a href="${REPO_URL}" target="_blank" rel="noopener">${t("info.repoLink")}</a></p>
          <table class="history">
            <thead><tr><th>${t("info.versionCol")}</th><th>${t("info.dateCol")}</th><th>${t("info.descCol")}</th></tr></thead>
            <tbody>
              ${CHANGELOG.map(c=>`<tr><td>v${c.version}</td><td>${c.date}</td><td>${escapeHtml(c.desc[currentLang] || c.desc.es)}</td></tr>`).join("")}
            </tbody>
          </table>
        </div>
      ` : ""}
    </div>
  `;
}

// ---------------- CUSTOM QUESTIONS SCREEN ----------------
function defaultDraft(){
  return { topicId: activeTopics[0].id, type:"single", q:"", opts:["",""], exp:["",""], correct:[], trap:"" };
}

function renderCustom(){
  const list = loadCustomQuestions().slice().sort((a,b)=>b.createdAt-a.createdAt);
  const rows = list.map(q=>{
    const topic = activeTopics.find(tp=>tp.id===q.topicId);
    return `<div class="custom-row">
      <div class="custom-row-main">
        <span class="custom-row-topic">${typeLabel(q.type)} · ${topic?topic.name:q.topicId}</span>
        <p class="custom-row-q">${escapeHtml(q.q)}</p>
      </div>
      <button class="btn secondary small" data-action="delete-custom" data-id="${q.id}">${t("custom.delete")}</button>
    </div>`;
  }).join("");

  return `
    <h1>${t("custom.title")}</h1>
    <p class="subtitle">${t("custom.subtitle",{n:list.length, s:list.length===1?"":"s"})}</p>
    ${customDraft ? renderCustomForm(customDraft) : `<button class="btn amber" data-action="new-custom">${t("custom.newQuestion")}</button>`}
    <div class="section-title" style="margin-top:32px;">${t("custom.added")}</div>
    <div class="custom-list">
      ${rows || `<div class="empty-hint">${t("custom.noneYet")}</div>`}
    </div>
  `;
}

function renderCustomForm(d){
  const isTf = d.type==="tf";
  const optRows = d.opts.map((opt,i)=>{
    const checked = d.correct.includes(i);
    const inputType = d.type==="multi" ? "checkbox" : "radio";
    return `<div class="custom-opt-row">
      <input type="${inputType}" name="custom-correct" data-correct-idx="${i}" ${checked?"checked":""}/>
      ${isTf
        ? `<span class="custom-opt-tf">${i===0?"Vertader":"Fals"}</span>`
        : `<input type="text" class="custom-opt-text" placeholder="${t('custom.optionPlaceholder',{letter:String.fromCharCode(65+i)})}" data-opt-idx="${i}" value="${escapeAttr(opt)}"/>`
      }
      <textarea class="custom-exp-text" placeholder="${t('custom.explanationPlaceholder')}" data-exp-idx="${i}">${escapeHtml(d.exp[i]||"")}</textarea>
      ${!isTf && d.opts.length>2 ? `<button type="button" class="btn secondary small" data-action="remove-opt" data-idx="${i}">✕</button>` : ""}
    </div>`;
  }).join("");

  return `
    <div class="config-box" style="max-width:640px;">
      <div class="config-row">
        <label>${t("custom.topicLabel")}</label>
        <select data-custom-field="topicId">
          ${activeTopics.map(tp=>`<option value="${tp.id}" ${tp.id===d.topicId?"selected":""}>${tp.name}</option>`).join("")}
        </select>
      </div>
      <div class="config-row">
        <label>${t("custom.typeLabel")}</label>
        <select data-custom-field="type">
          <option value="single" ${d.type==="single"?"selected":""}>${t("typeLabel.single")}</option>
          <option value="multi" ${d.type==="multi"?"selected":""}>${t("typeLabel.multi")}</option>
          <option value="tf" ${d.type==="tf"?"selected":""}>${t("typeLabel.tf")}</option>
        </select>
      </div>
      <div class="custom-field-block">
        <label>${t("custom.questionLabel")}</label>
        <textarea data-custom-field="q" placeholder="${t('custom.questionPlaceholder')}">${escapeHtml(d.q)}</textarea>
      </div>
      <div class="custom-field-block">
        <label>${d.type==="multi"?t("custom.optionsLabelMulti"):t("custom.optionsLabelSingle")}</label>
        ${optRows}
        ${!isTf && d.opts.length<6 ? `<button type="button" class="btn secondary small" data-action="add-opt">${t("custom.addOption")}</button>` : ""}
      </div>
      <div class="custom-field-block">
        <label>${t("custom.trapLabel")}</label>
        <textarea data-custom-field="trap" placeholder="${t('custom.trapPlaceholder')}">${escapeHtml(d.trap)}</textarea>
      </div>
      <div class="actions" style="margin-top:6px;">
        <button class="btn secondary" data-action="cancel-custom">${t("custom.cancel")}</button>
        <button class="btn amber" data-action="save-custom">${t("custom.save")}</button>
      </div>
    </div>
  `;
}

// ---------------- STATS ----------------
const CORE_MODES = ["topic","general","final"];
function modeLabel(m){ return t("mode."+m) || m; }
function typeLabel(tt){ return t("typeLabel."+tt) || tt; }
function daysLabel(d){ return t("days."+d) || d; }

function filterHistory(hist, filter){
  if(!filter || filter==="all") return hist;
  return hist.filter(h=>h.mode===filter);
}

function filterByTopic(hist, topicId){
  if(!topicId || topicId==="all") return hist;
  return hist.filter(h=> h.byTopic && h.byTopic[topicId]);
}

function filterByDays(hist, days){
  if(!days || days==="all") return hist;
  const cutoff = Date.now() - Number(days)*24*60*60*1000;
  return hist.filter(h=> h.ts >= cutoff);
}

function sessionPct(h, topicId){
  if(topicId && topicId!=="all" && h.byTopic && h.byTopic[topicId]){
    const d = h.byTopic[topicId];
    return d.total ? Math.round(100*d.ok/d.total) : 0;
  }
  return h.pct;
}

function aggregateByType(hist){
  const agg = {single:{ok:0,total:0}, multi:{ok:0,total:0}, tf:{ok:0,total:0}};
  hist.forEach(h=>{
    Object.entries(h.byType||{}).forEach(([t,d])=>{
      if(!agg[t]) agg[t] = {ok:0,total:0};
      agg[t].ok += d.ok; agg[t].total += d.total;
    });
  });
  return agg;
}

function modeBreakdown(hist){
  const agg = {};
  hist.forEach(h=>{
    if(!agg[h.mode]) agg[h.mode] = {n:0,sum:0};
    agg[h.mode].n++; agg[h.mode].sum += h.pct;
  });
  return agg;
}

function computeStreak(histDesc, topicId){
  let streak = 0;
  for(const h of histDesc){
    if(sessionPct(h, topicId)>=80) streak++; else break;
  }
  return streak;
}

function pctColor(pct){
  return pct>=80 ? "var(--green-line)" : pct>=60 ? "var(--amber)" : "var(--red-line)";
}

function heatColor(pct){
  const hue = Math.max(0, Math.min(120, pct*1.2));
  return `hsl(${hue}, 55%, 42%)`;
}

const EXAM_PASS_THRESHOLD = 85;
function predictExamScore(hist){
  if(!hist.length) return null;
  const overallAvg = hist.reduce((s,h)=>s+h.pct,0)/hist.length;
  const byTopic = aggregateByTopic(hist);
  let weightedSum = 0, totalWeight = 0;
  activeTopics.forEach(t=>{
    const d = byTopic[t.id];
    const weight = t.questions.length || 1;
    const topicPct = (d && d.total>=3) ? (100*d.ok/d.total) : overallAvg;
    weightedSum += topicPct * weight;
    totalWeight += weight;
  });
  return totalWeight ? Math.round(weightedSum/totalWeight) : Math.round(overallAvg);
}

function buildSparkline(histAsc){
  const pts = histAsc.slice(-25);
  if(pts.length<2) return null;
  const w = Math.max(380, pts.length*28), h = 116, padX = 16, padY = 16;
  const innerH = h - padY*2;
  const stepX = pts.length>1 ? (w - padX*2)/(pts.length-1) : 0;
  const xy = pts.map((p,i)=>({ x: padX + i*stepX, y: padY + (1 - p.pct/100)*innerH, pct: p.pct }));
  const line = xy.map((p,i)=> (i===0?"M":"L") + p.x.toFixed(1) + "," + p.y.toFixed(1)).join(" ");
  const area = line + ` L${xy[xy.length-1].x.toFixed(1)},${(h-padY).toFixed(1)} L${xy[0].x.toFixed(1)},${(h-padY).toFixed(1)} Z`;
  const gridY = [60,80].map(v=> (padY + (1-v/100)*innerH).toFixed(1));
  const dots = xy.map(p=>`<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="3.2" style="fill:${pctColor(p.pct)}" stroke="var(--bg-panel-hi)" stroke-width="1.4"/>`).join("");
  return `<svg viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
    <line x1="${padX}" y1="${gridY[0]}" x2="${w-padX}" y2="${gridY[0]}" style="stroke:var(--border-soft)" stroke-dasharray="3,4"/>
    <line x1="${padX}" y1="${gridY[1]}" x2="${w-padX}" y2="${gridY[1]}" style="stroke:var(--border-soft)" stroke-dasharray="3,4"/>
    <path d="${area}" style="fill:var(--amber-glow)"/>
    <path d="${line}" style="fill:none; stroke:var(--amber); stroke-width:2px;"/>
    ${dots}
  </svg>`;
}

function renderErrorHistoryTab(){
  const filter = state.errorFilter || "active";
  const log = loadErrorLog().slice().sort((a,b)=>(b.lastFailedAt||0)-(a.lastFailedAt||0));
  const activeCount = log.filter(e=>!e.masteredAt).length;
  const masteredCount = log.filter(e=>e.masteredAt).length;
  const filtered = filter==="all" ? log : filter==="mastered" ? log.filter(e=>e.masteredAt) : log.filter(e=>!e.masteredAt);

  const errTabs = [["active",`${t("errors.active")} (${activeCount})`],["mastered",`${t("errors.mastered")} (${masteredCount})`],["all",`${t("errors.all")} (${log.length})`]]
    .map(([k,label])=>`<div class="tab ${filter===k?'active':''}" data-error-filter="${k}">${label}</div>`).join("");

  const rows = filtered.map(e=>{
    const topic = activeTopics.find(tp=>tp.id===e.topicId);
    const dateStr = e.lastFailedAt ? new Date(e.lastFailedAt).toLocaleDateString() : "—";
    const statusLabel = e.masteredAt ? t("errors.masteredLabel") : t("errors.streakLabel",{n:e.streak});
    return `<div class="custom-row">
      <div class="custom-row-main">
        <span class="custom-row-topic">${topic?topic.name:e.topicId} · ${statusLabel} · ${t("errors.failedCount",{n:e.failCount, s:e.failCount===1?"":"s"})}</span>
        <p class="custom-row-q">${escapeHtml(e.q)}</p>
      </div>
      <span class="muted" style="white-space:nowrap;">${dateStr}</span>
    </div>`;
  }).join("");

  return `
    <div class="tabs" style="margin-bottom:18px;">${errTabs}</div>
    <div class="custom-list">${rows || `<div class="empty-hint">${t("errors.noneInCategory")}</div>`}</div>
    ${log.length ? `<button class="btn secondary small" id="btn-clear-errors" style="margin-top:18px;">${t("errors.clear")}</button>` : ""}
  `;
}

function renderBackupControls(){
  return `
    <div class="stats-panel" style="margin-bottom:22px;">
      <div class="section-title" style="margin-top:0;">${t("stats.backupTitle")}</div>
      <p class="subtitle" style="margin-bottom:14px;">${t("stats.backupDesc")}</p>
      <div style="display:flex; gap:10px; flex-wrap:wrap;">
        <button type="button" class="btn secondary small" id="btn-export-data">${t("stats.exportData")}</button>
        <button type="button" class="btn secondary small" id="btn-import-data">${t("stats.importData")}</button>
      </div>
      <input type="file" id="import-file-input" accept="application/json,.json" style="display:none;"/>
    </div>
  `;
}

function renderStats(){
  const statsView = state.statsView || "summary";
  const allHistRaw = loadHistory();
  const viewTabs = `
    <div class="tabs" style="margin-bottom:22px;">
      <div class="tab ${statsView==='summary'?'active':''}" data-stats-view="summary">${t("stats.tabSummary")}</div>
      <div class="tab ${statsView==='errors'?'active':''}" data-stats-view="errors">${t("stats.tabErrors",{n:activeErrors().length})}</div>
    </div>
  `;

  if(statsView==="errors"){
    return `
      <h1>${t("stats.title")}</h1>
      <p class="subtitle">${t("stats.testsRegistered",{n:allHistRaw.length})}</p>
      ${viewTabs}
      ${renderBackupControls()}
      ${renderErrorHistoryTab()}
    `;
  }

  const filter = state.statsFilter || "all";
  const topicFilter = state.statsTopic || "all";
  const daysFilter = state.statsDays || "all";
  const allHist = allHistRaw;
  const predictedScore = predictExamScore(allHist);
  let hist = filterHistory(allHist, filter);
  hist = filterByTopic(hist, topicFilter);
  hist = filterByDays(hist, daysFilter);
  hist = hist.slice().sort((a,b)=>b.ts-a.ts);
  const histAsc = hist.slice().sort((a,b)=>a.ts-b.ts);

  const totalTests = hist.length;
  const avgPct = totalTests ? Math.round(hist.reduce((s,h)=>s+sessionPct(h,topicFilter),0)/totalTests) : null;
  const totalQuestions = topicFilter==="all"
    ? hist.reduce((s,h)=>s+h.total,0)
    : hist.reduce((s,h)=>{ const d=h.byTopic&&h.byTopic[topicFilter]; return s+(d?d.total:0); },0);
  const totalSec = hist.reduce((s,h)=>s+(h.durationSec||0),0);
  const totalHours = Math.floor(totalSec/3600), totalMins = Math.floor((totalSec%3600)/60);
  const streak = computeStreak(hist, topicFilter);

  const byTopic = aggregateByTopic(hist);
  const topicEntries = Object.entries(byTopic).filter(([id,d])=>d.total>0);
  let weakest=null, strongest=null;
  topicEntries.forEach(([id,d])=>{
    const pct = d.ok/d.total;
    if(d.total>=3){
      if(weakest===null || pct<weakest.pct) weakest={name:d.name,pct};
      if(strongest===null || pct>strongest.pct) strongest={name:d.name,pct};
    }
  });

  const byType = aggregateByType(hist);
  const modeAgg = modeBreakdown(hist);
  const sparkline = buildSparkline(histAsc.map(h=>({pct: sessionPct(h, topicFilter)})));

  const topicRows = topicEntries
    .sort((a,b)=> (a[1].ok/a[1].total) - (b[1].ok/b[1].total))
    .map(([id,d])=>{
      const pct = Math.round(100*d.ok/d.total);
      return `<div class="topic-bar-row">
        <div class="thead"><span>${d.name}</span><span class="pct">${pct}% (${d.ok}/${d.total})</span></div>
        <div class="tbar-bg"><div class="tbar-fill" style="width:${pct}%; background:${pctColor(pct)};"></div></div>
      </div>`;
    }).join("");

  const typeRows = ["single","multi","tf"].map(tt=>{
    const d = byType[tt];
    const pct = d.total ? Math.round(100*d.ok/d.total) : 0;
    return `<div class="type-bar-row">
      <span class="tlabel">${typeLabel(tt)}</span>
      <div class="tbar-bg"><div class="tbar-fill" style="width:${pct}%; background:${d.total?pctColor(pct):'transparent'};"></div></div>
      <span class="tval">${d.total ? pct+"% ("+d.ok+"/"+d.total+")" : t("stats.noData")}</span>
    </div>`;
  }).join("");

  const specialModesUsed = Object.keys(modeAgg).filter(m=>!CORE_MODES.includes(m) && modeAgg[m].n>0);
  const modeCards = CORE_MODES.concat(specialModesUsed).map(m=>{
    const d = modeAgg[m] || {n:0,sum:0};
    const avg = d.n ? Math.round(d.sum/d.n) : null;
    return `<div class="mode-card">
      <div class="mlbl">${modeLabel(m)}</div>
      <div class="mval">${avg===null?"—":avg+"%"}</div>
      <div class="msub">${d.n} ${d.n===1?t("stats.test"):t("stats.testsPlural")}</div>
    </div>`;
  }).join("");

  const histRows = hist.slice(0,40).map(h=>{
    const date = new Date(h.ts).toLocaleString();
    const scoreD = (topicFilter!=="all" && h.byTopic && h.byTopic[topicFilter]) ? h.byTopic[topicFilter] : {ok:h.correct, total:h.total};
    const pct = sessionPct(h, topicFilter);
    const cls = pct>=80?"ok":pct>=60?"mid":"bad";
    const mins = Math.floor(h.durationSec/60), secs = h.durationSec%60;
    return `<tr>
      <td>${date}</td><td>${h.label}</td><td>${scoreD.ok}/${scoreD.total}</td>
      <td><span class="pill ${cls}">${pct}%</span></td>
      <td>${mins}m ${secs}s${h.timedOut?t("stats.timedOutSuffix"):""}</td>
    </tr>`;
  }).join("");

  const tabs = ["all","topic","general","final"].map(f=>{
    const label = f==="all" ? t("stats.all") : modeLabel(f);
    return `<div class="tab ${filter===f?'active':''}" data-stats-filter="${f}">${label}</div>`;
  }).join("");

  const daysTabs = ["all","7","30","90"].map(d=>{
    return `<div class="tab ${daysFilter===d?'active':''}" data-stats-days="${d}">${daysLabel(d)}</div>`;
  }).join("");

  const topicSelect = `<select class="stats-select" data-stats-topic>
    <option value="all" ${topicFilter==="all"?"selected":""}>${t("stats.allTopics")}</option>
    ${activeTopics.map(tp=>`<option value="${tp.id}" ${topicFilter===tp.id?"selected":""}>${tp.name}</option>`).join("")}
  </select>`;

  const body = totalTests ? `
    <div class="grid">
      <div class="stat-card"><div class="lbl">${t("stats.tests")}</div><div class="val">${totalTests}</div></div>
      <div class="stat-card"><div class="lbl">${t("stats.avg")}</div><div class="val">${avgPct}%</div></div>
      <div class="stat-card"><div class="lbl">${t("stats.questionsAnswered")}</div><div class="val">${totalQuestions}</div></div>
      <div class="stat-card"><div class="lbl">${t("stats.timeSpent")}</div><div class="val small">${totalHours}h ${totalMins}m</div></div>
      <div class="stat-card"><div class="lbl">${t("stats.currentStreak")}</div><div class="val">${streak}</div><div class="sub">${t("stats.testsInARow")}</div></div>
      <div class="stat-card"><div class="lbl">${t("stats.strongestTopic")}</div><div class="val small" style="color:${strongest?'var(--green-line)':'var(--text-mute)'}">${strongest ? strongest.name : t("dashboard.notEnoughData")}</div></div>
      <div class="stat-card"><div class="lbl">${t("stats.topicToImprove")}</div><div class="val small" style="color:${weakest?'var(--red-line)':'var(--text-mute)'}">${weakest ? weakest.name : t("dashboard.notEnoughData")}</div></div>
      <div class="stat-card">
        <div class="lbl">${t("stats.predictedGrade")}</div>
        <div class="val" style="color:${predictedScore===null?'var(--text-mute)':predictedScore>=EXAM_PASS_THRESHOLD?'var(--green-line)':'var(--red-line)'}">${predictedScore===null?"—":predictedScore+"%"}</div>
        <div class="sub">${predictedScore===null?t("stats.needMoreTests"):(predictedScore>=EXAM_PASS_THRESHOLD?t("stats.aboveThreshold"):t("stats.belowThreshold"))+t("stats.passThreshold",{n:EXAM_PASS_THRESHOLD})}</div>
      </div>
    </div>

    <div class="section-title">${t("stats.heatmap")}</div>
    <div class="stats-panel">
      <div class="heatmap-grid">
        ${activeTopics.map(tp=>{
          const d = byTopic[tp.id] || {ok:0,total:0,name:tp.name};
          const hasData = d.total>0;
          const pct = hasData ? Math.round(100*d.ok/d.total) : null;
          const bg = hasData ? heatColor(pct) : "var(--bg-panel-hi)";
          const color = hasData ? "#fff" : "var(--text-mute)";
          return `<div class="heat-tile" style="background:${bg}; color:${color};">
            <div class="htitle">${tp.name}</div>
            <div>
              <div class="hpct">${hasData?pct+"%":"—"}</div>
              <div class="hsub">${hasData?d.ok+"/"+d.total:t("dashboard.noAttempts")}</div>
            </div>
          </div>`;
        }).join("")}
      </div>
    </div>

    <div class="section-title">${t("stats.evolution")}</div>
    <div class="stats-panel">
      ${sparkline ? `<div class="chart-wrap">${sparkline}</div>` : `<div class="empty-hint">${t("stats.needTwoTests")}</div>`}
    </div>

    <div class="section-title">${t("stats.accuracyByType")}</div>
    <div class="stats-panel"><div class="type-bars">${typeRows}</div></div>

    <div class="section-title">${t("stats.performanceByTestType")}</div>
    <div class="stats-panel"><div class="mode-cards">${modeCards}</div></div>

    <div class="section-title">${t("stats.progressByTopic")}</div>
    <div class="stats-panel">${topicRows || `<div class="empty-hint">${t("stats.noDataYet")}</div>`}</div>
  ` : `<div class="empty-hint" style="margin-bottom:24px;">${t("stats.noMatchFilters")}</div>`;

  return `
    <h1>${t("stats.title")}</h1>
    <p class="subtitle">${t("stats.testsRegistered",{n:allHist.length})}</p>
    ${viewTabs}
    ${renderBackupControls()}
    <div class="stats-controls">
      <div class="tabs">${tabs}</div>
      ${topicSelect}
      <div class="tabs">${daysTabs}</div>
    </div>
    ${body}
    <div class="section-title">${t("stats.detailedHistory")}</div>
    <table class="history">
      <tr><th>${t("stats.date")}</th><th>${t("stats.testCol")}</th><th>${t("stats.score")}</th><th>${t("stats.percent")}</th><th>${t("stats.duration")}</th></tr>
      ${histRows || `<tr><td colspan="5">${t("stats.noHistoryYet")}</td></tr>`}
    </table>
    ${allHist.length ? `<button class="btn secondary small" id="btn-clear-history" style="margin-top:18px;">${t("stats.clearHistory")}</button>` : ""}
  `;
}

// ---------------- EVENT HANDLERS ----------------
function attachHandlers(){
  root.querySelectorAll("[data-nav]").forEach(el=>{
    el.addEventListener("click", ()=>{
      const view = el.getAttribute("data-nav");
      const topic = el.getAttribute("data-topic");
      const anchor = el.getAttribute("data-anchor");
      sidebarOpen = false;
      setView(view, topic ? {topicId:topic} : {});
      if(anchor){
        const target = document.getElementById(anchor);
        if(target) target.scrollIntoView({behavior:"smooth", block:"start"});
      }
    });
  });

  const menuToggleBtn = root.querySelector('[data-action="toggle-sidebar"]');
  if(menuToggleBtn){
    menuToggleBtn.addEventListener("click", ()=>{ sidebarOpen = !sidebarOpen; render(); });
  }

  const versionsToggle = root.querySelector('[data-action="toggle-versions"]');
  if(versionsToggle){
    versionsToggle.addEventListener("click", ()=>{ versionsOpen = !versionsOpen; render(); });
  }

  const theorySearchInput = document.getElementById("theory-search");
  if(theorySearchInput){
    theorySearchInput.addEventListener("input", (e)=>{
      theorySearchQuery = e.target.value;
      const caret = e.target.selectionStart;
      render();
      const el = document.getElementById("theory-search");
      if(el){ el.focus(); el.setSelectionRange(caret, caret); }
    });
  }

  const sidebarOverlay = root.querySelector('[data-action="close-sidebar"]');
  if(sidebarOverlay){
    sidebarOverlay.addEventListener("click", ()=>{ sidebarOpen = false; render(); });
  }

  const topicSelect = document.getElementById("cfg-topic");
  if(topicSelect){
    topicSelect.addEventListener("change", (e)=>{ setView("test-topic-config", {topicId:e.target.value}); });
  }

  const startTopic = document.getElementById("btn-start-topic");
  if(startTopic){
    startTopic.addEventListener("click", ()=>{
      const topicId = document.getElementById("cfg-topic").value;
      const topic = activeTopics.find(t=>t.id===topicId);
      const counts = readCounts();
      const timerOn = document.getElementById("cfg-timer").checked;
      const pool = getTopicPool(topic.id);
      const questions = buildQuestionSet(pool, counts);
      if(!questions.length){ alert(t("quiz.selectAtLeastOne")); return; }
      const secs = timerOn ? Math.round(EXAM_TOTAL_SEC * questions.length / EXAM_TOTAL_Q) : null;
      lastConfig = {type:"topic", topicId, counts, timerOn};
      startQuiz(questions, {mode:"topic", topicId, label:t("mode.topicPrefix",{name:topic.name})}, secs);
    });
  }

  const startGeneral = document.getElementById("btn-start-general");
  if(startGeneral){
    startGeneral.addEventListener("click", ()=>{
      const counts = readCounts();
      const timerOn = document.getElementById("cfg-timer").checked;
      const questions = buildQuestionSet(getAllQuestionsPool(), counts);
      if(!questions.length){ alert(t("quiz.selectAtLeastOne")); return; }
      const secs = timerOn ? Math.round(EXAM_TOTAL_SEC * questions.length / EXAM_TOTAL_Q) : null;
      lastConfig = {type:"general", counts, timerOn};
      startQuiz(questions, {mode:"general", label:t("mode.general")}, secs);
    });
  }

  const startFinal = document.getElementById("btn-start-final");
  if(startFinal){
    startFinal.addEventListener("click", ()=>{
      const pool = getAllQuestionsPool();
      const n = Math.min(EXAM_TOTAL_Q, pool.length);
      const questions = shuffle(pool).slice(0,n).map(prepareQuestion);
      const secs = Math.round(EXAM_TOTAL_SEC * n / EXAM_TOTAL_Q);
      lastConfig = {type:"final"};
      startQuiz(questions, {mode:"final", label:t("mode.final")}, secs);
    });
  }

  root.querySelectorAll("[data-pick]").forEach(el=>{
    el.addEventListener("click", ()=> pickOption(parseInt(el.getAttribute("data-pick"),10)));
  });

  const nextBtn = document.getElementById("btn-quiz-next");
  if(nextBtn){
    nextBtn.addEventListener("click", ()=>{
      if(!quiz.locked) checkAnswer(); else nextQuestion();
    });
  }

  const quitBtn = root.querySelector('[data-action="quit-quiz"]');
  if(quitBtn){
    quitBtn.addEventListener("click", ()=>{
      if(confirm(t("quiz.confirmAbandon"))){
        if(window.speechSynthesis) window.speechSynthesis.cancel();
        if(quiz && quiz.timerHandle) clearInterval(quiz.timerHandle);
        setView("dashboard");
      }
    });
  }

  const speakBtn = root.querySelector('[data-action="speak-question"]');
  if(speakBtn){
    speakBtn.addEventListener("click", speakQuestion);
  }

  const flagBtn = root.querySelector('[data-action="toggle-flag"]');
  if(flagBtn){
    flagBtn.addEventListener("click", toggleFlag);
  }

  const speakTopicBtn = root.querySelector('[data-action="speak-theory-topic"]');
  if(speakTopicBtn){
    speakTopicBtn.addEventListener("click", ()=>{
      const topicId = speakTopicBtn.getAttribute("data-topic");
      const tp = activeTopics.find(x=>x.id===topicId);
      if(tp) toggleTheorySpeech(tp.id, tp.name, tp.theory);
    });
  }

  const speakAllBtn = root.querySelector('[data-action="speak-theory-all"]');
  if(speakAllBtn){
    speakAllBtn.addEventListener("click", ()=>{
      const combinedHtml = activeTopics.map(tp=>`<h2>${tp.name}</h2>${tp.theory}`).join(" ");
      toggleTheorySpeech("all", t("theory.viewAllTitle"), combinedHtml);
    });
  }

  const startLoopBtn = root.querySelector('[data-action="start-loop-mode"]');
  if(startLoopBtn){ startLoopBtn.addEventListener("click", startLoopMode); }

  const startRedemptionBtn = root.querySelector('[data-action="start-redemption-mode"]');
  if(startRedemptionBtn){ startRedemptionBtn.addEventListener("click", startRedemptionMode); }

  const startSpacedBtn = root.querySelector('[data-action="start-spaced-mode"]');
  if(startSpacedBtn){ startSpacedBtn.addEventListener("click", startSpacedReviewMode); }

  const startTfMassiveBtn = root.querySelector('[data-action="start-tfmassive-mode"]');
  if(startTfMassiveBtn){ startTfMassiveBtn.addEventListener("click", startTfMassiveMode); }

  const startTrapBtn = root.querySelector('[data-action="start-trap-mode"]');
  if(startTrapBtn){ startTrapBtn.addEventListener("click", startTrapMode); }

  root.querySelectorAll("[data-loop-pick]").forEach(el=>{
    el.addEventListener("click", ()=> pickLoopOption(parseInt(el.getAttribute("data-loop-pick"),10)));
  });

  const loopNextBtn = document.getElementById("btn-loop-next");
  if(loopNextBtn){
    loopNextBtn.addEventListener("click", ()=>{ if(!loopQuiz.locked) loopCheckAnswer(); else loopNext(); });
  }

  const speakLoopBtn = root.querySelector('[data-action="speak-loop-question"]');
  if(speakLoopBtn){
    speakLoopBtn.addEventListener("click", ()=>{
      if(!('speechSynthesis' in window)) return;
      const q = loopQuiz.current;
      const parts = [q.q];
      q.opts.forEach((o,i)=> parts.push(`Opció ${String.fromCharCode(65+i)}: ${o}`));
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(parts.join(". "));
      utter.lang = "ca-ES";
      window.speechSynthesis.speak(utter);
    });
  }

  const quitLoopBtn = root.querySelector('[data-action="quit-loop"]');
  if(quitLoopBtn){
    quitLoopBtn.addEventListener("click", ()=>{
      if(confirm(t("loop.confirmAbandon"))){
        if(window.speechSynthesis) window.speechSynthesis.cancel();
        setView("special-modes");
      }
    });
  }

  const startTopicTest = root.querySelector('[data-action="start-topic-test"]');
  if(startTopicTest){
    startTopicTest.addEventListener("click", ()=>{
      setView("test-topic-config", {topicId: startTopicTest.getAttribute("data-topic")});
    });
  }

  const repeatBtn = root.querySelector('[data-action="repeat-same-config"]');
  if(repeatBtn){
    repeatBtn.addEventListener("click", ()=>{
      if(!lastConfig) { setView("dashboard"); return; }
      if(lastConfig.type==="final"){
        const pool = getAllQuestionsPool();
        const n = Math.min(EXAM_TOTAL_Q, pool.length);
        const questions = shuffle(pool).slice(0,n).map(prepareQuestion);
        const secs = Math.round(EXAM_TOTAL_SEC * n / EXAM_TOTAL_Q);
        startQuiz(questions, {mode:"final", label:t("mode.final")}, secs);
      } else if(lastConfig.type==="general"){
        const questions = buildQuestionSet(getAllQuestionsPool(), lastConfig.counts);
        const secs = lastConfig.timerOn ? Math.round(EXAM_TOTAL_SEC * questions.length / EXAM_TOTAL_Q) : null;
        startQuiz(questions, {mode:"general", label:t("mode.general")}, secs);
      } else {
        const topic = activeTopics.find(tp=>tp.id===lastConfig.topicId);
        const pool = getTopicPool(topic.id);
        const questions = buildQuestionSet(pool, lastConfig.counts);
        const secs = lastConfig.timerOn ? Math.round(EXAM_TOTAL_SEC * questions.length / EXAM_TOTAL_Q) : null;
        startQuiz(questions, {mode:"topic", topicId:topic.id, label:t("mode.topicPrefix",{name:topic.name})}, secs);
      }
    });
  }

  root.querySelectorAll("[data-stats-view]").forEach(el=>{
    el.addEventListener("click", ()=>{
      setView("stats", {statsView: el.getAttribute("data-stats-view"), statsFilter: state.statsFilter, statsTopic: state.statsTopic, statsDays: state.statsDays});
    });
  });

  root.querySelectorAll("[data-error-filter]").forEach(el=>{
    el.addEventListener("click", ()=>{
      setView("stats", {statsView:"errors", errorFilter: el.getAttribute("data-error-filter")});
    });
  });

  const clearErrBtn = document.getElementById("btn-clear-errors");
  if(clearErrBtn){
    clearErrBtn.addEventListener("click", ()=>{
      if(confirm(t("errors.confirmClear"))){
        clearErrorLog();
        render();
      }
    });
  }

  root.querySelectorAll("[data-stats-filter]").forEach(el=>{
    el.addEventListener("click", ()=>{
      setView("stats", {statsView: state.statsView, statsFilter: el.getAttribute("data-stats-filter"), statsTopic: state.statsTopic, statsDays: state.statsDays});
    });
  });

  const statsTopicSelect = root.querySelector('[data-stats-topic]');
  if(statsTopicSelect){
    statsTopicSelect.addEventListener("change", (e)=>{
      setView("stats", {statsView: state.statsView, statsFilter: state.statsFilter, statsTopic: e.target.value, statsDays: state.statsDays});
    });
  }

  root.querySelectorAll("[data-stats-days]").forEach(el=>{
    el.addEventListener("click", ()=>{
      setView("stats", {statsView: state.statsView, statsFilter: state.statsFilter, statsTopic: state.statsTopic, statsDays: el.getAttribute("data-stats-days")});
    });
  });

  const themeToggle = root.querySelector('[data-action="toggle-theme"]');
  if(themeToggle){
    themeToggle.addEventListener("click", toggleTheme);
  }

  const langToggle = root.querySelector('[data-action="toggle-lang"]');
  if(langToggle){
    langToggle.addEventListener("click", toggleLang);
  }

  const pomodoroToggleBtn = root.querySelector('[data-action="pomodoro-toggle"]');
  if(pomodoroToggleBtn){
    pomodoroToggleBtn.addEventListener("click", pomodoroToggle);
  }
  const pomodoroResetBtn = root.querySelector('[data-action="pomodoro-reset"]');
  if(pomodoroResetBtn){
    pomodoroResetBtn.addEventListener("click", pomodoroReset);
  }

  const newCustomBtn = root.querySelector('[data-action="new-custom"]');
  if(newCustomBtn){
    newCustomBtn.addEventListener("click", ()=>{ customDraft = defaultDraft(); render(); });
  }

  const cancelCustomBtn = root.querySelector('[data-action="cancel-custom"]');
  if(cancelCustomBtn){
    cancelCustomBtn.addEventListener("click", ()=>{ customDraft = null; render(); });
  }

  const customTopicField = root.querySelector('[data-custom-field="topicId"]');
  if(customTopicField){
    customTopicField.addEventListener("change", e=>{ customDraft.topicId = e.target.value; });
  }

  const customTypeField = root.querySelector('[data-custom-field="type"]');
  if(customTypeField){
    customTypeField.addEventListener("change", e=>{
      const newType = e.target.value;
      const wasTf = customDraft.type==="tf";
      customDraft.type = newType;
      if(newType==="tf"){
        customDraft.opts = ["Vertader","Fals"];
        customDraft.exp = [customDraft.exp[0]||"", customDraft.exp[1]||""];
        customDraft.correct = customDraft.correct.filter(i=>i<2);
      } else if(wasTf){
        customDraft.opts = ["",""];
        customDraft.exp = ["",""];
        customDraft.correct = [];
      } else if(newType==="single" && customDraft.correct.length>1){
        customDraft.correct = [customDraft.correct[0]];
      }
      render();
    });
  }

  const customQField = root.querySelector('[data-custom-field="q"]');
  if(customQField){
    customQField.addEventListener("input", e=>{ customDraft.q = e.target.value; });
  }
  const customTrapField = root.querySelector('[data-custom-field="trap"]');
  if(customTrapField){
    customTrapField.addEventListener("input", e=>{ customDraft.trap = e.target.value; });
  }

  root.querySelectorAll('[data-opt-idx]').forEach(el=>{
    el.addEventListener("input", ()=>{
      const idx = parseInt(el.getAttribute("data-opt-idx"),10);
      customDraft.opts[idx] = el.value;
    });
  });
  root.querySelectorAll('[data-exp-idx]').forEach(el=>{
    el.addEventListener("input", ()=>{
      const idx = parseInt(el.getAttribute("data-exp-idx"),10);
      customDraft.exp[idx] = el.value;
    });
  });
  root.querySelectorAll('[data-correct-idx]').forEach(el=>{
    el.addEventListener("change", ()=>{
      const idx = parseInt(el.getAttribute("data-correct-idx"),10);
      if(customDraft.type==="multi"){
        const pos = customDraft.correct.indexOf(idx);
        if(el.checked && pos<0) customDraft.correct.push(idx);
        else if(!el.checked && pos>=0) customDraft.correct.splice(pos,1);
      } else {
        customDraft.correct = [idx];
      }
    });
  });

  const addOptBtn = root.querySelector('[data-action="add-opt"]');
  if(addOptBtn){
    addOptBtn.addEventListener("click", ()=>{
      customDraft.opts.push("");
      customDraft.exp.push("");
      render();
    });
  }
  root.querySelectorAll('[data-action="remove-opt"]').forEach(el=>{
    el.addEventListener("click", ()=>{
      const idx = parseInt(el.getAttribute("data-idx"),10);
      customDraft.opts.splice(idx,1);
      customDraft.exp.splice(idx,1);
      customDraft.correct = customDraft.correct.filter(i=>i!==idx).map(i=>i>idx?i-1:i);
      render();
    });
  });

  const saveCustomBtn = root.querySelector('[data-action="save-custom"]');
  if(saveCustomBtn){
    saveCustomBtn.addEventListener("click", ()=>{
      const d = customDraft;
      if(!d.q.trim()){ alert(t("custom.alertNoQuestion")); return; }
      if(d.opts.some(o=>!o.trim())){ alert(t("custom.alertOptionsText")); return; }
      if(d.exp.some(e=>!e.trim())){ alert(t("custom.alertExplanations")); return; }
      if(!d.trap.trim()){ alert(t("custom.alertTrap")); return; }
      if(d.type==="multi" && d.correct.length<1){ alert(t("custom.alertOneCorrectMulti")); return; }
      if(d.type!=="multi" && d.correct.length!==1){ alert(t("custom.alertExactlyOneCorrect")); return; }
      addCustomQuestion({
        id: "c"+Date.now()+Math.random().toString(36).slice(2,7),
        topicId: d.topicId, type: d.type, q: d.q.trim(),
        opts: d.opts.map(o=>o.trim()), exp: d.exp.map(e=>e.trim()),
        correct: d.correct.slice(), trap: d.trap.trim(),
        createdAt: Date.now()
      });
      customDraft = null;
      render();
    });
  }

  root.querySelectorAll('[data-action="delete-custom"]').forEach(el=>{
    el.addEventListener("click", ()=>{
      if(confirm(t("custom.confirmDelete"))){
        deleteCustomQuestion(el.getAttribute("data-id"));
        render();
      }
    });
  });

  const clearBtn = document.getElementById("btn-clear-history");
  if(clearBtn){
    clearBtn.addEventListener("click", ()=>{
      if(confirm(t("stats.confirmClearHistory"))){
        clearHistory();
        render();
      }
    });
  }

  const exportBtn = document.getElementById("btn-export-data");
  if(exportBtn){
    exportBtn.addEventListener("click", exportBackupData);
  }

  const importBtn = document.getElementById("btn-import-data");
  const importInput = document.getElementById("import-file-input");
  if(importBtn && importInput){
    importBtn.addEventListener("click", ()=>{ importInput.click(); });
    importInput.addEventListener("change", (e)=>{
      const file = e.target.files[0];
      if(file) importBackupFile(file);
      importInput.value = "";
    });
  }
}

function readCounts(){
  return {
    single: parseInt(document.getElementById("cnt-single").value,10) || 0,
    multi: parseInt(document.getElementById("cnt-multi").value,10) || 0,
    tf: parseInt(document.getElementById("cnt-tf").value,10) || 0
  };
}

let lastConfig = null;

// ---------------- KEYBOARD SHORTCUTS (quiz) ----------------
const OPTION_KEY_INDEX = {"1":0,"2":1,"3":2,"4":3,"5":4,"6":5,"a":0,"b":1,"c":2,"d":3,"e":4,"f":5};
function handleQuizKeydown(e){
  if(state.view !== "quiz" && state.view !== "loop-quiz") return;
  const tag = document.activeElement ? document.activeElement.tagName : "";
  if(tag==="INPUT" || tag==="TEXTAREA" || tag==="SELECT") return;

  const isQuiz = state.view === "quiz";
  const current = isQuiz ? quiz.questions[quiz.idx] : loopQuiz.current;
  if(!current) return;
  const locked = isQuiz ? quiz.locked : loopQuiz.locked;

  const idx = OPTION_KEY_INDEX[e.key.toLowerCase()];
  if(idx !== undefined && idx < current.opts.length){
    e.preventDefault();
    if(!locked){
      if(isQuiz) pickOption(idx); else pickLoopOption(idx);
    }
    return;
  }

  if(e.key === "Enter"){
    const btn = document.getElementById(isQuiz ? "btn-quiz-next" : "btn-loop-next");
    if(btn && !btn.disabled){
      e.preventDefault();
      btn.click();
    }
  }
}
document.addEventListener("keydown", handleQuizKeydown);

render();
