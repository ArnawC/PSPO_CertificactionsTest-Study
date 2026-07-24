// ==========================================================================
// PLANTILLA PENDIENTE DE TRADUCCION (ES)
// Misma estructura que data.ca.js (mismos ids de tema, mismo numero y orden
// de preguntas, mismo type/correct por pregunta). Traducir SOLO los campos
// de texto (name, theory, q, opts, exp, trap) siguiendo la Scrum Guide
// oficial en castellano (noviembre 2020). No cambiar ids, type ni
// los indices de correct.
// ==========================================================================

const TOPICS_ES = [
  {
    "id": "empirisme",
    "name": "[ES PENDIENTE] Empirisme i pensament Lean",
    "theory": "<p><i>[ES PENDIENTE — traducir siguiendo la Scrum Guide oficial en castellano. Referencia original en catalán: data.ca.js, topic \"empirisme\"]</i></p>",
    "questions": [
      {
        "type": "multi",
        "q": "[ES PENDIENTE] Quins són els tres pilars de l'empirisme segons la Guia Scrum?",
        "opts": [
          "[ES PENDIENTE] Transparència",
          "[ES PENDIENTE] Previsibilitat",
          "[ES PENDIENTE] Inspecció",
          "[ES PENDIENTE] Adaptació"
        ],
        "correct": [
          0,
          2,
          3
        ],
        "exp": [
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Incorrecte: la previsibilitat és un objectiu que Scrum busca optimitzar, no un pilar.",
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Correcte."
        ],
        "trap": "[ES PENDIENTE] Els tres pilars són exactament transparència, inspecció i adaptació. Cap més concepte (previsibilitat, planificació...) forma part d'aquesta llista."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Segons la Guia, què passa amb la inspecció sense adaptació?",
        "opts": [
          "[ES PENDIENTE] Es considera inútil",
          "[ES PENDIENTE] Es considera suficient si es documenta bé",
          "[ES PENDIENTE] És l'única finalitat de la Retrospective",
          "[ES PENDIENTE] Substitueix la transparència"
        ],
        "correct": 0,
        "exp": [
          "[ES PENDIENTE] Correcte: cita literal.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte: la inspecció passa en tots els esdeveniments, no només a la Retrospective.",
          "[ES PENDIENTE] Incorrecte: són pilars independents i seqüencials."
        ],
        "trap": "[ES PENDIENTE] Frase gairebé literal de la Guia: 'la inspección sin adaptación se considera inútil'."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] En quins tres artefactes formals es basen les decisions importants segons la teoria de Scrum?",
        "opts": [
          "[ES PENDIENTE] Product Backlog, Sprint Backlog i Increment",
          "[ES PENDIENTE] Product Goal, Sprint Goal i Definition of Done",
          "[ES PENDIENTE] Roadmap, Backlog i Release Plan",
          "[ES PENDIENTE] Sprint Backlog, Definition of Done i Vision"
        ],
        "correct": 0,
        "exp": [
          "[ES PENDIENTE] Correcte: són els tres artefactes formals de Scrum.",
          "[ES PENDIENTE] Incorrecte: aquests són els 'compromisos' de cada artefacte, no els artefactes en si.",
          "[ES PENDIENTE] Incorrecte: no són termes formals de la Guia Scrum.",
          "[ES PENDIENTE] Incorrecte: barreja artefactes amb compromisos."
        ],
        "trap": "[ES PENDIENTE] No confondre 'artefacte' amb el seu 'compromís' associat (p. ex. Product Backlog té el Product Goal com a compromís, però són coses diferents)."
      },
      {
        "type": "tf",
        "q": "[ES PENDIENTE] El pensament Lean es centra en reduir desperdicis i centrar-se en l'essencial.",
        "opts": [
          "[ES PENDIENTE] Vertader",
          "[ES PENDIENTE] Fals"
        ],
        "correct": [
          0
        ],
        "exp": [
          "[ES PENDIENTE] Correcte: definició literal de la Guia."
        ],
        "trap": "[ES PENDIENTE] No confondre pensament Lean amb metodologies com Kanban o Six Sigma, que no es mencionen a la Guia Scrum."
      },
      {
        "type": "multi",
        "q": "[ES PENDIENTE] Quins dels següents són valors de Scrum segons la Guia 2020?",
        "opts": [
          "[ES PENDIENTE] Compromís",
          "[ES PENDIENTE] Eficiència",
          "[ES PENDIENTE] Respecte",
          "[ES PENDIENTE] Coratge"
        ],
        "correct": [
          0,
          2,
          3
        ],
        "exp": [
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Incorrecte: 'eficiència' no és un valor citat a la Guia.",
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Correcte."
        ],
        "trap": "[ES PENDIENTE] Els 5 valors són: Compromís, Enfocament, Obertura, Respecte i Coratge. Paraules similars com 'eficiència' o 'qualitat' són distractors habituals."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Què permet la transparència segons la teoria de Scrum?",
        "opts": [
          "[ES PENDIENTE] L'adaptació directa",
          "[ES PENDIENTE] La inspecció",
          "[ES PENDIENTE] La planificació de releases",
          "[ES PENDIENTE] La creació del Sprint Backlog"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte: la transparència permet la inspecció, i aquesta permet l'adaptació — és una cadena.",
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte."
        ],
        "trap": "[ES PENDIENTE] La cadena lògica és: Transparència → permet la Inspecció → permet l'Adaptació. No saltis directament de transparència a adaptació."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Quan es tornen més difícils les adaptacions segons la Guia?",
        "opts": [
          "[ES PENDIENTE] Quan l'equip és massa gran",
          "[ES PENDIENTE] Quan les persones no estan empoderades o no poden autogestionar-se",
          "[ES PENDIENTE] Quan el Sprint dura més d'un mes",
          "[ES PENDIENTE] Quan hi ha massa stakeholders"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte: cita literal.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte."
        ],
        "trap": "[ES PENDIENTE] L'empoderament i la capacitat d'autogestió són condicions necessàries per adaptar-se amb eficàcia."
      },
      {
        "type": "tf",
        "q": "[ES PENDIENTE] Els valors de Scrum s'aprenen i s'exploren mentre l'equip treballa amb els esdeveniments i artefactes, no com a formació separada.",
        "opts": [
          "[ES PENDIENTE] Vertader",
          "[ES PENDIENTE] Fals"
        ],
        "correct": [
          0
        ],
        "exp": [
          "[ES PENDIENTE] Correcte: la Guia ho descriu així literalment."
        ],
        "trap": "[ES PENDIENTE] Els valors no són un mòdul de formació aïllat; sorgeixen de la pràctica diària amb Scrum."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Quina afirmació descriu millor l'empirisme?",
        "opts": [
          "[ES PENDIENTE] Planificar tot el treball abans de començar per evitar sorpreses",
          "[ES PENDIENTE] Prendre decisions basades en el que s'observa i l'experiència",
          "[ES PENDIENTE] Seguir un pla fix sense revisar-lo",
          "[ES PENDIENTE] Delegar totes les decisions al Product Owner"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte: és l'enfocament contrari (Big Design Up Front).",
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte: l'empirisme implica tot l'equip Scrum, no només el PO."
        ],
        "trap": "[ES PENDIENTE] Planificar-ho tot per endavant (BDUF) és l'oposat de l'empirisme, un distractor molt habitual."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Com ajuda Scrum a la inspecció freqüent dels artefactes i el progrés?",
        "opts": [
          "[ES PENDIENTE] Mitjançant informes setmanals obligatoris",
          "[ES PENDIENTE] Proporcionant cadència amb els seus cinc esdeveniments",
          "[ES PENDIENTE] Amb auditories externes trimestrals",
          "[ES PENDIENTE] Amb un Sprint 0 de preparació"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte: no existeix aquest requisit a la Guia.",
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte: 'Sprint 0' no existeix a Scrum."
        ],
        "trap": "[ES PENDIENTE] 'Sprint 0' és un dels distractors més recurrents a l'examen: no existeix a la Guia Scrum."
      },
      {
        "type": "multi",
        "q": "[ES PENDIENTE] Quines afirmacions sobre el risc i la complexitat són correctes segons la teoria de Scrum?",
        "opts": [
          "[ES PENDIENTE] Scrum optimitza la previsibilitat i controla el risc mitjançant un enfocament iteratiu i incremental",
          "[ES PENDIENTE] El risc es controla només mitjançant documentació detallada prèvia",
          "[ES PENDIENTE] Scrum s'utilitza en entorns complexos on el resultat no es coneix per endavant",
          "[ES PENDIENTE] Els Sprints més curts poden limitar el risc de cost i esforç"
        ],
        "correct": [
          0,
          2,
          3
        ],
        "exp": [
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Incorrecte: contrari a l'enfocament empíric.",
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Correcte: cita literal de la Guia."
        ],
        "trap": "[ES PENDIENTE] La documentació detallada prèvia (BDUF) és l'oposat del control de risc empíric que proposa Scrum."
      }
    ]
  },
  {
    "id": "scrum-team",
    "name": "[ES PENDIENTE] L'Equip Scrum i les seves accountabilities",
    "theory": "<p><i>[ES PENDIENTE — traducir siguiendo la Scrum Guide oficial en castellano. Referencia original en catalán: data.ca.js, topic \"scrum-team\"]</i></p>",
    "questions": [
      {
        "type": "single",
        "q": "[ES PENDIENTE] Quantes persones formen habitualment un Scrum Team, segons la Guia?",
        "opts": [
          "[ES PENDIENTE] 5 o menys",
          "[ES PENDIENTE] 10 o menys",
          "[ES PENDIENTE] Entre 15 i 20",
          "[ES PENDIENTE] No hi ha límit definit"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte: la Guia sí que dona una xifra orientativa."
        ],
        "trap": "[ES PENDIENTE] La xifra exacta ('en general 10 o menys') és una dada memoritzable típica d'examen."
      },
      {
        "type": "multi",
        "q": "[ES PENDIENTE] Quines són responsabilitats explícites dels Developers segons la Guia?",
        "opts": [
          "[ES PENDIENTE] Crear el Sprint Backlog",
          "[ES PENDIENTE] Ordenar el Product Backlog",
          "[ES PENDIENTE] Adherir-se a una Definition of Done",
          "[ES PENDIENTE] Adaptar el seu pla cada dia cap al Sprint Goal"
        ],
        "correct": [
          0,
          2,
          3
        ],
        "exp": [
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Incorrecte: ordenar el Product Backlog és responsabilitat del Product Owner.",
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Correcte."
        ],
        "trap": "[ES PENDIENTE] Ordenar el Product Backlog és sempre del PO, mai dels Developers — trampa d'intercanvi de responsabilitats molt freqüent."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Qui pot delegar la gestió efectiva del Product Backlog?",
        "opts": [
          "[ES PENDIENTE] Ningú, és intransferible fins i tot el treball",
          "[ES PENDIENTE] El Product Owner pot delegar el treball, però mai la responsabilitat",
          "[ES PENDIENTE] El Scrum Master, si el PO no hi és",
          "[ES PENDIENTE] Els Developers, per consens"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte: el treball sí es pot delegar.",
          "[ES PENDIENTE] Correcte: cita literal.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte."
        ],
        "trap": "[ES PENDIENTE] Distingeix sempre 'delegar el treball' (possible) de 'delegar la responsabilitat' (impossible, sempre és del PO)."
      },
      {
        "type": "tf",
        "q": "[ES PENDIENTE] El Product Owner pot ser un comitè de diverses persones per representar millor els stakeholders.",
        "opts": [
          "[ES PENDIENTE] Vertader",
          "[ES PENDIENTE] Fals"
        ],
        "correct": [
          1
        ],
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte: 'El Propietario del Producto es una persona, no un comité' — cita literal."
        ],
        "trap": "[ES PENDIENTE] El PO és sempre una única persona, encara que representi moltes veus de negoci."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Com ha de procedir algú que vulgui canviar la prioritat d'un element del Product Backlog?",
        "opts": [
          "[ES PENDIENTE] Modificar-lo directament si és urgent",
          "[ES PENDIENTE] Negociar-ho amb el Product Owner",
          "[ES PENDIENTE] Demanar-ho als Developers al Daily Scrum",
          "[ES PENDIENTE] Esperar a la Retrospective"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte: cita literal de la Guia.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte."
        ],
        "trap": "[ES PENDIENTE] Qualsevol canvi d'ordre o abast del backlog passa sempre per una negociació amb el PO."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Quin terme va introduir la Guia 2020 per substituir 'auto-organitzat'?",
        "opts": [
          "[ES PENDIENTE] Auto-suficient",
          "[ES PENDIENTE] Autogestionat",
          "[ES PENDIENTE] Multidisciplinari",
          "[ES PENDIENTE] Auto-dirigit"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte."
        ],
        "trap": "[ES PENDIENTE] 'Auto-organitzat' és terminologia 2017, obsoleta. 2020 usa 'autogestionat' (self-managing): decideixen qui, com i on treballar."
      },
      {
        "type": "multi",
        "q": "[ES PENDIENTE] Quines de les següents són formes en què el Scrum Master serveix al Product Owner?",
        "opts": [
          "[ES PENDIENTE] Ajudar a trobar tècniques per definir el Product Goal",
          "[ES PENDIENTE] Decidir l'ordre del Product Backlog en el seu lloc",
          "[ES PENDIENTE] Ajudar l'equip a entendre la necessitat d'elements clars i concisos",
          "[ES PENDIENTE] Facilitar la col·laboració amb stakeholders quan es sol·liciti"
        ],
        "correct": [
          0,
          2,
          3
        ],
        "exp": [
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Incorrecte: mai substitueix la decisió del PO.",
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Correcte."
        ],
        "trap": "[ES PENDIENTE] El SM 'ajuda' i 'facilita', però mai pren decisions que són accountability exclusiva del PO."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Qui és responsable de determinar el tamany (sizing) dels elements del Product Backlog?",
        "opts": [
          "[ES PENDIENTE] El Product Owner",
          "[ES PENDIENTE] El Scrum Master",
          "[ES PENDIENTE] Els Developers",
          "[ES PENDIENTE] Els stakeholders"
        ],
        "correct": 2,
        "exp": [
          "[ES PENDIENTE] Incorrecte: el PO pot influir, però no decideix.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte: qui fa el treball és qui l'estima.",
          "[ES PENDIENTE] Incorrecte."
        ],
        "trap": "[ES PENDIENTE] El PO 'pot influir ajudant-los a entendre i seleccionar millors alternatives', però la decisió final és dels Developers."
      },
      {
        "type": "tf",
        "q": "[ES PENDIENTE] Dins de l'Scrum Team hi ha sub-equips diferenciats, per exemple un equip de QA i un altre de desenvolupament.",
        "opts": [
          "[ES PENDIENTE] Vertader",
          "[ES PENDIENTE] Fals"
        ],
        "correct": [
          1
        ],
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte: la Guia diu explícitament que no hi ha sub-equips ni jerarquies dins l'Scrum Team."
        ],
        "trap": "[ES PENDIENTE] Frase literal: 'no hi ha sub-equips ni jerarquies'. Qualsevol opció que suggereixi sub-divisions internes és incorrecta."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Quina és la responsabilitat central i única del Scrum Master segons la Guia?",
        "opts": [
          "[ES PENDIENTE] Assegurar que l'equip compleixi terminis",
          "[ES PENDIENTE] Ser responsable d'establir Scrum tal com es defineix a la Guia",
          "[ES PENDIENTE] Gestionar el pressupost del projecte",
          "[ES PENDIENTE] Assignar tasques als Developers"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte: cita literal.",
          "[ES PENDIENTE] Incorrecte: no és una funció Scrum.",
          "[ES PENDIENTE] Incorrecte: els Developers s'auto-assignen tasques."
        ],
        "trap": "[ES PENDIENTE] El SM no assigna feina; això trencaria l'autogestió de l'equip."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Quan diversos Scrum Teams treballen en el mateix producte, què han de compartir obligatòriament?",
        "opts": [
          "[ES PENDIENTE] El mateix Scrum Master per a tots els equips",
          "[ES PENDIENTE] El mateix Product Goal, Product Backlog i Product Owner",
          "[ES PENDIENTE] El mateix Sprint Backlog per a tots",
          "[ES PENDIENTE] Els mateixos Developers rotant entre equips"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte: cada equip pot tenir el seu propi SM.",
          "[ES PENDIENTE] Correcte: cita literal.",
          "[ES PENDIENTE] Incorrecte: cada equip té el seu propi Sprint Backlog.",
          "[ES PENDIENTE] Incorrecte."
        ],
        "trap": "[ES PENDIENTE] Regla d''un producte, un Product Backlog, un Product Owner' encara que hi hagi múltiples equips Scrum treballant-hi."
      },
      {
        "type": "multi",
        "q": "[ES PENDIENTE] Quines afirmacions sobre el Product Owner són correctes?",
        "opts": [
          "[ES PENDIENTE] És responsable de maximitzar el valor del producte",
          "[ES PENDIENTE] Ha de comptar amb l'aprovació dels Developers per canviar l'ordre del backlog",
          "[ES PENDIENTE] Pot representar les necessitats de moltes parts interessades",
          "[ES PENDIENTE] Ha de ser respectat per tota l'organització perquè les seves decisions siguin efectives"
        ],
        "correct": [
          0,
          2,
          3
        ],
        "exp": [
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Incorrecte: el PO ordena el backlog sense necessitar aprovació dels Developers.",
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Correcte: cita literal sobre el respecte organitzacional."
        ],
        "trap": "[ES PENDIENTE] El PO decideix l'ordre unilateralment; no necessita 'aprovació' dels Developers, encara que sí col·labori amb ells."
      }
    ]
  },
  {
    "id": "esdeveniments",
    "name": "[ES PENDIENTE] Esdeveniments de Scrum",
    "theory": "<p><i>[ES PENDIENTE — traducir siguiendo la Scrum Guide oficial en castellano. Referencia original en catalán: data.ca.js, topic \"esdeveniments\"]</i></p>",
    "questions": [
      {
        "type": "single",
        "q": "[ES PENDIENTE] Què significa que un esdeveniment tingui un 'timebox'?",
        "opts": [
          "[ES PENDIENTE] Té una durada mínima obligatòria",
          "[ES PENDIENTE] Té una durada màxima fixada per endavant",
          "[ES PENDIENTE] Es fa sempre a la mateixa hora",
          "[ES PENDIENTE] Ha d'acabar abans d'una data límit externa"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Incorrecte: confon timebox amb horari fix.",
          "[ES PENDIENTE] Incorrecte: confon amb deadline."
        ],
        "trap": "[ES PENDIENTE] Un timebox mai exigeix un mínim — pot acabar abans, mai després del màxim."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Quin és el timebox màxim del Daily Scrum, independentment de la durada del Sprint?",
        "opts": [
          "[ES PENDIENTE] 30 minuts",
          "[ES PENDIENTE] 15 minuts, sempre",
          "[ES PENDIENTE] 1 hora per Sprints d'un mes",
          "[ES PENDIENTE] Escala proporcionalment amb la durada del Sprint"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte: és l'única excepció que NO escala."
        ],
        "trap": "[ES PENDIENTE] Planning, Review i Retro escalen amb la durada del Sprint; el Daily Scrum sempre és 15 min màxim."
      },
      {
        "type": "multi",
        "q": "[ES PENDIENTE] Quins tres temes s'aborden al Sprint Planning?",
        "opts": [
          "[ES PENDIENTE] Per què és valuós aquest Sprint",
          "[ES PENDIENTE] Qui assistirà al Sprint Review",
          "[ES PENDIENTE] Què es pot fer aquest Sprint",
          "[ES PENDIENTE] Com es realitzarà el treball escollit"
        ],
        "correct": [
          0,
          2,
          3
        ],
        "exp": [
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Correcte."
        ],
        "trap": "[ES PENDIENTE] El 'Why' és l'afegit de la Guia 2020; qualsevol resposta que l'ometi és incompleta."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Qui té l'autoritat per cancel·lar un Sprint?",
        "opts": [
          "[ES PENDIENTE] El Scrum Master",
          "[ES PENDIENTE] Tot l'Scrum Team per consens",
          "[ES PENDIENTE] Només el Product Owner",
          "[ES PENDIENTE] Els stakeholders principals"
        ],
        "correct": 2,
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte: cita literal.",
          "[ES PENDIENTE] Incorrecte."
        ],
        "trap": "[ES PENDIENTE] Decisió unilateral i exclusiva del PO — no requereix consens de ningú més."
      },
      {
        "type": "tf",
        "q": "[ES PENDIENTE] El Sprint Review és una porta d'aprovació formal per alliberar l'Increment a producció.",
        "opts": [
          "[ES PENDIENTE] Vertader",
          "[ES PENDIENTE] Fals"
        ],
        "correct": [
          1
        ],
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte: la Guia ho nega explícitament."
        ],
        "trap": "[ES PENDIENTE] És una sessió de treball d'inspecció i adaptació, no un 'gate' d'aprovació estil Waterfall."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Quina és la durada màxima de la Sprint Retrospective per un Sprint d'un mes?",
        "opts": [
          "[ES PENDIENTE] 1 hora",
          "[ES PENDIENTE] 2 hores",
          "[ES PENDIENTE] 3 hores",
          "[ES PENDIENTE] 4 hores"
        ],
        "correct": 2,
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Incorrecte (això és la Review)."
        ],
        "trap": "[ES PENDIENTE] Ordre a memoritzar: Planning 8h, Review 4h, Retro 3h (per Sprint d'un mes)."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Qui participa al Daily Scrum?",
        "opts": [
          "[ES PENDIENTE] Tot l'Scrum Team amb el mateix pes de veu",
          "[ES PENDIENTE] Només els Developers; PO i SM només si treballen com Developers",
          "[ES PENDIENTE] Només el Product Owner i els stakeholders",
          "[ES PENDIENTE] El Scrum Master en solitari per informar l'organització"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte."
        ],
        "trap": "[ES PENDIENTE] És un esdeveniment intern dels Developers. Si PO/SM hi participen és perquè estan fent treball del Sprint Backlog, no per rol de gestió."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Quan comença un nou Sprint?",
        "opts": [
          "[ES PENDIENTE] Una setmana després que acabi l'anterior, per revisar resultats",
          "[ES PENDIENTE] Immediatament després que acabi l'anterior",
          "[ES PENDIENTE] Quan el Product Owner ho decideixi discrecionalment",
          "[ES PENDIENTE] Després d'un 'Sprint 0' de preparació"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte: 'Sprint 0' no existeix."
        ],
        "trap": "[ES PENDIENTE] No hi ha buit entre Sprints ni un 'Sprint 0' de preparació — un dels distractors més recurrents."
      },
      {
        "type": "multi",
        "q": "[ES PENDIENTE] Quines afirmacions sobre el Sprint són correctes?",
        "opts": [
          "[ES PENDIENTE] Té una durada fixa d'un mes o menys",
          "[ES PENDIENTE] Durant el Sprint es poden fer canvis que posin en perill el Sprint Goal si el PO ho aprova",
          "[ES PENDIENTE] La qualitat no disminueix durant el Sprint",
          "[ES PENDIENTE] L'abast es pot clarificar i renegociar amb el PO a mesura que s'aprèn més"
        ],
        "correct": [
          0,
          2,
          3
        ],
        "exp": [
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Incorrecte: mai es posa en perill el Sprint Goal, ni amb aprovació del PO.",
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Correcte."
        ],
        "trap": "[ES PENDIENTE] Cap canvi durant el Sprint pot posar en perill el Sprint Goal, sense excepcions, ni tan sols amb 'permís' del PO."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Quin és el propòsit principal del Daily Scrum?",
        "opts": [
          "[ES PENDIENTE] Informar el Scrum Master de l'estat de cada persona",
          "[ES PENDIENTE] Inspeccionar el progrés cap al Sprint Goal i adaptar el Sprint Backlog",
          "[ES PENDIENTE] Assignar noves tasques als Developers per part del PO",
          "[ES PENDIENTE] Revisar l'Increment amb els stakeholders"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte: cita literal.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte: això és el Sprint Review."
        ],
        "trap": "[ES PENDIENTE] No és un 'status report' cap a un cap; és inspecció i adaptació feta pel mateix equip, per a ell mateix."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Un Sprint de dues setmanes: quin és el timebox màxim aproximat del Sprint Planning?",
        "opts": [
          "[ES PENDIENTE] 8 hores, igual que en un Sprint d'un mes",
          "[ES PENDIENTE] Proporcionalment menor, normalment més curt",
          "[ES PENDIENTE] 15 minuts",
          "[ES PENDIENTE] No aplica Sprint Planning en sprints curts"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte: 8h és el màxim NOMÉS per sprints d'un mes.",
          "[ES PENDIENTE] Correcte: 'Para sprints más cortos, el evento suele ser más corto'.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte."
        ],
        "trap": "[ES PENDIENTE] La xifra de 8h és específica per sprints d'un mes; en sprints més curts el timebox s'escurça proporcionalment (sense un nombre exacte fixat per la Guia)."
      },
      {
        "type": "tf",
        "q": "[ES PENDIENTE] La Sprint Retrospective és exclusivament per als Developers; el Product Owner no hi participa.",
        "opts": [
          "[ES PENDIENTE] Vertader",
          "[ES PENDIENTE] Fals"
        ],
        "correct": [
          1
        ],
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte: tot l'Scrum Team hi participa, PO inclòs, com un membre més."
        ],
        "trap": "[ES PENDIENTE] El PO no queda fora de cap esdeveniment intern de l'equip — participa igual que Developers i SM."
      }
    ]
  },
  {
    "id": "artefactes",
    "name": "[ES PENDIENTE] Artefactes i els seus compromisos",
    "theory": "<p><i>[ES PENDIENTE — traducir siguiendo la Scrum Guide oficial en castellano. Referencia original en catalán: data.ca.js, topic \"artefactes\"]</i></p>",
    "questions": [
      {
        "type": "single",
        "q": "[ES PENDIENTE] Quin compromís està associat al Product Backlog?",
        "opts": [
          "[ES PENDIENTE] Sprint Goal",
          "[ES PENDIENTE] Definition of Done",
          "[ES PENDIENTE] Product Goal",
          "[ES PENDIENTE] Increment"
        ],
        "correct": 2,
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Incorrecte: l'Increment és un artefacte, no un compromís."
        ],
        "trap": "[ES PENDIENTE] Empareja sempre: Product Backlog→Product Goal, Sprint Backlog→Sprint Goal, Increment→Definition of Done."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Com descriu la Guia el Product Backlog?",
        "opts": [
          "[ES PENDIENTE] Una llista fixa i priorizada de requisits",
          "[ES PENDIENTE] Una llista emergent i ordenada del que cal per millorar el producte",
          "[ES PENDIENTE] Un document d'abast aprovat pels stakeholders",
          "[ES PENDIENTE] Un pla de release amb dates fixes"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte."
        ],
        "trap": "[ES PENDIENTE] Paraules clau textuals: 'emergent' i 'ordenada' — mai 'fixa' ni 'priorizada'."
      },
      {
        "type": "tf",
        "q": "[ES PENDIENTE] Es pot considerar un element com a part de l'Increment encara que no compleixi la Definition of Done, si el PO ho aprova.",
        "opts": [
          "[ES PENDIENTE] Vertader",
          "[ES PENDIENTE] Fals"
        ],
        "correct": [
          1
        ],
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte: sense excepcions, ni amb aprovació del PO."
        ],
        "trap": "[ES PENDIENTE] La DoD no és negociable per ningú, ni tan sols pel PO — és un estàndard de qualitat objectiu."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Què passa amb un element del Product Backlog que no compleix la Definition of Done al final del Sprint?",
        "opts": [
          "[ES PENDIENTE] Es lliura amb una nota d'excepció",
          "[ES PENDIENTE] Es presenta al Sprint Review com 'gairebé fet'",
          "[ES PENDIENTE] Torna al Product Backlog per consideració futura",
          "[ES PENDIENTE] S'elimina definitivament"
        ],
        "correct": 2,
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte: ni tan sols es presenta.",
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Incorrecte."
        ],
        "trap": "[ES PENDIENTE] 'Gairebé fet' no existeix a Scrum: un element està Done o no ho està."
      },
      {
        "type": "multi",
        "q": "[ES PENDIENTE] Quines afirmacions sobre l'Increment són correctes?",
        "opts": [
          "[ES PENDIENTE] Es pot lliurar als stakeholders abans que acabi el Sprint",
          "[ES PENDIENTE] Només es pot crear un Increment per Sprint",
          "[ES PENDIENTE] Ha de complir la Definition of Done per considerar-se part de l'Increment",
          "[ES PENDIENTE] El Sprint Review és l'única oportunitat de lliurar valor"
        ],
        "correct": [
          0,
          2
        ],
        "exp": [
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Incorrecte: se'n poden crear diversos dins un mateix Sprint.",
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Incorrecte: la Guia ho nega explícitament."
        ],
        "trap": "[ES PENDIENTE] Dues trampes juntes: creure que només hi ha un Increment per Sprint, i creure que el Sprint Review és l'únic moment de lliurar valor."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Quin és l'objectiu a llarg termini per a l'Scrum Team, situat dins el Product Backlog?",
        "opts": [
          "[ES PENDIENTE] El Sprint Goal",
          "[ES PENDIENTE] El Product Goal",
          "[ES PENDIENTE] La Definition of Done",
          "[ES PENDIENTE] El Release Plan"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte: és l'objectiu del Sprint, a curt termini.",
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte: no és un artefacte formal de la Guia."
        ],
        "trap": "[ES PENDIENTE] Product Goal = llarg termini; Sprint Goal = curt termini (només aquell Sprint)."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Qui crea el Sprint Backlog?",
        "opts": [
          "[ES PENDIENTE] El Product Owner en solitari",
          "[ES PENDIENTE] Els Developers",
          "[ES PENDIENTE] Tot l'Scrum Team col·lectivament durant el Sprint Planning, sent un pla per i per als Developers",
          "[ES PENDIENTE] El Scrum Master"
        ],
        "correct": 2,
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Parcialment cert però incomplet — la resposta més precisa inclou el context de col·laboració.",
          "[ES PENDIENTE] Correcte: es crea durant el Planning col·laborativament, però és 'un pla por y para los desarrolladores'.",
          "[ES PENDIENTE] Incorrecte."
        ],
        "trap": "[ES PENDIENTE] El Sprint Backlog sorgeix de la col·laboració de tot l'Scrum Team al Planning, però és propietat operativa dels Developers, que l'actualitzen durant el Sprint."
      },
      {
        "type": "tf",
        "q": "[ES PENDIENTE] El Sprint Backlog és un document estàtic que no canvia un cop començat el Sprint.",
        "opts": [
          "[ES PENDIENTE] Vertader",
          "[ES PENDIENTE] Fals"
        ],
        "correct": [
          1
        ],
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte: 's'actualitza al llarg del Sprint a mesura que s'aprèn més'."
        ],
        "trap": "[ES PENDIENTE] El Sprint Backlog és una 'imagen muy visible y en tiempo real' — dinàmic, no estàtic."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Si la Definition of Done forma part dels estàndards de l'organització, què han de fer els Scrum Teams?",
        "opts": [
          "[ES PENDIENTE] Poden ignorar-la si el seu producte és diferent",
          "[ES PENDIENTE] Han de seguir-la com a mínim",
          "[ES PENDIENTE] És opcional per a equips experimentats",
          "[ES PENDIENTE] Només s'aplica al primer Sprint"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte: cita literal.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte."
        ],
        "trap": "[ES PENDIENTE] Si hi ha estàndard organitzatiu de DoD, és un mínim obligatori per a tots els equips, no una opció."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Quan es crea un Increment segons la Guia?",
        "opts": [
          "[ES PENDIENTE] Quan el PO l'aprova al Sprint Review",
          "[ES PENDIENTE] En el moment en què un element del Product Backlog compleix la Definition of Done",
          "[ES PENDIENTE] Al final de cada Sprint, sempre",
          "[ES PENDIENTE] Quan els stakeholders el validen"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte: cita literal.",
          "[ES PENDIENTE] Incorrecte: es pot crear en qualsevol moment del Sprint, no només al final.",
          "[ES PENDIENTE] Incorrecte."
        ],
        "trap": "[ES PENDIENTE] La creació de l'Increment no depèn d'una aprovació humana — depèn únicament de complir la DoD."
      },
      {
        "type": "multi",
        "q": "[ES PENDIENTE] Quins atributs es van afegir o reforçar a la Guia 2020 respecte als artefactes?",
        "opts": [
          "[ES PENDIENTE] El concepte de Product Goal com a nou compromís",
          "[ES PENDIENTE] L'eliminació completa del Product Backlog",
          "[ES PENDIENTE] Cada artefacte té ara un 'compromís' associat explícit",
          "[ES PENDIENTE] La Definition of Done ja no és necessària per l'Increment"
        ],
        "correct": [
          0,
          2
        ],
        "exp": [
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Incorrecte: mai es va eliminar.",
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Incorrecte: segueix sent obligatòria."
        ],
        "trap": "[ES PENDIENTE] La novetat clau de 2020 és formalitzar els 'compromisos' (Product Goal, Sprint Goal, DoD) per a cada artefacte."
      }
    ]
  },
  {
    "id": "definition-of-done",
    "name": "[ES PENDIENTE] Definition of Done",
    "theory": "<p><i>[ES PENDIENTE — traducir siguiendo la Scrum Guide oficial en castellano. Referencia original en catalán: data.ca.js, topic \"definition-of-done\"]</i></p>",
    "questions": [
      {
        "type": "single",
        "q": "[ES PENDIENTE] Què és la Definition of Done?",
        "opts": [
          "[ES PENDIENTE] Els criteris d'acceptació d'un item concret",
          "[ES PENDIENTE] Una descripció formal de l'estat de l'Increment quan compleix les mesures de qualitat requerides",
          "[ES PENDIENTE] Un document firmat pel PO al final del Sprint",
          "[ES PENDIENTE] Una llista de tasques pendents"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte: és un concepte diferent i més ampli que els criteris d'un item.",
          "[ES PENDIENTE] Correcte: definició literal.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte."
        ],
        "trap": "[ES PENDIENTE] La DoD no és el mateix que els 'criteris d'acceptació' d'un PBI concret — la DoD aplica a tot l'Increment."
      },
      {
        "type": "tf",
        "q": "[ES PENDIENTE] Si diversos Scrum Teams treballen sobre el mateix producte, cada equip pot definir la seva pròpia Definition of Done sense coordinar-se.",
        "opts": [
          "[ES PENDIENTE] Vertader",
          "[ES PENDIENTE] Fals"
        ],
        "correct": [
          1
        ],
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte: han de definir i complir mútuament la mateixa DoD."
        ],
        "trap": "[ES PENDIENTE] En entorns escalats amb un sol producte, la DoD ha de ser compartida i coherent entre tots els equips."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Si l'organització té un estàndard de qualitat per a tots els seus productes, com afecta a la DoD d'un Scrum Team?",
        "opts": [
          "[ES PENDIENTE] El Scrum Team pot ignorar-lo si té la seva pròpia DoD",
          "[ES PENDIENTE] El Scrum Team ha de complir-lo com a mínim",
          "[ES PENDIENTE] Només s'aplica al primer Increment",
          "[ES PENDIENTE] No té relació amb la DoD de l'equip"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte."
        ],
        "trap": "[ES PENDIENTE] L'estàndard organitzatiu és un mínim, mai un màxim ni una opció descartable."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Qui ha de complir la Definition of Done?",
        "opts": [
          "[ES PENDIENTE] Només el Product Owner, en validar l'Increment",
          "[ES PENDIENTE] Els Developers, en construir l'Increment",
          "[ES PENDIENTE] Els stakeholders, en revisar-lo al Sprint Review",
          "[ES PENDIENTE] El Scrum Master, en tancar el Sprint"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte: 'Los desarrolladores deben ajustarse a la definición de Hecho'.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte."
        ],
        "trap": "[ES PENDIENTE] La responsabilitat de complir la DoD és dels Developers, no una validació posterior d'algú altre."
      },
      {
        "type": "tf",
        "q": "[ES PENDIENTE] Un Product Backlog Item que no compleix la Definition of Done es pot presentar al Sprint Review si s'explica el motiu.",
        "opts": [
          "[ES PENDIENTE] Vertader",
          "[ES PENDIENTE] Fals"
        ],
        "correct": [
          1
        ],
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte: la Guia diu que ni tan sols es pot presentar al Sprint Review."
        ],
        "trap": "[ES PENDIENTE] 'Ni siquiera presentar en la revisión de Sprint' és una frase gairebé literal — cap excepció."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Què ha de fer un Scrum Team si no existeix una Definition of Done com a estàndard organitzatiu?",
        "opts": [
          "[ES PENDIENTE] Treballar sense DoD fins que l'organització en defineixi una",
          "[ES PENDIENTE] Crear una DoD adequada per al seu producte",
          "[ES PENDIENTE] Utilitzar la DoD d'un altre equip sense adaptar-la",
          "[ES PENDIENTE] Preguntar als stakeholders quina DoD volen"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte: la DoD és sempre obligatòria.",
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte."
        ],
        "trap": "[ES PENDIENTE] La DoD mai és opcional. Si no hi ha estàndard, l'equip n'ha de crear una pròpia."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Quin dels següents és el compromís (commitment) associat específicament a l'Increment?",
        "opts": [
          "[ES PENDIENTE] Product Goal",
          "[ES PENDIENTE] Sprint Goal",
          "[ES PENDIENTE] Definition of Done",
          "[ES PENDIENTE] Release Plan"
        ],
        "correct": 2,
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Incorrecte: no és un artefacte ni compromís formal de la Guia."
        ],
        "trap": "[ES PENDIENTE] Cadascun dels tres artefactes té exactament un compromís: no barregis els parells."
      },
      {
        "type": "tf",
        "q": "[ES PENDIENTE] La Definition of Done pot variar entre Sprints d'un mateix producte segons convingui al PO.",
        "opts": [
          "[ES PENDIENTE] Vertader",
          "[ES PENDIENTE] Fals"
        ],
        "correct": [
          1
        ],
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte: la DoD és un estàndard de qualitat estable pel producte, no una variable negociable Sprint a Sprint segons convingui."
        ],
        "trap": "[ES PENDIENTE] La DoD pot evolucionar amb el temps (millorar-se), però no es 'flexibilitza' puntualment per conveniència en un Sprint concret."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Quina relació hi ha entre la Definition of Done i la transparència?",
        "opts": [
          "[ES PENDIENTE] Cap relació directa",
          "[ES PENDIENTE] La DoD crea transparència proporcionant una comprensió compartida de què significa 'fet'",
          "[ES PENDIENTE] La DoD substitueix la necessitat de transparència",
          "[ES PENDIENTE] La DoD només afecta la comunicació amb stakeholders externs"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte: cita literal.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte."
        ],
        "trap": "[ES PENDIENTE] La DoD és, per definició, un mecanisme de transparència compartida per a tot l'Scrum Team, no només cap enfora."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Un Developer creu que un element ja es pot considerar 'fet' encara que li falti passar les proves automatitzades incloses a la DoD del producte. Què hauria de fer l'equip?",
        "opts": [
          "[ES PENDIENTE] Acceptar-ho igualment si el PO no s'hi oposa",
          "[ES PENDIENTE] No considerar-lo part de l'Increment fins complir la DoD íntegrament",
          "[ES PENDIENTE] Presentar-ho al Sprint Review com a 'parcialment complet'",
          "[ES PENDIENTE] Deixar-ho a criteri individual de cada Developer"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte: la DoD no és negociable ni tan sols amb el PO.",
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Incorrecte: no existeix la categoria 'parcialment complet'.",
          "[ES PENDIENTE] Incorrecte: la DoD és un estàndard de tot l'equip, no individual."
        ],
        "trap": "[ES PENDIENTE] Cap component de la DoD és opcional ni negociable puntualment, encara que sembli menor."
      },
      {
        "type": "tf",
        "q": "[ES PENDIENTE] Si un producte té diversos Scrum Teams treballant-hi, cadascun pot tenir el seu propi nivell de qualitat sempre que compleixi el mínim intern del seu equip.",
        "opts": [
          "[ES PENDIENTE] Vertader",
          "[ES PENDIENTE] Fals"
        ],
        "correct": [
          1
        ],
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte: han de definir i complir mútuament la mateixa DoD quan comparteixen producte."
        ],
        "trap": "[ES PENDIENTE] 'Nivell de qualitat propi de cada equip' és incorrecte quan es comparteix un únic producte: la DoD ha de ser comuna."
      }
    ]
  },
  {
    "id": "autogestio",
    "name": "[ES PENDIENTE] Equips autogestionats",
    "theory": "<p><i>[ES PENDIENTE — traducir siguiendo la Scrum Guide oficial en castellano. Referencia original en catalán: data.ca.js, topic \"autogestio\"]</i></p>",
    "questions": [
      {
        "type": "single",
        "q": "[ES PENDIENTE] Què decideixen internament els equips autogestionats segons la Guia 2020?",
        "opts": [
          "[ES PENDIENTE] Qui fa el treball, com i on es fa",
          "[ES PENDIENTE] Quant es cobra per cada tasca",
          "[ES PENDIENTE] Qui és el Product Owner",
          "[ES PENDIENTE] Quan comença i acaba l'organització el projecte"
        ],
        "correct": 0,
        "exp": [
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte: el PO no és triat pels Developers.",
          "[ES PENDIENTE] Incorrecte."
        ],
        "trap": "[ES PENDIENTE] La fórmula exacta és 'quién, cómo y dónde trabajar' — memoritza-la literalment."
      },
      {
        "type": "tf",
        "q": "[ES PENDIENTE] 'Autogestionat' i 'auto-organitzat' són sinònims intercambiables a la Guia Scrum 2020.",
        "opts": [
          "[ES PENDIENTE] Vertader",
          "[ES PENDIENTE] Fals"
        ],
        "correct": [
          1
        ],
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte: 'auto-organitzat' és terme de la versió 2017, substituït per 'autogestionat' el 2020."
        ],
        "trap": "[ES PENDIENTE] Trampa de vocabulari molt freqüent: usar el terme antic (2017) com si fos l'actual."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Què vol dir que un Scrum Team sigui multifuncional?",
        "opts": [
          "[ES PENDIENTE] Que cada membre sap fer totes les tasques per si sol",
          "[ES PENDIENTE] Que col·lectivament tenen totes les habilitats necessàries per crear valor cada Sprint",
          "[ES PENDIENTE] Que treballen en diversos productes alhora",
          "[ES PENDIENTE] Que roten de rol cada Sprint"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte: no cal que cada individu sàpiga fer-ho tot.",
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte."
        ],
        "trap": "[ES PENDIENTE] Multifuncional és una propietat de l'equip com a conjunt, no una exigència individual de cada membre."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Quin és el paper del Scrum Master respecte a l'autogestió de l'equip?",
        "opts": [
          "[ES PENDIENTE] Assignar les tasques diàries per assegurar eficiència",
          "[ES PENDIENTE] Capacitar els membres de l'equip en autogestió i multifuncionalitat",
          "[ES PENDIENTE] Decidir qui forma part de l'equip",
          "[ES PENDIENTE] Substituir a un Developer si falta personal"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte: trencaria l'autogestió.",
          "[ES PENDIENTE] Correcte: cita literal.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte."
        ],
        "trap": "[ES PENDIENTE] Qualsevol opció on el SM 'decideix pel equip' trenca el principi d'autogestió."
      },
      {
        "type": "tf",
        "q": "[ES PENDIENTE] L'autogestió implica que ningú es responsabilitza de res concret dins l'equip.",
        "opts": [
          "[ES PENDIENTE] Vertader",
          "[ES PENDIENTE] Fals"
        ],
        "correct": [
          1
        ],
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte: els Developers 'se responsabilizan mutuamente como profesionales' — hi ha rendició de comptes."
        ],
        "trap": "[ES PENDIENTE] Autogestió no és absència de responsabilitat individual ni col·lectiva."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Quan un Scrum Team es torna massa gran, què recomana la Guia?",
        "opts": [
          "[ES PENDIENTE] Afegir més Scrum Masters per coordinar",
          "[ES PENDIENTE] Considerar reorganitzar-se en diversos equips cohesionats centrats en el mateix producte",
          "[ES PENDIENTE] Dividir el Product Backlog en diversos backlogs paral·lels",
          "[ES PENDIENTE] Crear un equip de coordinació superior"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Incorrecte: sempre ha d'existir un únic Product Backlog.",
          "[ES PENDIENTE] Incorrecte: no existeix aquesta figura a la Guia."
        ],
        "trap": "[ES PENDIENTE] La solució a l'escalat és més equips cohesionats amb el mateix Product Goal, Product Backlog i PO — mai més backlogs ni jerarquies noves."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Per què Scrum utilitza 'desarrolladores' com a terme general per a totes les persones que fan el treball?",
        "opts": [
          "[ES PENDIENTE] Per excloure altres disciplines com investigadors o dissenyadors",
          "[ES PENDIENTE] Per simplificar, sense excloure ningú que aporti valor al producte",
          "[ES PENDIENTE] Perquè només aplica a equips de software",
          "[ES PENDIENTE] Per diferenciar-los legalment del Product Owner"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte: és el contrari de la intenció.",
          "[ES PENDIENTE] Correcte: cita literal del propòsit de la Guia.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte."
        ],
        "trap": "[ES PENDIENTE] 'Si obtens valor de Scrum, considera't inclòs' — la Guia és explícita en no limitar el terme a programadors."
      },
      {
        "type": "tf",
        "q": "[ES PENDIENTE] Els Developers poden decidir dividir-se en sub-equips estables per especialitat (frontend, backend) dins del mateix Scrum Team.",
        "opts": [
          "[ES PENDIENTE] Vertader",
          "[ES PENDIENTE] Fals"
        ],
        "correct": [
          1
        ],
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte: la Guia prohibeix explícitament sub-equips dins d'un Scrum Team."
        ],
        "trap": "[ES PENDIENTE] Encara que cada persona tingui especialitats, no es formalitzen sub-equips permanents dins l'Scrum Team."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Quina és la relació entre autogestió i ritme sostenible?",
        "opts": [
          "[ES PENDIENTE] No hi ha relació entre ambdós conceptes",
          "[ES PENDIENTE] Treballar en Sprints a un ritme sostenible millora l'enfocament i la consistència de l'equip autogestionat",
          "[ES PENDIENTE] L'autogestió exigeix hores extra per complir el Sprint Goal",
          "[ES PENDIENTE] El ritme sostenible només aplica al Scrum Master"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte: cita literal.",
          "[ES PENDIENTE] Incorrecte: contrari a l'esperit de la Guia.",
          "[ES PENDIENTE] Incorrecte."
        ],
        "trap": "[ES PENDIENTE] El 'ritme sostenible' és un concepte explícit de la Guia associat al benestar de l'equip, no a treballar més hores."
      }
    ]
  },
  {
    "id": "forecasting",
    "name": "[ES PENDIENTE] Forecasting i planificació de releases",
    "theory": "<p><i>[ES PENDIENTE — traducir siguiendo la Scrum Guide oficial en castellano. Referencia original en catalán: data.ca.js, topic \"forecasting\"]</i></p>",
    "questions": [
      {
        "type": "multi",
        "q": "[ES PENDIENTE] Quines pràctiques cita la Guia Scrum com a útils per al forecasting?",
        "opts": [
          "[ES PENDIENTE] Diagrames de Gantt",
          "[ES PENDIENTE] Burn-down charts",
          "[ES PENDIENTE] Burn-up charts",
          "[ES PENDIENTE] Flujos acumulatius (cumulative flow)"
        ],
        "correct": [
          1,
          2,
          3
        ],
        "exp": [
          "[ES PENDIENTE] Incorrecte: Gantt no apareix a la Guia Scrum.",
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Correcte."
        ],
        "trap": "[ES PENDIENTE] Gantt és un distractor clàssic de metodologia tradicional, no forma part del vocabulari de la Guia Scrum."
      },
      {
        "type": "tf",
        "q": "[ES PENDIENTE] Les eines de forecasting com el burn-down substitueixen la importància de l'empirisme.",
        "opts": [
          "[ES PENDIENTE] Vertader",
          "[ES PENDIENTE] Fals"
        ],
        "correct": [
          1
        ],
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte: la Guia ho nega explícitament — no la substitueixen."
        ],
        "trap": "[ES PENDIENTE] Són eines de suport; la decisió empírica real segueix sent primordial per sobre de qualsevol gràfic."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Segons la teoria de Scrum, en quins entorns es desconeix per endavant què succeirà?",
        "opts": [
          "[ES PENDIENTE] Entorns simples",
          "[ES PENDIENTE] Entorns complexos",
          "[ES PENDIENTE] Entorns predictibles",
          "[ES PENDIENTE] Entorns amb requisits fixos"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte."
        ],
        "trap": "[ES PENDIENTE] Scrum s'orienta a problemes complexos, on el resultat futur és incert per definició."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Quina és la base correcta per fer un forecast fiable, segons l'enfocament empíric?",
        "opts": [
          "[ES PENDIENTE] Una estimació teòrica feta abans de començar el projecte",
          "[ES PENDIENTE] Dades sobre el que ja ha succeït (rendiment passat)",
          "[ES PENDIENTE] L'opinió del stakeholder més sènior",
          "[ES PENDIENTE] Un pla detallat aprovat a l'inici"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte: 'solo lo que ya ha sucedido se puede utilizar para la toma de decisiones con vistas a futuro'.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte: contrari a l'enfocament empíric (BDUF)."
        ],
        "trap": "[ES PENDIENTE] Únicament les dades reals passades són vàlides per projectar el futur en un entorn empíric."
      },
      {
        "type": "tf",
        "q": "[ES PENDIENTE] Un forecast de release ha de comunicar-se com un compromís fix i inamovible.",
        "opts": [
          "[ES PENDIENTE] Vertader",
          "[ES PENDIENTE] Fals"
        ],
        "correct": [
          1
        ],
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte: un forecast és una previsió basada en probabilitat i dades, no un compromís absolut."
        ],
        "trap": "[ES PENDIENTE] Presentar un forecast com a data fixa contradiu l'enfocament probabilístic i empíric que promou Scrum."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Quin factor és clau perquè els Developers puguin fer pronòstics de Sprint més segurs?",
        "opts": [
          "[ES PENDIENTE] Conèixer el pressupost total del projecte",
          "[ES PENDIENTE] Conèixer el seu rendiment passat, capacitat futura i la seva Definition of Done",
          "[ES PENDIENTE] Tenir l'aprovació prèvia de tots els stakeholders",
          "[ES PENDIENTE] Disposar d'un pla de release aprovat per la direcció"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte: cita literal de la secció de Sprint Planning.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte."
        ],
        "trap": "[ES PENDIENTE] El forecast de Sprint es basa en dades pròpies de l'equip (rendiment passat, DoD), no en factors externs com pressupostos o aprovacions."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Quantes vegades, com a mínim, garanteixen els Sprints la inspecció i adaptació del progrés cap a un Product Goal?",
        "opts": [
          "[ES PENDIENTE] Una vegada per trimestre",
          "[ES PENDIENTE] Una vegada al mes, com a mínim, atès que el Sprint dura un mes o menys",
          "[ES PENDIENTE] Una vegada per setmana obligatòriament",
          "[ES PENDIENTE] Només al final del producte"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte: cita literal.",
          "[ES PENDIENTE] Incorrecte: depèn de la durada real del Sprint escollida per l'equip.",
          "[ES PENDIENTE] Incorrecte."
        ],
        "trap": "[ES PENDIENTE] La freqüència mínima ve donada pel límit superior del Sprint (un mes), no per una cadència setmanal obligatòria."
      },
      {
        "type": "tf",
        "q": "[ES PENDIENTE] Quan l'horitzó d'un Sprint és massa llarg, el Sprint Goal pot tornar-se obsolet i el risc pot augmentar.",
        "opts": [
          "[ES PENDIENTE] Vertader",
          "[ES PENDIENTE] Fals"
        ],
        "correct": [
          0
        ],
        "exp": [
          "[ES PENDIENTE] Correcte: cita literal de la secció 'El Sprint'."
        ],
        "trap": "[ES PENDIENTE] Sprints més llargs augmenten la incertesa acumulada abans de la següent inspecció formal."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Quin és un motiu per utilitzar Sprints més curts, segons la Guia?",
        "opts": [
          "[ES PENDIENTE] Redueixen la burocràcia documental",
          "[ES PENDIENTE] Generen més cicles d'aprenentatge i limiten el risc de cost i esforç a un període més petit",
          "[ES PENDIENTE] Eliminen la necessitat de Sprint Review",
          "[ES PENDIENTE] Redueixen el nombre de Product Backlog Items necessaris"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte: cita literal.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte."
        ],
        "trap": "[ES PENDIENTE] Els Sprints curts no eliminen esdeveniments — simplement limiten el risc i acceleren l'aprenentatge empíric."
      }
    ]
  },
  {
    "id": "visio-valor",
    "name": "[ES PENDIENTE] Visió i valor de producte",
    "theory": "<p><i>[ES PENDIENTE — traducir siguiendo la Scrum Guide oficial en castellano. Referencia original en catalán: data.ca.js, topic \"visio-valor\"]</i></p>",
    "questions": [
      {
        "type": "single",
        "q": "[ES PENDIENTE] Com defineix la Guia un 'producte'?",
        "opts": [
          "[ES PENDIENTE] Un projecte amb data d'inici i fi definides",
          "[ES PENDIENTE] Un vehicle per lliurar valor, amb límits clars i usuaris/clients definits",
          "[ES PENDIENTE] Un conjunt de funcionalitats de software exclusivament",
          "[ES PENDIENTE] Un document de requisits aprovat"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte: definició literal.",
          "[ES PENDIENTE] Incorrecte: la Guia diu explícitament que pot ser més abstracte que software.",
          "[ES PENDIENTE] Incorrecte."
        ],
        "trap": "[ES PENDIENTE] Un producte no és un 'projecte' — Scrum evita aquest terme; és un vehicle continu de valor."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Què descriu el Product Goal?",
        "opts": [
          "[ES PENDIENTE] Un pla de releases amb dates concretes",
          "[ES PENDIENTE] Un estat futur del producte que serveix d'objectiu per l'Scrum Team",
          "[ES PENDIENTE] Els criteris d'acceptació de tots els PBI",
          "[ES PENDIENTE] Un document firmat pels stakeholders"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte."
        ],
        "trap": "[ES PENDIENTE] El Product Goal és una direcció/objectiu, no un pla detallat amb dates — no és un roadmap."
      },
      {
        "type": "tf",
        "q": "[ES PENDIENTE] L'Scrum Team ha de complir o abandonar un Product Goal abans d'assumir-ne un altre.",
        "opts": [
          "[ES PENDIENTE] Vertader",
          "[ES PENDIENTE] Fals"
        ],
        "correct": [
          0
        ],
        "exp": [
          "[ES PENDIENTE] Correcte: cita literal."
        ],
        "trap": "[ES PENDIENTE] No es pot treballar simultàniament cap a dos Product Goals diferents amb el mateix equip."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Qui és responsable de maximitzar el valor del producte?",
        "opts": [
          "[ES PENDIENTE] El Scrum Master",
          "[ES PENDIENTE] Els stakeholders",
          "[ES PENDIENTE] El Product Owner",
          "[ES PENDIENTE] Tot l'Scrum Team per igual, sense diferenciar responsabilitats"
        ],
        "correct": 2,
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Incorrecte."
        ],
        "trap": "[ES PENDIENTE] Encara que tot l'equip aporta valor amb l'Increment, la responsabilitat formal de maximitzar-lo és específicament del PO."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Quina afirmació sobre un producte és correcta segons la Guia?",
        "opts": [
          "[ES PENDIENTE] Ha de ser sempre un producte físic tangible",
          "[ES PENDIENTE] Pot ser un servei, un producte físic o quelcom més abstracte",
          "[ES PENDIENTE] Ha de tenir sempre un únic usuari final",
          "[ES PENDIENTE] No necessita límits clars, ja que és emergent"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte: sí necessita un límit clar."
        ],
        "trap": "[ES PENDIENTE] Un producte no s'ha de confondre amb 'software' exclusivament — pot ser molt més abstracte."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Què emergeix per definir 'què' complirà el Product Goal?",
        "opts": [
          "[ES PENDIENTE] La resta del Product Backlog",
          "[ES PENDIENTE] El Sprint Backlog únicament",
          "[ES PENDIENTE] La Definition of Done",
          "[ES PENDIENTE] El pla de releases anual"
        ],
        "correct": 0,
        "exp": [
          "[ES PENDIENTE] Correcte: cita literal.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte."
        ],
        "trap": "[ES PENDIENTE] El Product Backlog complet (no només el Sprint Backlog) és el que evoluciona per assolir el Product Goal."
      },
      {
        "type": "multi",
        "q": "[ES PENDIENTE] Quines característiques té un producte segons la Guia Scrum?",
        "opts": [
          "[ES PENDIENTE] Té un límit clar",
          "[ES PENDIENTE] Ha de generar sempre ingressos directes",
          "[ES PENDIENTE] Té stakeholders coneguts",
          "[ES PENDIENTE] Té usuaris o clients ben definits"
        ],
        "correct": [
          0,
          2,
          3
        ],
        "exp": [
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Incorrecte: la Guia no ho exigeix; un producte intern també és vàlid.",
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Correcte."
        ],
        "trap": "[ES PENDIENTE] Generar ingressos directes no és un requisit de la definició de 'producte' a la Guia — pot ser un servei intern o una plataforma sense monetització directa."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Quina diferència hi ha entre el Product Goal i un Sprint Goal en termes d'horitzó temporal?",
        "opts": [
          "[ES PENDIENTE] Ambdós són a llarg termini",
          "[ES PENDIENTE] El Product Goal és a llarg termini; el Sprint Goal és específic d'aquell Sprint",
          "[ES PENDIENTE] El Sprint Goal és a llarg termini; el Product Goal és puntual",
          "[ES PENDIENTE] No hi ha diferència, són sinònims"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Incorrecte: invertit.",
          "[ES PENDIENTE] Incorrecte."
        ],
        "trap": "[ES PENDIENTE] No confonguis l'abast temporal: Product Goal = visió a llarg termini; Sprint Goal = objectiu d'un únic Sprint."
      },
      {
        "type": "tf",
        "q": "[ES PENDIENTE] El Product Owner pot tenir dos Product Goals actius simultàniament per accelerar el desenvolupament.",
        "opts": [
          "[ES PENDIENTE] Vertader",
          "[ES PENDIENTE] Fals"
        ],
        "correct": [
          1
        ],
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte: cal complir o abandonar un Product Goal abans d'assumir el següent."
        ],
        "trap": "[ES PENDIENTE] Un únic Product Goal actiu a la vegada — treballar-ne dos en paral·lel dilueix el focus de l'equip."
      }
    ]
  },
  {
    "id": "gestio-backlog",
    "name": "[ES PENDIENTE] Gestió del Product Backlog",
    "theory": "<p><i>[ES PENDIENTE — traducir siguiendo la Scrum Guide oficial en castellano. Referencia original en catalán: data.ca.js, topic \"gestio-backlog\"]</i></p>",
    "questions": [
      {
        "type": "single",
        "q": "[ES PENDIENTE] Com s'anomena l'acte de descompondre i definir més els elements del Product Backlog?",
        "opts": [
          "[ES PENDIENTE] Priorització",
          "[ES PENDIENTE] Refinament (refinement)",
          "[ES PENDIENTE] Sizing",
          "[ES PENDIENTE] Ordenació estratègica"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Incorrecte: sizing és només l'atribut de tamany.",
          "[ES PENDIENTE] Incorrecte."
        ],
        "trap": "[ES PENDIENTE] El terme oficial és 'refinement', una activitat contínua, no un esdeveniment formal de Scrum."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Quin verb utilitza la Guia Scrum per descriure com el PO gestiona els elements del Product Backlog?",
        "opts": [
          "[ES PENDIENTE] Priorizar",
          "[ES PENDIENTE] Ordenar",
          "[ES PENDIENTE] Classificar per urgència",
          "[ES PENDIENTE] Segmentar per departament"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte: terme evitat deliberadament per la Guia.",
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte."
        ],
        "trap": "[ES PENDIENTE] 'Priorizar' és possiblement la trampa de vocabulari més repetida de tot l'examen PSPO I."
      },
      {
        "type": "multi",
        "q": "[ES PENDIENTE] Quines pràctiques ajuden a minimitzar el desperdici en la gestió del Product Backlog?",
        "opts": [
          "[ES PENDIENTE] Refinar en detall només els elements que probablement s'implementaran aviat",
          "[ES PENDIENTE] Crear un segon backlog paral·lel per als elements 'nous'",
          "[ES PENDIENTE] Eliminar elements obsolets que porten molt temps sense tocar-se",
          "[ES PENDIENTE] Detallar exhaustivament tots els elements des del principi"
        ],
        "correct": [
          0,
          2
        ],
        "exp": [
          "[ES PENDIENTE] Correcte: enfocament 'just in time, just enough'.",
          "[ES PENDIENTE] Incorrecte: trenca el principi d'única font de veritat.",
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Incorrecte: és una forma de desperdici (BDUF a nivell de backlog)."
        ],
        "trap": "[ES PENDIENTE] Un segon backlog 'paral·lel' sempre és incorrecte: només ha d'existir un Product Backlog com a font única de veritat."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Qui és responsable del tamany (size) dels elements del Product Backlog?",
        "opts": [
          "[ES PENDIENTE] El Product Owner en exclusiva",
          "[ES PENDIENTE] Els Developers que faran el treball",
          "[ES PENDIENTE] Els stakeholders principals",
          "[ES PENDIENTE] El Scrum Master"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte."
        ],
        "trap": "[ES PENDIENTE] El PO pot influir-hi, però la decisió final de mida és sempre dels Developers."
      },
      {
        "type": "tf",
        "q": "[ES PENDIENTE] El refinament del Product Backlog és un esdeveniment formal de Scrum amb un timebox fix.",
        "opts": [
          "[ES PENDIENTE] Vertader",
          "[ES PENDIENTE] Fals"
        ],
        "correct": [
          1
        ],
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte: és una activitat contínua, no un dels quatre esdeveniments formals amb timebox de la Guia."
        ],
        "trap": "[ES PENDIENTE] El refinement NO és un dels 4 esdeveniments formals (Planning, Daily, Review, Retro) — és una activitat en curs."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Quina responsabilitat té el PO respecte a la visibilitat del Product Backlog?",
        "opts": [
          "[ES PENDIENTE] Assegurar que sigui transparent, visible i comprès",
          "[ES PENDIENTE] Amagar-lo als stakeholders fins que estigui complet",
          "[ES PENDIENTE] Compartir-lo només amb els Developers",
          "[ES PENDIENTE] Publicar-lo només al final de cada release"
        ],
        "correct": 0,
        "exp": [
          "[ES PENDIENTE] Correcte: responsabilitat explícita del PO.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte."
        ],
        "trap": "[ES PENDIENTE] La transparència del backlog és per a tot l'Scrum Team i els stakeholders, no un document restringit."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Quan es considera que un element del Product Backlog està 'llest' (ready) per seleccionar-se en un Sprint Planning?",
        "opts": [
          "[ES PENDIENTE] Quan el PO l'ha aprovat formalment per escrit",
          "[ES PENDIENTE] Quan ha adquirit prou transparència, normalment després d'activitats de refinament",
          "[ES PENDIENTE] Quan té una estimació en hores exacta",
          "[ES PENDIENTE] Quan tots els stakeholders l'han validat"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Incorrecte: la Guia no exigeix hores exactes.",
          "[ES PENDIENTE] Incorrecte."
        ],
        "trap": "[ES PENDIENTE] 'Ready' és un grau de transparència/comprensió assolit via refinament, no una aprovació formal ni una estimació exacta."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Quin percentatge de temps de l'equip s'hauria de dedicar al refinament segons la Guia Scrum?",
        "opts": [
          "[ES PENDIENTE] Un 10% fix segons la Guia",
          "[ES PENDIENTE] La Guia no especifica un percentatge fix; és una activitat contínua segons calgui",
          "[ES PENDIENTE] Un 25% obligatori cada Sprint",
          "[ES PENDIENTE] Ha de fer-se sempre en un esdeveniment separat d'1 hora"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte: la Guia no dona cap percentatge.",
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte."
        ],
        "trap": "[ES PENDIENTE] Trampa comuna: atribuir a la Guia Scrum xifres concretes (com el famós '10% del temps') que en realitat provenen de pràctiques externes, no del text oficial."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Si dos Product Backlog Items competeixen pel mateix Sprint, qui decideix quin ordre tenen?",
        "opts": [
          "[ES PENDIENTE] Els Developers, per pura capacitat tècnica",
          "[ES PENDIENTE] El Product Owner, ordenant el Product Backlog",
          "[ES PENDIENTE] Es vota entre tot l'Scrum Team i stakeholders",
          "[ES PENDIENTE] Es decideix per antiguitat de l'element al backlog"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte."
        ],
        "trap": "[ES PENDIENTE] L'ordre del backlog és responsabilitat única del PO — no és un procés de votació ni d'antiguitat."
      }
    ]
  },
  {
    "id": "estrategia-negoci",
    "name": "[ES PENDIENTE] Estratègia de negoci",
    "theory": "<p><i>[ES PENDIENTE — traducir siguiendo la Scrum Guide oficial en castellano. Referencia original en catalán: data.ca.js, topic \"estrategia-negoci\"]</i></p>",
    "questions": [
      {
        "type": "single",
        "q": "[ES PENDIENTE] Segons les competències PSPO, per què és important que el PO entengui el mercat i la competència?",
        "opts": [
          "[ES PENDIENTE] Per poder programar ell mateix funcionalitats competitives",
          "[ES PENDIENTE] Per prendre decisions informades sobre com maximitzar el valor del producte",
          "[ES PENDIENTE] Per substituir l'equip de màrqueting de l'organització",
          "[ES PENDIENTE] Perquè és un requisit tècnic de la Guia Scrum"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte: la Guia Scrum no ho detalla; ve de les competències PSPO."
        ],
        "trap": "[ES PENDIENTE] Aquest contingut prové de les Professional Scrum Competencies, no de la Guia Scrum en si — combina ambdues fonts a l'examen."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Què implica el 'cost d'oportunitat' en la presa de decisions del PO?",
        "opts": [
          "[ES PENDIENTE] El cost monetari exacte de cada Product Backlog Item",
          "[ES PENDIENTE] Que triar fer una cosa implica renunciar (de moment) a fer-ne una altra amb els mateixos recursos",
          "[ES PENDIENTE] El cost de formació de l'equip",
          "[ES PENDIENTE] El pressupost total assignat al producte"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte."
        ],
        "trap": "[ES PENDIENTE] Cost d'oportunitat no és un càlcul financer exacte, és el concepte de renúncia implícita en cada decisió d'ordenació del backlog."
      },
      {
        "type": "tf",
        "q": "[ES PENDIENTE] Un bon Product Owner es centra exclusivament en detalls tècnics d'implementació, deixant l'estratègia de negoci a la direcció.",
        "opts": [
          "[ES PENDIENTE] Vertader",
          "[ES PENDIENTE] Fals"
        ],
        "correct": [
          1
        ],
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte: el PO ha d'equilibrar visió de producte, negoci i execució — no és només una figura tècnica."
        ],
        "trap": "[ES PENDIENTE] Reduir el PO a un rol purament tècnic o purament administratiu són dues simplificacions incorrectes habituals a l'examen."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Quin enfocament recomanen les competències PSPO per validar si una funcionalitat aportarà valor real?",
        "opts": [
          "[ES PENDIENTE] Confiar en la intuïció del PO sense validar-ho",
          "[ES PENDIENTE] Basar-se en dades i experimentació per validar hipòtesis de valor",
          "[ES PENDIENTE] Esperar que ho decideixi la direcció general",
          "[ES PENDIENTE] Copiar directament el que fa la competència"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte."
        ],
        "trap": "[ES PENDIENTE] L'enfocament empíric també s'aplica a l'estratègia de producte: validar hipòtesis amb dades, no assumir-les."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Com hauria d'utilitzar el PO l'Increment presentat al Sprint Review en relació amb l'estratègia de negoci?",
        "opts": [
          "[ES PENDIENTE] Com una prova per justificar el pressupost invertit",
          "[ES PENDIENTE] Com a base empírica per ajustar la direcció del producte segons canvis del mercat",
          "[ES PENDIENTE] Com un document legal per als stakeholders",
          "[ES PENDIENTE] Només com a demostració tècnica interna"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte: el Sprint Review inspecciona resultats i entorn per decidir pròxims passos alineats amb el valor de negoci.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte."
        ],
        "trap": "[ES PENDIENTE] El Sprint Review connecta directament execució i estratègia: no és només una demo tècnica, és input per a decisions de negoci."
      },
      {
        "type": "tf",
        "q": "[ES PENDIENTE] El Product Owner ha d'ignorar els canvis del mercat un cop el Product Backlog està definit, per mantenir estabilitat.",
        "opts": [
          "[ES PENDIENTE] Vertader",
          "[ES PENDIENTE] Fals"
        ],
        "correct": [
          1
        ],
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte: el Product Backlog és emergent i s'ha d'ajustar a noves oportunitats i canvis d'entorn."
        ],
        "trap": "[ES PENDIENTE] 'Emergent' vol dir que el backlog evoluciona contínuament amb el mercat, mai és un document tancat i estable."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Quin concepte descriu millor per què el PO ha de prioritzar objectius estratègics per sobre de peticions puntuals de stakeholders individuals?",
        "opts": [
          "[ES PENDIENTE] Maximitzar el valor global del producte a llarg termini, no només satisfer demandes aïllades",
          "[ES PENDIENTE] Evitar conflictes personals amb l'equip",
          "[ES PENDIENTE] Complir estrictament amb el pressupost anual",
          "[ES PENDIENTE] Reduir el nombre de reunions amb stakeholders"
        ],
        "correct": 0,
        "exp": [
          "[ES PENDIENTE] Correcte: coherent amb la responsabilitat de maximitzar el valor del producte.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte."
        ],
        "trap": "[ES PENDIENTE] El PO no és un simple 'gestor de peticions' — ha d'equilibrar-les amb la visió estratègica global del producte."
      }
    ]
  },
  {
    "id": "stakeholders",
    "name": "[ES PENDIENTE] Stakeholders i clients",
    "theory": "<p><i>[ES PENDIENTE — traducir siguiendo la Scrum Guide oficial en castellano. Referencia original en catalán: data.ca.js, topic \"stakeholders\"]</i></p>",
    "questions": [
      {
        "type": "single",
        "q": "[ES PENDIENTE] En quin esdeveniment col·laboren especialment els stakeholders amb l'Scrum Team?",
        "opts": [
          "[ES PENDIENTE] Daily Scrum",
          "[ES PENDIENTE] Sprint Planning",
          "[ES PENDIENTE] Sprint Review",
          "[ES PENDIENTE] Sprint Retrospective"
        ],
        "correct": 2,
        "exp": [
          "[ES PENDIENTE] Incorrecte: només Developers.",
          "[ES PENDIENTE] Incorrecte: principalment l'Scrum Team, encara que poden convidar-se assessors.",
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Incorrecte: intern de l'equip."
        ],
        "trap": "[ES PENDIENTE] El Sprint Review és l'esdeveniment obert a stakeholders per excel·lència; els altres tres són majoritàriament interns."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Com ha de procedir un stakeholder que vulgui canviar l'ordre del Product Backlog?",
        "opts": [
          "[ES PENDIENTE] Parlar-ho directament amb els Developers durant el Sprint",
          "[ES PENDIENTE] Negociar-ho amb criteri amb el Product Owner",
          "[ES PENDIENTE] Esperar la propera auditoria de qualitat",
          "[ES PENDIENTE] Escalar-ho a direcció general immediatament"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte: cita literal.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte."
        ],
        "trap": "[ES PENDIENTE] Tota negociació de canvis d'abast o ordre passa pel PO, mai directament pels Developers."
      },
      {
        "type": "tf",
        "q": "[ES PENDIENTE] Els stakeholders formen part de l'Scrum Team.",
        "opts": [
          "[ES PENDIENTE] Vertader",
          "[ES PENDIENTE] Fals"
        ],
        "correct": [
          1
        ],
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte: l'Scrum Team és només PO, SM i Developers; els stakeholders són externs."
        ],
        "trap": "[ES PENDIENTE] Confondre 'col·laborar estretament' amb 'formar part de l'equip' és un error freqüent."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Quina és una manera en què el Scrum Master serveix a l'organització respecte als stakeholders?",
        "opts": [
          "[ES PENDIENTE] Decidint per ells quines funcionalitats són prioritàries",
          "[ES PENDIENTE] Eliminant les barreres entre les parts interessades i els Scrum Teams",
          "[ES PENDIENTE] Substituint el PO en la negociació de canvis",
          "[ES PENDIENTE] Aprovant personalment els canvis de Product Backlog"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte: cita literal.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte."
        ],
        "trap": "[ES PENDIENTE] El SM elimina barreres i facilita, però mai substitueix les decisions o negociacions que corresponen al PO."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Durant el Sprint Review, què fan conjuntament l'Scrum Team i els stakeholders?",
        "opts": [
          "[ES PENDIENTE] Aproven formalment el pressupost del següent Sprint",
          "[ES PENDIENTE] Revisen el que s'ha aconseguit i col·laboren sobre què fer a continuació",
          "[ES PENDIENTE] Assignen tasques concretes als Developers per al següent Sprint",
          "[ES PENDIENTE] Redacten la Definition of Done del producte"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Incorrecte: l'assignació és interna dels Developers.",
          "[ES PENDIENTE] Incorrecte: la DoD la defineix l'Scrum Team, no és tema específic del Review amb stakeholders."
        ],
        "trap": "[ES PENDIENTE] El Sprint Review és col·laboratiu i de treball conjunt, no una reunió d'aprovacions formals ni d'assignació de tasques."
      },
      {
        "type": "tf",
        "q": "[ES PENDIENTE] El Product Owner pot representar les necessitats de moltes parts interessades dins del Product Backlog.",
        "opts": [
          "[ES PENDIENTE] Vertader",
          "[ES PENDIENTE] Fals"
        ],
        "correct": [
          0
        ],
        "exp": [
          "[ES PENDIENTE] Correcte: cita literal de la Guia."
        ],
        "trap": "[ES PENDIENTE] El PO és un punt de síntesi de moltes veus de negoci, sense deixar de ser una única persona responsable."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Un client extern demana directament als Developers que canviïn l'abast d'un item que ja està al Sprint Backlog. Què hauria de passar?",
        "opts": [
          "[ES PENDIENTE] Els Developers ho accepten si tècnicament és senzill",
          "[ES PENDIENTE] Es negocia amb el Product Owner, sense posar en perill el Sprint Goal",
          "[ES PENDIENTE] S'aplica directament perquè el client sempre té raó",
          "[ES PENDIENTE] Es porta a votació al Daily Scrum següent"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte: els Developers no negocien abast directament amb externs.",
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Incorrecte: el Daily Scrum no és un fòrum de negociació d'abast amb externs."
        ],
        "trap": "[ES PENDIENTE] Cap canvi d'abast durant el Sprint es fa sense passar pel PO i sense posar en perill el Sprint Goal ja acordat."
      },
      {
        "type": "single",
        "q": "[ES PENDIENTE] Quin és el risc principal de deixar que els stakeholders parlin directament amb els Developers sobre prioritats, sense passar pel PO?",
        "opts": [
          "[ES PENDIENTE] Cap risc, millora la comunicació",
          "[ES PENDIENTE] Es trenca la gestió coherent i unificada del valor del producte que ha de liderar el PO",
          "[ES PENDIENTE] Els Developers es tornen massa autònoms",
          "[ES PENDIENTE] Augmenta la transparència del Product Backlog"
        ],
        "correct": 1,
        "exp": [
          "[ES PENDIENTE] Incorrecte.",
          "[ES PENDIENTE] Correcte.",
          "[ES PENDIENTE] Incorrecte: no és negatiu que siguin autònoms tècnicament.",
          "[ES PENDIENTE] Incorrecte."
        ],
        "trap": "[ES PENDIENTE] El risc no és de comunicació general, sinó de perdre un punt únic i coherent de decisió sobre valor i ordre — exactament el que soluciona tenir un PO."
      }
    ]
  }
];

const ALL_QUESTIONS_ES = TOPICS_ES.flatMap(t => t.questions.map(q => ({...q, topicId: t.id, topicName: t.name})));
