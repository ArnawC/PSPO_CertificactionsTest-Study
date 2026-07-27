// Banco de contenidos PSPO I — basado en la Scrum Guide 2020 (version oficial en castellano)
// Todas las preguntas estan ancladas en el texto de la Guia (noviembre 2020). No existe "Sprint 0",
// no se usa "auto-organizado" (termino 2017) ni "priorizar" (se usa "ordenar").

const TOPICS_ES = [
  {
    "id": "empirisme",
    "name": "Empirismo y pensamiento Lean",
    "theory": "<h3>Fundamento: empirismo y pensamiento Lean</h3><p>Scrum se basa en el <b>empirismo</b>: el conocimiento surge de la experiencia y las decisiones se toman a partir de lo que se observa, no de predicciones detalladas hechas por adelantado. Se complementa con el <b>pensamiento Lean</b>, que busca reducir lo superfluo y centrarse en lo esencial para maximizar el valor generado.</p><h3>Los tres pilares del empirismo</h3><ul><li><b>Transparencia</b>: el proceso y el trabajo deben ser visibles tanto para quienes lo realizan como para quienes lo reciben.</li><li><b>Inspección</b>: los artefactos de Scrum y el avance hacia los objetivos acordados deben inspeccionarse con frecuencia y diligencia, para detectar variaciones o problemas indeseados.</li><li><b>Adaptación</b>: cuando un proceso se desvía de los límites aceptables o el resultado no es aceptable, debe ajustarse cuanto antes para minimizar mayores desviaciones.</li></ul><p>Los tres pilares se refuerzan en cadena: sin transparencia, la inspección resulta engañosa y genera desperdicio; sin inspección diligente, la adaptación carece de base real; y la inspección sin adaptación posterior se considera carente de sentido.</p><div class='pillars-diagram' style='margin:18px 0; text-align:center;'><svg viewBox='0 0 360 220' width='100%' style='max-width:360px; height:auto;' xmlns='http://www.w3.org/2000/svg'><defs><marker id='pillarArrowEs' markerWidth='7' markerHeight='7' refX='5' refY='2.5' orient='auto'><path d='M0,0 L5,2.5 L0,5 Z' style='fill:var(--amber-dark)'/></marker></defs><path d='M 195,55 Q 270,70 288,150' fill='none' style='stroke:var(--amber-dark); stroke-width:2' marker-end='url(#pillarArrowEs)'/><path d='M 288,178 Q 180,215 75,178' fill='none' style='stroke:var(--amber-dark); stroke-width:2' marker-end='url(#pillarArrowEs)'/><path d='M 72,150 Q 95,70 165,55' fill='none' style='stroke:var(--amber-dark); stroke-width:2' marker-end='url(#pillarArrowEs)'/><circle cx='180' cy='40' r='9' style='fill:var(--amber-dark)'/><circle cx='300' cy='165' r='9' style='fill:var(--amber-dark)'/><circle cx='60' cy='165' r='9' style='fill:var(--amber-dark)'/><text x='180' y='20' text-anchor='middle' style='fill:var(--ink); font-size:13px; font-family:Segoe UI,sans-serif; font-weight:600'>Transparencia</text><text x='300' y='195' text-anchor='middle' style='fill:var(--ink); font-size:13px; font-family:Segoe UI,sans-serif; font-weight:600'>Inspección</text><text x='60' y='195' text-anchor='middle' style='fill:var(--ink); font-size:13px; font-family:Segoe UI,sans-serif; font-weight:600'>Adaptación</text></svg><div style='color:var(--ink-soft); font-size:12.5px; font-family:Segoe UI,sans-serif; margin-top:6px;'>Los tres pilares se retroalimentan en un ciclo: cada uno depende del anterior para tener sentido.</div></div><h3>Los eventos como motor de inspección y adaptación</h3><p>Los eventos prescritos de Scrum (Sprint, Sprint Planning, Daily Scrum, Sprint Review y Sprint Retrospective) crean una cadencia regular que facilita la inspección y adaptación frecuentes, y minimizan la necesidad de reuniones no definidas en el marco de trabajo.</p><h3>Los cinco valores de Scrum</h3><p><b>Compromiso, Enfoque, Apertura, Respeto y Coraje.</b> El Equipo Scrum se compromete a alcanzar sus objetivos y a apoyarse mutuamente; se enfoca en el trabajo del Sprint y en las metas del equipo; es abierto sobre el trabajo y los desafíos que encuentra; sus miembros se respetan entre sí como personas capaces e independientes; y actúan con el coraje de hacer lo correcto y afrontar los problemas difíciles. Estos valores dan dirección al equipo respecto a su trabajo, acciones y comportamiento, y se aprenden y exploran mientras se trabaja con los eventos y artefactos de Scrum, no mediante una formación separada. Cuando se viven de verdad, dan vida a los tres pilares del empirismo y generan confianza.</p><h3>Trampas típicas de examen</h3><ul><li>La \"previsibilidad\" no es un pilar: es un resultado que el empirismo ayuda a optimizar; los pilares son únicamente tres (transparencia, inspección, adaptación).</li><li>La adaptación se vuelve más difícil cuando las personas no están empoderadas o no pueden autogestionarse, no por falta de documentación.</li><li>No existe un \"Sprint 0\" en Scrum: la cadencia de inspección y adaptación empieza desde el primer Sprint.</li><li>Los valores no son un módulo de formación aislado ni una lista decorativa: se aprenden ejerciendo Scrum en el día a día.</li><li>No confundir los cinco valores con cualidades genéricas como \"eficiencia\" o \"calidad\", que no forman parte de la lista de la Guía.</li></ul>",
    "questions": [
      {
        "type": "single",
        "q": "¿Qué afirmación describe mejor qué es Scrum, según la Guía Scrum?",
        "opts": [
          "Un proceso predictivo y definido que sigue los principios de la Gestión Científica",
          "Un marco de trabajo para generar valor mediante soluciones adaptativas a problemas complejos",
          "Un recetario que define las mejores prácticas para el desarrollo de software",
          "Una metodología completa que define cómo desarrollar software"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrecto: esto describe un proceso predictivo al estilo de la Gestión Científica, justo lo contrario de lo que es Scrum.",
          "Correcto: la propia definición de la Guía describe Scrum como un marco de trabajo ligero que ayuda a las personas a generar valor mediante soluciones adaptativas a problemas complejos.",
          "Incorrecto: Scrum no es un recetario de buenas prácticas prescritas; es un marco mínimo de roles, eventos y artefactos.",
          "Incorrecto: Scrum deliberadamente no es una metodología completa; deja muchas prácticas a decisión del equipo."
        ],
        "trap": "Scrum es un marco de trabajo, no una metodología completa ni un 'recetario' fijo de prácticas — deja espacio para que los equipos empleen sus propias prácticas dentro de él."
      },
      {
        "type": "multi",
        "q": "¿Cuáles de las siguientes afirmaciones sobre Scrum, según la Guía, son correctas?",
        "opts": [
          "Scrum es un marco de trabajo para desarrollar y mantener productos complejos",
          "Scrum es una metodología de la que puedes elegir las partes que creas que funcionarán en tu entorno",
          "Cada componente de Scrum cumple un propósito específico y es esencial para el éxito de Scrum",
          "Scrum se basa en el empirismo y el pensamiento Lean"
        ],
        "correct": [
          0,
          2,
          3
        ],
        "exp": [
          "Correcto: coincide con la propia descripción de la Guía sobre para qué sirve Scrum.",
          "Incorrecto: la Guía advierte explícitamente contra las implementaciones parciales; los componentes de Scrum están diseñados para funcionar juntos como un todo.",
          "Correcto: la Guía afirma que cada parte de Scrum cumple un propósito específico esencial para su éxito general.",
          "Correcto: el fundamento de Scrum es el empirismo, complementado con el pensamiento Lean."
        ],
        "trap": "Un error habitual es tratar Scrum como un menú de prácticas opcionales; la Guía es explícita en que omitir elementos centrales deja de ser Scrum."
      },
      {
        "type": "multi",
        "q": "¿Cuáles de los siguientes son valores de Scrum según la Guía 2020? (selecciona todos los que correspondan)",
        "opts": [
          "Respeto",
          "Inspección",
          "Colaboración",
          "Compromiso",
          "Maximizar el valor",
          "Coraje",
          "Apertura",
          "Enfoque"
        ],
        "correct": [
          0,
          3,
          5,
          6,
          7
        ],
        "exp": [
          "Correcto: el Respeto es uno de los cinco valores de Scrum.",
          "Incorrecto: la Inspección es un pilar del empirismo, no uno de los cinco valores — una confusión clásica.",
          "Incorrecto: 'Colaboración' no aparece en la lista de cinco valores de la Guía, aunque suene plausible.",
          "Correcto: el Compromiso es uno de los cinco valores de Scrum.",
          "Incorrecto: maximizar el valor es la responsabilidad del Product Owner, no uno de los cinco valores de Scrum.",
          "Correcto: el Coraje es uno de los cinco valores de Scrum.",
          "Correcto: la Apertura es uno de los cinco valores de Scrum.",
          "Correcto: el Enfoque es uno de los cinco valores de Scrum."
        ],
        "trap": "El examen suele disfrazar pilares (Inspección) o responsabilidades (maximizar el valor) como si fueran valores; los cinco reales son Compromiso, Enfoque, Apertura, Respeto y Coraje."
      },
      {
        "type": "multi",
        "q": "¿Cuáles dos de los siguientes contribuyen más directamente a vivir el valor Scrum del Enfoque?",
        "opts": [
          "Tener un burn-down chart",
          "Tener un Objetivo del Sprint",
          "Usar puntos de historia",
          "Tener eventos con timebox"
        ],
        "correct": [
          1,
          3
        ],
        "exp": [
          "Incorrecto: un burn-down chart es una herramienta de seguimiento opcional; no genera enfoque por sí misma.",
          "Correcto: el Objetivo del Sprint da a los Developers un único objetivo coherente en el que centrarse durante el Sprint.",
          "Incorrecto: los puntos de historia son una unidad de estimación opcional, sin relación con el valor del Enfoque.",
          "Correcto: los timeboxes acotan cada evento y el propio Sprint, manteniendo la atención del equipo en un alcance de trabajo definido."
        ],
        "trap": "Las herramientas de seguimiento opcionales (burn-down charts, puntos de historia) suelen confundirse con los mecanismos reales que generan enfoque: el Objetivo del Sprint y los timeboxes."
      },
      {
        "type": "multi",
        "q": "¿Qué debería hacer un Scrum Team durante su primer Sprint, ya que no existe un 'Sprint 0' preparatorio?",
        "opts": [
          "Elaborar un plan para el resto del proyecto",
          "Crear al menos un Incremento valioso y útil",
          "Construir al menos una pieza de funcionalidad valiosa",
          "Analizar, describir y documentar los requisitos de los Sprints siguientes"
        ],
        "correct": [
          1,
          2
        ],
        "exp": [
          "Incorrecto: Scrum no contempla un plan de proyecto global; el Product Backlog es el plan, y este emerge con el tiempo.",
          "Correcto: incluso en el primer Sprint, el Scrum Team debe producir un Incremento valioso y útil — no hay ningún Sprint de \"calentamiento\" exento de esto.",
          "Correcto: el primer Sprint también debe entregar funcionalidad real y funcional, no solo análisis preparatorio.",
          "Incorrecto: documentar de forma extensa y por adelantado los requisitos de Sprints futuros es una práctica de Big-Design-Up-Front, no cómo funciona el primer Sprint en Scrum."
        ],
        "trap": "Como no existe un 'Sprint 0', incluso el primerísimo Sprint debe producir un Incremento real y valioso — no solo planificación o documentación."
      },
      {
        "type": "single",
        "q": "Según la Scrum Guide, ¿cuáles son los tres pilares del control de procesos empírico?",
        "opts": [
          "Transparencia, Inspección y Adaptación",
          "Transparencia, Previsibilidad y Adaptación",
          "Planificación, Inspección y Adaptación",
          "Transparencia, Inspección y Documentación"
        ],
        "correct": 0,
        "exp": [
          "Correcto: son exactamente los tres pilares que sostienen el control de procesos empírico en Scrum.",
          "Incorrecto: la previsibilidad es algo que el empirismo ayuda a optimizar, no uno de los tres pilares.",
          "Incorrecto: la planificación no sustituye a la transparencia; los pilares no incluyen ninguna forma de planificación.",
          "Incorrecto: la documentación no es un pilar; un exceso de documentación puede incluso ir en contra de la transparencia real si no refleja el trabajo tal como es."
        ],
        "trap": "La previsibilidad es un resultado que se busca optimizar mediante el empirismo, pero nunca se cuenta entre los tres pilares (transparencia, inspección, adaptación)."
      },
      {
        "type": "multi",
        "q": "¿Cuáles de los siguientes son valores de Scrum según la Guía 2020?",
        "opts": [
          "Enfoque",
          "Eficiencia",
          "Apertura",
          "Coraje"
        ],
        "correct": [
          0,
          2,
          3
        ],
        "exp": [
          "Correcto: el Enfoque es uno de los cinco valores de Scrum.",
          "Incorrecto: la eficiencia no figura como valor de Scrum en la Guía; es un distractor habitual que suena razonable pero no es uno de los cinco.",
          "Correcto: la Apertura es uno de los cinco valores.",
          "Correcto: el Coraje es uno de los cinco valores."
        ],
        "trap": "Los cinco valores son Compromiso, Enfoque, Apertura, Respeto y Coraje. Términos plausibles pero ajenos como 'eficiencia' o 'calidad' son distractores frecuentes."
      },
      {
        "type": "tf",
        "q": "La Guía Scrum afirma que la inspección sin adaptación se considera carente de sentido.",
        "opts": [
          "Verdadero",
          "Falso"
        ],
        "correct": [
          0
        ],
        "exp": [
          "Correcto: la Guía afirma que la inspección sin adaptación se considera carente de sentido, ya que detectar un problema no sirve de nada si no se actúa después.",
          "Incorrecto: la afirmación sí es verdadera según la Guía."
        ],
        "trap": "Inspeccionar y detectar una desviación no aporta nada si el equipo no ajusta después su forma de trabajar; inspección y adaptación van siempre unidas."
      },
      {
        "type": "single",
        "q": "Según la teoría de Scrum, ¿qué habilita la transparencia?",
        "opts": [
          "La adaptación directamente",
          "La inspección",
          "La planificación de releases",
          "La creación del Sprint Backlog"
        ],
        "correct": 1,
        "exp": [
          "Incorrecto: la transparencia no habilita la adaptación de forma directa; primero permite la inspección, y es esta la que a su vez habilita la adaptación.",
          "Correcto: sin visibilidad real sobre el proceso y el trabajo, cualquier inspección sería engañosa; la transparencia es la base que hace posible inspeccionar con garantías.",
          "Incorrecto: la planificación de releases no es un concepto de la teoría de Scrum ni depende directamente de la transparencia.",
          "Incorrecto: el Sprint Backlog lo crean los Developers durante el Sprint Planning; no es un efecto de la transparencia como pilar."
        ],
        "trap": "La cadena lógica es Transparencia → habilita la Inspección → habilita la Adaptación. No te saltes directamente de transparencia a adaptación."
      },
      {
        "type": "multi",
        "q": "¿Cuáles de las siguientes afirmaciones sobre el pensamiento Lean y el empirismo son correctas?",
        "opts": [
          "El pensamiento Lean se centra en reducir el desperdicio y enfocarse en lo esencial",
          "El empirismo consiste en planificar todo el trabajo con detalle antes de empezar para evitar sorpresas",
          "El empirismo sostiene que el conocimiento procede de la experiencia y que las decisiones se toman a partir de lo que se observa",
          "El pensamiento Lean, tal como lo usa la Guía, es sinónimo de Six Sigma"
        ],
        "correct": [
          0,
          2
        ],
        "exp": [
          "Correcto: es la definición que da la Guía del pensamiento Lean.",
          "Incorrecto: eso describe un enfoque predictivo (planificación exhaustiva por adelantado), justo lo contrario del empirismo.",
          "Correcto: es la definición literal de empirismo que da la Guía.",
          "Incorrecto: la Guía no menciona ni equipara el pensamiento Lean con Six Sigma; son marcos distintos no citados como sinónimos."
        ],
        "trap": "Planificar todo el trabajo con detalle antes de empezar (enfoque predictivo/BDUF) es el opuesto del empirismo, un distractor muy habitual."
      },
      {
        "type": "single",
        "q": "Según la Guía, ¿cuándo se vuelven más difíciles las adaptaciones?",
        "opts": [
          "Cuando el equipo es demasiado grande",
          "Cuando las personas no están empoderadas o no pueden autogestionarse",
          "Cuando el Sprint dura más de un mes",
          "Cuando hay demasiados stakeholders"
        ],
        "correct": 1,
        "exp": [
          "Incorrecto: el tamaño del equipo no es la condición que cita la Guía para dificultar la adaptación.",
          "Correcto: la Guía señala que las adaptaciones se vuelven más difíciles cuando las personas implicadas no están empoderadas o no pueden autogestionarse.",
          "Incorrecto: la duración del Sprint no es la causa que menciona la Guía; además, en Scrum el Sprint nunca dura más de un mes.",
          "Incorrecto: el número de stakeholders no es la condición citada en la Guía."
        ],
        "trap": "El empoderamiento y la capacidad de autogestión son condiciones necesarias para adaptarse con eficacia; sin ellas, la adaptación se resiente."
      },
      {
        "type": "tf",
        "q": "Los valores de Scrum se aprenden y exploran mientras el Equipo Scrum trabaja con los eventos y artefactos, no mediante una formación separada.",
        "opts": [
          "Verdadero",
          "Falso"
        ],
        "correct": [
          0
        ],
        "exp": [
          "Correcto: la Guía indica que los valores se aprenden y exploran mientras el Equipo Scrum trabaja con los eventos y artefactos, no en una formación separada.",
          "Incorrecto: la afirmación es verdadera según la Guía."
        ],
        "trap": "Los valores de Scrum no son un módulo de formación aislado; cobran sentido a través de la práctica diaria del marco de trabajo."
      },
      {
        "type": "single",
        "q": "¿Qué afirmación describe mejor el empirismo?",
        "opts": [
          "Planificar todo el trabajo antes de empezar para evitar sorpresas",
          "Tomar decisiones basadas en lo que se observa y en la experiencia",
          "Seguir un plan fijo sin revisarlo nunca",
          "Delegar todas las decisiones en el Product Owner"
        ],
        "correct": 1,
        "exp": [
          "Incorrecto: es el enfoque contrario, propio de la planificación predictiva (Big Design Up Front), no del empirismo.",
          "Correcto: es la esencia del empirismo tal como lo describe la Guía.",
          "Incorrecto: un plan que nunca se revisa contradice la adaptación, uno de los tres pilares del empirismo.",
          "Incorrecto: el empirismo implica a todo el Equipo Scrum, no solo al Product Owner."
        ],
        "trap": "Planificarlo todo por adelantado (BDUF) es el opuesto del empirismo; es uno de los distractores más recurrentes."
      },
      {
        "type": "multi",
        "q": "¿Cuáles de las siguientes afirmaciones sobre el riesgo, la complejidad y el enfoque empírico son correctas?",
        "opts": [
          "Scrum optimiza la previsibilidad y controla el riesgo mediante un enfoque iterativo e incremental",
          "El riesgo se controla principalmente mediante documentación detallada previa",
          "Scrum se usa en entornos donde el resultado no se conoce completamente por adelantado (trabajo complejo)",
          "Sprints más cortos pueden limitar el riesgo en cuanto a coste y esfuerzo"
        ],
        "correct": [
          0,
          2,
          3
        ],
        "exp": [
          "Correcto: es el enfoque que describe la Guía para gestionar el riesgo.",
          "Incorrecto: esto describe un enfoque predictivo, opuesto al control de riesgo empírico que propone Scrum.",
          "Correcto: Scrum está pensado para entornos complejos donde no se puede conocer todo el resultado de antemano.",
          "Correcto: acortar el Sprint es una forma de limitar la exposición al riesgo en coste y esfuerzo antes de la siguiente inspección."
        ],
        "trap": "La documentación detallada previa (BDUF) es lo opuesto al control de riesgo empírico basado en ciclos cortos de inspección y adaptación."
      },
      {
        "type": "single",
        "q": "¿Qué aporta a Scrum una cadencia regular para inspeccionar los artefactos y el progreso hacia los objetivos, sin necesitar reuniones adicionales?",
        "opts": [
          "Un informe semanal obligatorio",
          "Los cinco eventos formales de Scrum, que aportan una cadencia regular",
          "Auditorías externas trimestrales",
          "Un 'Sprint 0' de preparación previo al primer Sprint"
        ],
        "correct": 1,
        "exp": [
          "Incorrecto: la Guía no exige ningún informe de este tipo.",
          "Correcto: los eventos prescritos en Scrum crean regularidad y minimizan la necesidad de reuniones no definidas en el marco de trabajo.",
          "Incorrecto: la Guía no menciona auditorías externas.",
          "Incorrecto: 'Sprint 0' no existe en Scrum; la cadencia de inspección y adaptación empieza desde el primer Sprint."
        ],
        "trap": "'Sprint 0' es uno de los distractores más recurrentes en el examen: no existe en la Guía Scrum."
      }
    ]
  },
  {
    "id": "scrum-team",
    "name": "El Equipo Scrum y sus accountabilities",
    "theory": "<h3>Composición y estructura</h3><p>El Equipo Scrum (Scrum Team) es la unidad fundamental de Scrum. Está formado por <b>un Scrum Master</b>, <b>un Propietario del Producto</b> y los <b>Desarrolladores</b>. No existen sub-equipos ni jerarquías dentro del Equipo Scrum: es una única unidad cohesionada centrada en un mismo objetivo, el Product Goal.</p><p>El equipo es <b>multifuncional</b> (cross-functional): sus miembros poseen colectivamente todas las habilidades necesarias para crear valor cada Sprint, sin depender de personas externas al equipo. También es <b>autogestionado</b> (self-managing): internamente decide quién hace qué, cuándo y cómo, sin que nadie externo al equipo —ni siquiera el Scrum Master o el Propietario del Producto— les dicte cómo convertir el Product Backlog en Incrementos de valor.</p><p>La Guía recomienda equipos <b>pequeños</b>, en general de <b>10 personas o menos</b>: suficientemente reducidos para mantenerse ágiles y suficientemente grandes para completar trabajo significativo dentro de un Sprint. Si un Equipo Scrum crece demasiado, debe considerar reorganizarse en varios Equipos Scrum, cada uno centrado en el mismo producto, compartiendo el mismo Product Goal, el mismo Product Backlog y el mismo Propietario del Producto.</p><p>Todo el Equipo Scrum es responsable de crear, cada Sprint, un Incremento valioso y útil, así como de todas las actividades relacionadas con el producto: colaboración con interesados, verificación, mantenimiento, operación, experimentación, investigación y desarrollo, y cualquier otra cosa que se requiera.</p><h3>Desarrolladores</h3><p>Son las personas del Equipo Scrum comprometidas a crear cualquier aspecto de un Incremento utilizable en cada Sprint. Sus responsabilidades específicas incluyen:</p><ul><li>Crear el plan del Sprint: el Sprint Backlog.</li><li>Incorporar la calidad adhiriéndose a una Definition of Done.</li><li>Adaptar su plan cada día hacia el Sprint Goal.</li><li>Responsabilizarse mutuamente como profesionales.</li></ul><h3>Propietario del Producto</h3><p>Es responsable de <b>maximizar el valor del producto</b> resultante del trabajo del Equipo Scrum. Esto se logra principalmente mediante la gestión eficaz del Product Backlog, lo que incluye:</p><ul><li>Desarrollar y comunicar explícitamente el Product Goal.</li><li>Crear y comunicar con claridad los elementos del Product Backlog.</li><li><b>Ordenar</b> (no \"priorizar\") los elementos del Product Backlog.</li><li>Asegurar que el Product Backlog sea transparente, visible y comprendido.</li></ul><p>El Propietario del Producto puede delegar este trabajo a otros, pero sigue siendo el responsable último: <b>puede delegar el trabajo, pero nunca la responsabilidad</b>. Es <b>una persona, no un comité</b>; puede representar las necesidades de muchos interesados en el Product Backlog, pero quien quiera cambiar la prioridad de un elemento debe negociarlo con el Propietario del Producto. Para que tenga éxito, toda la organización debe respetar sus decisiones.</p><h3>Scrum Master</h3><p>Es responsable de <b>establecer Scrum tal como se define en la Guía</b>. Lo hace ayudando a todos —Equipo Scrum y organización— a entender la teoría y la práctica de Scrum. Es responsable de la eficacia del Equipo Scrum, ayudándolo a mejorar sus prácticas dentro del marco de Scrum.</p><p>Sirve al Equipo Scrum entrenándolo en autogestión y multifuncionalidad, ayudando a centrarse en crear Incrementos de alto valor, eliminando impedimentos y asegurando que todos los eventos se den, sean positivos, productivos y se mantengan dentro del timebox. Sirve al Propietario del Producto ayudándole a encontrar técnicas para definir el Product Goal y gestionar el Product Backlog, y facilitando la colaboración con interesados cuando se solicite. Sirve a la organización liderando, formando y guiando la adopción de Scrum. Es un <b>verdadero líder que sirve</b> (servant leader) al equipo y a la organización, sin autoridad jerárquica sobre nadie.</p><h3>Errores frecuentes en el examen</h3><ul><li>Confundir \"autogestionado\" (self-managing, terminología 2020) con \"auto-organizado\" (terminología 2017, ya descartada).</li><li>Pensar que el Scrum Master asigna tareas o gestiona al equipo: rompería la autogestión.</li><li>Creer que el Propietario del Producto puede ser un comité: siempre es una única persona.</li><li>Suponer que ordenar el Product Backlog es tarea de los Desarrolladores: es siempre del Propietario del Producto.</li><li>Imaginar sub-equipos (p. ej. un \"equipo de QA\") dentro del Equipo Scrum: la Guía lo descarta explícitamente.</li></ul>",
    "questions": [
      {
        "type": "multi",
        "q": "¿Por qué insiste la Guía Scrum en que haya un único Product Owner por producto? (selecciona todos los que correspondan)",
        "opts": [
          "Para que quede claro quién es responsable del valor final del producto",
          "Para dar al Scrum Master a quién delegar el orden del Product Backlog",
          "Para que los stakeholders tengan un único punto de contacto claro en lugar de lidiar con varias voces posiblemente contradictorias",
          "Para ayudar a evitar barreras a la comunicación efectiva y a la toma de decisiones rápida"
        ],
        "correct": [
          0,
          2,
          3
        ],
        "exp": [
          "Correcto: un único Product Owner mantiene sin ambigüedad la responsabilidad sobre el valor del producto.",
          "Incorrecto: el Scrum Master nunca asume el trabajo de ordenar el Product Backlog; eso rompería la responsabilidad del Product Owner.",
          "Correcto: que los stakeholders traten con una única persona responsable evita la confusión de varios puntos de contacto, posiblemente contradictorios.",
          "Correcto: un único responsable de decisión elimina barreras de comunicación y agiliza las decisiones sobre el contenido y el orden del Backlog."
        ],
        "trap": "Un comité o varios 'mini product owners' difuminarían la responsabilidad y ralentizarían las decisiones — la Guía mantiene este rol único precisamente para evitarlo."
      },
      {
        "type": "single",
        "q": "El Incremento presentado en la Sprint Review no refleja lo que la Product Owner pensaba haber pedido. ¿Qué podría indicar esto?",
        "opts": [
          "Que hay gente abandonando el Scrum Team",
          "Que la Product Owner no trabaja a tiempo completo con el Scrum Team",
          "Que los criterios de aceptación no parecen estar completos",
          "Que la Product Owner necesita trabajar más estrechamente con el Scrum Team"
        ],
        "correct": [
          3
        ],
        "exp": [
          "Incorrecto: la rotación de personal no es el indicador que describe este escenario.",
          "Incorrecto: la Guía no exige dedicación a tiempo completo, así que este no es el diagnóstico correcto.",
          "Incorrecto: unos criterios de aceptación incompletos podrían ser un factor, pero el escenario apunta a una brecha de colaboración más profunda.",
          "Correcto: un desajuste entre lo esperado y el Incremento entregado es una señal de que la Product Owner necesita una colaboración más cercana y frecuente con el Scrum Team durante todo el Sprint, no solo en la Review."
        ],
        "trap": "Las sorpresas en la Sprint Review suelen apuntar a una colaboración insuficiente entre PO y Developers durante el Sprint, no a una falta de documentación formal."
      },
      {
        "type": "multi",
        "q": "¿De qué es típicamente responsable un Product Owner durante un Sprint? (elige las dos mejores respuestas)",
        "opts": [
          "De nada — el Sprint pertenece por completo a los Developers",
          "Trabajar con los Developers en el refinamiento del Product Backlog",
          "Asistir a cada Daily Scrum para responder preguntas sobre los elementos del Sprint Backlog",
          "Colaborar con stakeholders, usuarios y clientes"
        ],
        "correct": [
          1,
          3
        ],
        "exp": [
          "Incorrecto: el Product Owner permanece activo durante todo el Sprint, especialmente en torno al Product Backlog y los stakeholders.",
          "Correcto: el trabajo continuo de refinamiento con los Developers es una actividad típica del Product Owner durante el Sprint.",
          "Incorrecto: asistir a cada Daily Scrum no es un requisito para el Product Owner; es un evento interno de los Developers.",
          "Correcto: colaborar con stakeholders, usuarios y clientes es una actividad central y continua del Product Owner."
        ],
        "trap": "El Product Owner no está inactivo durante el Sprint, pero su trabajo es el refinamiento y la colaboración con stakeholders — no gestionar el Daily Scrum ni las tareas diarias de los Developers."
      },
      {
        "type": "multi",
        "q": "¿Cuáles son las dos formas principales en que un Scrum Master ayuda a un Scrum Team a trabajar a su máximo nivel de productividad?",
        "opts": [
          "Asegurando que las reuniones empiecen y terminen a la hora prevista",
          "Facilitando la toma de decisiones del Scrum Team",
          "Manteniendo en lo alto del Product Backlog las funcionalidades de más valor",
          "Eliminando los impedimentos que dificultan el trabajo del Scrum Team"
        ],
        "correct": [
          1,
          3
        ],
        "exp": [
          "Incorrecto: hacer cumplir los horarios es un detalle mecánico menor, no una de las dos contribuciones principales del Scrum Master a la productividad.",
          "Correcto: facilitar la propia toma de decisiones del equipo es una forma central en que el Scrum Master aumenta la eficacia.",
          "Incorrecto: ordenar el Product Backlog por valor es responsabilidad del Product Owner, no del Scrum Master.",
          "Correcto: eliminar los impedimentos que bloquean el progreso del equipo es una de las contribuciones más directas del Scrum Master a la productividad."
        ],
        "trap": "Ordenar el Backlog por valor es tarea del Product Owner; no dejes que una afirmación de productividad plausible se la atribuya al Scrum Master."
      },
      {
        "type": "multi",
        "q": "Un Product Owner es responsable de maximizar el valor del producto. ¿Cuáles de las siguientes se pueden delegar en otras personas, mientras el Product Owner sigue siendo responsable del resultado?",
        "opts": [
          "Asistir a la Sprint Review",
          "Ordenar los elementos del Product Backlog",
          "Desarrollar y comunicar el Objetivo del Producto",
          "Asistir a la Sprint Retrospective"
        ],
        "correct": [
          1,
          2
        ],
        "exp": [
          "Incorrecto: asistir a los eventos de Scrum no es un 'trabajo delegable' en este sentido — la participación del Product Owner en los eventos del Scrum Team no se traspasa a otra persona.",
          "Correcto: el trabajo real de ordenar el Product Backlog puede delegarse en otra persona, mientras el Product Owner sigue siendo responsable del resultado.",
          "Correcto: el trabajo de desarrollar y comunicar el Objetivo del Producto también puede delegarse, sin transferir la responsabilidad.",
          "Incorrecto: al igual que asistir a la Sprint Review, esto no es el tipo de 'trabajo' que la Guía describe como delegable."
        ],
        "trap": "Delegar el trabajo de ordenar el Backlog o de redactar el Objetivo del Producto está permitido; delegar la responsabilidad última sobre el valor del producto no lo está."
      },
      {
        "type": "single",
        "q": "Lideras el desarrollo de un nuevo producto que construirán seis equipos nuevos en Scrum. Has recopilado un Product Backlog inicial. ¿Cómo minimizarías las dependencias entre los Scrum Teams?",
        "opts": [
          "Trabajar con los Developers sobre cómo analizar mejor y descomponer el trabajo",
          "Repartir los elementos del Product Backlog entre seis Product Owners distintos",
          "Crear un Product Backlog independiente para cada Scrum Team",
          "Plantearlo como un impedimento al Scrum Master"
        ],
        "correct": [
          0
        ],
        "exp": [
          "Correcto: las personas que hacen el trabajo están en la mejor posición para analizar las dependencias y decidir cómo descomponerlo con sentido.",
          "Incorrecto: varios equipos que trabajan en un mismo producto deben compartir un único Product Owner, no uno por equipo.",
          "Incorrecto: varios equipos que trabajan en el mismo producto deben compartir un único Product Backlog, no backlogs separados.",
          "Incorrecto: esto es un reto de diseño y colaboración que resolver junto a los Developers, no un impedimento que delegar."
        ],
        "trap": "Al escalar a varios equipos sobre un mismo producto, la respuesta de la Guía es siempre: un único Product Backlog, un único Product Owner, y los equipos colaborando en cómo descomponer el trabajo."
      },
      {
        "type": "tf",
        "q": "Un Scrum Master cumple esencialmente el mismo rol que un Project Manager tradicional.",
        "opts": [
          "Verdadero",
          "Falso"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrecto: el Scrum Master no tiene autoridad jerárquica y no gestiona el trabajo del equipo; es un rol fundamentalmente distinto al de un Project Manager tradicional.",
          "Correcto: el Scrum Master es un líder servicial que entrena y elimina impedimentos — no un gestor que planifica, asigna o controla el trabajo en el sentido tradicional."
        ],
        "trap": "La responsabilidad del Scrum Master es establecer Scrum y servir al equipo, nunca dirigir el trabajo como haría un Project Manager."
      },
      {
        "type": "multi",
        "q": "¿Cuáles son las dos afirmaciones correctas sobre los 'Testers' en un Scrum Team?",
        "opts": [
          "Rastrear métricas de calidad es su trabajo principal",
          "Scrum no define un rol formal de 'Tester'",
          "Verificar el trabajo de los programadores es su trabajo principal",
          "Los Developers en conjunto son responsables de la calidad"
        ],
        "correct": [
          1,
          3
        ],
        "exp": [
          "Incorrecto: esto presupone que existe un rol formal de Tester en Scrum, y no es así.",
          "Correcto: la Guía Scrum no define subroles como 'Tester'; las habilidades de prueba son simplemente parte de lo que puede necesitar un conjunto de Developers cross-funcional.",
          "Incorrecto: de nuevo, presupone un rol distinto de Tester que verifica el trabajo de otros, lo cual contradice la cross-funcionalidad.",
          "Correcto: la calidad, incluidas las pruebas, es una responsabilidad compartida de todos los Developers, no el trabajo de un especialista aparte."
        ],
        "trap": "Scrum no define cargos dentro de los Developers (ni 'Tester', ni 'Arquitecto', etc.); la calidad es una responsabilidad colectiva de los Developers."
      },
      {
        "type": "single",
        "q": "El Scrum Master observa que la Product Owner tiene dificultades para ordenar el Product Backlog. ¿Cuál es una acción apropiada para el Scrum Master?",
        "opts": [
          "Entregarle a la Product Owner un Backlog ya ordenado para que lo use",
          "Sugerir que los Developers ordenen el Backlog para asegurar que sea técnicamente viable",
          "Ofrecerle ayuda a la Product Owner para entender que el objetivo de ordenar es maximizar el valor",
          "Sugerir a la Product Owner que amplíe el Sprint para tener más tiempo de ordenar el Backlog"
        ],
        "correct": [
          2
        ],
        "exp": [
          "Incorrecto: hacer el trabajo de ordenación por la Product Owner le quita su responsabilidad en lugar de guiarla.",
          "Incorrecto: ordenar el Product Backlog nunca es responsabilidad de los Developers.",
          "Correcto: el Scrum Master guía a la Product Owner, ayudándola a entender y perseguir el verdadero objetivo — maximizar el valor —, en lugar de hacer el trabajo por ella.",
          "Incorrecto: la duración del Sprint no tiene relación con las dificultades de ordenación de la Product Owner, y no puede ampliarse por ese motivo."
        ],
        "trap": "Un Scrum Master sirve a la Product Owner mediante el coaching, nunca asumiendo sus responsabilidades."
      },
      {
        "type": "tf",
        "q": "Una Product Owner es esencialmente lo mismo que un Project Manager tradicional.",
        "opts": [
          "Verdadero",
          "Falso"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrecto: la responsabilidad de la Product Owner (maximizar el valor del producto mediante la gestión del Backlog) es distinta del alcance típico de un Project Manager (plazos, presupuesto, recursos).",
          "Correcto: la Product Owner es una responsabilidad de Scrum centrada en el valor, no un equivalente de un Project Manager tradicional."
        ],
        "trap": "Mapear las responsabilidades de Scrum sobre cargos ya existentes (Product Owner = Project Manager) es una simplificación habitual pero incorrecta."
      },
      {
        "type": "single",
        "q": "La autoridad del Product Owner para cambiar y actualizar el Product Backlog es ilimitada, excepto por:",
        "opts": [
          "Los cambios de alto impacto no aprobados por un comité de solicitudes de cambio",
          "Las decisiones tomadas por un chief program manager",
          "Las decisiones del CFO, el CEO o el consejo de administración",
          "No hay excepciones: toda la organización debe respetar las decisiones del Product Owner"
        ],
        "correct": [
          3
        ],
        "exp": [
          "Incorrecto: ningún comité de solicitudes de cambio tiene autoridad sobre las decisiones del Product Owner respecto al Backlog en Scrum.",
          "Incorrecto: un cargo de chief program manager tampoco anula la autoridad del Product Owner.",
          "Incorrecto: ni siquiera los cargos ejecutivos más altos se describen en la Guía como capaces de anular las decisiones del Product Owner.",
          "Correcto: la Guía Scrum establece que, para que el Product Owner tenga éxito, toda la organización debe respetar sus decisiones — sin excepciones."
        ],
        "trap": "Las preguntas de examen suelen inventar una figura de autoridad (CFO, comité de cambios, arquitecto jefe) que supuestamente anula al Product Owner — la Guía no concede tal excepción."
      },
      {
        "type": "multi",
        "q": "¿Cuáles dos frases describen mejor la relación entre el Product Owner y los Developers?",
        "opts": [
          "Deberían trabajar lo más separados posible para mantener aparte los asuntos de negocio y de tecnología",
          "Colaboran a menudo, para que los Developers construyan Incrementos teniendo en cuenta a usuarios finales y stakeholders",
          "Colaboran a menudo, para que el Product Owner pueda tomar decisiones informadas equilibrando esfuerzo y valor",
          "El Product Owner debería estar con los Developers a tiempo completo para adquirir una experiencia técnica profunda"
        ],
        "correct": [
          1,
          2
        ],
        "exp": [
          "Incorrecto: separar los asuntos de negocio y tecnología contradice el énfasis de Scrum en la colaboración estrecha.",
          "Correcto: la colaboración frecuente ayuda a los Developers a entender las preocupaciones de usuarios finales y stakeholders al construir el Incremento.",
          "Correcto: la colaboración frecuente también ayuda al Product Owner a tomar mejores decisiones de compromiso entre esfuerzo y valor.",
          "Incorrecto: la colocación a tiempo completo no es un requisito de la Guía; el nivel de colaboración debe ser 'suficiente', no necesariamente 'constante'."
        ],
        "trap": "Se requiere colaboración frecuente, pero la Guía nunca exige una cantidad fija de tiempo (como presencia a tiempo completo) del Product Owner con los Developers."
      },
      {
        "type": "single",
        "q": "¿Qué descripción encaja mejor con el rol del Product Owner?",
        "opts": [
          "Chief Business Analyst",
          "Recolector de requisitos",
          "Project Manager 2.0",
          "Maximizador de valor"
        ],
        "correct": [
          3
        ],
        "exp": [
          "Incorrecto: esto infravalora el rol — el foco central del Product Owner es el valor, no simplemente recopilar o analizar requisitos.",
          "Incorrecto: mismo problema — recopilar requisitos es una actividad más estrecha que aquello de lo que es responsable el Product Owner.",
          "Incorrecto: el Product Owner no es simplemente un Project Manager renombrado.",
          "Correcto: el Product Owner es responsable de maximizar el valor del producto — 'Maximizador de valor' capta bien esa responsabilidad."
        ],
        "trap": "Es tentador encajar al Product Owner en un cargo conocido (analista, recolector de requisitos, PM); el propio enfoque de la Guía gira en torno a maximizar el valor."
      },
      {
        "type": "single",
        "q": "¿Cuál de las siguientes es una responsabilidad correcta del Product Owner?",
        "opts": [
          "Ordenar los elementos del Product Backlog para lograr mejor los objetivos y metas",
          "Definir la Definición de Hecho",
          "Definir la Definición de Preparado (Definition of Ready)"
        ],
        "correct": [
          0
        ],
        "exp": [
          "Correcto: ordenar el Product Backlog hacia el Objetivo del Producto es una responsabilidad explícita del Product Owner.",
          "Incorrecto: la Definición de Hecho no es exclusivamente competencia del Product Owner — pertenece a la organización o al Scrum Team en su conjunto.",
          "Incorrecto: la preparación para la Sprint Planning es un entendimiento compartido construido mediante el refinamiento, no un documento que defina el Product Owner en solitario."
        ],
        "trap": "No asumas que el Product Owner es dueño en solitario de todos los estándares relacionados con la calidad; ordenar el Backlog sí es suyo, pero la Definición de Hecho es un estándar del equipo/organización."
      },
      {
        "type": "tf",
        "q": "Cuando n Scrum Teams trabajan en un mismo producto, siempre debería haber un único Product Owner, pero puede haber entre uno y n Scrum Masters.",
        "opts": [
          "Verdadero",
          "Falso"
        ],
        "correct": [
          0
        ],
        "exp": [
          "Correcto: el producto debe tener un único Product Owner y un único Product Backlog, pero cada Scrum Team concreto puede tener su propio Scrum Master, o un mismo Scrum Master puede servir a más de un equipo.",
          "Incorrecto: esta afirmación refleja fielmente cómo escala Scrum — un único Product Owner en general, pero con más flexibilidad en la asignación de Scrum Masters."
        ],
        "trap": "La regla de la 'única persona responsable' se aplica estrictamente al Product Owner y al Product Backlog, no al número de Scrum Masters entre varios equipos."
      },
      {
        "type": "single",
        "q": "¿Cuál es la principal responsabilidad de un 'Project Manager' en Scrum?",
        "opts": [
          "Apoyar al Product Owner",
          "Rastrear el progreso de un release",
          "No existen los Project Managers en Scrum",
          "Gestionar los riesgos"
        ],
        "correct": [
          2
        ],
        "exp": [
          "Incorrecto: presupone que existe un rol de Project Manager en Scrum.",
          "Incorrecto: mismo problema — el seguimiento de un release no se atribuye a una responsabilidad de 'Project Manager' en la Guía.",
          "Correcto: Scrum define solo tres responsabilidades — Product Owner, Scrum Master y Developers. No hay rol de Project Manager.",
          "Incorrecto: el riesgo se gestiona a través del propio proceso empírico de Scrum, no mediante un Project Manager dedicado."
        ],
        "trap": "Scrum no define en absoluto una responsabilidad de Project Manager: sus funciones tradicionales quedan repartidas entre el Product Owner, el Scrum Master y los Developers."
      },
      {
        "type": "tf",
        "q": "El Product Owner puede pedirle a un Developer que ordene los elementos del Product Backlog en su nombre. ¿Es esto aceptable?",
        "opts": [
          "Sí",
          "No"
        ],
        "correct": [
          0
        ],
        "exp": [
          "Correcto: el Product Owner puede delegar el trabajo real de ordenar el Backlog en cualquiera, incluido un Developer, siguiendo siendo responsable del resultado.",
          "Incorrecto: delegar este trabajo está explícitamente permitido por la Guía, siempre que la responsabilidad siga siendo del Product Owner."
        ],
        "trap": "Delegar el trabajo de ordenar el Backlog está permitido y no se restringe a personas que no sean Developers — lo que nunca puede delegarse es la propia responsabilidad."
      },
      {
        "type": "multi",
        "q": "¿Cuáles dos de los siguientes son servicios que un Scrum Master presta al Product Owner?",
        "opts": [
          "Ayudar al Product Owner a encontrar técnicas para gestionar eficazmente el Product Backlog",
          "Ayudar al Product Owner con la documentación",
          "Eliminar impedimentos para el Scrum Team, incluido el Product Owner",
          "Actuar como 'intermediario' entre el Product Owner y los Developers"
        ],
        "correct": [
          0,
          2
        ],
        "exp": [
          "Correcto: esta es una forma explícita en que el Scrum Master sirve al Product Owner.",
          "Incorrecto: producir documentación para el Product Owner no es un servicio descrito del Scrum Master.",
          "Correcto: eliminar impedimentos beneficia a todo el Scrum Team, incluido el Product Owner.",
          "Incorrecto: actuar como intermediario entre el Product Owner y los Developers socavaría su colaboración directa, que el Scrum Master debería facilitar en su lugar."
        ],
        "trap": "El Scrum Master facilita y elimina impedimentos; nunca se convierte en un 'intermediario' que reduce la colaboración directa entre Product Owner y Developers."
      },
      {
        "type": "tf",
        "q": "El Product Owner puede nombrar a un 'Lead Developer' dentro de los Developers para que actúe como único punto de contacto del grupo.",
        "opts": [
          "Verdadero",
          "Falso"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrecto: esto crearía una jerarquía dentro del Scrum Team, algo que la Guía descarta explícitamente.",
          "Correcto: no hay sub-equipos ni jerarquías dentro del Scrum Team, por lo que no se nombra formalmente ningún 'Lead Developer' ni punto único de contacto."
        ],
        "trap": "Incluso un rol de 'punto único de contacto' con buenas intenciones crea una jerarquía informal que contradice la regla de 'sin jerarquías' del Scrum Team."
      },
      {
        "type": "single",
        "q": "La colaboración entre los Developers y el Product Owner es muy importante para el producto. ¿Cuál de las siguientes sería la forma menos productiva de que el Scrum Master mejore esta colaboración?",
        "opts": [
          "Actuar de intermediario, pasando mensajes de un lado a otro",
          "Enseñarles técnicas para mejorar su colaboración",
          "Sugerirles nuevas herramientas de colaboración que podrían probar"
        ],
        "correct": [
          0
        ],
        "exp": [
          "Correcto: actuar de intermediario reduce la colaboración directa en lugar de mejorarla, y es la opción menos productiva de las tres.",
          "Incorrecto: enseñar técnicas fortalece directamente la relación Product Owner-Developers, por lo que es un enfoque más productivo.",
          "Incorrecto: sugerir herramientas puede ayudar genuinamente a la colaboración, haciéndolo más productivo que sustituir la interacción directa."
        ],
        "trap": "Un Scrum Master que se convierte en un enlace permanente entre el Product Owner y los Developers está resolviendo el síntoma, no el problema de colaboración de fondo."
      },
      {
        "type": "single",
        "q": "Cuando varios Scrum Teams trabajan en el mismo producto, ¿debería integrarse todo su trabajo en un Incremento cada Sprint?",
        "opts": [
          "Sí, pero solo para los Scrum Teams cuyo trabajo tenga dependencias",
          "Sí, para poder inspeccionar con precisión lo que realmente se ha hecho",
          "No, es demasiado difícil, y debería esperarse a un Sprint de integración dedicado",
          "No, cada Scrum Team funciona de forma independiente"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrecto: la integración no debería limitarse solo a los equipos con dependencias conocidas; un producto compartido necesita un Incremento integrado y compartido.",
          "Correcto: integrar el trabajo cada Sprint es necesario para que el Scrum Team (o equipos) y los stakeholders puedan inspeccionar con precisión lo que realmente se ha logrado.",
          "Incorrecto: posponer la integración a un 'Sprint de integración' especial es exactamente el tipo de Sprint de \"hardening\"/release que la Guía no describe ni respalda.",
          "Incorrecto: los equipos que comparten un producto, un Product Backlog y un Product Owner no pueden \"funcionar de forma independiente\"; su trabajo contribuye a un único Incremento."
        ],
        "trap": "Un 'Sprint de integración' dedicado es un antipatrón de tipo hardening Sprint; la transparencia exige integrar e inspeccionar el progreso real y combinado cada Sprint."
      },
      {
        "type": "single",
        "q": "¿Cuántas personas forman habitualmente un Equipo Scrum, según la Guía?",
        "opts": [
          "5 o menos",
          "10 o menos",
          "Entre 15 y 20",
          "No hay límite definido"
        ],
        "correct": 1,
        "exp": [
          "Incorrecto: la Guía no fija 5 como cifra orientativa, sino 10.",
          "Correcto: la Guía indica que los Equipos Scrum suelen tener 10 personas o menos.",
          "Incorrecto: un equipo tan grande dificulta la comunicación y la colaboración efectiva.",
          "Incorrecto: la Guía sí ofrece una cifra orientativa, aunque no sea un límite estricto."
        ],
        "trap": "La cifra 'en general 10 o menos' es un dato memorizable muy típico de examen."
      },
      {
        "type": "multi",
        "q": "¿Cuáles son responsabilidades explícitas de los Desarrolladores según la Guía?",
        "opts": [
          "Crear el Sprint Backlog",
          "Ordenar el Product Backlog",
          "Adherirse a una Definition of Done",
          "Adaptar su plan cada día hacia el Sprint Goal"
        ],
        "correct": [
          0,
          2,
          3
        ],
        "exp": [
          "Correcto: el Sprint Backlog es el plan que crean los Desarrolladores.",
          "Incorrecto: ordenar el Product Backlog es responsabilidad exclusiva del Propietario del Producto.",
          "Correcto: incorporar calidad mediante la Definition of Done es una responsabilidad explícita de los Desarrolladores.",
          "Correcto: los Desarrolladores adaptan su plan cada día hacia el Sprint Goal."
        ],
        "trap": "Intercambiar responsabilidades entre Developers y PO —especialmente 'ordenar el backlog'— es una trampa muy frecuente."
      },
      {
        "type": "single",
        "q": "¿Quién puede delegar la gestión efectiva del Product Backlog?",
        "opts": [
          "Nadie, es intransferible incluso el trabajo",
          "El Propietario del Producto puede delegar el trabajo, pero nunca la responsabilidad",
          "El Scrum Master, si el PO no está disponible",
          "Los Desarrolladores, por consenso"
        ],
        "correct": 1,
        "exp": [
          "Incorrecto: el trabajo de gestionar el Product Backlog sí se puede delegar.",
          "Correcto: la Guía indica que el Propietario del Producto puede delegar el trabajo, pero sigue siendo responsable último.",
          "Incorrecto: el Scrum Master no asume la responsabilidad del PO en su ausencia.",
          "Incorrecto: los Developers no asumen la gestión del Product Backlog."
        ],
        "trap": "Distingue siempre 'delegar el trabajo' (posible) de 'delegar la responsabilidad' (imposible, siempre es del PO)."
      },
      {
        "type": "tf",
        "q": "El Propietario del Producto puede ser un comité de varias personas para representar mejor a los interesados.",
        "opts": [
          "Verdadero",
          "Falso"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrecto: la Guía es explícita en que el PO es una única persona.",
          "Correcto: la Guía afirma literalmente que el Propietario del Producto es una persona, no un comité."
        ],
        "trap": "El PO es siempre una única persona, aunque represente muchas voces de negocio distintas."
      },
      {
        "type": "single",
        "q": "¿Cómo debe proceder alguien que quiera cambiar el orden de un elemento del Product Backlog?",
        "opts": [
          "Modificarlo directamente si es urgente",
          "Negociarlo con el Propietario del Producto",
          "Pedirlo a los Desarrolladores en el Daily Scrum",
          "Esperar a la Retrospective"
        ],
        "correct": 1,
        "exp": [
          "Incorrecto: nadie fuera del proceso de gestión del backlog modifica su orden unilateralmente.",
          "Correcto: cualquier cambio de orden o alcance del backlog se negocia con el Propietario del Producto.",
          "Incorrecto: el Daily Scrum es un evento interno de los Developers para el Sprint Backlog, no para renegociar el Product Backlog.",
          "Incorrecto: no hace falta esperar a la Retrospective para tratar cambios del Product Backlog."
        ],
        "trap": "Cualquier cambio de orden o alcance del backlog pasa siempre por una negociación con el PO."
      },
      {
        "type": "single",
        "q": "¿Qué término introdujo la Guía 2020 para sustituir 'auto-organizado'?",
        "opts": [
          "Autosuficiente",
          "Autogestionado",
          "Multidisciplinario",
          "Autodirigido"
        ],
        "correct": 1,
        "exp": [
          "Incorrecto: no es un término usado por la Guía.",
          "Correcto: 'autogestionado' sustituyó a 'auto-organizado' en la Guía 2020.",
          "Incorrecto: 'multidisciplinario' describe la multifuncionalidad, no la autogestión.",
          "Incorrecto: no es el término empleado por la Guía."
        ],
        "trap": "'Auto-organizado' es terminología 2017 obsoleta; 2020 usa 'autogestionado': el equipo decide quién, cómo y dónde trabaja."
      },
      {
        "type": "multi",
        "q": "¿Cuáles de las siguientes son formas en que el Scrum Master sirve al Propietario del Producto?",
        "opts": [
          "Ayudar a encontrar técnicas para definir el Product Goal",
          "Decidir el orden del Product Backlog en su lugar",
          "Ayudar al equipo a entender la necesidad de elementos claros y concisos",
          "Facilitar la colaboración con los interesados cuando se solicite"
        ],
        "correct": [
          0,
          2,
          3
        ],
        "exp": [
          "Correcto: es una de las formas explícitas en que el Scrum Master ayuda al Propietario del Producto.",
          "Incorrecto: el Scrum Master nunca decide el orden del Product Backlog en lugar del PO; eso rompería su responsabilidad.",
          "Correcto: ayudar al equipo a entender la necesidad de elementos claros y concisos es un servicio del SM al PO.",
          "Correcto: facilitar la colaboración con los interesados cuando se solicita es una forma explícita de servicio al PO."
        ],
        "trap": "El SM 'ayuda' y 'facilita', pero nunca toma decisiones que son accountability exclusiva del PO."
      },
      {
        "type": "single",
        "q": "¿Quién es responsable de determinar el tamaño (sizing) de los elementos del Product Backlog?",
        "opts": [
          "El Propietario del Producto",
          "El Scrum Master",
          "Los Desarrolladores",
          "Los interesados"
        ],
        "correct": 2,
        "exp": [
          "Incorrecto: el PO puede influir ayudando a entender y seleccionar mejores alternativas, pero no decide el tamaño.",
          "Incorrecto: el Scrum Master no estima el trabajo del equipo.",
          "Correcto: quienes realizan el trabajo son quienes lo estiman.",
          "Incorrecto: los interesados no participan en la estimación del trabajo."
        ],
        "trap": "El PO 'puede influir ayudando a entender y seleccionar mejores alternativas', pero la decisión final de tamaño es siempre de los Developers."
      },
      {
        "type": "tf",
        "q": "Dentro del Equipo Scrum hay sub-equipos diferenciados, por ejemplo un equipo de QA y otro de desarrollo.",
        "opts": [
          "Verdadero",
          "Falso"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrecto: la Guía descarta explícitamente los sub-equipos y jerarquías dentro del Equipo Scrum.",
          "Correcto: no hay sub-equipos ni jerarquías dentro del Equipo Scrum."
        ],
        "trap": "Frase literal: 'no hay sub-equipos ni jerarquías'. Cualquier opción que sugiera divisiones internas es incorrecta."
      },
      {
        "type": "single",
        "q": "¿Cuál es la responsabilidad central del Scrum Master según la Guía?",
        "opts": [
          "Asegurar que el equipo cumpla los plazos",
          "Ser responsable de establecer Scrum tal como se define en la Guía",
          "Gestionar el presupuesto del proyecto",
          "Asignar tareas a los Desarrolladores"
        ],
        "correct": 1,
        "exp": [
          "Incorrecto: cumplir plazos no es una accountability formal del Scrum Master.",
          "Correcto: es la responsabilidad central del Scrum Master según la Guía.",
          "Incorrecto: gestionar presupuestos no es una función Scrum.",
          "Incorrecto: los Developers se autoasignan el trabajo; el SM no asigna tareas."
        ],
        "trap": "El SM no asigna trabajo; eso rompería la autogestión del equipo."
      },
      {
        "type": "single",
        "q": "Cuando varios Equipos Scrum trabajan en el mismo producto, ¿qué deben compartir obligatoriamente?",
        "opts": [
          "El mismo Scrum Master para todos los equipos",
          "El mismo Product Goal, Product Backlog y Propietario del Producto",
          "El mismo Sprint Backlog para todos",
          "Los mismos Desarrolladores rotando entre equipos"
        ],
        "correct": 1,
        "exp": [
          "Incorrecto: cada Equipo Scrum puede tener su propio Scrum Master.",
          "Correcto: cuando varios Equipos Scrum trabajan en el mismo producto deben compartir el mismo Product Goal, Product Backlog y Propietario del Producto.",
          "Incorrecto: cada equipo mantiene su propio Sprint Backlog.",
          "Incorrecto: la Guía no prescribe rotar Developers entre equipos."
        ],
        "trap": "Regla de 'un producto, un Product Backlog, un Product Owner', aunque haya múltiples Equipos Scrum trabajando en él."
      },
      {
        "type": "multi",
        "q": "¿Cuáles de las siguientes afirmaciones sobre el Propietario del Producto son correctas?",
        "opts": [
          "Es responsable de maximizar el valor del producto",
          "Debe contar con la aprobación de los Desarrolladores para cambiar el orden del backlog",
          "Puede representar las necesidades de muchos interesados",
          "Debe ser respetado por toda la organización para que sus decisiones sean efectivas"
        ],
        "correct": [
          0,
          2,
          3
        ],
        "exp": [
          "Correcto: maximizar el valor del producto es la responsabilidad central del PO.",
          "Incorrecto: el PO ordena el backlog sin necesitar la aprobación de los Developers.",
          "Correcto: el PO puede representar las necesidades de muchos interesados en el Product Backlog.",
          "Correcto: para que las decisiones del PO sean efectivas, toda la organización debe respetarlas."
        ],
        "trap": "El PO decide el orden unilateralmente; no necesita 'aprobación' de los Developers, aunque sí colabore con ellos."
      }
    ]
  },
  {
    "id": "esdeveniments",
    "name": "Eventos de Scrum",
    "theory": "<h3>El Sprint: el contenedor de todo</h3><p>El Sprint es un contenedor de duración fija —<b>un mes o menos</b>— dentro del cual tienen lugar todos los demás eventos de Scrum: la Planificación de Sprint, el Scrum diario, la Revisión del Sprint y la Retrospectiva del Sprint. Un nuevo Sprint comienza <b>inmediatamente</b> después de que termine el anterior; no existe ningún hueco de preparación ni un \"Sprint 0\" — ese concepto no aparece en la Guía Scrum. Durante el Sprint no se realizan cambios que puedan poner en peligro el Sprint Goal, la calidad no se reduce, y el alcance puede aclararse y renegociarse con el Product Owner a medida que se aprende más. Solo el Product Owner tiene autoridad para cancelar un Sprint antes de que finalice.</p><h3>Planificación de Sprint (Sprint Planning)</h3><p>Da inicio al Sprint. Para un Sprint de un mes, su timebox máximo es de <b>8 horas</b> (en Sprints más cortos el evento suele ser más breve, aunque la Guía no fija una cifra exacta). El evento responde a tres preguntas: <b>por qué</b> es valioso este Sprint (el Sprint Goal), <b>qué</b> puede hacerse de entre el Product Backlog, y <b>cómo</b> se realizará el trabajo elegido. Participa todo el Scrum Team.</p><h3>Scrum diario (Daily Scrum)</h3><p>Evento de <b>15 minutos como máximo</b>, siempre — es la única cifra que no escala con la duración del Sprint. Es un evento interno de y para los Developers, pensado para inspeccionar el progreso hacia el Sprint Goal y adaptar el Sprint Backlog. Si el Product Owner o el Scrum Master trabajan activamente en elementos del Sprint Backlog, participan como Developers, no en su rol de gestión.</p><h3>Revisión del Sprint (Sprint Review)</h3><p>Timebox máximo de <b>4 horas</b> para un Sprint de un mes. El Scrum Team presenta los resultados de su trabajo a los interesados clave (stakeholders) y, juntos, revisan lo conseguido e inspeccionan el impacto sobre el Product Backlog y los próximos pasos. No es en absoluto una \"puerta\" de aprobación: un Increment puede entregarse a los interesados en cualquier momento antes de que finalice el Sprint.</p><h3>Retrospectiva del Sprint (Sprint Retrospective)</h3><p>Cierra el Sprint. Su timebox máximo es de <b>3 horas</b> para un Sprint de un mes. Su propósito es planificar formas de aumentar la calidad y la eficacia del equipo. Participa <b>todo el Scrum Team</b>, incluido el Product Owner, como un miembro más — ningún evento interno del equipo excluye al PO.</p><h3>Trampas frecuentes en el examen</h3><ul><li>Inventar un \"Sprint 0\": no existe en la Guía Scrum; el trabajo de preparación se realiza dentro de los Sprints normales.</li><li>Creer que el Scrum diario escala con la duración del Sprint: solo la Planificación, la Revisión y la Retrospectiva escalan; el Scrum diario siempre es de 15 minutos.</li><li>Confundir la Revisión del Sprint con una aprobación formal de release: es una sesión colaborativa de inspección y adaptación, no un \"gate\".</li><li>Excluir al Product Owner de eventos internos como el Scrum diario o la Retrospectiva: el PO participa en todos los eventos del Scrum Team.</li></ul>",
    "questions": [
      {
        "type": "single",
        "q": "Durante la Sprint Retrospective, el Scrum Team identifica varias mejoras de proceso de alta prioridad. ¿Cuál es la afirmación más precisa sobre lo que ocurre a continuación?",
        "opts": [
          "El Scrum Team puede añadir los elementos al Sprint Backlog del siguiente Sprint",
          "El Scrum Team debe elegir al menos una mejora de alta prioridad y ponerla en el Sprint Backlog",
          "El Scrum Team debería rechazar añadir cualquier mejora cuando las cosas van bien",
          "El Scrum Master selecciona la mejora más importante y la coloca en el Sprint Backlog"
        ],
        "correct": [
          0
        ],
        "exp": [
          "Correcto: la Guía señala que las mejoras más impactantes pueden abordarse lo antes posible, incluso añadiéndolas al siguiente Sprint Backlog — pero esto no es un requisito formal de añadir al menos una.",
          "Incorrecto: no hay ninguna regla que obligue a que al menos un elemento de mejora entre en el Sprint Backlog.",
          "Incorrecto: 'ir bien' no es una razón válida para dejar de identificar o considerar mejoras; el propósito de la Retrospective es la mejora continua en cualquier caso.",
          "Incorrecto: es el Scrum Team de forma colectiva, no el Scrum Master en solitario, quien decide qué hacer con las mejoras identificadas."
        ],
        "trap": "Añadir mejoras al Sprint Backlog es una opción que menciona la Guía, no una cuota obligatoria que el equipo deba cumplir cada Sprint."
      },
      {
        "type": "multi",
        "q": "¿Cuáles tres de los siguientes son eventos de Scrum reales y con timebox?",
        "opts": [
          "Sprint 0",
          "Release Retrospective",
          "Sprint Retrospective",
          "Daily Scrum",
          "Sprint Planning",
          "Release Planning",
          "Sprint Testing"
        ],
        "correct": [
          2,
          3,
          4
        ],
        "exp": [
          "Incorrecto: 'Sprint 0' no existe en la Guía Scrum.",
          "Incorrecto: 'Release Retrospective' no es un término de la Guía Scrum.",
          "Correcto: la Sprint Retrospective es uno de los eventos formales con timebox de Scrum.",
          "Correcto: el Daily Scrum es uno de los eventos formales con timebox de Scrum.",
          "Correcto: la Sprint Planning es uno de los eventos formales con timebox de Scrum.",
          "Incorrecto: 'Release Planning' no es un término de la Guía Scrum.",
          "Incorrecto: 'Sprint Testing' no es un evento con nombre propio en Scrum."
        ],
        "trap": "El examen suele mezclar eventos reales de Scrum con etiquetas inventadas de sabor waterfall (Sprint 0, Release Planning, Release Retrospective) que suenan plausibles pero no existen en la Guía."
      },
      {
        "type": "single",
        "q": "¿Quién inicia el Daily Scrum?",
        "opts": [
          "La persona que tiene el turno asignado",
          "Quien decidan los Developers que debe empezar",
          "La persona que llega la última, para fomentar la puntualidad",
          "El Product Owner",
          "El Scrum Master, para mantenerlo dentro del timebox"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrecto: la Guía no describe ningún mecanismo de 'turno' para el Daily Scrum.",
          "Correcto: los Developers, como grupo autogestionado, deciden entre ellos cómo estructurar e iniciar su Daily Scrum.",
          "Incorrecto: esta no es una práctica descrita en la Guía, ni tampoco una buena forma de construir una dinámica de equipo sana.",
          "Incorrecto: el Daily Scrum es interno a los Developers; el Product Owner no lo dirige.",
          "Incorrecto: el Scrum Master tampoco dirige el Daily Scrum; los propios Developers son responsables de él."
        ],
        "trap": "La Guía no prescribe ningún facilitador ni orden fijo de inicio para el Daily Scrum — esa estructura queda enteramente en manos de los Developers autogestionados."
      },
      {
        "type": "single",
        "q": "¿Cuál de los siguientes es un servicio apropiado del Scrum Master respecto al Daily Scrum?",
        "opts": [
          "Dirigir la discusión cada día",
          "Asegurarse de que las tres preguntas sean respondidas por cada miembro del equipo",
          "Llevar el control de si cada Developer ha tenido ocasión de hablar",
          "Enseñar a los Developers a mantener el Daily Scrum dentro de los 15 minutos"
        ],
        "correct": [
          3
        ],
        "exp": [
          "Incorrecto: el Scrum Master no dirige el Daily Scrum; es interno y pertenece a los Developers.",
          "Incorrecto: la Guía no exige ningún formato fijo de tres preguntas que el Scrum Master deba hacer cumplir.",
          "Incorrecto: llevar el control de los turnos de palabra no es una responsabilidad descrita del Scrum Master, y corre el riesgo de convertir el evento en un informe de estado.",
          "Correcto: enseñar a los Developers a respetar el timebox de 15 minutos es un servicio de coaching genuino que puede prestar el Scrum Master."
        ],
        "trap": "El formato de 'tres preguntas' es una práctica habitual, no un requisito de la Guía que el Scrum Master deba vigilar; la única regla estricta que sí ayuda a proteger es el timebox de 15 minutos."
      },
      {
        "type": "tf",
        "q": "El Product Owner se asegura de que los stakeholders adecuados sean invitados a la Sprint Retrospective, ya que podrían tener instrucciones importantes para mejorar el equipo.",
        "opts": [
          "Verdadero",
          "Falso"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrecto: la Sprint Retrospective es interna al Scrum Team; los stakeholders no son invitados a darle instrucciones al equipo allí.",
          "Correcto: la Retrospective es un espacio exclusivo del Scrum Team para inspeccionarse y mejorar por sí mismo — los stakeholders no tienen ningún papel formal en ella."
        ],
        "trap": "Los stakeholders colaboran en la Sprint Review, no en la Retrospective — no mezcles el propósito de estos dos eventos tan distintos."
      },
      {
        "type": "tf",
        "q": "Un Scrum Team de alto rendimiento se asegura de que cada Incremento esté realmente completo ejecutando un 'Sprint de Release' dedicado cuando hace falta.",
        "opts": [
          "Verdadero",
          "Falso"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrecto: esto describe un antipatrón de Sprint de \"hardening\"/release, no algo que haga un Scrum Team de alto rendimiento.",
          "Correcto: el Incremento debe cumplir la Definición de Hecho al final de cada Sprint ordinario; no existe un concepto separado de 'Sprint de Release' en Scrum."
        ],
        "trap": "Un 'Sprint de Release' es un antipatrón: la calidad y el trabajo 'Terminado' ocurren de forma continua, cada Sprint — nunca se posponen a un Sprint especial de cierre."
      },
      {
        "type": "multi",
        "q": "Durante una Sprint Retrospective, los Developers proponen que el Daily Scrum ocurra solo los martes y jueves. ¿Cuáles dos respuestas debería recomendar el Scrum Master?",
        "opts": [
          "Considerar la petición y decidir personalmente en qué días debería ocurrir el Daily Scrum",
          "Guiar al equipo sobre por qué el Daily Scrum es importante como oportunidad diaria de actualizar el plan",
          "Reconocer y apoyar la decisión del equipo autogestionado de cambiar la frecuencia",
          "Entender por qué los Developers quieren esto y trabajar con ellos para mejorar el resultado del Daily Scrum"
        ],
        "correct": [
          1,
          3
        ],
        "exp": [
          "Incorrecto: el Scrum Master nunca debería decidir unilateralmente el calendario del equipo — eso tampoco sería una respuesta de coaching.",
          "Correcto: guiar al equipo sobre el propósito y el valor de una cadencia diaria de inspección y adaptación aborda la raíz de la petición.",
          "Incorrecto: la autogestión no llega hasta el punto de cambiar la frecuencia que la Guía prescribe para un evento formal de Scrum — el Daily Scrum es siempre diario.",
          "Correcto: entender la frustración de fondo y trabajar junto a ellos para mejorar el evento es una respuesta de coaching genuinamente útil."
        ],
        "trap": "La autogestión permite al equipo decidir cómo llevar a cabo sus eventos, pero no si un evento prescrito (como el Daily Scrum) ocurre con la frecuencia que la Guía establece."
      },
      {
        "type": "single",
        "q": "¿Cómo se involucra típicamente la dirección externa al Scrum Team en el Daily Scrum?",
        "opts": [
          "El Product Owner representa sus opiniones",
          "Los directivos no son necesarios en el Daily Scrum",
          "El Scrum Master habla en su nombre",
          "La dirección da una actualización al inicio de cada Daily Scrum"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrecto: el Daily Scrum no es un foro para representar las opiniones de la dirección externa.",
          "Correcto: el Daily Scrum es interno a los Developers; los directivos externos no tienen ningún papel obligatorio en él.",
          "Incorrecto: el Scrum Master no actúa como portavoz de la dirección durante el Daily Scrum.",
          "Incorrecto: la Guía no describe ninguna actualización de la dirección como parte de la estructura del Daily Scrum."
        ],
        "trap": "El Daily Scrum pertenece a los Developers; los directivos externos, ni siquiera a través de un intermediario, tienen un papel integrado en él."
      },
      {
        "type": "single",
        "q": "¿Qué tema es el foco de discusión en la Sprint Review?",
        "opts": [
          "El proceso de Scrum, y cómo se aplicó durante el Sprint",
          "Las prácticas de codificación e ingeniería",
          "El Incremento del producto",
          "Todo lo anterior por igual"
        ],
        "correct": [
          2
        ],
        "exp": [
          "Incorrecto: reflexionar sobre el propio proceso es el foco de la Sprint Retrospective, no de la Sprint Review.",
          "Incorrecto: las prácticas de ingeniería también son más bien un tema de la Retrospective, no de la Sprint Review.",
          "Correcto: la Sprint Review se centra en el Incremento del producto — qué se ha construido y qué hacer a continuación.",
          "Incorrecto: la Review y la Retrospective tienen propósitos distintos y no son simplemente intercambiables en cuanto a tema."
        ],
        "trap": "No confundas la Sprint Review (centrada en el producto) con la Sprint Retrospective (centrada en el proceso) — inspeccionan cosas diferentes."
      },
      {
        "type": "multi",
        "q": "¿Cuáles tres de los siguientes funcionan como bucles de feedback (puntos de inspección y adaptación) en Scrum?",
        "opts": [
          "Release Planning",
          "Reunión de refinamiento",
          "Sprint Retrospective",
          "Sprint Review",
          "Daily Scrum"
        ],
        "correct": [
          2,
          3,
          4
        ],
        "exp": [
          "Incorrecto: 'Release Planning' no es un concepto ni un bucle de feedback de la Guía Scrum.",
          "Incorrecto: el refinamiento es una actividad continua, no un evento formal con timebox de feedback.",
          "Correcto: la Sprint Retrospective es un bucle de feedback sobre el proceso y la eficacia del equipo.",
          "Correcto: la Sprint Review es un bucle de feedback sobre el Incremento del producto.",
          "Correcto: el Daily Scrum es un bucle de feedback sobre el progreso hacia el Objetivo del Sprint."
        ],
        "trap": "El refinamiento, aunque valioso, no es uno de los eventos formales con timebox de Scrum ni uno de sus bucles de feedback — es trabajo continuo de fondo."
      },
      {
        "type": "single",
        "q": "¿Qué ocurre si el Scrum Team no puede completar su trabajo antes de que termine el Sprint?",
        "opts": [
          "La duración del Sprint no cambia, y el equipo aprende y se adapta de forma continua",
          "El Sprint se amplía temporalmente, con lecciones aprendidas para evitar que se repita",
          "El Sprint se amplía, y los Sprints futuros adoptan esta nueva duración más larga"
        ],
        "correct": [
          0
        ],
        "exp": [
          "Correcto: la duración fija del Sprint nunca se amplía; el equipo simplemente se adapta, aprende y traslada las lecciones hacia adelante.",
          "Incorrecto: los Sprints no se amplían, ni siquiera temporalmente, para terminar el trabajo pendiente.",
          "Incorrecto: un Sprint inacabado tampoco reinicia la duración del Sprint de cara al futuro."
        ],
        "trap": "El timebox de un Sprint nunca se amplía, sin importar cuánto trabajo quede pendiente — esa consistencia es lo que hace de los Sprints una cadencia fiable."
      },
      {
        "type": "single",
        "q": "¿Cuándo debe estar presente el Product Owner en el Daily Scrum?",
        "opts": [
          "Siempre que necesite representar el punto de vista de los stakeholders",
          "Siempre que el Scrum Master le pida asistir",
          "Siempre que haya impedimentos que discutir",
          "Cuando el Product Owner esté trabajando activamente en elementos del Sprint Backlog"
        ],
        "correct": [
          3
        ],
        "exp": [
          "Incorrecto: representar a los stakeholders no es el motivo de la presencia del Product Owner en este evento interno de los Developers.",
          "Incorrecto: el Scrum Master no convoca al Product Owner al Daily Scrum.",
          "Incorrecto: los impedimentos son asunto a resolver por los Developers y el Scrum Master, no un motivo que obligue a la asistencia del Product Owner.",
          "Correcto: si el Product Owner está trabajando activamente en elementos del Sprint Backlog, participa como Developer, igual que cualquier otra persona que realice ese trabajo."
        ],
        "trap": "La asistencia del Product Owner al Daily Scrum no es obligatoria por su rol — solo cobra relevancia si está trabajando manualmente en el Sprint Backlog, en cuyo caso participa como Developer."
      },
      {
        "type": "multi",
        "q": "A medida que avanza la Sprint Planning, los Developers se dan cuenta de que la carga de trabajo puede superar su capacidad. ¿Cuáles dos son acciones válidas?",
        "opts": [
          "Contratar más Developers antes de que pueda empezar el trabajo",
          "Hacer que el Scrum Team sea consciente de ello, empezar el Sprint y monitorizar el progreso",
          "Hacer que los Developers trabajen horas extra durante este Sprint",
          "Eliminar o cambiar algunos de los elementos del Product Backlog seleccionados"
        ],
        "correct": [
          1,
          3
        ],
        "exp": [
          "Incorrecto: contratar nuevos Developers en mitad de la Planning no es una respuesta realista ni respaldada por la Guía ante un desajuste de capacidad.",
          "Correcto: la transparencia sobre el riesgo, seguida de empezar el Sprint y monitorizar el progreso, es una respuesta empírica válida.",
          "Incorrecto: trabajar horas extra no es una práctica sostenible ni respaldada por la Guía para gestionar la sobrecarga.",
          "Correcto: ajustar el alcance seleccionado es una forma directa y saludable de volver a alinear el plan con la capacidad real."
        ],
        "trap": "La respuesta empírica ante la sobrecarga es la transparencia y ajustar el alcance, no contratar personal sobre la marcha ni pedir horas extra."
      },
      {
        "type": "multi",
        "q": "El Daily Scrum ocurre normalmente cada día. ¿Cuáles serían tres preocupaciones clave si su frecuencia se redujera a cada dos o tres días?",
        "opts": [
          "El Scrum Master pierde la capacidad de actualizar bien un diagrama de Gantt",
          "Se dedica demasiado tiempo a actualizar el tablero Scrum antes de la reunión",
          "Se pierden oportunidades de inspeccionar y adaptar el Sprint Backlog",
          "Los impedimentos se plantean y se resuelven más lentamente",
          "El Sprint Backlog puede volverse impreciso"
        ],
        "correct": [
          2,
          3,
          4
        ],
        "exp": [
          "Incorrecto: los diagramas de Gantt no tienen cabida en Scrum en absoluto, así que esta no es una preocupación genuina.",
          "Incorrecto: el sobrecoste de actualizar el tablero no es el riesgo central que la Guía asocia con saltarse días.",
          "Correcto: menos Daily Scrums significan menos ocasiones de inspeccionar el progreso y adaptar el plan hacia el Objetivo del Sprint.",
          "Correcto: los impedimentos salen a la luz y se resuelven más despacio si el equipo no se sincroniza a diario.",
          "Correcto: con una inspección menos frecuente, es más probable que el Sprint Backlog se desincronice de la realidad."
        ],
        "trap": "El coste real de saltarse días es perder ciclos frecuentes de inspección y adaptación, no el papeleo o la sobrecarga de reportes."
      },
      {
        "type": "tf",
        "q": "La Sprint Review se considera una 'reunión formal'.",
        "opts": [
          "Verdadero",
          "Falso"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrecto: la Guía enmarca la Sprint Review como una sesión de trabajo colaborativa, no como una reunión formal.",
          "Correcto: la Sprint Review es una sesión de trabajo de inspección y adaptación, no una reunión formal de estado."
        ],
        "trap": "Llamar 'formal' a la Sprint Review invita a tratarla como una ceremonia de aprobación, algo que la Guía rechaza explícitamente."
      },
      {
        "type": "single",
        "q": "¿Cuál de las siguientes afirmaciones sobre el Daily Scrum NO es correcta?",
        "opts": [
          "Lo modera el Product Owner",
          "Los Developers tienen que participar en él",
          "Es un evento con timebox, de 15 minutos como máximo",
          "Debería celebrarse a la misma hora y en el mismo lugar durante todo el Sprint"
        ],
        "correct": [
          0
        ],
        "exp": [
          "Correcto — esta es la afirmación falsa: el Daily Scrum no lo modera el Product Owner; pertenece a los Developers.",
          "Incorrecto como respuesta aquí: esta afirmación sí es cierta — los Developers sí participan.",
          "Incorrecto como respuesta aquí: esta afirmación es cierta — 15 minutos es el máximo fijo.",
          "Incorrecto como respuesta aquí: esta afirmación es cierta — la Guía recomienda la misma hora y lugar para reducir la complejidad."
        ],
        "trap": "El Daily Scrum no tiene ningún rol formal de moderador, y mucho menos ocupado por el Product Owner."
      },
      {
        "type": "single",
        "q": "¿En qué circunstancia puede cancelarse un Sprint?",
        "opts": [
          "Cuando el Objetivo del Sprint queda obsoleto",
          "Siempre que los Developers se lo pidan al Product Owner",
          "Siempre que un Business Analyst se lo pida al Product Owner",
          "Solo cuando el Objetivo del Sprint queda obsoleto y todavía no hay ningún elemento 'Terminado'"
        ],
        "correct": [
          0
        ],
        "exp": [
          "Correcto: la Guía señala que el Objetivo del Sprint quedando obsoleto es la razón por la que un Sprint podría cancelarse.",
          "Incorrecto: que los Developers lo pidan no es por sí mismo el criterio; la cancelación depende de la vigencia del Objetivo del Sprint, y es decisión del Product Owner.",
          "Incorrecto: un Business Analyst no tiene ninguna autoridad especial para provocar la cancelación.",
          "Incorrecto: la cancelación no depende de si ya hay elementos 'Terminados'; el desencadenante es que el Objetivo del Sprint quede obsoleto."
        ],
        "trap": "El desencadenante de la cancelación es que el Objetivo del Sprint quede obsoleto, no una votación de los Developers ni una condición añadida arbitrariamente sobre el trabajo ya completado."
      },
      {
        "type": "multi",
        "q": "¿Cuáles de las siguientes NO son requeridas por Scrum? (selecciona todas las que correspondan)",
        "opts": [
          "Usar historias de usuario",
          "Tener un Product Owner",
          "Responder el formato de 'tres preguntas' en el Daily Scrum",
          "Tener eventos con timebox",
          "Tener un Sprint Backlog",
          "Usar puntos de historia"
        ],
        "correct": [
          0,
          2,
          5
        ],
        "exp": [
          "Correcto: las historias de usuario son una práctica popular pero opcional, no exigida por la Guía.",
          "Incorrecto como respuesta aquí: tener un Product Owner sí es obligatorio — es una de las tres responsabilidades de Scrum.",
          "Correcto: el formato de 'tres preguntas' es una práctica habitual, no un requisito de la Guía para el Daily Scrum.",
          "Incorrecto como respuesta aquí: los eventos con timebox sí son obligatorios en Scrum.",
          "Incorrecto como respuesta aquí: el Sprint Backlog sí es un artefacto obligatorio.",
          "Correcto: los puntos de historia son una técnica de estimación posible, nunca exigida por la Guía."
        ],
        "trap": "Prácticas populares como las historias de usuario, las 'tres preguntas' o los puntos de historia son técnicas opcionales que los equipos suelen adoptar, pero ninguna de ellas la exige realmente la Guía Scrum."
      },
      {
        "type": "tf",
        "q": "El Scrum Master puede decidir qué eventos de Scrum son necesarios para un proyecto concreto.",
        "opts": [
          "Verdadero",
          "Falso"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrecto: el Scrum Master no puede elegir a discreción qué eventos prescritos se aplican.",
          "Correcto: todos los eventos de Scrum forman parte del marco de trabajo; el trabajo del Scrum Master es asegurar que ocurran y sean productivos, no decidir si son necesarios."
        ],
        "trap": "Ninguno de los eventos de Scrum es un extra opcional que un Scrum Master pueda eliminar — su trabajo es hacer que cada uno sea eficaz, no decidir si es 'necesario'."
      },
      {
        "type": "multi",
        "q": "¿Cuáles dos de los siguientes son resultados típicos de un Daily Scrum?",
        "opts": [
          "El equipo tiene claros los siguientes pasos hacia el Objetivo del Sprint",
          "Se asignan tareas a Developers concretos",
          "Se sacan a la luz impedimentos para poder darles seguimiento",
          "Se produce un nuevo 'Backlog Diario' refinado"
        ],
        "correct": [
          0,
          2
        ],
        "exp": [
          "Correcto: tener claridad sobre los siguientes pasos hacia el Objetivo del Sprint es exactamente lo que el Daily Scrum busca producir.",
          "Incorrecto: el Daily Scrum no es una reunión de asignación de tareas; los Developers se autogestionan para decidir quién hace qué.",
          "Correcto: sacar a la luz los impedimentos para poder abordarlos es un resultado típico y valioso del Daily Scrum.",
          "Incorrecto: no existe tal artefacto llamado 'Backlog Diario' en Scrum; el Sprint Backlog simplemente se actualiza según haga falta."
        ],
        "trap": "El Daily Scrum saca a la luz planes e impedimentos para el propio equipo — no es un ritual de asignación de tareas, ni produce ningún artefacto separado de 'Backlog Diario'."
      },
      {
        "type": "single",
        "q": "¿Qué evento de Scrum puede compararse con una reunión de 'lecciones aprendidas'?",
        "opts": [
          "La Sprint Review",
          "El Daily Scrum",
          "La Sprint Retrospective",
          "La Sprint Planning"
        ],
        "correct": [
          2
        ],
        "exp": [
          "Incorrecto: la Sprint Review inspecciona el Incremento del producto, no la propia forma de trabajar del equipo.",
          "Incorrecto: el Daily Scrum trata del progreso diario hacia el Objetivo del Sprint, no de reflexionar sobre lecciones aprendidas.",
          "Correcto: la Sprint Retrospective es donde el equipo reflexiona sobre cómo trabaja e identifica mejoras — lo más parecido a una sesión de 'lecciones aprendidas'.",
          "Incorrecto: la Sprint Planning mira hacia el Sprint que empieza, no hacia atrás, a las lecciones aprendidas."
        ],
        "trap": "Si estás acostumbrado a la terminología tradicional de proyectos, asocia 'lecciones aprendidas' con la Sprint Retrospective, el evento dedicado a la mejora de proceso."
      },
      {
        "type": "single",
        "q": "¿Cuál de las siguientes es requerida por Scrum?",
        "opts": [
          "La Sprint Retrospective",
          "Que los Developers se pongan físicamente de pie durante el Daily Scrum",
          "Un Sprint Burndown Chart",
          "Release Planning"
        ],
        "correct": [
          0
        ],
        "exp": [
          "Correcto: la Sprint Retrospective es uno de los cuatro eventos obligatorios y con timebox de Scrum.",
          "Incorrecto: ponerse de pie es una convención popular (de ahí el apodo 'stand-up'), nunca un requisito de la Guía.",
          "Incorrecto: los burndown charts son solo un ejemplo de práctica de previsión, no algo obligatorio.",
          "Incorrecto: 'Release Planning' no es en absoluto un concepto de la Guía Scrum."
        ],
        "trap": "El apodo 'stand-up' para el Daily Scrum es solo una costumbre habitual — nada en la Guía exige que nadie se ponga físicamente de pie."
      },
      {
        "type": "single",
        "q": "¿Qué significa que un evento de Scrum tenga un \"timebox\"?",
        "opts": [
          "Tiene una duración mínima obligatoria",
          "Tiene una duración máxima fijada de antemano, que no puede superarse",
          "Se celebra siempre a la misma hora del día",
          "Debe terminar antes de una fecha límite impuesta externamente"
        ],
        "correct": 1,
        "exp": [
          "Incorrecto: un timebox nunca exige una duración mínima; el evento puede terminar antes.",
          "Correcto: un timebox es un límite máximo de duración establecido de antemano, nunca superable.",
          "Incorrecto: confunde timebox con un horario fijo del día.",
          "Incorrecto: confunde timebox con una fecha límite (deadline) externa al evento."
        ],
        "trap": "Un timebox marca solo un máximo, nunca un mínimo obligatorio: el evento puede acabar antes, pero jamás debe alargarse más allá del límite."
      },
      {
        "type": "single",
        "q": "¿Cuál es el timebox máximo del Scrum diario, independientemente de la duración del Sprint?",
        "opts": [
          "30 minutos",
          "15 minutos, siempre",
          "1 hora, para Sprints de un mes",
          "Escala proporcionalmente con la duración del Sprint"
        ],
        "correct": 1,
        "exp": [
          "Incorrecto: esa cifra no aparece en la Guía para el Scrum diario.",
          "Correcto: el Scrum diario está siempre limitado a 15 minutos, sea cual sea la duración del Sprint.",
          "Incorrecto: esa cifra no corresponde al Scrum diario.",
          "Incorrecto: es precisamente el único evento cuyo timebox NO escala con la duración del Sprint."
        ],
        "trap": "Planificación, Revisión y Retrospectiva escalan (se acortan) en Sprints más cortos; el Scrum diario es la excepción — siempre 15 minutos máximo."
      },
      {
        "type": "single",
        "q": "¿Quién tiene autoridad para cancelar un Sprint?",
        "opts": [
          "El Scrum Master",
          "Todo el Scrum Team por consenso",
          "Solo el Product Owner",
          "Los principales stakeholders"
        ],
        "correct": 2,
        "exp": [
          "Incorrecto: el Scrum Master no tiene esta autoridad.",
          "Incorrecto: cancelar un Sprint no es una decisión de consenso del equipo.",
          "Correcto: la Guía Scrum otorga esta autoridad en exclusiva al Product Owner.",
          "Incorrecto: los stakeholders no tienen autoridad formal sobre el Sprint."
        ],
        "trap": "La cancelación de un Sprint es una decisión unilateral del Product Owner — no requiere el consentimiento de nadie más, aunque el PO puede consultar a otros."
      },
      {
        "type": "single",
        "q": "¿Cuál es el timebox máximo de la Retrospectiva del Sprint para un Sprint de un mes?",
        "opts": [
          "1 hora",
          "2 horas",
          "3 horas",
          "4 horas"
        ],
        "correct": 2,
        "exp": [
          "Incorrecto.",
          "Incorrecto.",
          "Correcto: 3 horas es el máximo para un Sprint de un mes.",
          "Incorrecto: 4 horas es el máximo de la Revisión del Sprint, no de la Retrospectiva."
        ],
        "trap": "Memoriza el orden para un Sprint de un mes: Planificación 8h, Revisión 4h, Retrospectiva 3h — la Retrospectiva no es el evento más largo."
      },
      {
        "type": "single",
        "q": "¿Cuándo comienza un nuevo Sprint?",
        "opts": [
          "Una semana después de que termine el anterior, para revisar resultados",
          "Inmediatamente después de que termine el Sprint anterior",
          "Cuando el Product Owner lo decida discrecionalmente",
          "Después de un \"Sprint 0\" de preparación"
        ],
        "correct": 1,
        "exp": [
          "Incorrecto: no existe ningún hueco de revisión entre Sprints.",
          "Correcto: un nuevo Sprint comienza justo después de que concluya el anterior.",
          "Incorrecto: la cadencia es continua, no queda a discreción de nadie.",
          "Incorrecto: el \"Sprint 0\" no existe en la Guía Scrum."
        ],
        "trap": "No hay hueco entre Sprints ni un \"Sprint 0\" de preparación — es uno de los distractores más habituales en los exámenes."
      },
      {
        "type": "single",
        "q": "¿Cuál es el timebox máximo de la Planificación de Sprint para un Sprint de un mes?",
        "opts": [
          "4 horas",
          "8 horas",
          "15 minutos",
          "3 horas"
        ],
        "correct": 1,
        "exp": [
          "Incorrecto: ese es el máximo de la Revisión del Sprint.",
          "Correcto: 8 horas es el máximo para un Sprint de un mes.",
          "Incorrecto: ese es el timebox del Scrum diario.",
          "Incorrecto: ese es el máximo de la Retrospectiva."
        ],
        "trap": "No intercambies las cifras: Planificación = 8h, Revisión = 4h, Retrospectiva = 3h, para un Sprint de un mes."
      },
      {
        "type": "multi",
        "q": "¿Qué tres temas se abordan durante la Planificación de Sprint?",
        "opts": [
          "Por qué este Sprint es valioso",
          "Quién asistirá a la Revisión del Sprint",
          "Qué se puede conseguir en este Sprint",
          "Cómo se realizará el trabajo elegido"
        ],
        "correct": [
          0,
          2,
          3
        ],
        "exp": [
          "Correcto: es el tema \"Por qué\".",
          "Incorrecto: quién asiste a la Revisión no es uno de los tres temas de la Planificación.",
          "Correcto: es el tema \"Qué\".",
          "Correcto: es el tema \"Cómo\"."
        ],
        "trap": "El tema \"Por qué\" fue una incorporación explícita de la Guía 2020; cualquier respuesta que describa solo dos temas está incompleta."
      },
      {
        "type": "multi",
        "q": "¿Qué afirmaciones sobre el Sprint son correctas?",
        "opts": [
          "Tiene una duración fija de un mes o menos",
          "Se permiten cambios que pongan en peligro el Sprint Goal si el Product Owner los aprueba",
          "La calidad no disminuye durante el Sprint",
          "El alcance puede aclararse y renegociarse con el Product Owner a medida que se aprende más"
        ],
        "correct": [
          0,
          2,
          3
        ],
        "exp": [
          "Correcto.",
          "Incorrecto: ninguna aprobación, ni siquiera del Product Owner, justifica poner en peligro el Sprint Goal.",
          "Correcto.",
          "Correcto."
        ],
        "trap": "Ninguna aprobación —ni siquiera del Product Owner— puede justificar un cambio que ponga en peligro el Sprint Goal; esa protección no tiene excepciones."
      },
      {
        "type": "multi",
        "q": "¿Qué afirmaciones sobre la Revisión del Sprint son correctas?",
        "opts": [
          "Es una sesión de trabajo colaborativa, no solo una reunión de estado",
          "Participan el Scrum Team y los stakeholders clave",
          "Autoriza formalmente la puesta en producción del Increment",
          "Sirve para inspeccionar el resultado del Sprint y adaptar el Product Backlog"
        ],
        "correct": [
          0,
          1,
          3
        ],
        "exp": [
          "Correcto.",
          "Correcto.",
          "Incorrecto: la Guía niega explícitamente que la Revisión sea una puerta de aprobación para el release.",
          "Correcto."
        ],
        "trap": "La Revisión del Sprint es inspección y adaptación del producto, nunca una aprobación formal de \"sí/no\" para el release."
      },
      {
        "type": "tf",
        "q": "La Revisión del Sprint es una puerta de aprobación formal que debe superarse antes de poder liberar un Increment a los usuarios.",
        "opts": [
          "Verdadero",
          "Falso"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrecto.",
          "Correcto: la Guía afirma explícitamente que la Revisión del Sprint no debe considerarse una puerta para liberar valor."
        ],
        "trap": "Es una sesión de trabajo de inspección y adaptación, no una puerta de aprobación al estilo Waterfall."
      },
      {
        "type": "tf",
        "q": "La Retrospectiva del Sprint es exclusivamente para los Developers; el Product Owner no participa.",
        "opts": [
          "Verdadero",
          "Falso"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrecto.",
          "Correcto: participa todo el Scrum Team, Product Owner incluido, como un miembro más."
        ],
        "trap": "Ningún evento interno del equipo excluye al Product Owner — participa igual que los Developers y el Scrum Master."
      },
      {
        "type": "tf",
        "q": "El timebox del Scrum diario escala con la duración del Sprint, igual que la Planificación, la Revisión y la Retrospectiva.",
        "opts": [
          "Verdadero",
          "Falso"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrecto: este es precisamente la única excepción — nunca escala.",
          "Correcto: el Scrum diario está siempre limitado a 15 minutos, sin importar cuánto dure el Sprint."
        ],
        "trap": "Planificación, Revisión y Retrospectiva se acortan en Sprints más cortos; el timebox del Scrum diario es fijo, 15 minutos, sin importar la duración del Sprint."
      }
    ]
  },
  {
    "id": "artefactes",
    "name": "Artefactos y sus compromisos",
    "theory": "<h3>Qué son los artefactos de Scrum</h3><p>Los artefactos de Scrum representan trabajo o valor y están diseñados para maximizar la transparencia de la información clave que el Equipo Scrum y los interesados necesitan conocer. Son tres: el <b>trabajo pendiente del producto (Product Backlog)</b>, el <b>trabajo pendiente del Sprint (Sprint Backlog)</b> y el <b>Incremento</b>. Cada artefacto lleva asociado un <b>compromiso</b> que aporta información adicional y permite medir el progreso: el Product Backlog tiene el <b>Objetivo del Producto</b>, el Sprint Backlog tiene el <b>Objetivo del Sprint</b>, y el Incremento tiene la <b>Definición de Hecho</b>.</p><h3>Product Backlog y Objetivo del Producto</h3><p>El Product Backlog es una lista <b>emergente y ordenada</b> (nunca \"priorizada\") de todo lo que se necesita para mejorar el producto; es la única fuente de trabajo que emprende el Equipo Scrum. Nunca está completa: evoluciona junto con el producto y su entorno. El <b>Objetivo del Producto</b> describe un estado futuro del producto que puede servir como diana para que el Equipo Scrum planifique: es un objetivo a <b>largo plazo</b>, y debe cumplirse (o abandonarse formalmente) antes de que el equipo asuma el siguiente. El propio Product Backlog es la representación emergente de ese Objetivo del Producto.</p><h3>Sprint Backlog y Objetivo del Sprint</h3><p>El Sprint Backlog es un plan hecho <b>por y para los Developers</b>: combina el Objetivo del Sprint (el porqué), los elementos del Product Backlog seleccionados para el Sprint (el qué) y un plan de acción para entregar el Incremento (el cómo). Es una imagen en tiempo real, altamente visible, del trabajo que los Developers planean realizar, y se actualiza a lo largo de todo el Sprint según se va aprendiendo más; solo los Developers pueden modificar su Sprint Backlog durante el Sprint. El <b>Objetivo del Sprint</b> es el único objetivo del Sprint, se crea durante el Sprint Planning como aportación a los elementos seleccionados, y da coherencia y foco, animando al equipo a trabajar junto en lugar de en iniciativas separadas. El Objetivo del Sprint ofrece cierta flexibilidad respecto al trabajo exacto necesario para conseguirlo: los Developers pueden renegociar el alcance con el Product Owner si descubren que el trabajo es distinto de lo esperado, pero el Objetivo del Sprint en sí no cambia.</p><h3>Incremento y Definición de Hecho</h3><p>El Incremento es un escalón concreto y verificado hacia el Objetivo del Producto; cada Incremento se suma a los anteriores y se verifica a fondo para asegurar que todos funcionan juntos. Se pueden crear varios Incrementos dentro de un mismo Sprint, y un Incremento puede entregarse a los interesados antes de que termine el Sprint (el Sprint Review nunca debe considerarse la única barrera para liberar valor). Un elemento del Product Backlog solo pasa a formar parte del Incremento cuando cumple la <b>Definición de Hecho</b>, el compromiso asociado a este artefacto que aporta transparencia compartida sobre qué significa \"terminado\". (Este tema se trata en profundidad en el apartado dedicado a la Definición de Hecho.)</p><h3>Errores habituales en el examen</h3><ul><li>Confundir un artefacto con su compromiso: el Product Backlog no \"es\" el Objetivo del Producto, lo tiene asociado; lo mismo ocurre con Sprint Backlog/Objetivo del Sprint e Incremento/Definición de Hecho.</li><li>Creer que el Product Backlog puede llegar a estar \"completo\" o ser una lista fija: siempre es emergente y ordenado, nunca priorizado ni cerrado.</li><li>Pensar que solo puede existir un Incremento por Sprint, o que el Sprint Review es el único momento para entregar valor: ambas ideas son incorrectas según la Guía.</li><li>Creer que el Product Owner (u otra persona externa) puede modificar el Sprint Backlog durante el Sprint: solo los Developers pueden hacerlo.</li><li>Confundir el Objetivo del Sprint con la simple suma de los elementos seleccionados: el Objetivo del Sprint es un compromiso de coherencia y propósito, no una lista de tareas.</li></ul>",
    "questions": [
      {
        "type": "single",
        "q": "Una nueva Product Owner se pregunta si el trabajo de estabilidad, rendimiento, documentación y correcciones debe estar en el Product Backlog junto a las funcionalidades de cara al usuario. ¿Cuál es la mejor respuesta?",
        "opts": [
          "Sí, el Product Backlog es la única fuente de trabajo del producto, así que todo eso pertenece a él",
          "No, solo las funcionalidades de cara al usuario pertenecen al Product Backlog; el resto lo gestionan por separado los Developers"
        ],
        "correct": [
          0
        ],
        "exp": [
          "Correcto: el Product Backlog es la única fuente de trabajo del Scrum Team, así que cualquier tipo de trabajo necesario — funcionalidades, necesidades no funcionales, correcciones, documentación — pertenece a él por transparencia.",
          "Incorrecto: separar el trabajo en una lista aparte y oculta rompe el papel del Product Backlog como fuente única de trabajo y lo esconde del orden que establece el Product Owner."
        ],
        "trap": "Asumir que el Product Backlog es solo para funcionalidades de cara al usuario es un error habitual — cualquier cosa necesaria para mejorar el producto pertenece a él."
      },
      {
        "type": "multi",
        "q": "¿Cuáles dos de las siguientes son formas efectivas para que un Scrum Team mantenga visibles y atendidos los requisitos no funcionales?",
        "opts": [
          "Añadirlos al Product Backlog para garantizar la transparencia",
          "Mantenerlos en una lista informal aparte, en el tablero del equipo",
          "Añadirlos a la Definición de Hecho para que ese trabajo se respete cada Sprint",
          "Asignarlos en exclusiva a un sub-equipo especializado"
        ],
        "correct": [
          0,
          2
        ],
        "exp": [
          "Correcto: ponerlos en el Product Backlog los mantiene transparentes y forman parte de la fuente única de trabajo.",
          "Incorrecto: una lista informal aparte socava al Product Backlog como fuente única de trabajo.",
          "Correcto: incorporar las necesidades no funcionales a la Definición de Hecho asegura que cada Incremento las respete automáticamente.",
          "Incorrecto: los Scrum Teams no crean sub-equipos especializados; eso rompería la cross-funcionalidad y la autogestión."
        ],
        "trap": "Los requisitos no funcionales deben hacerse transparentes a través del Product Backlog y/o la Definición de Hecho, no rastrearse de forma informal ni delegarse a un sub-equipo."
      },
      {
        "type": "tf",
        "q": "El Sprint Backlog es un resultado de la Sprint Planning, e incluye el Objetivo del Sprint.",
        "opts": [
          "Verdadero",
          "Falso"
        ],
        "correct": [
          0
        ],
        "exp": [
          "Correcto: el Sprint Backlog se compone durante la Sprint Planning y combina el Objetivo del Sprint, los elementos del Product Backlog seleccionados y el plan para entregarlos.",
          "Incorrecto: así es exactamente como la Guía describe el Sprint Backlog."
        ],
        "trap": "Recuerda que el Sprint Backlog tiene tres partes: el Objetivo del Sprint (el porqué), los elementos seleccionados (el qué) y el plan (el cómo)."
      },
      {
        "type": "multi",
        "q": "¿Cuáles tres de las siguientes describen mejor el Product Backlog?",
        "opts": [
          "Lo gestiona el Product Owner",
          "Solo es visible para el Product Owner y los stakeholders",
          "Se ordena en base al valor, las dependencias y el riesgo, entre otros factores",
          "Es un inventario de las cosas por hacer para el producto"
        ],
        "correct": [
          0,
          2,
          3
        ],
        "exp": [
          "Correcto: el Product Owner es responsable del Product Backlog, aunque delegue parte del trabajo.",
          "Incorrecto: el Product Backlog debería ser visible para todo el Scrum Team, y adecuadamente también para los stakeholders — no oculto a los Developers.",
          "Correcto: el Product Owner puede sopesar el valor, el riesgo, las dependencias y otros factores al ordenar el Backlog.",
          "Correcto: en esencia, el Product Backlog es el inventario de todo lo necesario para mejorar el producto."
        ],
        "trap": "El Product Backlog debe ser visible para todo el Scrum Team, no restringirse solo al Product Owner y los stakeholders."
      },
      {
        "type": "single",
        "q": "¿Cuáles son los tres artefactos formales de Scrum?",
        "opts": [
          "El trabajo pendiente del producto (Product Backlog), el trabajo pendiente del Sprint (Sprint Backlog) y el Incremento",
          "El Objetivo del Producto, el Objetivo del Sprint y la Definición de Hecho",
          "El Roadmap, el Backlog y el Plan de Release",
          "La Visión del producto, el Backlog y el Sprint Backlog"
        ],
        "correct": 0,
        "exp": [
          "Correcto: son los tres artefactos formales que define la Guía Scrum.",
          "Incorrecto: estos son los tres compromisos asociados a los artefactos, no los artefactos en sí.",
          "Incorrecto: ninguno de estos términos aparece como artefacto formal en la Guía Scrum.",
          "Incorrecto: mezcla conceptos informales (Visión) con artefactos reales, y omite el Product Backlog y el Incremento."
        ],
        "trap": "No confundas 'artefacto' con su 'compromiso' asociado: son conceptos distintos, aunque van siempre emparejados."
      },
      {
        "type": "single",
        "q": "¿Qué compromiso lleva asociado el Product Backlog?",
        "opts": [
          "El Objetivo del Sprint",
          "La Definición de Hecho",
          "El Objetivo del Producto",
          "El Incremento"
        ],
        "correct": 2,
        "exp": [
          "Incorrecto: el Objetivo del Sprint es el compromiso del Sprint Backlog, no del Product Backlog.",
          "Incorrecto: la Definición de Hecho es el compromiso del Incremento.",
          "Correcto: el Product Backlog lleva asociado el Objetivo del Producto.",
          "Incorrecto: el Incremento es un artefacto en sí mismo, no un compromiso."
        ],
        "trap": "Empareja siempre: Product Backlog-Objetivo del Producto, Sprint Backlog-Objetivo del Sprint, Incremento-Definición de Hecho."
      },
      {
        "type": "single",
        "q": "¿Cómo describe la Guía Scrum al Product Backlog?",
        "opts": [
          "Una lista fija y priorizada de requisitos aprobada por los interesados",
          "Una lista emergente y ordenada de todo lo necesario para mejorar el producto",
          "Un documento de especificación técnica detallada",
          "Un plan de release con fechas fijas de entrega"
        ],
        "correct": 1,
        "exp": [
          "Incorrecto: la Guía nunca habla de una lista 'fija' ni 'priorizada'; usa 'emergente' y 'ordenada'.",
          "Correcto: así describe la Guía el Product Backlog.",
          "Incorrecto: no es una especificación técnica, sino una lista de trabajo ordenada.",
          "Incorrecto: la Guía Scrum no define planes de release con fechas fijas como artefacto."
        ],
        "trap": "Palabras clave textuales: 'emergente' y 'ordenada' — nunca 'fija' ni 'priorizada'."
      },
      {
        "type": "single",
        "q": "¿Qué es el Objetivo del Producto (Product Goal)?",
        "opts": [
          "Un objetivo a corto plazo válido solo para el Sprint en curso",
          "Un estado futuro del producto que sirve de diana a largo plazo para el Equipo Scrum",
          "Una lista detallada de tareas para los Developers",
          "Un documento que se aprueba una sola vez y no se vuelve a revisar"
        ],
        "correct": 1,
        "exp": [
          "Incorrecto: eso describe al Objetivo del Sprint, no al Objetivo del Producto.",
          "Correcto: el Objetivo del Producto describe un estado futuro del producto y es un objetivo a largo plazo.",
          "Incorrecto: esa es una descripción más cercana al Sprint Backlog.",
          "Incorrecto: el Objetivo del Producto se revisa y se sustituye por uno nuevo cuando se cumple o se abandona."
        ],
        "trap": "Objetivo del Producto = largo plazo; Objetivo del Sprint = corto plazo, válido solo para ese Sprint."
      },
      {
        "type": "tf",
        "q": "El Product Backlog puede considerarse completo en algún momento del desarrollo del producto.",
        "opts": [
          "Verdadero",
          "Falso"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrecto: el Product Backlog es emergente por naturaleza y evoluciona mientras el producto y su entorno cambian.",
          "Correcto: la Guía indica que el Product Backlog nunca está completo; solo presenta lo que se conoce y entiende mejor en un momento dado."
        ],
        "trap": "El carácter 'emergente' implica que el Product Backlog nunca se cierra ni se da por terminado."
      },
      {
        "type": "single",
        "q": "¿Quién puede modificar el Sprint Backlog durante el Sprint?",
        "opts": [
          "Solo los Developers",
          "El Product Owner, cuando cambian las prioridades",
          "El Scrum Master, para mantener el tablero actualizado",
          "Cualquier interesado que lo solicite"
        ],
        "correct": 0,
        "exp": [
          "Correcto: el Sprint Backlog es un plan por y para los Developers, y solo ellos pueden cambiarlo durante el Sprint.",
          "Incorrecto: el PO puede aportar contexto o renegociar alcance, pero no modifica el Sprint Backlog directamente.",
          "Incorrecto: el rol del Scrum Master es facilitar, no gestionar el contenido del Sprint Backlog.",
          "Incorrecto: los interesados externos no tienen autoridad para modificar el Sprint Backlog."
        ],
        "trap": "El Sprint Backlog es propiedad operativa exclusiva de los Developers durante el Sprint."
      },
      {
        "type": "multi",
        "q": "¿Qué afirmaciones sobre el Objetivo del Sprint son correctas?",
        "opts": [
          "Se crea durante el Sprint Planning como aportación a los elementos seleccionados del Product Backlog",
          "Da coherencia y foco al equipo, animando a trabajar junto en lugar de en iniciativas separadas",
          "Es una lista fija de tareas que no puede modificarse bajo ningún concepto",
          "Permite cierta flexibilidad sobre el trabajo exacto necesario para conseguirlo"
        ],
        "correct": [
          0,
          1,
          3
        ],
        "exp": [
          "Correcto: el Objetivo del Sprint se redacta durante el Sprint Planning.",
          "Correcto: es precisamente la función que cumple el Objetivo del Sprint.",
          "Incorrecto: el Objetivo del Sprint no es una lista de tareas, sino un compromiso de propósito; la lista de tareas es el Sprint Backlog, que sí puede evolucionar.",
          "Correcto: el Objetivo del Sprint deja margen sobre cómo lograrlo exactamente, aunque el objetivo en sí se mantenga."
        ],
        "trap": "No confundas el Objetivo del Sprint (un compromiso de propósito) con la lista de elementos seleccionados (que sí puede cambiar)."
      },
      {
        "type": "single",
        "q": "Si a mitad de Sprint los Developers descubren que el trabajo es distinto de lo esperado, ¿qué deberían hacer?",
        "opts": [
          "Abandonar el Objetivo del Sprint y fijar uno nuevo de inmediato",
          "Renegociar con el Product Owner el alcance del Sprint Backlog sin cambiar el Objetivo del Sprint",
          "Ignorar el cambio y continuar con el plan original pase lo que pase",
          "Esperar hasta el Sprint Review para informar de cualquier cambio"
        ],
        "correct": 1,
        "exp": [
          "Incorrecto: el Objetivo del Sprint no se abandona a mitad de Sprint; se protege precisamente para dar foco.",
          "Correcto: los Developers pueden renegociar el alcance con el PO cuando aprenden más, manteniendo intacto el Objetivo del Sprint.",
          "Incorrecto: Scrum se basa en la adaptación continua, no en ignorar lo aprendido.",
          "Incorrecto: la adaptación del plan ocurre durante el Sprint, no se pospone hasta el Sprint Review."
        ],
        "trap": "El alcance del Sprint Backlog es negociable durante el Sprint; el Objetivo del Sprint, una vez fijado, no."
      },
      {
        "type": "multi",
        "q": "¿Qué afirmaciones sobre el Incremento son correctas?",
        "opts": [
          "Puede entregarse a los interesados antes de que finalice el Sprint",
          "Solo puede crearse un Incremento por Sprint",
          "Cada Incremento se suma a los anteriores y debe verificarse que todos funcionen juntos",
          "El Sprint Review es el único momento en que se puede liberar valor a los interesados"
        ],
        "correct": [
          0,
          2
        ],
        "exp": [
          "Correcto: no hace falta esperar al final del Sprint para entregar valor.",
          "Incorrecto: pueden crearse varios Incrementos dentro de un mismo Sprint.",
          "Correcto: los Incrementos son acumulativos y se verifican a fondo en su conjunto.",
          "Incorrecto: la Guía rechaza explícitamente esta idea; el Sprint Review no es la única vía para liberar valor."
        ],
        "trap": "Dos trampas típicas: creer que hay un único Incremento por Sprint, y creer que el Sprint Review es la única oportunidad de entregar valor."
      },
      {
        "type": "multi",
        "q": "¿Qué parejas artefacto-compromiso son correctas?",
        "opts": [
          "Product Backlog - Objetivo del Producto",
          "Sprint Backlog - Objetivo del Sprint",
          "Incremento - Definición de Hecho",
          "Sprint Backlog - Definición de Hecho"
        ],
        "correct": [
          0,
          1,
          2
        ],
        "exp": [
          "Correcto: es la pareja artefacto-compromiso correcta.",
          "Correcto: es la pareja artefacto-compromiso correcta.",
          "Correcto: es la pareja artefacto-compromiso correcta.",
          "Incorrecto: la Definición de Hecho es el compromiso del Incremento, no del Sprint Backlog."
        ],
        "trap": "Cada uno de los tres artefactos tiene exactamente un compromiso propio: no mezcles los pares."
      },
      {
        "type": "tf",
        "q": "El Objetivo del Producto actual debe cumplirse o abandonarse formalmente antes de que el Equipo Scrum asuma el siguiente.",
        "opts": [
          "Verdadero",
          "Falso"
        ],
        "correct": [
          0
        ],
        "exp": [
          "Correcto: el Objetivo del Producto actual debe cumplirse (o abandonarse formalmente) antes de que el Equipo Scrum asuma el siguiente.",
          "Incorrecto: la Guía es clara en que no se puede acumular objetivos del producto en paralelo sin cerrar el anterior."
        ],
        "trap": "El Objetivo del Producto es un compromiso a largo plazo secuencial: no se apilan varios objetivos activos a la vez."
      }
    ]
  },
  {
    "id": "definition-of-done",
    "name": "Definición de Hecho",
    "theory": "<h3>Qué es</h3><p>La Definición de Hecho (Definition of Done, DoD) es una descripción formal del estado que debe alcanzar el Incremento para cumplir las medidas de calidad requeridas por el producto. Es el <b>compromiso asociado al Incremento</b>, igual que el Objetivo de Producto lo es del Product Backlog y el Objetivo de Sprint lo es del Sprint Backlog.</p><h3>Cuándo 'nace' un Incremento</h3><p>En el instante en que un elemento del Product Backlog cumple la Definición de Hecho, nace un Incremento. Cada nuevo Incremento se suma a todos los anteriores y se verifica minuciosamente, garantizando que todos los Incrementos funcionen juntos.</p><h3>Qué ocurre si un elemento no cumple la DoD</h3><ul><li>Si un elemento del Product Backlog no cumple la Definición de Hecho, no puede liberarse, y ni siquiera puede presentarse en la Revisión de Sprint (Sprint Review).</li><li>En su lugar, vuelve al Product Backlog para su consideración futura.</li></ul><h3>Origen de la DoD: estándar organizativo o creada por el equipo</h3><ul><li>Si la Definición de Hecho para un incremento forma parte de los estándares de la organización, todos los Scrum Teams deben seguirla como mínimo.</li><li>Si no existe un estándar organizativo, el Scrum Team debe crear una Definición de Hecho apropiada para el producto.</li><li>Los Developers están obligados a ajustarse a la Definición de Hecho.</li><li>Si varios Scrum Teams trabajan juntos en un mismo producto, deben definir y cumplir mutuamente la misma Definición de Hecho.</li></ul><h3>Relación con la transparencia</h3><p>La Definición de Hecho crea transparencia porque proporciona a todos una comprensión compartida de qué trabajo se ha completado como parte del Incremento. Un elemento que no cumple la DoD no puede presentarse como terminado ante nadie, ni dentro ni fuera del equipo.</p><h3>Trampa frecuente</h3><p>No confundas la Definición de Hecho con los 'criterios de aceptación' de un elemento concreto del Product Backlog: los criterios de aceptación son específicos de un ítem, mientras que la DoD es un estándar de calidad transversal aplicado a todo el Incremento. Tampoco es negociable con el Product Owner ni con los stakeholders, ni puede relajarse puntualmente en un Sprint por conveniencia: es un mínimo de calidad estable, aunque puede mejorarse con el tiempo.</p>",
    "questions": [
      {
        "type": "tf",
        "q": "Solo los Developers pueden influir en la Definición de Hecho; nadie más tiene voz en ella.",
        "opts": [
          "Verdadero",
          "Falso"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrecto.",
          "Correcto: todo el Scrum Team puede participar en la creación de la Definición de Hecho, y si la organización tiene un estándar de calidad, todos los Scrum Teams deben seguirlo como mínimo — no es una decisión exclusiva de los Developers."
        ],
        "trap": "La Definición de Hecho puede venir marcada por un estándar organizativo o por todo el Scrum Team, no unilateralmente solo por los Developers."
      },
      {
        "type": "single",
        "q": "¿Cuál es una forma en que un Scrum Team puede reducir la deuda técnica con el tiempo?",
        "opts": [
          "Programar un Sprint de \"hardening\" dedicado cuando la deuda se vuelva inmanejable",
          "Mejorar la Definición de Hecho para que el trabajo de calidad se haga como parte de cada Incremento",
          "Delegar todas las preocupaciones de calidad en un departamento de QA externo"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrecto: los Sprints de \"hardening\" no son un concepto de la Guía Scrum; posponer el trabajo de calidad solo deja que la deuda técnica se acumule más.",
          "Correcto: fortalecer la Definición de Hecho asegura que las prácticas de calidad ocurran de forma continua, que es como Scrum aborda la deuda técnica.",
          "Incorrecto: la calidad es responsabilidad de todo el Scrum Team, no algo que se pueda externalizar por completo."
        ],
        "trap": "No existen los Sprints de \"hardening\" en Scrum — la calidad se incorpora de forma continua a través de la Definición de Hecho, no se arregla después en un Sprint especial."
      },
      {
        "type": "multi",
        "q": "¿Cuáles tres frases describen mejor el propósito de una Definición de Hecho?",
        "opts": [
          "Rastrea el porcentaje completado de un elemento del Product Backlog",
          "Define lo que se necesita para que un Incremento esté listo para el release",
          "Crea transparencia sobre el trabajo inspeccionado en la Sprint Review",
          "Guía a los Developers para elaborar una previsión en la Sprint Planning",
          "Ofrece una plantilla de lo que debe incluirse en la documentación del proyecto"
        ],
        "correct": [
          1,
          2,
          3
        ],
        "exp": [
          "Incorrecto: la DoD es un umbral de calidad binario (se cumple o no), no un indicador de porcentaje completado.",
          "Correcto: la DoD define el estado de calidad que debe alcanzar un Incremento para considerarse listo.",
          "Correcto: una DoD compartida da a todos el mismo entendimiento de lo que realmente se ha terminado, que es lo que se inspecciona en la Sprint Review.",
          "Correcto: conocer la DoD ayuda a los Developers a juzgar cuánto trabajo pueden prever realistamente para el Sprint.",
          "Incorrecto: la DoD es un estándar de calidad, no una plantilla de documentación."
        ],
        "trap": "La DoD no es un porcentaje de progreso ni una checklist de documentación — es un umbral de calidad compartido que habilita la transparencia y una previsión realista."
      },
      {
        "type": "single",
        "q": "¿Qué es la Definición de Hecho (Definition of Done) según la Guía Scrum?",
        "opts": [
          "El conjunto de criterios de aceptación específicos de un elemento del Product Backlog",
          "Una descripción formal del estado que debe alcanzar el Incremento para cumplir las medidas de calidad requeridas por el producto",
          "Un documento que el Product Owner firma al final de cada Sprint para aprobar el trabajo",
          "La lista de tareas técnicas pendientes que aparece en el Sprint Backlog"
        ],
        "correct": 1,
        "exp": [
          "Incorrecto: los criterios de aceptación son propios de un elemento concreto; la DoD es un estándar de calidad que aplica a todo el Incremento.",
          "Correcto: la Guía define la DoD como una descripción formal del estado del Incremento cuando cumple las medidas de calidad requeridas para el producto.",
          "Incorrecto: la Guía no contempla ninguna firma de aprobación del Product Owner; el cumplimiento de la DoD no depende de una validación humana posterior.",
          "Incorrecto: eso describiría más bien el trabajo planificado en el Sprint Backlog, no la DoD."
        ],
        "trap": "Confundir la DoD (estándar de calidad de todo el Incremento) con un documento de aprobación o con una lista de tareas."
      },
      {
        "type": "tf",
        "q": "Si varios Scrum Teams trabajan juntos en un mismo producto, cada equipo puede mantener su propia Definición de Hecho sin necesidad de coordinarse con los demás.",
        "opts": [
          "Verdadero",
          "Falso"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrecto: la Guía exige justamente lo contrario cuando varios equipos comparten un mismo producto.",
          "Correcto: la Guía establece que, si varios Scrum Teams trabajan juntos en un mismo producto, deben definir y cumplir mutuamente la misma Definición de Hecho."
        ],
        "trap": "En contextos con varios equipos sobre un mismo producto, la DoD debe ser única y compartida, no un estándar interno de cada equipo."
      },
      {
        "type": "single",
        "q": "La organización tiene un estándar de calidad aplicable a todos sus productos. ¿Cómo afecta esto a la Definición de Hecho de un Scrum Team concreto?",
        "opts": [
          "El Scrum Team puede ignorarlo si ya tiene su propia DoD definida",
          "El Scrum Team debe seguirlo como mínimo",
          "Solo se aplica al primer Incremento del producto",
          "No guarda relación con la DoD del equipo"
        ],
        "correct": 1,
        "exp": [
          "Incorrecto: un estándar organizativo no puede descartarse solo porque el equipo tenga su propia definición.",
          "Correcto: la Guía indica que si la DoD forma parte de los estándares de la organización, todos los Scrum Teams deben seguirla como mínimo.",
          "Incorrecto: la Guía no establece ninguna limitación temporal de este tipo.",
          "Incorrecto: existe una relación directa y obligatoria."
        ],
        "trap": "El estándar organizativo actúa como un suelo mínimo obligatorio, nunca como algo opcional o descartable."
      },
      {
        "type": "single",
        "q": "¿Quién está obligado a ajustarse a la Definición de Hecho al construir el Incremento?",
        "opts": [
          "El Product Owner, al aceptar el Incremento",
          "Los Developers",
          "Los stakeholders, durante la Revisión de Sprint",
          "El Scrum Master, al cerrar el Sprint"
        ],
        "correct": 1,
        "exp": [
          "Incorrecto: la Guía no describe una aceptación formal del PO como mecanismo de cumplimiento de la DoD.",
          "Correcto: la Guía indica explícitamente que los Developers están obligados a ajustarse a la Definición de Hecho.",
          "Incorrecto: los stakeholders participan en la revisión, pero no son quienes deben ajustarse a la DoD al construir el trabajo.",
          "Incorrecto: el Scrum Master no construye el Incremento ni valida su cumplimiento de la DoD."
        ],
        "trap": "El cumplimiento de la DoD recae en quienes construyen el Incremento, los Developers, no en una validación externa posterior."
      },
      {
        "type": "tf",
        "q": "Un elemento del Product Backlog que no cumple la Definición de Hecho puede presentarse en la Revisión de Sprint si el equipo explica por qué no está terminado.",
        "opts": [
          "Verdadero",
          "Falso"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrecto: la Guía no contempla ninguna excepción por justificación.",
          "Correcto: la Guía es tajante — si no cumple la DoD, ni siquiera puede presentarse en la Revisión de Sprint; vuelve al Product Backlog."
        ],
        "trap": "'Ni siquiera se puede presentar en la revisión de Sprint' no admite excepciones ni justificaciones."
      },
      {
        "type": "single",
        "q": "¿Qué debe hacer un Scrum Team si en su organización no existe una Definición de Hecho establecida como estándar?",
        "opts": [
          "Trabajar sin ninguna Definición de Hecho hasta que la organización defina una",
          "Crear una Definición de Hecho apropiada para su producto",
          "Adoptar sin adaptar la DoD de otro equipo de la organización",
          "Dejar que cada Developer decida individualmente cuándo un elemento está terminado"
        ],
        "correct": 1,
        "exp": [
          "Incorrecto: la DoD nunca es opcional, ni siquiera de forma temporal.",
          "Correcto: la Guía indica que si no existe un estándar organizativo, el Scrum Team debe crear una Definición de Hecho apropiada para el producto.",
          "Incorrecto: la Guía no sugiere copiar la DoD de otro equipo sin adaptarla al propio producto.",
          "Incorrecto: la DoD es un estándar del equipo, no una decisión individual de cada Developer."
        ],
        "trap": "La DoD nunca es opcional: si no hay estándar organizativo, la responsabilidad de crearla recae en el propio Scrum Team."
      },
      {
        "type": "single",
        "q": "De los tres artefactos de Scrum, ¿cuál tiene la Definición de Hecho como su compromiso asociado?",
        "opts": [
          "El Product Backlog",
          "El Sprint Backlog",
          "El Incremento",
          "El Sprint Backlog y el Incremento por igual"
        ],
        "correct": 2,
        "exp": [
          "Incorrecto: el compromiso del Product Backlog es el Objetivo de Producto.",
          "Incorrecto: el compromiso del Sprint Backlog es el Objetivo de Sprint.",
          "Correcto: la Definición de Hecho es el compromiso asociado al Incremento.",
          "Incorrecto: cada artefacto tiene exactamente un compromiso; no se comparte entre dos artefactos."
        ],
        "trap": "Cada artefacto tiene exactamente un compromiso asociado: no intercambies los pares Objetivo de Producto/Product Backlog, Objetivo de Sprint/Sprint Backlog y DoD/Incremento."
      },
      {
        "type": "tf",
        "q": "El Product Owner puede acordar con los Developers relajar puntualmente la Definición de Hecho en un Sprint concreto para llegar a tiempo a una fecha de entrega.",
        "opts": [
          "Verdadero",
          "Falso"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrecto: la presión por una fecha no autoriza a rebajar la DoD.",
          "Correcto: la DoD no es negociable, ni siquiera con el Product Owner, y no se ajusta puntualmente por conveniencia en un Sprint concreto."
        ],
        "trap": "La presión por una fecha de entrega no es motivo válido para rebajar la DoD: no es negociable, ni siquiera con el Product Owner."
      },
      {
        "type": "single",
        "q": "¿Qué relación existe entre la Definición de Hecho y la transparencia en Scrum?",
        "opts": [
          "No existe relación directa entre ambos conceptos",
          "La DoD crea transparencia al proporcionar a todos una comprensión compartida de qué trabajo se considera completado en el Incremento",
          "La DoD sustituye la necesidad de transparencia entre el equipo y los stakeholders",
          "La DoD solo afecta a la transparencia de cara a los stakeholders externos, no dentro del equipo"
        ],
        "correct": 1,
        "exp": [
          "Incorrecto: la Guía sí establece una relación explícita entre la DoD y la transparencia.",
          "Correcto: cita del propósito de la DoD en la Guía — proporciona una comprensión compartida de qué significa 'hecho'.",
          "Incorrecto: la DoD no sustituye la transparencia, es uno de sus mecanismos.",
          "Incorrecto: la comprensión compartida beneficia a todo el Scrum Team, no solo a la comunicación externa."
        ],
        "trap": "La DoD es un mecanismo de transparencia compartida para todo el Scrum Team, no únicamente una cara externa hacia los stakeholders."
      },
      {
        "type": "multi",
        "q": "Un elemento del Product Backlog no cumple la Definición de Hecho al final del Sprint. ¿Qué afirmaciones son correctas según la Guía Scrum?",
        "opts": [
          "No puede liberarse",
          "No puede ni siquiera presentarse en la Revisión de Sprint",
          "Vuelve al Product Backlog para su consideración futura",
          "Se cuenta igualmente como parte del Incremento entregado, aunque incompleto"
        ],
        "correct": [
          0,
          1,
          2
        ],
        "exp": [
          "Correcto: un elemento que no cumple la DoD no puede liberarse.",
          "Correcto: la Guía indica que ni siquiera puede presentarse en la Revisión de Sprint.",
          "Correcto: en su lugar, vuelve al Product Backlog para su consideración futura.",
          "Incorrecto: solo los elementos que cumplen la DoD forman parte del Incremento; no existe una categoría de Incremento 'parcial'."
        ],
        "trap": "La opción trampa es la que sugiere que se puede 'contar parcialmente' como Incremento: si no cumple la DoD, sencillamente no forma parte del Incremento entregado."
      },
      {
        "type": "multi",
        "q": "¿Cuáles de las siguientes afirmaciones sobre la Definición de Hecho son correctas según la Guía Scrum?",
        "opts": [
          "Los Developers están obligados a ajustarse a ella al construir el Incremento",
          "Si es un estándar organizativo, todos los Scrum Teams deben cumplirlo como mínimo",
          "Si varios Scrum Teams trabajan en el mismo producto, deben definir y cumplir mutuamente la misma DoD",
          "El Product Owner puede modificarla unilateralmente en cualquier momento sin acuerdo del resto del Scrum Team"
        ],
        "correct": [
          0,
          1,
          2
        ],
        "exp": [
          "Correcto: cita literal de la Guía sobre la obligación de los Developers.",
          "Correcto: un estándar organizativo se sigue siempre como mínimo.",
          "Correcto: varios equipos sobre el mismo producto deben compartir y cumplir la misma DoD.",
          "Incorrecto: la DoD no es propiedad exclusiva del Product Owner; su creación y cumplimiento involucran a todo el Scrum Team."
        ],
        "trap": "La DoD no es propiedad exclusiva del Product Owner: no puede imponerla ni cambiarla en solitario sin el resto del Scrum Team."
      }
    ]
  },
  {
    "id": "autogestio",
    "name": "Equipos autogestionados",
    "theory": "<h3>Qué significa ser autogestionado (Guía 2020)</h3><p>El Scrum Team es <b>autogestionado</b> (self-managing): decide internamente <b>quién</b> hace <b>qué</b>, <b>cuándo</b> y <b>cómo</b>. Este término sustituyó en la versión 2020 al antiguo auto-organizado (self-organizing) de la Guía 2017; nadie fuera del equipo, ni siquiera el Scrum Master, asigna tareas a los Developers.</p><h3>Una sola unidad, sin sub-equipos</h3><p>El Scrum Team está formado por un Scrum Master, un Product Owner y los Developers. No existen sub-equipos ni jerarquías dentro de él: es una unidad cohesionada enfocada en un único objetivo a la vez, el Product Goal.</p><h3>Multifuncionalidad</h3><p>Los Developers son <b>multifuncionales</b>: entre todos poseen colectivamente las habilidades necesarias para crear un Incremento de valor en cada Sprint. Esto no exige que cada persona sepa hacer de todo; es una propiedad del equipo en su conjunto, no de cada individuo.</p><h3>Tamaño del equipo</h3><p>La Guía recomienda un Scrum Team lo bastante pequeño para mantenerse ágil y lo bastante grande para completar trabajo significativo dentro de un Sprint: normalmente <b>10 personas o menos</b>. Los equipos más pequeños suelen comunicarse mejor y ser más productivos. Si un Scrum Team crece demasiado, debería considerar reorganizarse en varios Scrum Teams cohesionados, todos centrados en el mismo producto y compartiendo el mismo Product Goal, el mismo Product Backlog y el mismo Product Owner.</p><h3>Por qué importa</h3><p>La Guía asocia la autogestión, la multifuncionalidad y la cohesión del equipo con una mayor creatividad y productividad a la hora de resolver problemas complejos.</p><h3>Trampas frecuentes en el examen</h3><ul><li>Confundir autogestionado (2020) con auto-organizado (2017): no son sinónimos intercambiables como terminología oficial vigente.</li><li>Pensar que la autogestión elimina la rendición de cuentas: los Developers se responsabilizan mutuamente como profesionales.</li><li>Creer que el Scrum Master asigna trabajo o decide quién forma parte del equipo: ambas cosas romperían la autogestión.</li><li>Suponer que un equipo demasiado grande debe dividir su Product Backlog: la solución es reorganizarse en varios equipos que compartan un único Product Goal, Product Backlog y Product Owner.</li></ul>",
    "questions": [
      {
        "type": "tf",
        "q": "La autogestión significa que el Scrum Team puede decidir por sí mismo qué eventos de Scrum necesita realmente y saltarse el resto.",
        "opts": [
          "Verdadero",
          "Falso"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrecto.",
          "Correcto: la autogestión cubre quién hace qué, cuándo y cómo dentro de Scrum — no llega hasta el punto de poder saltarse los eventos que exige el marco de trabajo, que siguen siendo obligatorios y con timebox."
        ],
        "trap": "La autogestión trata de decisiones internas sobre cómo hacer el trabajo, no de una licencia para saltarse los eventos que exige el marco de trabajo."
      },
      {
        "type": "single",
        "q": "Según la Guía Scrum 2020, ¿qué decide internamente un equipo autogestionado?",
        "opts": [
          "Quién hace qué, cuándo y cómo",
          "El presupuesto asignado a cada Sprint",
          "Quién ocupará el rol de Product Owner en el siguiente Sprint",
          "Qué metodología alternativa usar en vez de Scrum"
        ],
        "correct": 0,
        "exp": [
          "Correcto: es la definición literal de la Guía 2020 sobre autogestión.",
          "Incorrecto: la Guía no atribuye decisiones de presupuesto a la autogestión del equipo.",
          "Incorrecto: el Product Owner es una responsabilidad estable, no algo que rote entre Sprints.",
          "Incorrecto: la autogestión no implica elegir un marco distinto de Scrum."
        ],
        "trap": "La fórmula exacta es 'quién hace qué, cuándo y cómo' — memorízala literalmente, es una pregunta de cita textual habitual."
      },
      {
        "type": "tf",
        "q": "Autogestionado y auto-organizado son términos intercambiables en la Guía Scrum 2020.",
        "opts": [
          "Verdadero",
          "Falso"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrecto.",
          "Correcto: auto-organizado era la terminología de 2017; la Guía 2020 la sustituyó por autogestionado."
        ],
        "trap": "Trampa de vocabulario muy frecuente: usar el término antiguo (2017) como si fuera el vigente."
      },
      {
        "type": "single",
        "q": "¿Qué significa que un Scrum Team sea multifuncional?",
        "opts": [
          "Cada miembro debe dominar todas las habilidades por sí solo",
          "Entre todos, el equipo posee colectivamente las habilidades necesarias para crear valor cada Sprint",
          "El equipo trabaja en varios productos a la vez",
          "Los miembros rotan de rol cada Sprint"
        ],
        "correct": 1,
        "exp": [
          "Incorrecto: la multifuncionalidad no exige que cada individuo lo sepa hacer todo.",
          "Correcto: es una propiedad del equipo en su conjunto, no de cada persona.",
          "Incorrecto: no tiene relación con el número de productos.",
          "Incorrecto: la Guía no menciona rotación de roles."
        ],
        "trap": "Multifuncional es una propiedad colectiva del equipo, no una exigencia individual de cada miembro."
      },
      {
        "type": "single",
        "q": "¿Qué recomienda la Guía Scrum sobre el tamaño de un Scrum Team?",
        "opts": [
          "Como máximo 5 personas, sin excepciones",
          "Lo bastante pequeño para ser ágil y lo bastante grande para completar trabajo significativo, normalmente 10 personas o menos",
          "Un mínimo de 15 personas para garantizar cobertura de habilidades",
          "La Guía no da ninguna recomendación de tamaño"
        ],
        "correct": 1,
        "exp": [
          "Incorrecto: la Guía no fija un máximo estricto de 5; menciona 10 o menos como referencia habitual.",
          "Correcto: cita orientativa de la Guía 2020 sobre el tamaño del Scrum Team.",
          "Incorrecto: la Guía no recomienda un mínimo de 15; equipos más grandes tienden a comunicarse peor.",
          "Incorrecto: sí existe una recomendación explícita de tamaño."
        ],
        "trap": "El número '10 o menos' es una referencia orientativa citada literalmente, no una regla rígida obligatoria."
      },
      {
        "type": "single",
        "q": "Cuando un Scrum Team se vuelve demasiado grande, ¿qué recomienda la Guía?",
        "opts": [
          "Añadir más Scrum Masters para coordinar sub-equipos",
          "Considerar reorganizarse en varios Scrum Teams cohesionados que compartan el mismo Product Goal, Product Backlog y Product Owner",
          "Dividir el Product Backlog en varios backlogs paralelos",
          "Crear una capa de gestión por encima del Scrum Team para coordinar el trabajo"
        ],
        "correct": 1,
        "exp": [
          "Incorrecto: varios Scrum Masters dentro de un mismo equipo no es lo que recomienda la Guía.",
          "Correcto: es la recomendación literal de la Guía 2020 ante equipos demasiado grandes.",
          "Incorrecto: la Guía exige un único Product Backlog compartido entre los equipos.",
          "Incorrecto: no existe tal figura en Scrum; recrearía la jerarquía que el marco evita."
        ],
        "trap": "La respuesta correcta de escalado conserva siempre un único Product Goal, Product Backlog y Product Owner: nunca varios backlogs ni nuevas jerarquías."
      },
      {
        "type": "multi",
        "q": "¿Cuáles de las siguientes afirmaciones sobre los equipos Scrum autogestionados son correctas según la Guía 2020? (selecciona todas las que correspondan)",
        "opts": [
          "El equipo decide internamente quién hace qué, cuándo y cómo",
          "El Scrum Master asigna las tareas diarias a los Developers",
          "No existen sub-equipos ni jerarquías dentro del Scrum Team",
          "Los Developers se responsabilizan mutuamente como profesionales"
        ],
        "correct": [
          0,
          2,
          3
        ],
        "exp": [
          "Correcto: es la definición de autogestión de la Guía.",
          "Incorrecto: esto rompería la autogestión; el Scrum Master no asigna tareas.",
          "Correcto: la Guía prohíbe explícitamente sub-equipos y jerarquías dentro del Scrum Team.",
          "Correcto: la Guía indica que los Developers se responsabilizan mutuamente como profesionales."
        ],
        "trap": "El distractor de selección múltiple más habitual es incluir que el Scrum Master asigna tareas: suena plausible pero contradice la autogestión."
      },
      {
        "type": "tf",
        "q": "Los Developers pueden dividirse en sub-equipos estables por especialidad (por ejemplo, frontend y backend) dentro del mismo Scrum Team.",
        "opts": [
          "Verdadero",
          "Falso"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrecto.",
          "Correcto: la Guía prohíbe explícitamente formar sub-equipos o jerarquías dentro de un mismo Scrum Team, aunque las personas tengan especialidades distintas."
        ],
        "trap": "Aunque cada persona tenga una especialidad, no se formalizan sub-equipos permanentes dentro del Scrum Team."
      },
      {
        "type": "single",
        "q": "¿Cuál es el papel del Scrum Master respecto a la autogestión del equipo?",
        "opts": [
          "Asignar las tareas diarias para asegurar eficiencia",
          "Ayudar a los miembros del equipo a mejorar en autogestión y multifuncionalidad",
          "Decidir quién forma parte del equipo",
          "Sustituir a un Developer si falta personal"
        ],
        "correct": 1,
        "exp": [
          "Incorrecto: rompería la autogestión del equipo.",
          "Correcto: cita literal de las formas en que el Scrum Master sirve al Scrum Team.",
          "Incorrecto: no es una responsabilidad del Scrum Master descrita en la Guía.",
          "Incorrecto: no forma parte de las responsabilidades del Scrum Master."
        ],
        "trap": "Cualquier opción donde el Scrum Master decida por el equipo rompe el principio de autogestión."
      },
      {
        "type": "multi",
        "q": "¿Qué beneficios asocia la Guía Scrum con la autogestión, la multifuncionalidad y la cohesión del equipo? (selecciona todas las que correspondan)",
        "opts": [
          "Mayor creatividad y productividad para resolver problemas complejos",
          "Fechas de entrega fijas y garantizadas para los stakeholders",
          "Mejor comunicación cuando el equipo se mantiene pequeño",
          "Eliminación de la necesidad de un Product Owner"
        ],
        "correct": [
          0,
          2
        ],
        "exp": [
          "Correcto: la Guía asocia la autogestión y la multifuncionalidad con más creatividad y productividad.",
          "Incorrecto: el enfoque empírico de Scrum evita comprometerse con fechas fijas garantizadas.",
          "Correcto: la Guía señala que los equipos más pequeños suelen comunicarse mejor.",
          "Incorrecto: el Product Owner sigue siendo una responsabilidad necesaria, sea cual sea el tamaño del equipo."
        ],
        "trap": "Los distractores mezclan conceptos que suenan a beneficio pero no están respaldados por la Guía, como fechas fijas o prescindir del Product Owner."
      }
    ]
  },
  {
    "id": "forecasting",
    "name": "Forecasting y planificación de releases",
    "theory": "<h3>Prácticas mencionadas por la Guía</h3><p>La Guía Scrum no impone ninguna técnica concreta de pronóstico. Simplemente reconoce que existen <b>diversas prácticas para pronosticar el progreso</b>, como los <b>burn-down charts, burn-up charts o los diagramas de flujo acumulado (cumulative flow)</b>. Se citan a título de ejemplo, no como requisito del marco.</p><h3>El límite de estas herramientas</h3><p>La propia Guía advierte que, aunque estas prácticas han demostrado ser útiles, <b>no sustituyen la importancia del empirismo</b>. Ningún gráfico por sí solo garantiza buenas decisiones si no está respaldado por inspección y adaptación reales.</p><h3>Por qué el futuro no se puede predecir con certeza</h3><p>En entornos complejos —el terreno de juego de Scrum— <b>no se sabe de antemano qué va a ocurrir</b>. La Guía es explícita: solo lo que ya ha sucedido puede utilizarse para tomar decisiones de cara al futuro. Por eso el pronóstico en Scrum se apoya en datos reales y pasados (rendimiento histórico), no en estimaciones especulativas hechas antes de empezar.</p><h3>El Sprint como motor de previsibilidad</h3><p>La Guía no describe un proceso formal de \"release planning\", pero sí explica cómo Scrum logra previsibilidad: mediante los Sprints. Al tener una duración fija de un mes o menos, los Sprints garantizan que el progreso hacia el Product Goal se inspeccione y adapte, como mínimo, una vez al mes. Cuando el horizonte de un Sprint es demasiado largo, el Sprint Goal puede invalidarse, la complejidad puede aumentar y el riesgo puede crecer; por eso los Sprints más cortos generan más ciclos de aprendizaje y limitan el riesgo de coste y esfuerzo a un marco temporal más pequeño.</p><h3>El pronóstico dentro del Sprint</h3><p>Durante la Sprint Planning son los propios Developers quienes elaboran su pronóstico de cuánto trabajo pueden completar en el Sprint. Ese pronóstico gana fiabilidad cuando conocen su rendimiento pasado, su capacidad real para el Sprint que viene y su Definition of Done — no depende de aprobaciones externas, presupuestos o planes impuestos por otros.</p><h3>Trampas frecuentes en el examen</h3><ul><li>Confundir las \"prácticas citadas como ejemplo\" (burn-down, burn-up, cumulative flow) con \"técnicas obligatorias\": la Guía no exige ninguna.</li><li>Presentar un pronóstico de release como una fecha de compromiso fija, en vez de como una probabilidad basada en datos históricos.</li><li>Pensar que un gráfico sustituye la inspección empírica: la Guía dice explícitamente que no.</li><li>Creer que los Sprints más largos dan más seguridad: la Guía asocia, en realidad, los horizontes largos con más riesgo y con la posible invalidación del Sprint Goal.</li></ul>",
    "questions": [
      {
        "type": "single",
        "q": "El Product Owner no está disponible y no puede responder a las preguntas de los Developers antes de la Sprint Planning, dejándolos inseguros sobre su previsión. ¿Qué deberían hacer los Developers?",
        "opts": [
          "Ampliar el Sprint actual hasta que el Product Owner esté disponible para responder a todo",
          "Cancelar el próximo Sprint hasta que se resuelva la incertidumbre",
          "Hacer su mejor estimación informada y seguir adelante, realineándose con el Product Owner en cuanto esté disponible"
        ],
        "correct": [
          2
        ],
        "exp": [
          "Incorrecto: la duración del Sprint es fija y no se amplía para esperar información; el empirismo significa actuar con lo que se sabe y adaptarse después.",
          "Incorrecto: cancelar un Sprint se reserva para cuando el Objetivo del Sprint queda obsoleto, no para una incertidumbre ordinaria.",
          "Correcto: los Developers hacen la previsión más fiable posible con la información disponible y se ajustan a medida que aprenden más, de forma coherente con el enfoque empírico de Scrum."
        ],
        "trap": "Cierta incertidumbre en una previsión es normal en trabajo complejo; los Developers siguen adelante con su mejor criterio en lugar de paralizar el Sprint."
      },
      {
        "type": "single",
        "q": "Según la Guía Scrum, ¿cuál es el estatus de los burn-down charts, burn-up charts y los diagramas de flujo acumulado (cumulative flow)?",
        "opts": [
          "Son artefactos obligatorios que todo Scrum Team debe generar durante la Sprint Planning",
          "Son ejemplos de prácticas que pueden ayudar a pronosticar el progreso, pero la Guía no exige ninguna de ellas",
          "Son artefactos oficiales de Scrum, al mismo nivel que el Product Backlog y el Sprint Backlog",
          "Sustituyen la necesidad de inspección y adaptación empíricas"
        ],
        "correct": 1,
        "exp": [
          "Incorrecto. La Guía Scrum no obliga a usar ninguna herramienta o técnica de pronóstico concreta; los equipos son libres de usarlas o no.",
          "Correcto. La Guía cita los burn-down, burn-up y los diagramas de flujo acumulado únicamente como ejemplos de prácticas útiles, sin exigir ninguna de ellas.",
          "Incorrecto. Los únicos artefactos de Scrum son el Product Backlog, el Sprint Backlog y el Increment; estos gráficos de pronóstico no son artefactos del marco.",
          "Incorrecto. La Guía afirma explícitamente lo contrario: estas prácticas no sustituyen la importancia del empirismo."
        ],
        "trap": "Una trampa clásica de examen es tratar los ejemplos de la Guía (burn-down, burn-up, cumulative flow) como requisitos obligatorios o como artefactos oficiales, cuando no son ni lo uno ni lo otro."
      },
      {
        "type": "multi",
        "q": "¿Cuáles de las siguientes cita la Guía Scrum como ejemplos de prácticas para pronosticar el progreso? (Selecciona todas las que correspondan.)",
        "opts": [
          "Burn-down charts",
          "Diagramas de Gantt",
          "Burn-up charts",
          "Diagramas de flujo acumulado (cumulative flow)"
        ],
        "correct": [
          0,
          2,
          3
        ],
        "exp": [
          "Correcto. Los burn-down charts se citan explícitamente como ejemplo de práctica de pronóstico.",
          "Incorrecto. Los diagramas de Gantt pertenecen a la gestión de proyectos predictiva tradicional y no aparecen en ningún momento en la Guía Scrum.",
          "Correcto. Los burn-up charts se citan explícitamente como ejemplo.",
          "Correcto. Los diagramas de flujo acumulado se citan explícitamente como ejemplo."
        ],
        "trap": "Los diagramas de Gantt son un distractor clásico tomado del vocabulario de planificación predictiva (waterfall) que no aparece en ningún lugar de la Guía Scrum."
      },
      {
        "type": "tf",
        "q": "Verdadero o falso: como las prácticas de burn-down, burn-up y flujo acumulado han demostrado ser útiles, sustituyen la necesidad de empirismo en Scrum.",
        "opts": [
          "Verdadero",
          "Falso"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrecto. La Guía lo niega de forma explícita: ninguna práctica de pronóstico puede sustituir la inspección y adaptación empíricas reales.",
          "Correcto. La Guía Scrum afirma que estas prácticas, aunque útiles, no sustituyen la importancia del empirismo."
        ],
        "trap": "Confundir un gráfico de seguimiento visual con un sustituto de la inspección y adaptación reales es la idea errónea que pone a prueba esta pregunta."
      },
      {
        "type": "single",
        "q": "Según la visión de la complejidad de la Guía Scrum, ¿qué se puede saber realmente sobre el futuro?",
        "opts": [
          "Exactamente lo que ocurrirá, si se recopilan suficientes datos por adelantado",
          "Solo lo que ya ha sucedido; lo que ocurrirá a continuación es desconocido",
          "La fecha exacta de release, una vez dibujado un burn-down chart",
          "Todo, siempre que el Product Backlog esté completamente detallado antes del primer Sprint"
        ],
        "correct": 1,
        "exp": [
          "Incorrecto. Esto describe una mentalidad predictiva de análisis previo que contradice la premisa de Scrum sobre los entornos complejos.",
          "Correcto. La Guía afirma que en entornos complejos se desconoce qué ocurrirá, y que solo lo que ya ha sucedido puede usarse para tomar decisiones de cara al futuro.",
          "Incorrecto. Un gráfico ayuda a pronosticar, pero no puede garantizar una fecha futura exacta.",
          "Incorrecto. Detallar todo el Product Backlog por adelantado no elimina la incertidumbre inherente al trabajo complejo; es una idea de diseño exhaustivo previo (BDUF) que Scrum rechaza."
        ],
        "trap": "Las preguntas de examen suelen disfrazar la idea de 'diseño exhaustivo previo' como 'más planificación equivale a más certeza', lo cual contradice la postura de Scrum sobre la complejidad."
      },
      {
        "type": "single",
        "q": "¿Cuál de las siguientes es la base correcta para un pronóstico fiable, dado el enfoque empírico de Scrum ante el trabajo complejo?",
        "opts": [
          "Un plan detallado aprobado por la dirección antes de empezar a trabajar",
          "Datos sobre lo que ya ha sucedido, como el rendimiento pasado",
          "La opinión del stakeholder más sénior presente",
          "Una estimación exhaustiva y previa que cubra todo el Product Backlog"
        ],
        "correct": 1,
        "exp": [
          "Incorrecto. Un plan preaprobado es una idea propia de metodologías predictivas, no empírica; Scrum basa las decisiones en evidencias, no en autorizaciones previas.",
          "Correcto. La Guía es explícita: solo lo que ya ha sucedido, es decir, datos históricos reales, puede utilizarse para la toma de decisiones de cara al futuro.",
          "Incorrecto. La autoridad o la antigüedad no son una fuente de datos empíricos; el pronóstico debe apoyarse en evidencias, no en opiniones.",
          "Incorrecto. Una estimación exhaustiva previa es una práctica de diseño exhaustivo por adelantado (BDUF) en la que la teoría de procesos empírica de Scrum no se apoya."
        ],
        "trap": "Esta pregunta comprueba si el lector sigue prefiriendo artefactos de planificación previa (planes aprobados, estimaciones completas) frente a los datos empíricos reales como base del pronóstico."
      },
      {
        "type": "tf",
        "q": "Verdadero o falso: los Sprints permiten la previsibilidad al garantizar que el progreso hacia el Product Goal se inspecciona y adapta como mínimo una vez cada mes natural.",
        "opts": [
          "Verdadero",
          "Falso"
        ],
        "correct": [
          0
        ],
        "exp": [
          "Correcto. La Guía afirma que los Sprints permiten la previsibilidad al garantizar la inspección y adaptación del progreso hacia un Product Goal como mínimo cada mes natural, lo que se deriva directamente de la duración máxima de un mes del Sprint.",
          "Incorrecto. Esta es una afirmación directa de la Guía Scrum sobre el papel del Sprint en la previsibilidad."
        ],
        "trap": "Algunos candidatos asumen que la frecuencia mínima de inspección es semanal o está ligada a los Daily Scrums; en realidad está ligada a la duración máxima de un mes del Sprint."
      },
      {
        "type": "single",
        "q": "¿Qué dice la Guía Scrum que puede ocurrir cuando el horizonte de un Sprint es demasiado largo?",
        "opts": [
          "Nada cambia; los Sprints más largos son siempre al menos tan seguros como los cortos",
          "El Sprint Goal puede invalidarse, la complejidad puede aumentar y el riesgo puede crecer",
          "La Definition of Done pasa a ser opcional para ese Sprint",
          "El Product Owner obtiene autoridad formal sobre el contenido del Sprint Backlog"
        ],
        "correct": 1,
        "exp": [
          "Incorrecto. La Guía advierte de consecuencias negativas concretas cuando el horizonte de un Sprint se alarga demasiado; más largo no es intrínsecamente más seguro.",
          "Correcto. Es una consecuencia descrita directamente en la sección de la Guía Scrum dedicada al Sprint.",
          "Incorrecto. La Definition of Done siempre se aplica a cualquier trabajo que se declare Done, independientemente de la duración del Sprint.",
          "Incorrecto. La duración del Sprint no afecta a quién controla el contenido del Sprint Backlog; eso corresponde a los Developers."
        ],
        "trap": "Una idea errónea frecuente es que los Sprints más largos dan más estabilidad; la Guía asocia, en cambio, los horizontes largos con más riesgo y un posible Sprint Goal invalidado."
      },
      {
        "type": "multi",
        "q": "Según la descripción de la Sprint Planning en la Guía Scrum, ¿qué factores ayudan a los Developers a pronosticar con más confianza cuánto trabajo pueden completar en el Sprint? (Selecciona todas las que correspondan.)",
        "opts": [
          "Su rendimiento pasado",
          "Su capacidad disponible para el Sprint que viene",
          "Su Definition of Done",
          "La aprobación formal de un presupuesto por parte de la dirección"
        ],
        "correct": [
          0,
          1,
          2
        ],
        "exp": [
          "Correcto. Conocer su propio rendimiento pasado es uno de los factores que cita la Guía para un pronóstico más fiable.",
          "Correcto. Conocer su capacidad disponible para el Sprint que viene se cita junto al rendimiento pasado.",
          "Correcto. La Definition of Done se cita como el tercer factor que fundamenta el pronóstico de los Developers.",
          "Incorrecto. Pronosticar el trabajo del Sprint es una decisión interna que corresponde únicamente a los Developers; la Guía nunca lo vincula a aprobaciones de presupuesto externas."
        ],
        "trap": "Esta pregunta comprueba si el lector sigue creyendo que las aprobaciones externas (presupuestos, visto bueno de dirección) determinan el pronóstico del Sprint, cuando la Guía mantiene esa decisión totalmente en manos de los Developers."
      },
      {
        "type": "single",
        "q": "Según la Guía Scrum, ¿cuál es una razón para utilizar Sprints más cortos?",
        "opts": [
          "Eliminan la necesidad de una Sprint Review al final del Sprint",
          "Generan más ciclos de aprendizaje y limitan el riesgo de coste y esfuerzo a un marco temporal más pequeño",
          "Reducen el número de Developers necesarios en el Scrum Team",
          "Permiten al Product Owner saltarse la Sprint Planning"
        ],
        "correct": 1,
        "exp": [
          "Incorrecto. Todo Sprint, sea cual sea su duración, sigue incluyendo Sprint Planning, Daily Scrum, Sprint Review y Sprint Retrospective.",
          "Correcto. Esta es la razón que da la Guía Scrum para emplear Sprints más cortos.",
          "Incorrecto. La duración del Sprint no tiene relación con el tamaño o la composición del equipo.",
          "Incorrecto. La Sprint Planning siempre da inicio a cada Sprint; los Sprints más cortos no eliminan ningún evento de Scrum."
        ],
        "trap": "Algunos candidatos asumen que los Sprints más cortos implican menos eventos o menos rigor; en realidad todos los eventos de Scrum se siguen celebrando, solo se reduce la ventana de riesgo."
      }
    ]
  },
  {
    "id": "visio-valor",
    "name": "Visión y valor de producto",
    "theory": "<h3>¿Qué es un producto?</h3><p>La Guía Scrum (2020) define un producto como un <b>vehículo para entregar valor</b>. Tiene un límite claro, stakeholders conocidos, y usuarios o clientes bien definidos. Puede ser un servicio, un producto físico, o algo más abstracto (por ejemplo, una plataforma interna, un proceso, o una app).</p><h3>El Objetivo del Producto (Product Goal)</h3><p>El Objetivo del Producto describe un <b>estado futuro</b> del producto que sirve de objetivo a largo plazo para todo el Scrum Team. Todo lo que hace el equipo debería contribuir a ese objetivo. El resto del Product Backlog emerge para definir 'qué' cumplirá ese Objetivo del Producto. El Scrum Team debe cumplir (o abandonar deliberadamente) un Objetivo del Producto antes de asumir el siguiente.</p><h3>Maximizar el valor</h3><p>El Product Owner es responsable de maximizar el valor del producto resultante del trabajo del Scrum Team. La Guía no dicta cómo hacerlo exactamente: la forma concreta varía ampliamente entre organizaciones, culturas y mercados.</p><h3>Valor: más allá de los ingresos</h3><p>Más allá del texto literal de la Guía, es un principio ampliamente aceptado en la gestión de producto que 'valor' no es un concepto unidimensional. Un Product Owner competente suele considerar varias dimensiones, como:</p><ul><li><b>Valor para el cliente/usuario</b>: utilidad, experiencia, resolución real de un problema.</li><li><b>Valor de negocio</b>: ingresos, cuota de mercado, reducción de costes, ventaja competitiva.</li><li><b>Valor no monetario</b>: reputación de marca, cumplimiento normativo, aprendizaje o reducción de riesgo, capacidades técnicas futuras.</li></ul><p>Ninguna de estas categorías es una cita literal de la Guía Scrum, pero son conocimiento estándar de gestión de producto que un PSPO debe saber aplicar.</p><h3>Trampas frecuentes en el examen</h3><ul><li>Confundir el Objetivo del Producto con un roadmap o un plan de releases con fechas: el Product Goal es una dirección, no un calendario.</li><li>Asumir que un producto siempre es software o algo que se vende directamente: la Guía permite productos internos, servicios o conceptos abstractos.</li><li>Pensar que 'maximizar valor' significa únicamente 'maximizar ingresos': el valor de negocio es solo una de varias dimensiones posibles.</li></ul>",
    "questions": [
      {
        "type": "single",
        "q": "¿Cómo suele afectar la deuda técnica al valor que un Product Owner puede obtener de un producto con el tiempo?",
        "opts": [
          "No tiene ningún efecto real en la entrega de valor, solo en la comodidad de los Developers",
          "Tiende a ralentizar el ritmo de nueva funcionalidad y a aumentar la parte del presupuesto dedicada al mantenimiento",
          "Solo importa si el Scrum Master decide plantearla como un impedimento"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrecto: la deuda técnica tiene consecuencias de negocio reales, no solo de comodidad para los Developers.",
          "Correcto: a medida que crece la deuda técnica, entregar nueva funcionalidad se vuelve más lento y una parte mayor del presupuesto del producto se destina a mantener lo que ya existe, reduciendo el valor que se puede crear de cara al futuro.",
          "Incorrecto: la deuda técnica es una preocupación del Scrum Team y del Product Owner, la plantee o no el Scrum Master como impedimento."
        ],
        "trap": "La deuda técnica no es solo una molestia para los Developers — erosiona directamente el valor que un Product Owner puede entregar, al ralentizar el trabajo futuro y consumir presupuesto."
      },
      {
        "type": "single",
        "q": "¿Cómo define la Guía Scrum un 'producto'?",
        "opts": [
          "Un proyecto con fecha de inicio y fin definidas",
          "Un vehículo para entregar valor, con límites claros y usuarios o clientes definidos",
          "Un conjunto de funcionalidades de software exclusivamente",
          "Un documento de requisitos aprobado por el cliente"
        ],
        "correct": 1,
        "exp": [
          "Incorrecto: Scrum evita deliberadamente el término 'proyecto'; un producto no tiene por qué tener una fecha de fin planificada, es un vehículo continuo de entrega de valor.",
          "Correcto: es la definición literal de la Guía Scrum 2020 — un vehículo para entregar valor, con límite claro, stakeholders conocidos y usuarios o clientes bien definidos.",
          "Incorrecto: la Guía dice explícitamente que un producto puede ser algo más abstracto que software, como un servicio o incluso un proceso.",
          "Incorrecto: un documento no es un vehículo de valor; podría formar parte del contexto de un producto, pero no lo define."
        ],
        "trap": "El examen suele ofrecer 'proyecto' como distractor: Scrum no habla de proyectos, sino de un producto como vehículo continuo de valor."
      },
      {
        "type": "single",
        "q": "¿Qué describe el Objetivo del Producto (Product Goal)?",
        "opts": [
          "Un plan de lanzamientos con fechas concretas",
          "Un estado futuro del producto que sirve de objetivo a largo plazo para el Scrum Team",
          "Los criterios de aceptación de todos los Product Backlog Items",
          "Un contrato firmado por todos los stakeholders"
        ],
        "correct": 1,
        "exp": [
          "Incorrecto: un plan con fechas es un roadmap operativo, no el Objetivo del Producto, que describe una dirección, no un calendario.",
          "Correcto: el Product Goal describe un estado futuro deseado que da sentido a todo el trabajo del Scrum Team.",
          "Incorrecto: los criterios de aceptación son detalle a nivel de PBI, muy por debajo del horizonte del Objetivo del Producto.",
          "Incorrecto: el Product Goal no es un artefacto contractual, sino una declaración de dirección compartida por el equipo."
        ],
        "trap": "Trampa clásica: presentar el Product Goal como si fuera un plan con fechas — en realidad es una visión de largo plazo, no un cronograma."
      },
      {
        "type": "tf",
        "q": "Según la Guía Scrum, el Scrum Team debe cumplir o abandonar deliberadamente un Objetivo del Producto antes de asumir el siguiente.",
        "opts": [
          "Verdadero",
          "Falso"
        ],
        "correct": [
          0
        ],
        "exp": [
          "Correcto: la Guía es explícita — el Scrum Team debe cumplir (o abandonar) un Objetivo del Producto antes de asumir el siguiente; no se persiguen varios Product Goals en paralelo.",
          "Incorrecto: trabajar hacia dos Product Goals a la vez diluiría el foco del equipo y contradice el texto de la Guía."
        ],
        "trap": "Algunos distractores sugieren que un equipo puede perseguir varios Product Goals simultáneamente para 'ir más rápido' — es justo lo contrario de lo que dice la Guía."
      },
      {
        "type": "single",
        "q": "¿Quién es responsable de maximizar el valor del producto resultante del trabajo del Scrum Team?",
        "opts": [
          "El Scrum Master",
          "Los stakeholders principales",
          "El Product Owner",
          "Todo el Scrum Team por igual, sin diferenciar responsabilidades"
        ],
        "correct": 2,
        "exp": [
          "Incorrecto: el Scrum Master responde de la eficacia del Scrum Team y de que se entienda y aplique Scrum, no de maximizar el valor del producto.",
          "Incorrecto: los stakeholders aportan input e información valiosa, pero no tienen la responsabilidad formal de maximizar el valor.",
          "Correcto: la Guía asigna explícitamente al Product Owner la responsabilidad de maximizar el valor del producto resultante del trabajo del Scrum Team.",
          "Incorrecto: aunque todo el equipo contribuye a crear valor con el Incremento, la responsabilidad formal recae específicamente en el PO."
        ],
        "trap": "El examen intenta diluir la responsabilidad en 'todo el equipo' — pero la Guía asigna esta responsabilidad de forma explícita y única al Product Owner."
      },
      {
        "type": "multi",
        "q": "¿Qué características tiene un producto según la definición de la Guía Scrum? (selecciona todas las que correspondan)",
        "opts": [
          "Tiene un límite claro",
          "Debe generar siempre ingresos directos",
          "Tiene stakeholders conocidos",
          "Tiene usuarios o clientes bien definidos"
        ],
        "correct": [
          0,
          2,
          3
        ],
        "exp": [
          "Correcto: la definición de producto de la Guía incluye tener un límite claro.",
          "Incorrecto: la Guía no exige generar ingresos directos; un producto puede ser un servicio interno o una plataforma sin monetización directa.",
          "Correcto: tener stakeholders conocidos forma parte de la definición literal de la Guía.",
          "Correcto: tener usuarios o clientes bien definidos también forma parte de esa definición."
        ],
        "trap": "Generar ingresos no es un requisito de la definición de 'producto' de la Guía — es fácil confundir 'valor' con 'ingresos', pero no son sinónimos."
      },
      {
        "type": "single",
        "q": "¿Qué emerge para definir 'qué' cumplirá el Objetivo del Producto?",
        "opts": [
          "El resto del Product Backlog",
          "Únicamente el Sprint Backlog",
          "La Definition of Done",
          "El plan de lanzamientos anual"
        ],
        "correct": 0,
        "exp": [
          "Correcto: la Guía indica que el resto del Product Backlog emerge para definir 'qué' cumplirá el Objetivo del Producto.",
          "Incorrecto: el Sprint Backlog es el subconjunto de trabajo de un único Sprint, no el instrumento que define cómo se cumple el Product Goal en su totalidad.",
          "Incorrecto: la Definition of Done establece cuándo un Incremento está terminado, no qué trabajo cumple el Objetivo del Producto.",
          "Incorrecto: la Guía no habla de planes de lanzamiento anuales; es un concepto ajeno al texto oficial."
        ],
        "trap": "No confundir Product Backlog (visión completa y emergente) con Sprint Backlog (el subconjunto de un solo Sprint)."
      },
      {
        "type": "tf",
        "q": "El 'valor', en la gestión de producto, siempre significa ingresos monetarios directos.",
        "opts": [
          "Verdadero",
          "Falso"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrecto: reducir 'valor' a ingresos directos ignora otras dimensiones reconocidas en la gestión de producto, como el valor para el usuario o el valor no monetario.",
          "Correcto: es un principio general y ampliamente aceptado en gestión de producto (no una cita literal de la Guía) que el valor incluye dimensiones como la satisfacción del usuario, la reducción de riesgo, el aprendizaje o la reputación, además de los ingresos."
        ],
        "trap": "El examen puede tentar a asumir que 'maximizar valor' equivale a 'maximizar ingresos' — es una simplificación excesiva del concepto de valor."
      },
      {
        "type": "multi",
        "q": "¿Cuáles de las siguientes son dimensiones de valor que un Product Owner suele considerar (conocimiento general de gestión de producto, más allá de la Guía Scrum)?",
        "opts": [
          "Valor de negocio (ingresos, ventaja competitiva, reducción de costes)",
          "El número exacto de horas invertidas por los Developers",
          "Valor para el cliente o usuario (utilidad, experiencia, resolución de un problema real)",
          "Valor no monetario (reputación, cumplimiento normativo, reducción de riesgo, aprendizaje)"
        ],
        "correct": [
          0,
          2,
          3
        ],
        "exp": [
          "Correcto: el valor de negocio es una dimensión habitual que un PO debe considerar, aunque no la única.",
          "Incorrecto: las horas invertidas son una medida de esfuerzo o coste, no de valor generado; confundir esfuerzo con valor es un error frecuente.",
          "Correcto: el valor para el cliente/usuario es una dimensión central que cualquier PO competente debe tener en cuenta.",
          "Correcto: dimensiones no monetarias como la reputación o la reducción de riesgo también son formas legítimas de valor."
        ],
        "trap": "Nota: esta pregunta trata conocimiento general de gestión de producto, no una cita literal de la Guía Scrum, que no detalla estas dimensiones explícitamente."
      },
      {
        "type": "single",
        "q": "¿Qué diferencia hay entre el Product Goal y el Sprint Goal en cuanto a horizonte temporal?",
        "opts": [
          "Ambos son objetivos a largo plazo",
          "El Product Goal es a largo plazo; el Sprint Goal es específico de ese Sprint",
          "El Sprint Goal es a largo plazo; el Product Goal es puntual",
          "No hay diferencia real, son sinónimos"
        ],
        "correct": 1,
        "exp": [
          "Incorrecto: el Sprint Goal tiene un horizonte mucho más corto, limitado a un único Sprint.",
          "Correcto: el Product Goal es el objetivo a largo plazo de todo el producto; el Sprint Goal es el compromiso específico de un Sprint concreto que aporta hacia ese objetivo mayor.",
          "Incorrecto: es justo lo contrario de la relación real entre ambos conceptos.",
          "Incorrecto: son conceptos claramente distintos, con horizontes temporales diferentes."
        ],
        "trap": "No confundir el alcance temporal: Product Goal = visión de producto a largo plazo; Sprint Goal = objetivo de un único Sprint que aporta hacia esa visión."
      }
    ]
  },
  {
    "id": "gestio-backlog",
    "name": "Gestión del Product Backlog",
    "theory": "<h3>Un Product Backlog nunca está completo</h3><p>El Product Backlog es la única fuente de trabajo para el Scrum Team. Es una lista <b>emergente</b> y <b>ordenada</b>: solo recoge lo que se conoce y entiende en un momento dado, así que evoluciona a medida que el producto y su entorno cambian. Mientras un producto exista, su Product Backlog también existe: nunca está \"terminado\" ni es un documento cerrado desde el principio.</p><h3>Refinamiento (refinement)</h3><p>El refinamiento es el acto de descomponer y definir con más detalle los elementos del Product Backlog en piezas más pequeñas y precisas. Es una actividad <b>continua</b> que añade detalles como descripción, orden y tamaño; estos atributos varían según el dominio de trabajo. Los propios Developers realizan el refinamiento, ya que son quienes finalmente entregarán el trabajo; el Product Owner puede influir en ellos ayudándoles a entender y seleccionar los elementos que aportan más valor.</p><h3>Elementos \"Ready\" (listos)</h3><p>Un elemento del Product Backlog se considera listo para ser seleccionado en un Sprint Planning cuando, gracias al refinamiento, ha alcanzado un grado de transparencia y claridad suficiente. \"Ready\" no significa que exista una estimación exacta en horas ni una aprobación formal por escrito: es simplemente el nivel de comprensión compartido que permite a los Developers razonar sobre el trabajo con confianza.</p><h3>Ordenar, no priorizar</h3><p>La Guía Scrum utiliza el verbo <b>ordenar</b> (order) para describir cómo se organiza el Product Backlog, nunca \"priorizar\". Ordenar los elementos del Product Backlog es una de las accountabilities explícitas del Product Owner.</p><h3>El tamaño (sizing) es de los Developers</h3><p>Los Developers que realizarán el trabajo son quienes tienen la responsabilidad de estimar el tamaño de los elementos del Product Backlog. El Product Owner puede influir en esa estimación ayudando a los Developers a comprender y seleccionar entre distintas alternativas o compromisos (trade-offs), pero la decisión final de tamaño corresponde siempre a quienes ejecutarán el trabajo.</p><h3>Accountabilities del Product Owner sobre el Product Backlog</h3><ul><li>Desarrollar y comunicar explícitamente el Product Goal.</li><li>Crear y comunicar con claridad los elementos del Product Backlog.</li><li>Ordenar los elementos del Product Backlog.</li><li>Asegurar que el Product Backlog sea transparente, visible y comprendido por todos.</li></ul><p>El Product Owner puede delegar parte de este trabajo en otros, pero sigue siendo el responsable último.</p><h3>Errores frecuentes en el examen</h3><p>Cuidado con estas trampas típicas: (1) usar \"priorizar\"/\"prioridad\" en lugar de \"ordenar\"/\"orden\"; (2) pensar que el refinamiento es un evento formal con timebox fijo — no lo es, es una actividad continua; (3) creer que el Product Owner decide el tamaño de los elementos — esa decisión es de los Developers; (4) suponer que existe un porcentaje fijo de tiempo (como \"el 10%\") que la Guía Scrum exige dedicar al refinamiento — la Guía no especifica ningún porcentaje; (5) imaginar un \"Sprint 0\" dedicado exclusivamente a preparar el backlog antes de empezar — ese concepto no aparece en la Guía Scrum, que asume que el refinamiento ocurre de forma continua a lo largo del desarrollo del producto.</p>",
    "questions": [
      {
        "type": "tf",
        "q": "El Product Backlog debería evolucionar a medida que cambian el producto y su entorno, en lugar de seguir estrictamente el plan original del Product Owner.",
        "opts": [
          "Verdadero",
          "Falso"
        ],
        "correct": [
          0
        ],
        "exp": [
          "Correcto: como el Product Backlog es emergente, se espera que refleje los cambios en el producto y su entorno con el tiempo.",
          "Incorrecto: seguir rígidamente un plan original ignorando el cambio contradice la naturaleza emergente y adaptativa del Product Backlog."
        ],
        "trap": "Un Product Backlog emergente está pensado para cambiar a medida que mejora el entendimiento — tratar un plan inicial como fijo desvirtúa su propósito."
      },
      {
        "type": "multi",
        "q": "¿Cuáles de las siguientes afirmaciones sobre el Product Backlog son correctas? (elige las dos mejores)",
        "opts": [
          "Los elementos cerca de la parte superior suelen ser más pequeños y estar más refinados que los que están más abajo",
          "El Product Backlog contiene solo elementos que ya están completamente refinados",
          "El Product Backlog nunca se \"baselinea\"; sigue evolucionando mientras el producto exista",
          "Un elemento del Product Backlog tiene un 'propietario' individual asignado formalmente"
        ],
        "correct": [
          0,
          2
        ],
        "exp": [
          "Correcto: los elementos de mayor orden suelen estar más refinados y ser más pequeños, para que los Developers puedan seleccionarlos con confianza.",
          "Incorrecto: el Product Backlog siempre contiene elementos con distintos niveles de detalle; el refinamiento es continuo, no una condición previa para estar en el Backlog.",
          "Correcto: un Product Backlog nunca queda fijado como línea base; sigue evolucionando a medida que cambian el producto y su entorno.",
          "Incorrecto: la Guía Scrum no describe una \"propiedad\" individual sobre elementos concretos del Product Backlog."
        ],
        "trap": "El Product Backlog nunca es un documento terminado y fijado como línea base — esperar que cada elemento esté ya totalmente refinado malinterpreta cómo funciona el refinamiento."
      },
      {
        "type": "single",
        "q": "¿Cómo llama la Guía Scrum a la actividad continua de descomponer y añadir más detalle a los elementos del Product Backlog?",
        "opts": [
          "Priorización",
          "Refinamiento (refinement)",
          "Sizing",
          "Ordenación estratégica"
        ],
        "correct": 1,
        "exp": [
          "Incorrecto: la Guía Scrum no usa el término \"priorización\" para esta actividad.",
          "Correcto: refinamiento es el acto de descomponer y definir con más detalle los elementos del Product Backlog.",
          "Incorrecto: sizing es solo uno de los atributos que se añade durante el refinamiento, no el nombre de la actividad completa.",
          "Incorrecto: no es un término de la Guía Scrum."
        ],
        "trap": "El término oficial es 'refinement', una actividad continua, no un evento formal de Scrum con timebox."
      },
      {
        "type": "single",
        "q": "¿Qué verbo usa explícitamente la Guía Scrum para describir cómo el Product Owner organiza el Product Backlog?",
        "opts": [
          "Priorizar",
          "Ordenar",
          "Clasificar por urgencia",
          "Segmentar por departamento"
        ],
        "correct": 1,
        "exp": [
          "Incorrecto: término deliberadamente evitado por la Guía Scrum.",
          "Correcto: la Guía Scrum dice explícitamente que el Product Owner es responsable de \"ordenar\" los elementos del Product Backlog.",
          "Incorrecto: no es terminología de la Guía Scrum.",
          "Incorrecto: no es terminología de la Guía Scrum."
        ],
        "trap": "'Priorizar' es probablemente la trampa de vocabulario más repetida de todo el examen PSPO I."
      },
      {
        "type": "multi",
        "q": "¿Qué prácticas recomienda la Guía Scrum para gestionar el Product Backlog de forma eficaz? (selecciona todas las correctas)",
        "opts": [
          "Refinar con detalle solo los elementos que probablemente se implementarán pronto",
          "Crear un segundo backlog paralelo para los elementos \"nuevos\" o poco claros",
          "Eliminar elementos obsoletos que llevan mucho tiempo sin tocarse",
          "Detallar exhaustivamente todos los elementos del backlog desde el principio del producto"
        ],
        "correct": [
          0,
          2
        ],
        "exp": [
          "Correcto: enfoque \"justo a tiempo, lo justo\" (just in time, just enough) que evita desperdiciar esfuerzo en detalles que pueden cambiar.",
          "Incorrecto: el Product Backlog es la única fuente de trabajo; un segundo backlog rompe esa única fuente de verdad.",
          "Correcto: eliminar elementos obsoletos mantiene el backlog transparente y útil.",
          "Incorrecto: detallar todo desde el principio es trabajo prematuro que probablemente se desperdicie cuando el producto emerja y cambie."
        ],
        "trap": "Un segundo backlog \"paralelo\" siempre es incorrecto: solo debe existir un Product Backlog como fuente única de trabajo."
      },
      {
        "type": "single",
        "q": "¿Quién es responsable de estimar el tamaño (sizing) de los elementos del Product Backlog?",
        "opts": [
          "El Product Owner en exclusiva",
          "Los Developers que realizarán el trabajo",
          "Los stakeholders principales",
          "El Scrum Master"
        ],
        "correct": 1,
        "exp": [
          "Incorrecto: el PO puede influir, pero no decide el tamaño.",
          "Correcto: los Developers, al ser quienes ejecutan el trabajo, son responsables de su tamaño.",
          "Incorrecto: los stakeholders no participan en el sizing.",
          "Incorrecto: el Scrum Master no estima el trabajo, facilita el proceso."
        ],
        "trap": "El PO puede influir ayudando a entender y seleccionar trade-offs, pero la decisión final de tamaño es siempre de los Developers."
      },
      {
        "type": "tf",
        "q": "El refinamiento del Product Backlog es uno de los cuatro eventos formales de Scrum y tiene un timebox fijo definido por la Guía.",
        "opts": [
          "Verdadero",
          "Falso"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrecto.",
          "Correcto: el refinamiento no es uno de los cuatro eventos formales de Scrum (Planning, Daily, Review, Retrospective); es una actividad continua sin timebox fijo propio."
        ],
        "trap": "Confundir el refinamiento con un evento formal timeboxed es un error muy común: la Guía lo describe como actividad continuada."
      },
      {
        "type": "single",
        "q": "Según la Guía Scrum, ¿qué debe garantizar el Product Owner sobre el Product Backlog en cuanto a su visibilidad?",
        "opts": [
          "Asegurar que sea transparente, visible y comprendido por todos",
          "Ocultarlo a los stakeholders hasta que esté completo",
          "Compartirlo únicamente con los Developers",
          "Publicarlo solo al final de cada release"
        ],
        "correct": 0,
        "exp": [
          "Correcto: es una accountability explícita del Product Owner sobre el Product Backlog.",
          "Incorrecto: contradice la transparencia exigida.",
          "Incorrecto: el Product Backlog debe ser visible para todo el Scrum Team y, según convenga, los stakeholders.",
          "Incorrecto: al ser emergente, nunca hay un momento en que esté \"completo\" o cerrado."
        ],
        "trap": "La transparencia del backlog es para todo el Scrum Team, no un documento restringido o guardado hasta estar 'terminado'."
      },
      {
        "type": "single",
        "q": "¿Cuándo se considera que un elemento del Product Backlog está 'Ready' para ser seleccionado en la Sprint Planning?",
        "opts": [
          "Cuando el Product Owner lo aprueba formalmente por escrito",
          "Cuando ha alcanzado suficiente transparencia y claridad, normalmente gracias al refinamiento",
          "Cuando tiene una estimación exacta en horas",
          "Cuando todos los stakeholders lo han validado individualmente"
        ],
        "correct": 1,
        "exp": [
          "Incorrecto: la Guía no exige una aprobación formal por escrito.",
          "Correcto: 'Ready' refleja el grado de comprensión y transparencia logrado mediante refinamiento continuo.",
          "Incorrecto: la Guía no exige estimaciones exactas en horas.",
          "Incorrecto: no es un requisito de validación individual por stakeholder."
        ],
        "trap": "'Ready' es un grado de transparencia/comprensión alcanzado vía refinamiento, no una aprobación formal ni una estimación exacta."
      },
      {
        "type": "multi",
        "q": "¿Cuáles de las siguientes son accountabilities del Product Owner en relación con el Product Backlog? (selecciona todas las correctas)",
        "opts": [
          "Desarrollar y comunicar el Product Goal",
          "Ordenar los elementos del Product Backlog",
          "Escribir personalmente el código de cada elemento",
          "Asegurar que el Product Backlog sea transparente, visible y comprendido"
        ],
        "correct": [
          0,
          1,
          3
        ],
        "exp": [
          "Correcto: es una de las accountabilities del Product Owner para la gestión efectiva del Product Backlog.",
          "Correcto: ordenar los elementos es una accountability explícita del Product Owner.",
          "Incorrecto: escribir código es trabajo de los Developers, no una accountability del Product Owner.",
          "Correcto: también es una accountability explícita del Product Owner."
        ],
        "trap": "El examen a veces mezcla accountabilities reales del PO con tareas técnicas de los Developers para confundir."
      },
      {
        "type": "single",
        "q": "¿Qué dice la Guía Scrum acerca de cuánto tiempo o qué porcentaje fijo debe dedicarse al refinamiento del Product Backlog?",
        "opts": [
          "Un evento formal de una hora al principio de cada Sprint",
          "Un porcentaje fijo del 10% del tiempo del equipo, según la Guía Scrum",
          "Una actividad continua sin timebox fijo, según convenga a lo largo del desarrollo",
          "Un Sprint 0 dedicado exclusivamente a preparar el Product Backlog antes de empezar"
        ],
        "correct": 2,
        "exp": [
          "Incorrecto: el refinamiento no es uno de los cuatro eventos formales de Scrum.",
          "Incorrecto: la cifra del 10% es una práctica externa habitual, pero la Guía Scrum no especifica ningún porcentaje.",
          "Correcto: la Guía Scrum describe el refinamiento como una actividad continua, sin exigir un timebox ni una frecuencia fija.",
          "Incorrecto: la Guía Scrum no menciona ningún \"Sprint 0\"; el refinamiento ocurre de forma continua durante todo el desarrollo del producto."
        ],
        "trap": "Trampa común: atribuir a la Guía Scrum cifras concretas (como el famoso '10% del tiempo') o conceptos (como 'Sprint 0') que en realidad no aparecen en el texto oficial."
      }
    ]
  },
  {
    "id": "estrategia-negoci",
    "name": "Estrategia de negocio",
    "theory": "<h3>Maximizar el valor: el eje de la estrategia del PO</h3><p>La Guía Scrum (2020) establece que el <b>Product Owner es responsable de maximizar el valor del producto</b> resultante del trabajo del Scrum Team. Esta responsabilidad no se limita a ordenar el Product Backlog sprint a sprint: implica sostener una visión de negocio que conecte cada decisión con el valor que el producto genera a medio y largo plazo, expresado a través del <b>Product Goal</b>.</p><h3>El coste no es solo \"coste de desarrollo\"</h3><p>Una estrategia de negocio sólida no mira únicamente el esfuerzo de construir una funcionalidad. En la práctica habitual de gestión de producto se considera el <b>Coste Total de Propiedad (Total Cost of Ownership, TCO)</b>: además de programarlo, hay que mantenerlo, darle soporte, formar a los usuarios y, en ocasiones, retirarlo. Un elemento \"barato\" de construir puede resultar caro de mantener durante años; el Propietario del Producto valora ese equilibrio al decidir qué entra en el Product Backlog. (Este concepto de TCO es una práctica general de gestión de producto, no un término definido en la Guía Scrum.)</p><h3>Empirismo también en la estrategia</h3><p>Scrum se apoya en tres pilares del empirismo: transparencia, inspección y adaptación. El Product Owner aplica estos mismos principios a la estrategia de negocio: en lugar de basar decisiones en opiniones o suposiciones, busca <b>datos reales</b> — uso del producto, feedback de mercado, resultados de sprints anteriores — para comprobar si el rumbo actual sigue siendo el correcto. El <b>Sprint Review</b> es precisamente un punto de inspección donde el Scrum Team y los stakeholders revisan el Incremento y el entorno (mercado, tecnología, presupuesto...) para decidir los próximos pasos.</p><h3>Responsable pase lo que pase</h3><p>Según la Guía, el Product Owner es <b>una única persona</b>, no un comité, y aunque puede delegar parte del trabajo de ordenar o refinar el Product Backlog en otras personas, <b>sigue siendo responsable</b> del resultado. Esto es clave en estrategia de negocio: aunque el PO se apoye en analistas de mercado, stakeholders o el propio equipo para obtener información, la decisión final y la rendición de cuentas sobre el valor entregado recaen en él o ella.</p><h3>Errores habituales en el examen</h3><ul><li>Pensar que TCO, ROI o las métricas de valor son citas literales de la Guía Scrum — no lo son; son prácticas estándar de gestión de producto compatibles con Scrum.</li><li>Creer que delegar el trabajo de ordenación del backlog exime al PO de responsabilidad — la Guía es explícita: sigue siendo responsable.</li><li>Suponer que \"maximizar el valor\" significa \"hacer lo que pide el stakeholder más ruidoso\" — el PO decide en base al conjunto de datos disponibles, no a la petición aislada más reciente.</li><li>Confundir \"coste de desarrollo\" con \"coste total\" — ignorar mantenimiento y soporte es un error típico de estrategia.</li></ul>",
    "questions": [
      {
        "type": "multi",
        "q": "Según las prácticas generales de gestión de producto que complementan la Guía Scrum, ¿cómo se suele medir el éxito de un producto? (elige las dos mejores)",
        "opts": [
          "El impacto en la satisfacción del cliente",
          "El impacto en los ingresos o el coste",
          "La entrega del alcance definido de antemano comparado con el tiempo planificado originalmente",
          "Qué tan de cerca coincidió la velocidad real con la velocidad estimada al principio"
        ],
        "correct": [
          0,
          1
        ],
        "exp": [
          "Correcto: la satisfacción del cliente es una medida central basada en resultados de si un producto realmente entrega valor.",
          "Correcto: el impacto en los ingresos y/o el coste refleja el valor de negocio real que genera el producto.",
          "Incorrecto: cumplir un plan definido de antemano mide el éxito de un proyecto predictivo, no el valor empírico que Scrum busca maximizar.",
          "Incorrecto: la velocidad es una ayuda de planificación de capacidad para los Developers, no una medida del éxito del producto ni del valor entregado."
        ],
        "trap": "El éxito se mide por resultados reales (satisfacción, ingresos, coste), no por lo bien que un equipo cumplió un plan previo o su propia estimación de velocidad."
      },
      {
        "type": "single",
        "q": "¿Con qué frecuencia debería un Product Owner revisar la satisfacción del cliente para orientar decisiones de estrategia de negocio?",
        "opts": [
          "Solo una vez al año, durante revisiones de negocio formales",
          "Con frecuencia, para que las decisiones se basen en evidencia actual y no en suposiciones desfasadas",
          "Solo cuando un stakeholder lo pida expresamente"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrecto: una revisión anual es demasiado poco frecuente para un Product Owner que dirige una estrategia de producto empírica y adaptativa.",
          "Correcto: medir con frecuencia mantiene las decisiones del Product Owner ancladas en evidencia real y actual, coherente con el enfoque empírico de Scrum.",
          "Incorrecto: esperar a que un stakeholder lo pida es reactivo, no la inspección proactiva que exige la responsabilidad del Product Owner."
        ],
        "trap": "Las decisiones de negocio deben basarse en evidencia real y frecuente, no en una revisión anual ni en una actitud de esperar a ver qué pasa."
      },
      {
        "type": "single",
        "q": "Según la Guía Scrum (2020), ¿de qué es responsable el Product Owner respecto al producto?",
        "opts": [
          "De maximizar el valor del producto resultante del trabajo del Scrum Team",
          "De escribir código junto a los Developers para acelerar el Sprint",
          "De aprobar personalmente cada tarea técnica del Sprint Backlog",
          "De sustituir al Scrum Master en la facilitación de los eventos"
        ],
        "correct": 0,
        "exp": [
          "Correcto: es la responsabilidad central del Product Owner según la Guía Scrum.",
          "Incorrecto: escribir código es tarea de los Developers, no una responsabilidad definida del PO.",
          "Incorrecto: el Sprint Backlog y sus tareas son gestionados por los Developers.",
          "Incorrecto: facilitar los eventos Scrum es responsabilidad del Scrum Master."
        ],
        "trap": "El examen a veces mezcla responsabilidades del PO con tareas operativas de los Developers o del Scrum Master; maximizar el valor es una responsabilidad explícita y exclusiva del PO."
      },
      {
        "type": "single",
        "q": "Un Product Backlog Item es muy rápido y barato de construir, pero requerirá soporte técnico constante y complejo durante años. ¿Qué perspectiva ayuda al Product Owner a valorar esta situación correctamente?",
        "opts": [
          "Solo el coste de desarrollo inicial, ya que es el único coste relevante",
          "El Coste Total de Propiedad (TCO), que incluye mantenimiento y soporte a largo plazo, no solo la construcción",
          "El número de story points estimado por los Developers",
          "El coste de formación del Scrum Master en la herramienta"
        ],
        "correct": 1,
        "exp": [
          "Incorrecto: mirar solo el coste inicial de desarrollo ignora cargas futuras que pueden superar ese coste inicial.",
          "Correcto: el TCO es la práctica de gestión de producto que contempla todo el ciclo de vida del coste, no solo su construcción.",
          "Incorrecto: los story points estiman esfuerzo de desarrollo, no coste total de propiedad.",
          "Incorrecto: no es relevante para esta decisión de negocio sobre el producto."
        ],
        "trap": "El examen puede intentar limitar el análisis de coste al esfuerzo de desarrollo; una buena estrategia de negocio mira el ciclo de vida completo del coste."
      },
      {
        "type": "tf",
        "q": "Si el Product Owner delega en otra persona el trabajo de ordenar el Product Backlog, dicha persona pasa a ser la responsable de maximizar el valor del producto.",
        "opts": [
          "Verdadero",
          "Falso"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrecto.",
          "Correcto: la Guía Scrum indica que el Product Owner puede delegar el trabajo de ordenar o refinar el backlog, pero sigue siendo responsable del resultado."
        ],
        "trap": "Delegar trabajo no equivale a delegar responsabilidad: el PO sigue siendo la única persona responsable, incluso si otros ordenan el backlog en su nombre."
      },
      {
        "type": "multi",
        "q": "¿Qué factores debería considerar razonablemente un Product Owner al valorar el impacto económico de un elemento del Product Backlog, más allá del esfuerzo de desarrollo? (Selecciona todas las que correspondan)",
        "opts": [
          "El coste de mantenimiento y soporte a largo plazo",
          "El coste de formar a los usuarios finales en la nueva funcionalidad",
          "El número exacto de líneas de código que se escribirán",
          "El posible impacto en ingresos o retención de clientes (valor esperado)"
        ],
        "correct": [
          0,
          1,
          3
        ],
        "exp": [
          "Correcto: forma parte del Coste Total de Propiedad.",
          "Correcto: formar usuarios es un coste real asociado a introducir cambios en el producto.",
          "Incorrecto: el número de líneas de código no es una medida de coste de negocio ni de valor.",
          "Correcto: el valor esperado (ingresos, retención...) es justamente lo que el PO busca maximizar."
        ],
        "trap": "El examen mezcla métricas técnicas irrelevantes (como las líneas de código) con factores reales de coste o valor de negocio."
      },
      {
        "type": "single",
        "q": "¿Cómo debería un Product Owner usar el Sprint Review para apoyar la estrategia de negocio?",
        "opts": [
          "Como una demostración técnica cerrada, sin relación con decisiones de negocio",
          "Como punto de inspección: revisar el Incremento y el entorno (mercado, presupuesto, tecnología) junto al Scrum Team y los stakeholders para decidir próximos pasos",
          "Como una reunión para aprobar formalmente el presupuesto del próximo trimestre",
          "Como sustituto de la investigación de mercado, ignorando datos externos al Sprint"
        ],
        "correct": 1,
        "exp": [
          "Incorrecto: el Sprint Review no es solo una demo técnica.",
          "Correcto: es el evento de inspección donde se conecta el trabajo realizado con el contexto de negocio y de mercado para ajustar el rumbo.",
          "Incorrecto: no es una reunión de aprobación presupuestaria formal.",
          "Incorrecto: el Sprint Review complementa, no sustituye, el uso de datos de mercado."
        ],
        "trap": "El Sprint Review conecta ejecución y estrategia mediante inspección empírica; no es una simple demo ni una reunión administrativa."
      },
      {
        "type": "tf",
        "q": "Maximizar el valor del producto significa que el Product Owner debe implementar siempre la petición más reciente del stakeholder con más influencia.",
        "opts": [
          "Verdadero",
          "Falso"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrecto.",
          "Correcto: maximizar el valor implica decisiones basadas en el conjunto de datos y en el Product Goal, no en ceder ante la petición más ruidosa o reciente."
        ],
        "trap": "Confundir 'maximizar el valor' con 'complacer siempre al stakeholder más insistente' es un error común; el PO pondera evidencias, no presión."
      },
      {
        "type": "multi",
        "q": "¿Cuáles son los tres pilares del empirismo en los que se apoya Scrum, y que el PO también aplica a la estrategia de negocio? (Selecciona todas las que correspondan)",
        "opts": [
          "Transparencia",
          "Documentación exhaustiva",
          "Inspección",
          "Adaptación"
        ],
        "correct": [
          0,
          2,
          3
        ],
        "exp": [
          "Correcto: uno de los tres pilares del empirismo según la Guía Scrum.",
          "Incorrecto: la documentación exhaustiva no es uno de los pilares del empirismo; Scrum valora la transparencia sobre el trabajo real, no la documentación en sí.",
          "Correcto: inspeccionar artefactos y progreso con frecuencia es uno de los tres pilares.",
          "Correcto: adaptar el rumbo cuando la inspección revela desviaciones es el tercer pilar."
        ],
        "trap": "El examen a veces incluye 'documentación' como distractor de un pilar de empirismo; los tres pilares reales son transparencia, inspección y adaptación."
      }
    ]
  },
  {
    "id": "stakeholders",
    "name": "Stakeholders y clientes",
    "theory": "<h3>¿Quiénes son las partes interesadas?</h3><p>Las <b>partes interesadas</b> (stakeholders) son personas externas al Scrum Team —clientes, usuarios, patrocinadores, directivos u otras— con interés en el producto o afectadas por él. No forman parte del Scrum Team, pero su perspectiva es clave para maximizar el valor que el producto genera.</p><h3>El Product Owner: una sola persona, nunca un comité</h3><p>El Product Owner puede <b>representar las necesidades de muchas partes interesadas</b> dentro del Product Backlog, pero sigue siendo <b>una única persona</b> responsable de él, no un comité. Quien quiera cambiar el contenido o el orden del Product Backlog debe intentar convencer al Product Owner; nadie más está autorizado para indicar a los Developers que trabajen a partir de un conjunto distinto de requisitos.</p><h3>La Revisión del Sprint: trabajo conjunto, no una presentación</h3><p>La <b>Revisión del Sprint</b> es el evento en el que el Scrum Team y las partes interesadas colaboran e inspeccionan el resultado del Sprint para decidir qué hacer a continuación. No es una presentación de estado en un solo sentido ni una demo de aprobación: es una sesión de trabajo donde se revisa qué ha cambiado en el mercado o en el entorno y se ajusta el Product Backlog en consecuencia. Tampoco debe entenderse como una puerta que el valor deba cruzar para poder liberarse: cualquier elemento que cumpla la Definition of Done puede publicarse en cualquier momento, sin esperar al final del Sprint ni a la Revisión.</p><h3>Partes interesadas en otros eventos</h3><p>Aunque su papel principal se da en la Revisión del Sprint, las partes interesadas también pueden ser invitadas a la <b>Sprint Planning</b> cuando el Scrum Team lo considere útil, para dar consejo o aportar contexto. Aun así, planificar el Sprint sigue siendo trabajo del Scrum Team: son los Developers, junto con el Product Owner, quienes deciden qué se construirá.</p><h3>El Scrum Master y las partes interesadas</h3><p>El Scrum Master sirve a la organización liderando, entrenando y facilitando la adopción de Scrum, lo que incluye <b>eliminar barreras</b> entre las partes interesadas y el Scrum Team y facilitar su colaboración cuando se solicita o resulta necesario. Esta labor de apoyo no implica sustituir al Product Owner en la negociación de prioridades.</p><h3>Errores frecuentes en el examen</h3><ul><li>Pensar que las partes interesadas forman parte del Scrum Team: no es así, siguen siendo externas aunque colaboren estrechamente.</li><li>Creer que el Product Owner puede convertirse en un comité para \"representar mejor\" a muchos stakeholders: la Guía Scrum es explícita en que sigue siendo una sola persona.</li><li>Tratar la Revisión del Sprint como una demo formal de aprobación o como el único momento en que se puede liberar valor.</li><li>Suponer que las partes interesadas nunca pueden estar en la Sprint Planning: pueden ser invitadas si el Scrum Team lo decide.</li></ul>",
    "questions": [
      {
        "type": "single",
        "q": "Si un stakeholder quiere cambiar el orden o el contenido del Product Backlog, ¿qué debería hacer?",
        "opts": [
          "Negociar directamente con los Developers, ya que ellos construyen el producto",
          "Intentar convencer al Product Owner, que sigue siendo el responsable del Product Backlog",
          "Pedirle al Scrum Master que haga el cambio en su nombre"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrecto: los Developers no reciben instrucciones directas de los stakeholders sobre el contenido u orden del Backlog.",
          "Correcto: quien quiera cambiar el contenido o el orden del Product Backlog debe convencer al Product Owner, que sigue siendo el responsable de él.",
          "Incorrecto: el Scrum Master facilita y entrena, pero no toma decisiones sobre el Product Backlog en nombre de un stakeholder."
        ],
        "trap": "Los stakeholders influyen en el Product Backlog únicamente convenciendo al Product Owner — no pueden dirigir a los Developers ni al Scrum Master para que hagan cambios en su lugar."
      },
      {
        "type": "single",
        "q": "¿Qué establece la Guía Scrum sobre el Product Owner cuando existen muchas partes interesadas con necesidades distintas?",
        "opts": [
          "El Product Owner puede representar las necesidades de muchas partes interesadas en el Product Backlog, pero sigue siendo una única persona",
          "Cuando hay muchas partes interesadas, el Product Owner debe convertirse en un comité para representarlas mejor",
          "Las partes interesadas comparten con el Product Owner la autoridad de ordenar el Product Backlog",
          "El Product Owner delega la priorización en un comité de stakeholders cuando el producto crece"
        ],
        "correct": 0,
        "exp": [
          "Correcto: la Guía Scrum indica que el PO puede representar a muchas partes interesadas en el Product Backlog sin dejar de ser una sola persona responsable.",
          "Incorrecto: el PO nunca se convierte en un comité; la responsabilidad final es siempre individual.",
          "Incorrecto: la autoridad de ordenar el Product Backlog es exclusiva del Product Owner.",
          "Incorrecto: delegar la priorización en un comité contradice el principio de que el PO es una única persona responsable."
        ],
        "trap": "Confundir 'representar a muchas partes interesadas' con 'ser un comité' es la trampa clásica: la Guía Scrum es explícita en que el PO sigue siendo una persona."
      },
      {
        "type": "single",
        "q": "¿Cuál es el propósito principal de la Revisión del Sprint respecto a las partes interesadas?",
        "opts": [
          "Que el Scrum Team y las partes interesadas inspeccionen el resultado del Sprint y colaboren sobre qué hacer a continuación",
          "Que las partes interesadas aprueben formalmente la publicación del Incremento",
          "Que el Product Owner evalúe el rendimiento individual de cada Developer",
          "Firmar el Sprint Backlog del siguiente Sprint"
        ],
        "correct": 0,
        "exp": [
          "Correcto: es un evento de trabajo conjunto de inspección y adaptación, no un simple trámite de aprobación.",
          "Incorrecto: liberar valor no depende de una aprobación en la Revisión del Sprint; un elemento que cumple la DoD puede liberarse en cualquier momento.",
          "Incorrecto: la Revisión del Sprint no evalúa el desempeño individual de las personas.",
          "Incorrecto: el Sprint Backlog del siguiente Sprint se crea en la Sprint Planning, no en la Revisión del Sprint."
        ],
        "trap": "Tratar la Revisión del Sprint como una aprobación formal de release es un error frecuente; es una sesión de colaboración, no una puerta de salida hacia producción."
      },
      {
        "type": "tf",
        "q": "La Revisión del Sprint es fundamentalmente una presentación de estado en un solo sentido del Scrum Team hacia las partes interesadas.",
        "opts": [
          "Verdadero",
          "Falso"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrecto: la Guía Scrum describe la Revisión del Sprint como una sesión de trabajo colaborativa, no una presentación unidireccional.",
          "Correcto: es un evento de colaboración e inspección conjunta, no una presentación de estado en un solo sentido."
        ],
        "trap": "Muchos equipos convierten la Revisión del Sprint en una demo pasiva; la Guía Scrum la define como colaboración activa."
      },
      {
        "type": "multi",
        "q": "¿Qué papel pueden tener las partes interesadas en los eventos de Scrum? (selecciona todas las correctas)",
        "opts": [
          "Pueden ser invitadas a la Sprint Planning por el Scrum Team para dar consejo",
          "Son miembros obligatorios del Daily Scrum",
          "Colaboran con el Scrum Team en la Revisión del Sprint sobre qué hacer a continuación",
          "Deciden el contenido final del Sprint Backlog"
        ],
        "correct": [
          0,
          2
        ],
        "exp": [
          "Correcto: el Scrum Team puede invitar a partes interesadas a la Sprint Planning cuando su consejo aporte valor.",
          "Incorrecto: el Daily Scrum es un evento interno de los Developers; las partes interesadas no participan en él.",
          "Correcto: es precisamente el propósito central de la Revisión del Sprint.",
          "Incorrecto: el Sprint Backlog lo crean los Developers, junto con el Product Owner cuando aporta claridad; las partes interesadas no deciden su contenido."
        ],
        "trap": "El error típico es asumir que las partes interesadas nunca pueden estar en la Sprint Planning, o al contrario, que tienen voto en eventos internos como el Daily Scrum."
      },
      {
        "type": "tf",
        "q": "Si una parte interesada quiere cambiar el orden o el contenido del Product Backlog, puede negociarlo directamente con los Developers.",
        "opts": [
          "Verdadero",
          "Falso"
        ],
        "correct": [
          1
        ],
        "exp": [
          "Incorrecto: los Developers no son el canal para negociar cambios de alcance u orden del Product Backlog.",
          "Correcto: según la Guía Scrum, quien quiera un cambio debe intentar convencer al Product Owner."
        ],
        "trap": "Negociar directamente con los Developers para cambiar prioridades es un antipatrón clásico que rompe el punto único de decisión que representa el PO."
      },
      {
        "type": "single",
        "q": "¿Qué relación existe entre la Revisión del Sprint y la liberación de valor al mercado?",
        "opts": [
          "La Revisión del Sprint no es una puerta de aprobación para liberar valor, y solo el trabajo que cumple la Definition of Done forma parte del Incremento utilizable",
          "La petición de la parte interesada prevalece siempre sobre la Definition of Done",
          "El Incremento puede liberarse igualmente si el Product Owner lo aprueba verbalmente en el momento",
          "La Revisión del Sprint siempre implica el despliegue automático a producción de lo demostrado"
        ],
        "correct": 0,
        "exp": [
          "Correcto: la DoD es el estándar de calidad que determina si un trabajo forma parte del Incremento, independientemente de la presión de una parte interesada.",
          "Incorrecto: ninguna parte interesada, ni siquiera un cliente, puede saltarse la Definition of Done.",
          "Incorrecto: la aprobación verbal del PO no sustituye el cumplimiento de la Definition of Done.",
          "Incorrecto: la Revisión del Sprint no implica despliegue automático; liberar valor es una decisión independiente del evento."
        ],
        "trap": "Confundir 'mostrar avances en la Revisión del Sprint' con 'aprobar el release' es un error común; la DoD manda, no la presión de un stakeholder."
      },
      {
        "type": "multi",
        "q": "¿Qué hace el Scrum Master en relación con las partes interesadas? (selecciona todas las correctas)",
        "opts": [
          "Facilita la colaboración con las partes interesadas cuando se solicita o resulta necesario",
          "Ayuda a eliminar barreras entre las partes interesadas y el Scrum Team",
          "Toma las decisiones finales de orden del Product Backlog en nombre de las partes interesadas",
          "Sustituye al Product Owner en la negociación de prioridades con las partes interesadas"
        ],
        "correct": [
          0,
          1
        ],
        "exp": [
          "Correcto: es una de las formas explícitas en que el Scrum Master sirve a la organización.",
          "Correcto: eliminar barreras entre stakeholders y el Scrum Team es responsabilidad del Scrum Master.",
          "Incorrecto: ordenar el Product Backlog es responsabilidad exclusiva del Product Owner.",
          "Incorrecto: el Scrum Master facilita, pero no sustituye al Product Owner como negociador de prioridades."
        ],
        "trap": "El Scrum Master facilita y elimina barreras, pero nunca usurpa las decisiones de contenido u orden que corresponden al Product Owner."
      },
      {
        "type": "single",
        "q": "¿Qué son las partes interesadas (stakeholders) respecto al Scrum Team?",
        "opts": [
          "Son personas externas al Scrum Team que colaboran con él, especialmente en la Revisión del Sprint",
          "Forman parte del Scrum Team junto con el Product Owner, el Scrum Master y los Developers",
          "Tienen autoridad para dirigir directamente el trabajo de los Developers",
          "Sustituyen al Product Owner cuando este no está disponible"
        ],
        "correct": 0,
        "exp": [
          "Correcto: las partes interesadas son externas al Scrum Team, aunque colaboran estrechamente con él, sobre todo en la Revisión del Sprint.",
          "Incorrecto: el Scrum Team está formado únicamente por el Product Owner, el Scrum Master y los Developers.",
          "Incorrecto: dirigir el trabajo de los Developers no es un rol de las partes interesadas.",
          "Incorrecto: la Guía Scrum no contempla que una parte interesada sustituya al Product Owner."
        ],
        "trap": "Un error muy común en el examen es pensar que 'colaborar estrechamente' equivale a 'ser miembro del Scrum Team'."
      }
    ]
  }
];

const ALL_QUESTIONS_ES = TOPICS_ES.flatMap(t => t.questions.map(q => ({...q, topicId: t.id, topicName: t.name})));
