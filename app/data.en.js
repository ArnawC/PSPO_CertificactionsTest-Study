// ==========================================================================
// PLANTILLA PENDIENTE DE TRADUCCION (EN)
// Misma estructura que data.ca.js (mismos ids de tema, mismo numero y orden
// de preguntas, mismo type/correct por pregunta). Traducir SOLO los campos
// de texto (name, theory, q, opts, exp, trap) siguiendo la Scrum Guide
// oficial en ingles (noviembre 2020). No cambiar ids, type ni
// los indices de correct.
// ==========================================================================

const TOPICS_EN = [
  {
    "id": "empirisme",
    "name": "[EN PENDIENTE] Empirisme i pensament Lean",
    "theory": "<p><i>[EN PENDIENTE — traducir siguiendo la Scrum Guide oficial en inglés. Referencia original en catalán: data.ca.js, topic \"empirisme\"]</i></p>",
    "questions": [
      {
        "type": "multi",
        "q": "[EN PENDIENTE] Quins són els tres pilars de l'empirisme segons la Guia Scrum?",
        "opts": [
          "[EN PENDIENTE] Transparència",
          "[EN PENDIENTE] Previsibilitat",
          "[EN PENDIENTE] Inspecció",
          "[EN PENDIENTE] Adaptació"
        ],
        "correct": [
          0,
          2,
          3
        ],
        "exp": [
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Incorrecte: la previsibilitat és un objectiu que Scrum busca optimitzar, no un pilar.",
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Correcte."
        ],
        "trap": "[EN PENDIENTE] Els tres pilars són exactament transparència, inspecció i adaptació. Cap més concepte (previsibilitat, planificació...) forma part d'aquesta llista."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Segons la Guia, què passa amb la inspecció sense adaptació?",
        "opts": [
          "[EN PENDIENTE] Es considera inútil",
          "[EN PENDIENTE] Es considera suficient si es documenta bé",
          "[EN PENDIENTE] És l'única finalitat de la Retrospective",
          "[EN PENDIENTE] Substitueix la transparència"
        ],
        "correct": 0,
        "exp": [
          "[EN PENDIENTE] Correcte: cita literal.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte: la inspecció passa en tots els esdeveniments, no només a la Retrospective.",
          "[EN PENDIENTE] Incorrecte: són pilars independents i seqüencials."
        ],
        "trap": "[EN PENDIENTE] Frase gairebé literal de la Guia: 'la inspección sin adaptación se considera inútil'."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] En quins tres artefactes formals es basen les decisions importants segons la teoria de Scrum?",
        "opts": [
          "[EN PENDIENTE] Product Backlog, Sprint Backlog i Increment",
          "[EN PENDIENTE] Product Goal, Sprint Goal i Definition of Done",
          "[EN PENDIENTE] Roadmap, Backlog i Release Plan",
          "[EN PENDIENTE] Sprint Backlog, Definition of Done i Vision"
        ],
        "correct": 0,
        "exp": [
          "[EN PENDIENTE] Correcte: són els tres artefactes formals de Scrum.",
          "[EN PENDIENTE] Incorrecte: aquests són els 'compromisos' de cada artefacte, no els artefactes en si.",
          "[EN PENDIENTE] Incorrecte: no són termes formals de la Guia Scrum.",
          "[EN PENDIENTE] Incorrecte: barreja artefactes amb compromisos."
        ],
        "trap": "[EN PENDIENTE] No confondre 'artefacte' amb el seu 'compromís' associat (p. ex. Product Backlog té el Product Goal com a compromís, però són coses diferents)."
      },
      {
        "type": "tf",
        "q": "[EN PENDIENTE] El pensament Lean es centra en reduir desperdicis i centrar-se en l'essencial.",
        "opts": [
          "[EN PENDIENTE] Vertader",
          "[EN PENDIENTE] Fals"
        ],
        "correct": [
          0
        ],
        "exp": [
          "[EN PENDIENTE] Correcte: definició literal de la Guia."
        ],
        "trap": "[EN PENDIENTE] No confondre pensament Lean amb metodologies com Kanban o Six Sigma, que no es mencionen a la Guia Scrum."
      },
      {
        "type": "multi",
        "q": "[EN PENDIENTE] Quins dels següents són valors de Scrum segons la Guia 2020?",
        "opts": [
          "[EN PENDIENTE] Compromís",
          "[EN PENDIENTE] Eficiència",
          "[EN PENDIENTE] Respecte",
          "[EN PENDIENTE] Coratge"
        ],
        "correct": [
          0,
          2,
          3
        ],
        "exp": [
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Incorrecte: 'eficiència' no és un valor citat a la Guia.",
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Correcte."
        ],
        "trap": "[EN PENDIENTE] Els 5 valors són: Compromís, Enfocament, Obertura, Respecte i Coratge. Paraules similars com 'eficiència' o 'qualitat' són distractors habituals."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Què permet la transparència segons la teoria de Scrum?",
        "opts": [
          "[EN PENDIENTE] L'adaptació directa",
          "[EN PENDIENTE] La inspecció",
          "[EN PENDIENTE] La planificació de releases",
          "[EN PENDIENTE] La creació del Sprint Backlog"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte: la transparència permet la inspecció, i aquesta permet l'adaptació — és una cadena.",
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte."
        ],
        "trap": "[EN PENDIENTE] La cadena lògica és: Transparència → permet la Inspecció → permet l'Adaptació. No saltis directament de transparència a adaptació."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Quan es tornen més difícils les adaptacions segons la Guia?",
        "opts": [
          "[EN PENDIENTE] Quan l'equip és massa gran",
          "[EN PENDIENTE] Quan les persones no estan empoderades o no poden autogestionar-se",
          "[EN PENDIENTE] Quan el Sprint dura més d'un mes",
          "[EN PENDIENTE] Quan hi ha massa stakeholders"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte: cita literal.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte."
        ],
        "trap": "[EN PENDIENTE] L'empoderament i la capacitat d'autogestió són condicions necessàries per adaptar-se amb eficàcia."
      },
      {
        "type": "tf",
        "q": "[EN PENDIENTE] Els valors de Scrum s'aprenen i s'exploren mentre l'equip treballa amb els esdeveniments i artefactes, no com a formació separada.",
        "opts": [
          "[EN PENDIENTE] Vertader",
          "[EN PENDIENTE] Fals"
        ],
        "correct": [
          0
        ],
        "exp": [
          "[EN PENDIENTE] Correcte: la Guia ho descriu així literalment."
        ],
        "trap": "[EN PENDIENTE] Els valors no són un mòdul de formació aïllat; sorgeixen de la pràctica diària amb Scrum."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Quina afirmació descriu millor l'empirisme?",
        "opts": [
          "[EN PENDIENTE] Planificar tot el treball abans de començar per evitar sorpreses",
          "[EN PENDIENTE] Prendre decisions basades en el que s'observa i l'experiència",
          "[EN PENDIENTE] Seguir un pla fix sense revisar-lo",
          "[EN PENDIENTE] Delegar totes les decisions al Product Owner"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte: és l'enfocament contrari (Big Design Up Front).",
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte: l'empirisme implica tot l'equip Scrum, no només el PO."
        ],
        "trap": "[EN PENDIENTE] Planificar-ho tot per endavant (BDUF) és l'oposat de l'empirisme, un distractor molt habitual."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Com ajuda Scrum a la inspecció freqüent dels artefactes i el progrés?",
        "opts": [
          "[EN PENDIENTE] Mitjançant informes setmanals obligatoris",
          "[EN PENDIENTE] Proporcionant cadència amb els seus cinc esdeveniments",
          "[EN PENDIENTE] Amb auditories externes trimestrals",
          "[EN PENDIENTE] Amb un Sprint 0 de preparació"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte: no existeix aquest requisit a la Guia.",
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte: 'Sprint 0' no existeix a Scrum."
        ],
        "trap": "[EN PENDIENTE] 'Sprint 0' és un dels distractors més recurrents a l'examen: no existeix a la Guia Scrum."
      },
      {
        "type": "multi",
        "q": "[EN PENDIENTE] Quines afirmacions sobre el risc i la complexitat són correctes segons la teoria de Scrum?",
        "opts": [
          "[EN PENDIENTE] Scrum optimitza la previsibilitat i controla el risc mitjançant un enfocament iteratiu i incremental",
          "[EN PENDIENTE] El risc es controla només mitjançant documentació detallada prèvia",
          "[EN PENDIENTE] Scrum s'utilitza en entorns complexos on el resultat no es coneix per endavant",
          "[EN PENDIENTE] Els Sprints més curts poden limitar el risc de cost i esforç"
        ],
        "correct": [
          0,
          2,
          3
        ],
        "exp": [
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Incorrecte: contrari a l'enfocament empíric.",
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Correcte: cita literal de la Guia."
        ],
        "trap": "[EN PENDIENTE] La documentació detallada prèvia (BDUF) és l'oposat del control de risc empíric que proposa Scrum."
      }
    ]
  },
  {
    "id": "scrum-team",
    "name": "[EN PENDIENTE] L'Equip Scrum i les seves accountabilities",
    "theory": "<p><i>[EN PENDIENTE — traducir siguiendo la Scrum Guide oficial en inglés. Referencia original en catalán: data.ca.js, topic \"scrum-team\"]</i></p>",
    "questions": [
      {
        "type": "single",
        "q": "[EN PENDIENTE] Quantes persones formen habitualment un Scrum Team, segons la Guia?",
        "opts": [
          "[EN PENDIENTE] 5 o menys",
          "[EN PENDIENTE] 10 o menys",
          "[EN PENDIENTE] Entre 15 i 20",
          "[EN PENDIENTE] No hi ha límit definit"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte: la Guia sí que dona una xifra orientativa."
        ],
        "trap": "[EN PENDIENTE] La xifra exacta ('en general 10 o menys') és una dada memoritzable típica d'examen."
      },
      {
        "type": "multi",
        "q": "[EN PENDIENTE] Quines són responsabilitats explícites dels Developers segons la Guia?",
        "opts": [
          "[EN PENDIENTE] Crear el Sprint Backlog",
          "[EN PENDIENTE] Ordenar el Product Backlog",
          "[EN PENDIENTE] Adherir-se a una Definition of Done",
          "[EN PENDIENTE] Adaptar el seu pla cada dia cap al Sprint Goal"
        ],
        "correct": [
          0,
          2,
          3
        ],
        "exp": [
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Incorrecte: ordenar el Product Backlog és responsabilitat del Product Owner.",
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Correcte."
        ],
        "trap": "[EN PENDIENTE] Ordenar el Product Backlog és sempre del PO, mai dels Developers — trampa d'intercanvi de responsabilitats molt freqüent."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Qui pot delegar la gestió efectiva del Product Backlog?",
        "opts": [
          "[EN PENDIENTE] Ningú, és intransferible fins i tot el treball",
          "[EN PENDIENTE] El Product Owner pot delegar el treball, però mai la responsabilitat",
          "[EN PENDIENTE] El Scrum Master, si el PO no hi és",
          "[EN PENDIENTE] Els Developers, per consens"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte: el treball sí es pot delegar.",
          "[EN PENDIENTE] Correcte: cita literal.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte."
        ],
        "trap": "[EN PENDIENTE] Distingeix sempre 'delegar el treball' (possible) de 'delegar la responsabilitat' (impossible, sempre és del PO)."
      },
      {
        "type": "tf",
        "q": "[EN PENDIENTE] El Product Owner pot ser un comitè de diverses persones per representar millor els stakeholders.",
        "opts": [
          "[EN PENDIENTE] Vertader",
          "[EN PENDIENTE] Fals"
        ],
        "correct": [
          1
        ],
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte: 'El Propietario del Producto es una persona, no un comité' — cita literal."
        ],
        "trap": "[EN PENDIENTE] El PO és sempre una única persona, encara que representi moltes veus de negoci."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Com ha de procedir algú que vulgui canviar la prioritat d'un element del Product Backlog?",
        "opts": [
          "[EN PENDIENTE] Modificar-lo directament si és urgent",
          "[EN PENDIENTE] Negociar-ho amb el Product Owner",
          "[EN PENDIENTE] Demanar-ho als Developers al Daily Scrum",
          "[EN PENDIENTE] Esperar a la Retrospective"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte: cita literal de la Guia.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte."
        ],
        "trap": "[EN PENDIENTE] Qualsevol canvi d'ordre o abast del backlog passa sempre per una negociació amb el PO."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Quin terme va introduir la Guia 2020 per substituir 'auto-organitzat'?",
        "opts": [
          "[EN PENDIENTE] Auto-suficient",
          "[EN PENDIENTE] Autogestionat",
          "[EN PENDIENTE] Multidisciplinari",
          "[EN PENDIENTE] Auto-dirigit"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte."
        ],
        "trap": "[EN PENDIENTE] 'Auto-organitzat' és terminologia 2017, obsoleta. 2020 usa 'autogestionat' (self-managing): decideixen qui, com i on treballar."
      },
      {
        "type": "multi",
        "q": "[EN PENDIENTE] Quines de les següents són formes en què el Scrum Master serveix al Product Owner?",
        "opts": [
          "[EN PENDIENTE] Ajudar a trobar tècniques per definir el Product Goal",
          "[EN PENDIENTE] Decidir l'ordre del Product Backlog en el seu lloc",
          "[EN PENDIENTE] Ajudar l'equip a entendre la necessitat d'elements clars i concisos",
          "[EN PENDIENTE] Facilitar la col·laboració amb stakeholders quan es sol·liciti"
        ],
        "correct": [
          0,
          2,
          3
        ],
        "exp": [
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Incorrecte: mai substitueix la decisió del PO.",
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Correcte."
        ],
        "trap": "[EN PENDIENTE] El SM 'ajuda' i 'facilita', però mai pren decisions que són accountability exclusiva del PO."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Qui és responsable de determinar el tamany (sizing) dels elements del Product Backlog?",
        "opts": [
          "[EN PENDIENTE] El Product Owner",
          "[EN PENDIENTE] El Scrum Master",
          "[EN PENDIENTE] Els Developers",
          "[EN PENDIENTE] Els stakeholders"
        ],
        "correct": 2,
        "exp": [
          "[EN PENDIENTE] Incorrecte: el PO pot influir, però no decideix.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte: qui fa el treball és qui l'estima.",
          "[EN PENDIENTE] Incorrecte."
        ],
        "trap": "[EN PENDIENTE] El PO 'pot influir ajudant-los a entendre i seleccionar millors alternatives', però la decisió final és dels Developers."
      },
      {
        "type": "tf",
        "q": "[EN PENDIENTE] Dins de l'Scrum Team hi ha sub-equips diferenciats, per exemple un equip de QA i un altre de desenvolupament.",
        "opts": [
          "[EN PENDIENTE] Vertader",
          "[EN PENDIENTE] Fals"
        ],
        "correct": [
          1
        ],
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte: la Guia diu explícitament que no hi ha sub-equips ni jerarquies dins l'Scrum Team."
        ],
        "trap": "[EN PENDIENTE] Frase literal: 'no hi ha sub-equips ni jerarquies'. Qualsevol opció que suggereixi sub-divisions internes és incorrecta."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Quina és la responsabilitat central i única del Scrum Master segons la Guia?",
        "opts": [
          "[EN PENDIENTE] Assegurar que l'equip compleixi terminis",
          "[EN PENDIENTE] Ser responsable d'establir Scrum tal com es defineix a la Guia",
          "[EN PENDIENTE] Gestionar el pressupost del projecte",
          "[EN PENDIENTE] Assignar tasques als Developers"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte: cita literal.",
          "[EN PENDIENTE] Incorrecte: no és una funció Scrum.",
          "[EN PENDIENTE] Incorrecte: els Developers s'auto-assignen tasques."
        ],
        "trap": "[EN PENDIENTE] El SM no assigna feina; això trencaria l'autogestió de l'equip."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Quan diversos Scrum Teams treballen en el mateix producte, què han de compartir obligatòriament?",
        "opts": [
          "[EN PENDIENTE] El mateix Scrum Master per a tots els equips",
          "[EN PENDIENTE] El mateix Product Goal, Product Backlog i Product Owner",
          "[EN PENDIENTE] El mateix Sprint Backlog per a tots",
          "[EN PENDIENTE] Els mateixos Developers rotant entre equips"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte: cada equip pot tenir el seu propi SM.",
          "[EN PENDIENTE] Correcte: cita literal.",
          "[EN PENDIENTE] Incorrecte: cada equip té el seu propi Sprint Backlog.",
          "[EN PENDIENTE] Incorrecte."
        ],
        "trap": "[EN PENDIENTE] Regla d''un producte, un Product Backlog, un Product Owner' encara que hi hagi múltiples equips Scrum treballant-hi."
      },
      {
        "type": "multi",
        "q": "[EN PENDIENTE] Quines afirmacions sobre el Product Owner són correctes?",
        "opts": [
          "[EN PENDIENTE] És responsable de maximitzar el valor del producte",
          "[EN PENDIENTE] Ha de comptar amb l'aprovació dels Developers per canviar l'ordre del backlog",
          "[EN PENDIENTE] Pot representar les necessitats de moltes parts interessades",
          "[EN PENDIENTE] Ha de ser respectat per tota l'organització perquè les seves decisions siguin efectives"
        ],
        "correct": [
          0,
          2,
          3
        ],
        "exp": [
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Incorrecte: el PO ordena el backlog sense necessitar aprovació dels Developers.",
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Correcte: cita literal sobre el respecte organitzacional."
        ],
        "trap": "[EN PENDIENTE] El PO decideix l'ordre unilateralment; no necessita 'aprovació' dels Developers, encara que sí col·labori amb ells."
      }
    ]
  },
  {
    "id": "esdeveniments",
    "name": "[EN PENDIENTE] Esdeveniments de Scrum",
    "theory": "<p><i>[EN PENDIENTE — traducir siguiendo la Scrum Guide oficial en inglés. Referencia original en catalán: data.ca.js, topic \"esdeveniments\"]</i></p>",
    "questions": [
      {
        "type": "single",
        "q": "[EN PENDIENTE] Què significa que un esdeveniment tingui un 'timebox'?",
        "opts": [
          "[EN PENDIENTE] Té una durada mínima obligatòria",
          "[EN PENDIENTE] Té una durada màxima fixada per endavant",
          "[EN PENDIENTE] Es fa sempre a la mateixa hora",
          "[EN PENDIENTE] Ha d'acabar abans d'una data límit externa"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Incorrecte: confon timebox amb horari fix.",
          "[EN PENDIENTE] Incorrecte: confon amb deadline."
        ],
        "trap": "[EN PENDIENTE] Un timebox mai exigeix un mínim — pot acabar abans, mai després del màxim."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Quin és el timebox màxim del Daily Scrum, independentment de la durada del Sprint?",
        "opts": [
          "[EN PENDIENTE] 30 minuts",
          "[EN PENDIENTE] 15 minuts, sempre",
          "[EN PENDIENTE] 1 hora per Sprints d'un mes",
          "[EN PENDIENTE] Escala proporcionalment amb la durada del Sprint"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte: és l'única excepció que NO escala."
        ],
        "trap": "[EN PENDIENTE] Planning, Review i Retro escalen amb la durada del Sprint; el Daily Scrum sempre és 15 min màxim."
      },
      {
        "type": "multi",
        "q": "[EN PENDIENTE] Quins tres temes s'aborden al Sprint Planning?",
        "opts": [
          "[EN PENDIENTE] Per què és valuós aquest Sprint",
          "[EN PENDIENTE] Qui assistirà al Sprint Review",
          "[EN PENDIENTE] Què es pot fer aquest Sprint",
          "[EN PENDIENTE] Com es realitzarà el treball escollit"
        ],
        "correct": [
          0,
          2,
          3
        ],
        "exp": [
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Correcte."
        ],
        "trap": "[EN PENDIENTE] El 'Why' és l'afegit de la Guia 2020; qualsevol resposta que l'ometi és incompleta."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Qui té l'autoritat per cancel·lar un Sprint?",
        "opts": [
          "[EN PENDIENTE] El Scrum Master",
          "[EN PENDIENTE] Tot l'Scrum Team per consens",
          "[EN PENDIENTE] Només el Product Owner",
          "[EN PENDIENTE] Els stakeholders principals"
        ],
        "correct": 2,
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte: cita literal.",
          "[EN PENDIENTE] Incorrecte."
        ],
        "trap": "[EN PENDIENTE] Decisió unilateral i exclusiva del PO — no requereix consens de ningú més."
      },
      {
        "type": "tf",
        "q": "[EN PENDIENTE] El Sprint Review és una porta d'aprovació formal per alliberar l'Increment a producció.",
        "opts": [
          "[EN PENDIENTE] Vertader",
          "[EN PENDIENTE] Fals"
        ],
        "correct": [
          1
        ],
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte: la Guia ho nega explícitament."
        ],
        "trap": "[EN PENDIENTE] És una sessió de treball d'inspecció i adaptació, no un 'gate' d'aprovació estil Waterfall."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Quina és la durada màxima de la Sprint Retrospective per un Sprint d'un mes?",
        "opts": [
          "[EN PENDIENTE] 1 hora",
          "[EN PENDIENTE] 2 hores",
          "[EN PENDIENTE] 3 hores",
          "[EN PENDIENTE] 4 hores"
        ],
        "correct": 2,
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Incorrecte (això és la Review)."
        ],
        "trap": "[EN PENDIENTE] Ordre a memoritzar: Planning 8h, Review 4h, Retro 3h (per Sprint d'un mes)."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Qui participa al Daily Scrum?",
        "opts": [
          "[EN PENDIENTE] Tot l'Scrum Team amb el mateix pes de veu",
          "[EN PENDIENTE] Només els Developers; PO i SM només si treballen com Developers",
          "[EN PENDIENTE] Només el Product Owner i els stakeholders",
          "[EN PENDIENTE] El Scrum Master en solitari per informar l'organització"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte."
        ],
        "trap": "[EN PENDIENTE] És un esdeveniment intern dels Developers. Si PO/SM hi participen és perquè estan fent treball del Sprint Backlog, no per rol de gestió."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Quan comença un nou Sprint?",
        "opts": [
          "[EN PENDIENTE] Una setmana després que acabi l'anterior, per revisar resultats",
          "[EN PENDIENTE] Immediatament després que acabi l'anterior",
          "[EN PENDIENTE] Quan el Product Owner ho decideixi discrecionalment",
          "[EN PENDIENTE] Després d'un 'Sprint 0' de preparació"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte: 'Sprint 0' no existeix."
        ],
        "trap": "[EN PENDIENTE] No hi ha buit entre Sprints ni un 'Sprint 0' de preparació — un dels distractors més recurrents."
      },
      {
        "type": "multi",
        "q": "[EN PENDIENTE] Quines afirmacions sobre el Sprint són correctes?",
        "opts": [
          "[EN PENDIENTE] Té una durada fixa d'un mes o menys",
          "[EN PENDIENTE] Durant el Sprint es poden fer canvis que posin en perill el Sprint Goal si el PO ho aprova",
          "[EN PENDIENTE] La qualitat no disminueix durant el Sprint",
          "[EN PENDIENTE] L'abast es pot clarificar i renegociar amb el PO a mesura que s'aprèn més"
        ],
        "correct": [
          0,
          2,
          3
        ],
        "exp": [
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Incorrecte: mai es posa en perill el Sprint Goal, ni amb aprovació del PO.",
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Correcte."
        ],
        "trap": "[EN PENDIENTE] Cap canvi durant el Sprint pot posar en perill el Sprint Goal, sense excepcions, ni tan sols amb 'permís' del PO."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Quin és el propòsit principal del Daily Scrum?",
        "opts": [
          "[EN PENDIENTE] Informar el Scrum Master de l'estat de cada persona",
          "[EN PENDIENTE] Inspeccionar el progrés cap al Sprint Goal i adaptar el Sprint Backlog",
          "[EN PENDIENTE] Assignar noves tasques als Developers per part del PO",
          "[EN PENDIENTE] Revisar l'Increment amb els stakeholders"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte: cita literal.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte: això és el Sprint Review."
        ],
        "trap": "[EN PENDIENTE] No és un 'status report' cap a un cap; és inspecció i adaptació feta pel mateix equip, per a ell mateix."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Un Sprint de dues setmanes: quin és el timebox màxim aproximat del Sprint Planning?",
        "opts": [
          "[EN PENDIENTE] 8 hores, igual que en un Sprint d'un mes",
          "[EN PENDIENTE] Proporcionalment menor, normalment més curt",
          "[EN PENDIENTE] 15 minuts",
          "[EN PENDIENTE] No aplica Sprint Planning en sprints curts"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte: 8h és el màxim NOMÉS per sprints d'un mes.",
          "[EN PENDIENTE] Correcte: 'Para sprints más cortos, el evento suele ser más corto'.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte."
        ],
        "trap": "[EN PENDIENTE] La xifra de 8h és específica per sprints d'un mes; en sprints més curts el timebox s'escurça proporcionalment (sense un nombre exacte fixat per la Guia)."
      },
      {
        "type": "tf",
        "q": "[EN PENDIENTE] La Sprint Retrospective és exclusivament per als Developers; el Product Owner no hi participa.",
        "opts": [
          "[EN PENDIENTE] Vertader",
          "[EN PENDIENTE] Fals"
        ],
        "correct": [
          1
        ],
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte: tot l'Scrum Team hi participa, PO inclòs, com un membre més."
        ],
        "trap": "[EN PENDIENTE] El PO no queda fora de cap esdeveniment intern de l'equip — participa igual que Developers i SM."
      }
    ]
  },
  {
    "id": "artefactes",
    "name": "[EN PENDIENTE] Artefactes i els seus compromisos",
    "theory": "<p><i>[EN PENDIENTE — traducir siguiendo la Scrum Guide oficial en inglés. Referencia original en catalán: data.ca.js, topic \"artefactes\"]</i></p>",
    "questions": [
      {
        "type": "single",
        "q": "[EN PENDIENTE] Quin compromís està associat al Product Backlog?",
        "opts": [
          "[EN PENDIENTE] Sprint Goal",
          "[EN PENDIENTE] Definition of Done",
          "[EN PENDIENTE] Product Goal",
          "[EN PENDIENTE] Increment"
        ],
        "correct": 2,
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Incorrecte: l'Increment és un artefacte, no un compromís."
        ],
        "trap": "[EN PENDIENTE] Empareja sempre: Product Backlog→Product Goal, Sprint Backlog→Sprint Goal, Increment→Definition of Done."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Com descriu la Guia el Product Backlog?",
        "opts": [
          "[EN PENDIENTE] Una llista fixa i priorizada de requisits",
          "[EN PENDIENTE] Una llista emergent i ordenada del que cal per millorar el producte",
          "[EN PENDIENTE] Un document d'abast aprovat pels stakeholders",
          "[EN PENDIENTE] Un pla de release amb dates fixes"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte."
        ],
        "trap": "[EN PENDIENTE] Paraules clau textuals: 'emergent' i 'ordenada' — mai 'fixa' ni 'priorizada'."
      },
      {
        "type": "tf",
        "q": "[EN PENDIENTE] Es pot considerar un element com a part de l'Increment encara que no compleixi la Definition of Done, si el PO ho aprova.",
        "opts": [
          "[EN PENDIENTE] Vertader",
          "[EN PENDIENTE] Fals"
        ],
        "correct": [
          1
        ],
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte: sense excepcions, ni amb aprovació del PO."
        ],
        "trap": "[EN PENDIENTE] La DoD no és negociable per ningú, ni tan sols pel PO — és un estàndard de qualitat objectiu."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Què passa amb un element del Product Backlog que no compleix la Definition of Done al final del Sprint?",
        "opts": [
          "[EN PENDIENTE] Es lliura amb una nota d'excepció",
          "[EN PENDIENTE] Es presenta al Sprint Review com 'gairebé fet'",
          "[EN PENDIENTE] Torna al Product Backlog per consideració futura",
          "[EN PENDIENTE] S'elimina definitivament"
        ],
        "correct": 2,
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte: ni tan sols es presenta.",
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Incorrecte."
        ],
        "trap": "[EN PENDIENTE] 'Gairebé fet' no existeix a Scrum: un element està Done o no ho està."
      },
      {
        "type": "multi",
        "q": "[EN PENDIENTE] Quines afirmacions sobre l'Increment són correctes?",
        "opts": [
          "[EN PENDIENTE] Es pot lliurar als stakeholders abans que acabi el Sprint",
          "[EN PENDIENTE] Només es pot crear un Increment per Sprint",
          "[EN PENDIENTE] Ha de complir la Definition of Done per considerar-se part de l'Increment",
          "[EN PENDIENTE] El Sprint Review és l'única oportunitat de lliurar valor"
        ],
        "correct": [
          0,
          2
        ],
        "exp": [
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Incorrecte: se'n poden crear diversos dins un mateix Sprint.",
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Incorrecte: la Guia ho nega explícitament."
        ],
        "trap": "[EN PENDIENTE] Dues trampes juntes: creure que només hi ha un Increment per Sprint, i creure que el Sprint Review és l'únic moment de lliurar valor."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Quin és l'objectiu a llarg termini per a l'Scrum Team, situat dins el Product Backlog?",
        "opts": [
          "[EN PENDIENTE] El Sprint Goal",
          "[EN PENDIENTE] El Product Goal",
          "[EN PENDIENTE] La Definition of Done",
          "[EN PENDIENTE] El Release Plan"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte: és l'objectiu del Sprint, a curt termini.",
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte: no és un artefacte formal de la Guia."
        ],
        "trap": "[EN PENDIENTE] Product Goal = llarg termini; Sprint Goal = curt termini (només aquell Sprint)."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Qui crea el Sprint Backlog?",
        "opts": [
          "[EN PENDIENTE] El Product Owner en solitari",
          "[EN PENDIENTE] Els Developers",
          "[EN PENDIENTE] Tot l'Scrum Team col·lectivament durant el Sprint Planning, sent un pla per i per als Developers",
          "[EN PENDIENTE] El Scrum Master"
        ],
        "correct": 2,
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Parcialment cert però incomplet — la resposta més precisa inclou el context de col·laboració.",
          "[EN PENDIENTE] Correcte: es crea durant el Planning col·laborativament, però és 'un pla por y para los desarrolladores'.",
          "[EN PENDIENTE] Incorrecte."
        ],
        "trap": "[EN PENDIENTE] El Sprint Backlog sorgeix de la col·laboració de tot l'Scrum Team al Planning, però és propietat operativa dels Developers, que l'actualitzen durant el Sprint."
      },
      {
        "type": "tf",
        "q": "[EN PENDIENTE] El Sprint Backlog és un document estàtic que no canvia un cop començat el Sprint.",
        "opts": [
          "[EN PENDIENTE] Vertader",
          "[EN PENDIENTE] Fals"
        ],
        "correct": [
          1
        ],
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte: 's'actualitza al llarg del Sprint a mesura que s'aprèn més'."
        ],
        "trap": "[EN PENDIENTE] El Sprint Backlog és una 'imagen muy visible y en tiempo real' — dinàmic, no estàtic."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Si la Definition of Done forma part dels estàndards de l'organització, què han de fer els Scrum Teams?",
        "opts": [
          "[EN PENDIENTE] Poden ignorar-la si el seu producte és diferent",
          "[EN PENDIENTE] Han de seguir-la com a mínim",
          "[EN PENDIENTE] És opcional per a equips experimentats",
          "[EN PENDIENTE] Només s'aplica al primer Sprint"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte: cita literal.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte."
        ],
        "trap": "[EN PENDIENTE] Si hi ha estàndard organitzatiu de DoD, és un mínim obligatori per a tots els equips, no una opció."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Quan es crea un Increment segons la Guia?",
        "opts": [
          "[EN PENDIENTE] Quan el PO l'aprova al Sprint Review",
          "[EN PENDIENTE] En el moment en què un element del Product Backlog compleix la Definition of Done",
          "[EN PENDIENTE] Al final de cada Sprint, sempre",
          "[EN PENDIENTE] Quan els stakeholders el validen"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte: cita literal.",
          "[EN PENDIENTE] Incorrecte: es pot crear en qualsevol moment del Sprint, no només al final.",
          "[EN PENDIENTE] Incorrecte."
        ],
        "trap": "[EN PENDIENTE] La creació de l'Increment no depèn d'una aprovació humana — depèn únicament de complir la DoD."
      },
      {
        "type": "multi",
        "q": "[EN PENDIENTE] Quins atributs es van afegir o reforçar a la Guia 2020 respecte als artefactes?",
        "opts": [
          "[EN PENDIENTE] El concepte de Product Goal com a nou compromís",
          "[EN PENDIENTE] L'eliminació completa del Product Backlog",
          "[EN PENDIENTE] Cada artefacte té ara un 'compromís' associat explícit",
          "[EN PENDIENTE] La Definition of Done ja no és necessària per l'Increment"
        ],
        "correct": [
          0,
          2
        ],
        "exp": [
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Incorrecte: mai es va eliminar.",
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Incorrecte: segueix sent obligatòria."
        ],
        "trap": "[EN PENDIENTE] La novetat clau de 2020 és formalitzar els 'compromisos' (Product Goal, Sprint Goal, DoD) per a cada artefacte."
      }
    ]
  },
  {
    "id": "definition-of-done",
    "name": "[EN PENDIENTE] Definition of Done",
    "theory": "<p><i>[EN PENDIENTE — traducir siguiendo la Scrum Guide oficial en inglés. Referencia original en catalán: data.ca.js, topic \"definition-of-done\"]</i></p>",
    "questions": [
      {
        "type": "single",
        "q": "[EN PENDIENTE] Què és la Definition of Done?",
        "opts": [
          "[EN PENDIENTE] Els criteris d'acceptació d'un item concret",
          "[EN PENDIENTE] Una descripció formal de l'estat de l'Increment quan compleix les mesures de qualitat requerides",
          "[EN PENDIENTE] Un document firmat pel PO al final del Sprint",
          "[EN PENDIENTE] Una llista de tasques pendents"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte: és un concepte diferent i més ampli que els criteris d'un item.",
          "[EN PENDIENTE] Correcte: definició literal.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte."
        ],
        "trap": "[EN PENDIENTE] La DoD no és el mateix que els 'criteris d'acceptació' d'un PBI concret — la DoD aplica a tot l'Increment."
      },
      {
        "type": "tf",
        "q": "[EN PENDIENTE] Si diversos Scrum Teams treballen sobre el mateix producte, cada equip pot definir la seva pròpia Definition of Done sense coordinar-se.",
        "opts": [
          "[EN PENDIENTE] Vertader",
          "[EN PENDIENTE] Fals"
        ],
        "correct": [
          1
        ],
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte: han de definir i complir mútuament la mateixa DoD."
        ],
        "trap": "[EN PENDIENTE] En entorns escalats amb un sol producte, la DoD ha de ser compartida i coherent entre tots els equips."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Si l'organització té un estàndard de qualitat per a tots els seus productes, com afecta a la DoD d'un Scrum Team?",
        "opts": [
          "[EN PENDIENTE] El Scrum Team pot ignorar-lo si té la seva pròpia DoD",
          "[EN PENDIENTE] El Scrum Team ha de complir-lo com a mínim",
          "[EN PENDIENTE] Només s'aplica al primer Increment",
          "[EN PENDIENTE] No té relació amb la DoD de l'equip"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte."
        ],
        "trap": "[EN PENDIENTE] L'estàndard organitzatiu és un mínim, mai un màxim ni una opció descartable."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Qui ha de complir la Definition of Done?",
        "opts": [
          "[EN PENDIENTE] Només el Product Owner, en validar l'Increment",
          "[EN PENDIENTE] Els Developers, en construir l'Increment",
          "[EN PENDIENTE] Els stakeholders, en revisar-lo al Sprint Review",
          "[EN PENDIENTE] El Scrum Master, en tancar el Sprint"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte: 'Los desarrolladores deben ajustarse a la definición de Hecho'.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte."
        ],
        "trap": "[EN PENDIENTE] La responsabilitat de complir la DoD és dels Developers, no una validació posterior d'algú altre."
      },
      {
        "type": "tf",
        "q": "[EN PENDIENTE] Un Product Backlog Item que no compleix la Definition of Done es pot presentar al Sprint Review si s'explica el motiu.",
        "opts": [
          "[EN PENDIENTE] Vertader",
          "[EN PENDIENTE] Fals"
        ],
        "correct": [
          1
        ],
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte: la Guia diu que ni tan sols es pot presentar al Sprint Review."
        ],
        "trap": "[EN PENDIENTE] 'Ni siquiera presentar en la revisión de Sprint' és una frase gairebé literal — cap excepció."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Què ha de fer un Scrum Team si no existeix una Definition of Done com a estàndard organitzatiu?",
        "opts": [
          "[EN PENDIENTE] Treballar sense DoD fins que l'organització en defineixi una",
          "[EN PENDIENTE] Crear una DoD adequada per al seu producte",
          "[EN PENDIENTE] Utilitzar la DoD d'un altre equip sense adaptar-la",
          "[EN PENDIENTE] Preguntar als stakeholders quina DoD volen"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte: la DoD és sempre obligatòria.",
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte."
        ],
        "trap": "[EN PENDIENTE] La DoD mai és opcional. Si no hi ha estàndard, l'equip n'ha de crear una pròpia."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Quin dels següents és el compromís (commitment) associat específicament a l'Increment?",
        "opts": [
          "[EN PENDIENTE] Product Goal",
          "[EN PENDIENTE] Sprint Goal",
          "[EN PENDIENTE] Definition of Done",
          "[EN PENDIENTE] Release Plan"
        ],
        "correct": 2,
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Incorrecte: no és un artefacte ni compromís formal de la Guia."
        ],
        "trap": "[EN PENDIENTE] Cadascun dels tres artefactes té exactament un compromís: no barregis els parells."
      },
      {
        "type": "tf",
        "q": "[EN PENDIENTE] La Definition of Done pot variar entre Sprints d'un mateix producte segons convingui al PO.",
        "opts": [
          "[EN PENDIENTE] Vertader",
          "[EN PENDIENTE] Fals"
        ],
        "correct": [
          1
        ],
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte: la DoD és un estàndard de qualitat estable pel producte, no una variable negociable Sprint a Sprint segons convingui."
        ],
        "trap": "[EN PENDIENTE] La DoD pot evolucionar amb el temps (millorar-se), però no es 'flexibilitza' puntualment per conveniència en un Sprint concret."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Quina relació hi ha entre la Definition of Done i la transparència?",
        "opts": [
          "[EN PENDIENTE] Cap relació directa",
          "[EN PENDIENTE] La DoD crea transparència proporcionant una comprensió compartida de què significa 'fet'",
          "[EN PENDIENTE] La DoD substitueix la necessitat de transparència",
          "[EN PENDIENTE] La DoD només afecta la comunicació amb stakeholders externs"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte: cita literal.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte."
        ],
        "trap": "[EN PENDIENTE] La DoD és, per definició, un mecanisme de transparència compartida per a tot l'Scrum Team, no només cap enfora."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Un Developer creu que un element ja es pot considerar 'fet' encara que li falti passar les proves automatitzades incloses a la DoD del producte. Què hauria de fer l'equip?",
        "opts": [
          "[EN PENDIENTE] Acceptar-ho igualment si el PO no s'hi oposa",
          "[EN PENDIENTE] No considerar-lo part de l'Increment fins complir la DoD íntegrament",
          "[EN PENDIENTE] Presentar-ho al Sprint Review com a 'parcialment complet'",
          "[EN PENDIENTE] Deixar-ho a criteri individual de cada Developer"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte: la DoD no és negociable ni tan sols amb el PO.",
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Incorrecte: no existeix la categoria 'parcialment complet'.",
          "[EN PENDIENTE] Incorrecte: la DoD és un estàndard de tot l'equip, no individual."
        ],
        "trap": "[EN PENDIENTE] Cap component de la DoD és opcional ni negociable puntualment, encara que sembli menor."
      },
      {
        "type": "tf",
        "q": "[EN PENDIENTE] Si un producte té diversos Scrum Teams treballant-hi, cadascun pot tenir el seu propi nivell de qualitat sempre que compleixi el mínim intern del seu equip.",
        "opts": [
          "[EN PENDIENTE] Vertader",
          "[EN PENDIENTE] Fals"
        ],
        "correct": [
          1
        ],
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte: han de definir i complir mútuament la mateixa DoD quan comparteixen producte."
        ],
        "trap": "[EN PENDIENTE] 'Nivell de qualitat propi de cada equip' és incorrecte quan es comparteix un únic producte: la DoD ha de ser comuna."
      }
    ]
  },
  {
    "id": "autogestio",
    "name": "[EN PENDIENTE] Equips autogestionats",
    "theory": "<p><i>[EN PENDIENTE — traducir siguiendo la Scrum Guide oficial en inglés. Referencia original en catalán: data.ca.js, topic \"autogestio\"]</i></p>",
    "questions": [
      {
        "type": "single",
        "q": "[EN PENDIENTE] Què decideixen internament els equips autogestionats segons la Guia 2020?",
        "opts": [
          "[EN PENDIENTE] Qui fa el treball, com i on es fa",
          "[EN PENDIENTE] Quant es cobra per cada tasca",
          "[EN PENDIENTE] Qui és el Product Owner",
          "[EN PENDIENTE] Quan comença i acaba l'organització el projecte"
        ],
        "correct": 0,
        "exp": [
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte: el PO no és triat pels Developers.",
          "[EN PENDIENTE] Incorrecte."
        ],
        "trap": "[EN PENDIENTE] La fórmula exacta és 'quién, cómo y dónde trabajar' — memoritza-la literalment."
      },
      {
        "type": "tf",
        "q": "[EN PENDIENTE] 'Autogestionat' i 'auto-organitzat' són sinònims intercambiables a la Guia Scrum 2020.",
        "opts": [
          "[EN PENDIENTE] Vertader",
          "[EN PENDIENTE] Fals"
        ],
        "correct": [
          1
        ],
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte: 'auto-organitzat' és terme de la versió 2017, substituït per 'autogestionat' el 2020."
        ],
        "trap": "[EN PENDIENTE] Trampa de vocabulari molt freqüent: usar el terme antic (2017) com si fos l'actual."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Què vol dir que un Scrum Team sigui multifuncional?",
        "opts": [
          "[EN PENDIENTE] Que cada membre sap fer totes les tasques per si sol",
          "[EN PENDIENTE] Que col·lectivament tenen totes les habilitats necessàries per crear valor cada Sprint",
          "[EN PENDIENTE] Que treballen en diversos productes alhora",
          "[EN PENDIENTE] Que roten de rol cada Sprint"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte: no cal que cada individu sàpiga fer-ho tot.",
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte."
        ],
        "trap": "[EN PENDIENTE] Multifuncional és una propietat de l'equip com a conjunt, no una exigència individual de cada membre."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Quin és el paper del Scrum Master respecte a l'autogestió de l'equip?",
        "opts": [
          "[EN PENDIENTE] Assignar les tasques diàries per assegurar eficiència",
          "[EN PENDIENTE] Capacitar els membres de l'equip en autogestió i multifuncionalitat",
          "[EN PENDIENTE] Decidir qui forma part de l'equip",
          "[EN PENDIENTE] Substituir a un Developer si falta personal"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte: trencaria l'autogestió.",
          "[EN PENDIENTE] Correcte: cita literal.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte."
        ],
        "trap": "[EN PENDIENTE] Qualsevol opció on el SM 'decideix pel equip' trenca el principi d'autogestió."
      },
      {
        "type": "tf",
        "q": "[EN PENDIENTE] L'autogestió implica que ningú es responsabilitza de res concret dins l'equip.",
        "opts": [
          "[EN PENDIENTE] Vertader",
          "[EN PENDIENTE] Fals"
        ],
        "correct": [
          1
        ],
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte: els Developers 'se responsabilizan mutuamente como profesionales' — hi ha rendició de comptes."
        ],
        "trap": "[EN PENDIENTE] Autogestió no és absència de responsabilitat individual ni col·lectiva."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Quan un Scrum Team es torna massa gran, què recomana la Guia?",
        "opts": [
          "[EN PENDIENTE] Afegir més Scrum Masters per coordinar",
          "[EN PENDIENTE] Considerar reorganitzar-se en diversos equips cohesionats centrats en el mateix producte",
          "[EN PENDIENTE] Dividir el Product Backlog en diversos backlogs paral·lels",
          "[EN PENDIENTE] Crear un equip de coordinació superior"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Incorrecte: sempre ha d'existir un únic Product Backlog.",
          "[EN PENDIENTE] Incorrecte: no existeix aquesta figura a la Guia."
        ],
        "trap": "[EN PENDIENTE] La solució a l'escalat és més equips cohesionats amb el mateix Product Goal, Product Backlog i PO — mai més backlogs ni jerarquies noves."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Per què Scrum utilitza 'desarrolladores' com a terme general per a totes les persones que fan el treball?",
        "opts": [
          "[EN PENDIENTE] Per excloure altres disciplines com investigadors o dissenyadors",
          "[EN PENDIENTE] Per simplificar, sense excloure ningú que aporti valor al producte",
          "[EN PENDIENTE] Perquè només aplica a equips de software",
          "[EN PENDIENTE] Per diferenciar-los legalment del Product Owner"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte: és el contrari de la intenció.",
          "[EN PENDIENTE] Correcte: cita literal del propòsit de la Guia.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte."
        ],
        "trap": "[EN PENDIENTE] 'Si obtens valor de Scrum, considera't inclòs' — la Guia és explícita en no limitar el terme a programadors."
      },
      {
        "type": "tf",
        "q": "[EN PENDIENTE] Els Developers poden decidir dividir-se en sub-equips estables per especialitat (frontend, backend) dins del mateix Scrum Team.",
        "opts": [
          "[EN PENDIENTE] Vertader",
          "[EN PENDIENTE] Fals"
        ],
        "correct": [
          1
        ],
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte: la Guia prohibeix explícitament sub-equips dins d'un Scrum Team."
        ],
        "trap": "[EN PENDIENTE] Encara que cada persona tingui especialitats, no es formalitzen sub-equips permanents dins l'Scrum Team."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Quina és la relació entre autogestió i ritme sostenible?",
        "opts": [
          "[EN PENDIENTE] No hi ha relació entre ambdós conceptes",
          "[EN PENDIENTE] Treballar en Sprints a un ritme sostenible millora l'enfocament i la consistència de l'equip autogestionat",
          "[EN PENDIENTE] L'autogestió exigeix hores extra per complir el Sprint Goal",
          "[EN PENDIENTE] El ritme sostenible només aplica al Scrum Master"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte: cita literal.",
          "[EN PENDIENTE] Incorrecte: contrari a l'esperit de la Guia.",
          "[EN PENDIENTE] Incorrecte."
        ],
        "trap": "[EN PENDIENTE] El 'ritme sostenible' és un concepte explícit de la Guia associat al benestar de l'equip, no a treballar més hores."
      }
    ]
  },
  {
    "id": "forecasting",
    "name": "[EN PENDIENTE] Forecasting i planificació de releases",
    "theory": "<p><i>[EN PENDIENTE — traducir siguiendo la Scrum Guide oficial en inglés. Referencia original en catalán: data.ca.js, topic \"forecasting\"]</i></p>",
    "questions": [
      {
        "type": "multi",
        "q": "[EN PENDIENTE] Quines pràctiques cita la Guia Scrum com a útils per al forecasting?",
        "opts": [
          "[EN PENDIENTE] Diagrames de Gantt",
          "[EN PENDIENTE] Burn-down charts",
          "[EN PENDIENTE] Burn-up charts",
          "[EN PENDIENTE] Flujos acumulatius (cumulative flow)"
        ],
        "correct": [
          1,
          2,
          3
        ],
        "exp": [
          "[EN PENDIENTE] Incorrecte: Gantt no apareix a la Guia Scrum.",
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Correcte."
        ],
        "trap": "[EN PENDIENTE] Gantt és un distractor clàssic de metodologia tradicional, no forma part del vocabulari de la Guia Scrum."
      },
      {
        "type": "tf",
        "q": "[EN PENDIENTE] Les eines de forecasting com el burn-down substitueixen la importància de l'empirisme.",
        "opts": [
          "[EN PENDIENTE] Vertader",
          "[EN PENDIENTE] Fals"
        ],
        "correct": [
          1
        ],
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte: la Guia ho nega explícitament — no la substitueixen."
        ],
        "trap": "[EN PENDIENTE] Són eines de suport; la decisió empírica real segueix sent primordial per sobre de qualsevol gràfic."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Segons la teoria de Scrum, en quins entorns es desconeix per endavant què succeirà?",
        "opts": [
          "[EN PENDIENTE] Entorns simples",
          "[EN PENDIENTE] Entorns complexos",
          "[EN PENDIENTE] Entorns predictibles",
          "[EN PENDIENTE] Entorns amb requisits fixos"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte."
        ],
        "trap": "[EN PENDIENTE] Scrum s'orienta a problemes complexos, on el resultat futur és incert per definició."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Quina és la base correcta per fer un forecast fiable, segons l'enfocament empíric?",
        "opts": [
          "[EN PENDIENTE] Una estimació teòrica feta abans de començar el projecte",
          "[EN PENDIENTE] Dades sobre el que ja ha succeït (rendiment passat)",
          "[EN PENDIENTE] L'opinió del stakeholder més sènior",
          "[EN PENDIENTE] Un pla detallat aprovat a l'inici"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte: 'solo lo que ya ha sucedido se puede utilizar para la toma de decisiones con vistas a futuro'.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte: contrari a l'enfocament empíric (BDUF)."
        ],
        "trap": "[EN PENDIENTE] Únicament les dades reals passades són vàlides per projectar el futur en un entorn empíric."
      },
      {
        "type": "tf",
        "q": "[EN PENDIENTE] Un forecast de release ha de comunicar-se com un compromís fix i inamovible.",
        "opts": [
          "[EN PENDIENTE] Vertader",
          "[EN PENDIENTE] Fals"
        ],
        "correct": [
          1
        ],
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte: un forecast és una previsió basada en probabilitat i dades, no un compromís absolut."
        ],
        "trap": "[EN PENDIENTE] Presentar un forecast com a data fixa contradiu l'enfocament probabilístic i empíric que promou Scrum."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Quin factor és clau perquè els Developers puguin fer pronòstics de Sprint més segurs?",
        "opts": [
          "[EN PENDIENTE] Conèixer el pressupost total del projecte",
          "[EN PENDIENTE] Conèixer el seu rendiment passat, capacitat futura i la seva Definition of Done",
          "[EN PENDIENTE] Tenir l'aprovació prèvia de tots els stakeholders",
          "[EN PENDIENTE] Disposar d'un pla de release aprovat per la direcció"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte: cita literal de la secció de Sprint Planning.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte."
        ],
        "trap": "[EN PENDIENTE] El forecast de Sprint es basa en dades pròpies de l'equip (rendiment passat, DoD), no en factors externs com pressupostos o aprovacions."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Quantes vegades, com a mínim, garanteixen els Sprints la inspecció i adaptació del progrés cap a un Product Goal?",
        "opts": [
          "[EN PENDIENTE] Una vegada per trimestre",
          "[EN PENDIENTE] Una vegada al mes, com a mínim, atès que el Sprint dura un mes o menys",
          "[EN PENDIENTE] Una vegada per setmana obligatòriament",
          "[EN PENDIENTE] Només al final del producte"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte: cita literal.",
          "[EN PENDIENTE] Incorrecte: depèn de la durada real del Sprint escollida per l'equip.",
          "[EN PENDIENTE] Incorrecte."
        ],
        "trap": "[EN PENDIENTE] La freqüència mínima ve donada pel límit superior del Sprint (un mes), no per una cadència setmanal obligatòria."
      },
      {
        "type": "tf",
        "q": "[EN PENDIENTE] Quan l'horitzó d'un Sprint és massa llarg, el Sprint Goal pot tornar-se obsolet i el risc pot augmentar.",
        "opts": [
          "[EN PENDIENTE] Vertader",
          "[EN PENDIENTE] Fals"
        ],
        "correct": [
          0
        ],
        "exp": [
          "[EN PENDIENTE] Correcte: cita literal de la secció 'El Sprint'."
        ],
        "trap": "[EN PENDIENTE] Sprints més llargs augmenten la incertesa acumulada abans de la següent inspecció formal."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Quin és un motiu per utilitzar Sprints més curts, segons la Guia?",
        "opts": [
          "[EN PENDIENTE] Redueixen la burocràcia documental",
          "[EN PENDIENTE] Generen més cicles d'aprenentatge i limiten el risc de cost i esforç a un període més petit",
          "[EN PENDIENTE] Eliminen la necessitat de Sprint Review",
          "[EN PENDIENTE] Redueixen el nombre de Product Backlog Items necessaris"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte: cita literal.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte."
        ],
        "trap": "[EN PENDIENTE] Els Sprints curts no eliminen esdeveniments — simplement limiten el risc i acceleren l'aprenentatge empíric."
      }
    ]
  },
  {
    "id": "visio-valor",
    "name": "[EN PENDIENTE] Visió i valor de producte",
    "theory": "<p><i>[EN PENDIENTE — traducir siguiendo la Scrum Guide oficial en inglés. Referencia original en catalán: data.ca.js, topic \"visio-valor\"]</i></p>",
    "questions": [
      {
        "type": "single",
        "q": "[EN PENDIENTE] Com defineix la Guia un 'producte'?",
        "opts": [
          "[EN PENDIENTE] Un projecte amb data d'inici i fi definides",
          "[EN PENDIENTE] Un vehicle per lliurar valor, amb límits clars i usuaris/clients definits",
          "[EN PENDIENTE] Un conjunt de funcionalitats de software exclusivament",
          "[EN PENDIENTE] Un document de requisits aprovat"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte: definició literal.",
          "[EN PENDIENTE] Incorrecte: la Guia diu explícitament que pot ser més abstracte que software.",
          "[EN PENDIENTE] Incorrecte."
        ],
        "trap": "[EN PENDIENTE] Un producte no és un 'projecte' — Scrum evita aquest terme; és un vehicle continu de valor."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Què descriu el Product Goal?",
        "opts": [
          "[EN PENDIENTE] Un pla de releases amb dates concretes",
          "[EN PENDIENTE] Un estat futur del producte que serveix d'objectiu per l'Scrum Team",
          "[EN PENDIENTE] Els criteris d'acceptació de tots els PBI",
          "[EN PENDIENTE] Un document firmat pels stakeholders"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte."
        ],
        "trap": "[EN PENDIENTE] El Product Goal és una direcció/objectiu, no un pla detallat amb dates — no és un roadmap."
      },
      {
        "type": "tf",
        "q": "[EN PENDIENTE] L'Scrum Team ha de complir o abandonar un Product Goal abans d'assumir-ne un altre.",
        "opts": [
          "[EN PENDIENTE] Vertader",
          "[EN PENDIENTE] Fals"
        ],
        "correct": [
          0
        ],
        "exp": [
          "[EN PENDIENTE] Correcte: cita literal."
        ],
        "trap": "[EN PENDIENTE] No es pot treballar simultàniament cap a dos Product Goals diferents amb el mateix equip."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Qui és responsable de maximitzar el valor del producte?",
        "opts": [
          "[EN PENDIENTE] El Scrum Master",
          "[EN PENDIENTE] Els stakeholders",
          "[EN PENDIENTE] El Product Owner",
          "[EN PENDIENTE] Tot l'Scrum Team per igual, sense diferenciar responsabilitats"
        ],
        "correct": 2,
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Incorrecte."
        ],
        "trap": "[EN PENDIENTE] Encara que tot l'equip aporta valor amb l'Increment, la responsabilitat formal de maximitzar-lo és específicament del PO."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Quina afirmació sobre un producte és correcta segons la Guia?",
        "opts": [
          "[EN PENDIENTE] Ha de ser sempre un producte físic tangible",
          "[EN PENDIENTE] Pot ser un servei, un producte físic o quelcom més abstracte",
          "[EN PENDIENTE] Ha de tenir sempre un únic usuari final",
          "[EN PENDIENTE] No necessita límits clars, ja que és emergent"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte: sí necessita un límit clar."
        ],
        "trap": "[EN PENDIENTE] Un producte no s'ha de confondre amb 'software' exclusivament — pot ser molt més abstracte."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Què emergeix per definir 'què' complirà el Product Goal?",
        "opts": [
          "[EN PENDIENTE] La resta del Product Backlog",
          "[EN PENDIENTE] El Sprint Backlog únicament",
          "[EN PENDIENTE] La Definition of Done",
          "[EN PENDIENTE] El pla de releases anual"
        ],
        "correct": 0,
        "exp": [
          "[EN PENDIENTE] Correcte: cita literal.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte."
        ],
        "trap": "[EN PENDIENTE] El Product Backlog complet (no només el Sprint Backlog) és el que evoluciona per assolir el Product Goal."
      },
      {
        "type": "multi",
        "q": "[EN PENDIENTE] Quines característiques té un producte segons la Guia Scrum?",
        "opts": [
          "[EN PENDIENTE] Té un límit clar",
          "[EN PENDIENTE] Ha de generar sempre ingressos directes",
          "[EN PENDIENTE] Té stakeholders coneguts",
          "[EN PENDIENTE] Té usuaris o clients ben definits"
        ],
        "correct": [
          0,
          2,
          3
        ],
        "exp": [
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Incorrecte: la Guia no ho exigeix; un producte intern també és vàlid.",
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Correcte."
        ],
        "trap": "[EN PENDIENTE] Generar ingressos directes no és un requisit de la definició de 'producte' a la Guia — pot ser un servei intern o una plataforma sense monetització directa."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Quina diferència hi ha entre el Product Goal i un Sprint Goal en termes d'horitzó temporal?",
        "opts": [
          "[EN PENDIENTE] Ambdós són a llarg termini",
          "[EN PENDIENTE] El Product Goal és a llarg termini; el Sprint Goal és específic d'aquell Sprint",
          "[EN PENDIENTE] El Sprint Goal és a llarg termini; el Product Goal és puntual",
          "[EN PENDIENTE] No hi ha diferència, són sinònims"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Incorrecte: invertit.",
          "[EN PENDIENTE] Incorrecte."
        ],
        "trap": "[EN PENDIENTE] No confonguis l'abast temporal: Product Goal = visió a llarg termini; Sprint Goal = objectiu d'un únic Sprint."
      },
      {
        "type": "tf",
        "q": "[EN PENDIENTE] El Product Owner pot tenir dos Product Goals actius simultàniament per accelerar el desenvolupament.",
        "opts": [
          "[EN PENDIENTE] Vertader",
          "[EN PENDIENTE] Fals"
        ],
        "correct": [
          1
        ],
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte: cal complir o abandonar un Product Goal abans d'assumir el següent."
        ],
        "trap": "[EN PENDIENTE] Un únic Product Goal actiu a la vegada — treballar-ne dos en paral·lel dilueix el focus de l'equip."
      }
    ]
  },
  {
    "id": "gestio-backlog",
    "name": "[EN PENDIENTE] Gestió del Product Backlog",
    "theory": "<p><i>[EN PENDIENTE — traducir siguiendo la Scrum Guide oficial en inglés. Referencia original en catalán: data.ca.js, topic \"gestio-backlog\"]</i></p>",
    "questions": [
      {
        "type": "single",
        "q": "[EN PENDIENTE] Com s'anomena l'acte de descompondre i definir més els elements del Product Backlog?",
        "opts": [
          "[EN PENDIENTE] Priorització",
          "[EN PENDIENTE] Refinament (refinement)",
          "[EN PENDIENTE] Sizing",
          "[EN PENDIENTE] Ordenació estratègica"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Incorrecte: sizing és només l'atribut de tamany.",
          "[EN PENDIENTE] Incorrecte."
        ],
        "trap": "[EN PENDIENTE] El terme oficial és 'refinement', una activitat contínua, no un esdeveniment formal de Scrum."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Quin verb utilitza la Guia Scrum per descriure com el PO gestiona els elements del Product Backlog?",
        "opts": [
          "[EN PENDIENTE] Priorizar",
          "[EN PENDIENTE] Ordenar",
          "[EN PENDIENTE] Classificar per urgència",
          "[EN PENDIENTE] Segmentar per departament"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte: terme evitat deliberadament per la Guia.",
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte."
        ],
        "trap": "[EN PENDIENTE] 'Priorizar' és possiblement la trampa de vocabulari més repetida de tot l'examen PSPO I."
      },
      {
        "type": "multi",
        "q": "[EN PENDIENTE] Quines pràctiques ajuden a minimitzar el desperdici en la gestió del Product Backlog?",
        "opts": [
          "[EN PENDIENTE] Refinar en detall només els elements que probablement s'implementaran aviat",
          "[EN PENDIENTE] Crear un segon backlog paral·lel per als elements 'nous'",
          "[EN PENDIENTE] Eliminar elements obsolets que porten molt temps sense tocar-se",
          "[EN PENDIENTE] Detallar exhaustivament tots els elements des del principi"
        ],
        "correct": [
          0,
          2
        ],
        "exp": [
          "[EN PENDIENTE] Correcte: enfocament 'just in time, just enough'.",
          "[EN PENDIENTE] Incorrecte: trenca el principi d'única font de veritat.",
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Incorrecte: és una forma de desperdici (BDUF a nivell de backlog)."
        ],
        "trap": "[EN PENDIENTE] Un segon backlog 'paral·lel' sempre és incorrecte: només ha d'existir un Product Backlog com a font única de veritat."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Qui és responsable del tamany (size) dels elements del Product Backlog?",
        "opts": [
          "[EN PENDIENTE] El Product Owner en exclusiva",
          "[EN PENDIENTE] Els Developers que faran el treball",
          "[EN PENDIENTE] Els stakeholders principals",
          "[EN PENDIENTE] El Scrum Master"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte."
        ],
        "trap": "[EN PENDIENTE] El PO pot influir-hi, però la decisió final de mida és sempre dels Developers."
      },
      {
        "type": "tf",
        "q": "[EN PENDIENTE] El refinament del Product Backlog és un esdeveniment formal de Scrum amb un timebox fix.",
        "opts": [
          "[EN PENDIENTE] Vertader",
          "[EN PENDIENTE] Fals"
        ],
        "correct": [
          1
        ],
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte: és una activitat contínua, no un dels quatre esdeveniments formals amb timebox de la Guia."
        ],
        "trap": "[EN PENDIENTE] El refinement NO és un dels 4 esdeveniments formals (Planning, Daily, Review, Retro) — és una activitat en curs."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Quina responsabilitat té el PO respecte a la visibilitat del Product Backlog?",
        "opts": [
          "[EN PENDIENTE] Assegurar que sigui transparent, visible i comprès",
          "[EN PENDIENTE] Amagar-lo als stakeholders fins que estigui complet",
          "[EN PENDIENTE] Compartir-lo només amb els Developers",
          "[EN PENDIENTE] Publicar-lo només al final de cada release"
        ],
        "correct": 0,
        "exp": [
          "[EN PENDIENTE] Correcte: responsabilitat explícita del PO.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte."
        ],
        "trap": "[EN PENDIENTE] La transparència del backlog és per a tot l'Scrum Team i els stakeholders, no un document restringit."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Quan es considera que un element del Product Backlog està 'llest' (ready) per seleccionar-se en un Sprint Planning?",
        "opts": [
          "[EN PENDIENTE] Quan el PO l'ha aprovat formalment per escrit",
          "[EN PENDIENTE] Quan ha adquirit prou transparència, normalment després d'activitats de refinament",
          "[EN PENDIENTE] Quan té una estimació en hores exacta",
          "[EN PENDIENTE] Quan tots els stakeholders l'han validat"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Incorrecte: la Guia no exigeix hores exactes.",
          "[EN PENDIENTE] Incorrecte."
        ],
        "trap": "[EN PENDIENTE] 'Ready' és un grau de transparència/comprensió assolit via refinament, no una aprovació formal ni una estimació exacta."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Quin percentatge de temps de l'equip s'hauria de dedicar al refinament segons la Guia Scrum?",
        "opts": [
          "[EN PENDIENTE] Un 10% fix segons la Guia",
          "[EN PENDIENTE] La Guia no especifica un percentatge fix; és una activitat contínua segons calgui",
          "[EN PENDIENTE] Un 25% obligatori cada Sprint",
          "[EN PENDIENTE] Ha de fer-se sempre en un esdeveniment separat d'1 hora"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte: la Guia no dona cap percentatge.",
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte."
        ],
        "trap": "[EN PENDIENTE] Trampa comuna: atribuir a la Guia Scrum xifres concretes (com el famós '10% del temps') que en realitat provenen de pràctiques externes, no del text oficial."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Si dos Product Backlog Items competeixen pel mateix Sprint, qui decideix quin ordre tenen?",
        "opts": [
          "[EN PENDIENTE] Els Developers, per pura capacitat tècnica",
          "[EN PENDIENTE] El Product Owner, ordenant el Product Backlog",
          "[EN PENDIENTE] Es vota entre tot l'Scrum Team i stakeholders",
          "[EN PENDIENTE] Es decideix per antiguitat de l'element al backlog"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte."
        ],
        "trap": "[EN PENDIENTE] L'ordre del backlog és responsabilitat única del PO — no és un procés de votació ni d'antiguitat."
      }
    ]
  },
  {
    "id": "estrategia-negoci",
    "name": "[EN PENDIENTE] Estratègia de negoci",
    "theory": "<p><i>[EN PENDIENTE — traducir siguiendo la Scrum Guide oficial en inglés. Referencia original en catalán: data.ca.js, topic \"estrategia-negoci\"]</i></p>",
    "questions": [
      {
        "type": "single",
        "q": "[EN PENDIENTE] Segons les competències PSPO, per què és important que el PO entengui el mercat i la competència?",
        "opts": [
          "[EN PENDIENTE] Per poder programar ell mateix funcionalitats competitives",
          "[EN PENDIENTE] Per prendre decisions informades sobre com maximitzar el valor del producte",
          "[EN PENDIENTE] Per substituir l'equip de màrqueting de l'organització",
          "[EN PENDIENTE] Perquè és un requisit tècnic de la Guia Scrum"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte: la Guia Scrum no ho detalla; ve de les competències PSPO."
        ],
        "trap": "[EN PENDIENTE] Aquest contingut prové de les Professional Scrum Competencies, no de la Guia Scrum en si — combina ambdues fonts a l'examen."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Què implica el 'cost d'oportunitat' en la presa de decisions del PO?",
        "opts": [
          "[EN PENDIENTE] El cost monetari exacte de cada Product Backlog Item",
          "[EN PENDIENTE] Que triar fer una cosa implica renunciar (de moment) a fer-ne una altra amb els mateixos recursos",
          "[EN PENDIENTE] El cost de formació de l'equip",
          "[EN PENDIENTE] El pressupost total assignat al producte"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte."
        ],
        "trap": "[EN PENDIENTE] Cost d'oportunitat no és un càlcul financer exacte, és el concepte de renúncia implícita en cada decisió d'ordenació del backlog."
      },
      {
        "type": "tf",
        "q": "[EN PENDIENTE] Un bon Product Owner es centra exclusivament en detalls tècnics d'implementació, deixant l'estratègia de negoci a la direcció.",
        "opts": [
          "[EN PENDIENTE] Vertader",
          "[EN PENDIENTE] Fals"
        ],
        "correct": [
          1
        ],
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte: el PO ha d'equilibrar visió de producte, negoci i execució — no és només una figura tècnica."
        ],
        "trap": "[EN PENDIENTE] Reduir el PO a un rol purament tècnic o purament administratiu són dues simplificacions incorrectes habituals a l'examen."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Quin enfocament recomanen les competències PSPO per validar si una funcionalitat aportarà valor real?",
        "opts": [
          "[EN PENDIENTE] Confiar en la intuïció del PO sense validar-ho",
          "[EN PENDIENTE] Basar-se en dades i experimentació per validar hipòtesis de valor",
          "[EN PENDIENTE] Esperar que ho decideixi la direcció general",
          "[EN PENDIENTE] Copiar directament el que fa la competència"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte."
        ],
        "trap": "[EN PENDIENTE] L'enfocament empíric també s'aplica a l'estratègia de producte: validar hipòtesis amb dades, no assumir-les."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Com hauria d'utilitzar el PO l'Increment presentat al Sprint Review en relació amb l'estratègia de negoci?",
        "opts": [
          "[EN PENDIENTE] Com una prova per justificar el pressupost invertit",
          "[EN PENDIENTE] Com a base empírica per ajustar la direcció del producte segons canvis del mercat",
          "[EN PENDIENTE] Com un document legal per als stakeholders",
          "[EN PENDIENTE] Només com a demostració tècnica interna"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte: el Sprint Review inspecciona resultats i entorn per decidir pròxims passos alineats amb el valor de negoci.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte."
        ],
        "trap": "[EN PENDIENTE] El Sprint Review connecta directament execució i estratègia: no és només una demo tècnica, és input per a decisions de negoci."
      },
      {
        "type": "tf",
        "q": "[EN PENDIENTE] El Product Owner ha d'ignorar els canvis del mercat un cop el Product Backlog està definit, per mantenir estabilitat.",
        "opts": [
          "[EN PENDIENTE] Vertader",
          "[EN PENDIENTE] Fals"
        ],
        "correct": [
          1
        ],
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte: el Product Backlog és emergent i s'ha d'ajustar a noves oportunitats i canvis d'entorn."
        ],
        "trap": "[EN PENDIENTE] 'Emergent' vol dir que el backlog evoluciona contínuament amb el mercat, mai és un document tancat i estable."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Quin concepte descriu millor per què el PO ha de prioritzar objectius estratègics per sobre de peticions puntuals de stakeholders individuals?",
        "opts": [
          "[EN PENDIENTE] Maximitzar el valor global del producte a llarg termini, no només satisfer demandes aïllades",
          "[EN PENDIENTE] Evitar conflictes personals amb l'equip",
          "[EN PENDIENTE] Complir estrictament amb el pressupost anual",
          "[EN PENDIENTE] Reduir el nombre de reunions amb stakeholders"
        ],
        "correct": 0,
        "exp": [
          "[EN PENDIENTE] Correcte: coherent amb la responsabilitat de maximitzar el valor del producte.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte."
        ],
        "trap": "[EN PENDIENTE] El PO no és un simple 'gestor de peticions' — ha d'equilibrar-les amb la visió estratègica global del producte."
      }
    ]
  },
  {
    "id": "stakeholders",
    "name": "[EN PENDIENTE] Stakeholders i clients",
    "theory": "<p><i>[EN PENDIENTE — traducir siguiendo la Scrum Guide oficial en inglés. Referencia original en catalán: data.ca.js, topic \"stakeholders\"]</i></p>",
    "questions": [
      {
        "type": "single",
        "q": "[EN PENDIENTE] En quin esdeveniment col·laboren especialment els stakeholders amb l'Scrum Team?",
        "opts": [
          "[EN PENDIENTE] Daily Scrum",
          "[EN PENDIENTE] Sprint Planning",
          "[EN PENDIENTE] Sprint Review",
          "[EN PENDIENTE] Sprint Retrospective"
        ],
        "correct": 2,
        "exp": [
          "[EN PENDIENTE] Incorrecte: només Developers.",
          "[EN PENDIENTE] Incorrecte: principalment l'Scrum Team, encara que poden convidar-se assessors.",
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Incorrecte: intern de l'equip."
        ],
        "trap": "[EN PENDIENTE] El Sprint Review és l'esdeveniment obert a stakeholders per excel·lència; els altres tres són majoritàriament interns."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Com ha de procedir un stakeholder que vulgui canviar l'ordre del Product Backlog?",
        "opts": [
          "[EN PENDIENTE] Parlar-ho directament amb els Developers durant el Sprint",
          "[EN PENDIENTE] Negociar-ho amb criteri amb el Product Owner",
          "[EN PENDIENTE] Esperar la propera auditoria de qualitat",
          "[EN PENDIENTE] Escalar-ho a direcció general immediatament"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte: cita literal.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte."
        ],
        "trap": "[EN PENDIENTE] Tota negociació de canvis d'abast o ordre passa pel PO, mai directament pels Developers."
      },
      {
        "type": "tf",
        "q": "[EN PENDIENTE] Els stakeholders formen part de l'Scrum Team.",
        "opts": [
          "[EN PENDIENTE] Vertader",
          "[EN PENDIENTE] Fals"
        ],
        "correct": [
          1
        ],
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte: l'Scrum Team és només PO, SM i Developers; els stakeholders són externs."
        ],
        "trap": "[EN PENDIENTE] Confondre 'col·laborar estretament' amb 'formar part de l'equip' és un error freqüent."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Quina és una manera en què el Scrum Master serveix a l'organització respecte als stakeholders?",
        "opts": [
          "[EN PENDIENTE] Decidint per ells quines funcionalitats són prioritàries",
          "[EN PENDIENTE] Eliminant les barreres entre les parts interessades i els Scrum Teams",
          "[EN PENDIENTE] Substituint el PO en la negociació de canvis",
          "[EN PENDIENTE] Aprovant personalment els canvis de Product Backlog"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte: cita literal.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte."
        ],
        "trap": "[EN PENDIENTE] El SM elimina barreres i facilita, però mai substitueix les decisions o negociacions que corresponen al PO."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Durant el Sprint Review, què fan conjuntament l'Scrum Team i els stakeholders?",
        "opts": [
          "[EN PENDIENTE] Aproven formalment el pressupost del següent Sprint",
          "[EN PENDIENTE] Revisen el que s'ha aconseguit i col·laboren sobre què fer a continuació",
          "[EN PENDIENTE] Assignen tasques concretes als Developers per al següent Sprint",
          "[EN PENDIENTE] Redacten la Definition of Done del producte"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Incorrecte: l'assignació és interna dels Developers.",
          "[EN PENDIENTE] Incorrecte: la DoD la defineix l'Scrum Team, no és tema específic del Review amb stakeholders."
        ],
        "trap": "[EN PENDIENTE] El Sprint Review és col·laboratiu i de treball conjunt, no una reunió d'aprovacions formals ni d'assignació de tasques."
      },
      {
        "type": "tf",
        "q": "[EN PENDIENTE] El Product Owner pot representar les necessitats de moltes parts interessades dins del Product Backlog.",
        "opts": [
          "[EN PENDIENTE] Vertader",
          "[EN PENDIENTE] Fals"
        ],
        "correct": [
          0
        ],
        "exp": [
          "[EN PENDIENTE] Correcte: cita literal de la Guia."
        ],
        "trap": "[EN PENDIENTE] El PO és un punt de síntesi de moltes veus de negoci, sense deixar de ser una única persona responsable."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Un client extern demana directament als Developers que canviïn l'abast d'un item que ja està al Sprint Backlog. Què hauria de passar?",
        "opts": [
          "[EN PENDIENTE] Els Developers ho accepten si tècnicament és senzill",
          "[EN PENDIENTE] Es negocia amb el Product Owner, sense posar en perill el Sprint Goal",
          "[EN PENDIENTE] S'aplica directament perquè el client sempre té raó",
          "[EN PENDIENTE] Es porta a votació al Daily Scrum següent"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte: els Developers no negocien abast directament amb externs.",
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Incorrecte: el Daily Scrum no és un fòrum de negociació d'abast amb externs."
        ],
        "trap": "[EN PENDIENTE] Cap canvi d'abast durant el Sprint es fa sense passar pel PO i sense posar en perill el Sprint Goal ja acordat."
      },
      {
        "type": "single",
        "q": "[EN PENDIENTE] Quin és el risc principal de deixar que els stakeholders parlin directament amb els Developers sobre prioritats, sense passar pel PO?",
        "opts": [
          "[EN PENDIENTE] Cap risc, millora la comunicació",
          "[EN PENDIENTE] Es trenca la gestió coherent i unificada del valor del producte que ha de liderar el PO",
          "[EN PENDIENTE] Els Developers es tornen massa autònoms",
          "[EN PENDIENTE] Augmenta la transparència del Product Backlog"
        ],
        "correct": 1,
        "exp": [
          "[EN PENDIENTE] Incorrecte.",
          "[EN PENDIENTE] Correcte.",
          "[EN PENDIENTE] Incorrecte: no és negatiu que siguin autònoms tècnicament.",
          "[EN PENDIENTE] Incorrecte."
        ],
        "trap": "[EN PENDIENTE] El risc no és de comunicació general, sinó de perdre un punt únic i coherent de decisió sobre valor i ordre — exactament el que soluciona tenir un PO."
      }
    ]
  }
];

const ALL_QUESTIONS_EN = TOPICS_EN.flatMap(t => t.questions.map(q => ({...q, topicId: t.id, topicName: t.name})));
