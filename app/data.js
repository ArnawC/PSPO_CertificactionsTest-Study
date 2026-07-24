// Banc de continguts PSPO I — basat en la Scrum Guide 2020 i les Professional Scrum Competencies
// Totes les preguntes estan ancorades en text de la Guia (novembre 2020). No hi ha "Sprint 0",
// no s'utilitza "auto-organitzat" (terme 2017) ni "priorizar" (s'usa "ordenar").

const TOPICS = [

{
  id: "empirisme",
  name: "Empirisme i pensament Lean",
  theory: `
<h3>Idea central</h3>
<p>Scrum es basa en l'<b>empirisme</b> (el coneixement ve de l'experiència i la presa de decisions basada en el que s'observa) i el <b>pensament Lean</b> (reduir desperdicis, centrar-se en l'essencial).</p>
<h3>Els tres pilars</h3>
<ul>
<li><b>Transparència</b>: el procés i el treball han de ser visibles per a qui el fa i per a qui el rep. Sense transparència, la inspecció genera enganys.</li>
<li><b>Inspecció</b>: els artefactes i el progrés cap als objectius s'han d'inspeccionar freqüentment i amb diligència. Sense adaptació, la inspecció és inútil.</li>
<li><b>Adaptació</b>: si un procés es desvia dels límits acceptables, s'ha d'ajustar com abans millor.</li>
</ul>
<h3>Valors de Scrum</h3>
<p><b>Compromís, Enfocament, Obertura, Respecte i Coratge.</b> Aquests valors donen direcció a l'equip Scrum respecte al seu treball i comportament.</p>
<h3>Trampes típiques</h3>
<ul>
<li>Confondre "previsibilitat" amb un dels pilars — no ho és; l'empirisme busca <i>optimitzar</i> la previsibilitat, però els pilars són només 3.</li>
<li>Pensar que la inspecció sense adaptació té valor — la Guia diu explícitament que és inútil.</li>
</ul>`,
  questions: [
    {type:"multi", q:"Quins són els tres pilars de l'empirisme segons la Guia Scrum?",
     opts:["Transparència","Previsibilitat","Inspecció","Adaptació"], correct:[0,2,3],
     exp:["Correcte.","Incorrecte: la previsibilitat és un objectiu que Scrum busca optimitzar, no un pilar.","Correcte.","Correcte."],
     trap:"Els tres pilars són exactament transparència, inspecció i adaptació. Cap més concepte (previsibilitat, planificació...) forma part d'aquesta llista."},
    {type:"single", q:"Segons la Guia, què passa amb la inspecció sense adaptació?",
     opts:["Es considera inútil","Es considera suficient si es documenta bé","És l'única finalitat de la Retrospective","Substitueix la transparència"], correct:0,
     exp:["Correcte: cita literal.","Incorrecte.","Incorrecte: la inspecció passa en tots els esdeveniments, no només a la Retrospective.","Incorrecte: són pilars independents i seqüencials."],
     trap:"Frase gairebé literal de la Guia: 'la inspección sin adaptación se considera inútil'."},
    {type:"single", q:"En quins tres artefactes formals es basen les decisions importants segons la teoria de Scrum?",
     opts:["Product Backlog, Sprint Backlog i Increment","Product Goal, Sprint Goal i Definition of Done","Roadmap, Backlog i Release Plan","Sprint Backlog, Definition of Done i Vision"], correct:0,
     exp:["Correcte: són els tres artefactes formals de Scrum.","Incorrecte: aquests són els 'compromisos' de cada artefacte, no els artefactes en si.","Incorrecte: no són termes formals de la Guia Scrum.","Incorrecte: barreja artefactes amb compromisos."],
     trap:"No confondre 'artefacte' amb el seu 'compromís' associat (p. ex. Product Backlog té el Product Goal com a compromís, però són coses diferents)."},
    {type:"tf", q:"El pensament Lean es centra en reduir desperdicis i centrar-se en l'essencial.",
     opts:["Vertader","Fals"], correct:[0],
     exp:["Correcte: definició literal de la Guia."],
     trap:"No confondre pensament Lean amb metodologies com Kanban o Six Sigma, que no es mencionen a la Guia Scrum."},
    {type:"multi", q:"Quins dels següents són valors de Scrum segons la Guia 2020?",
     opts:["Compromís","Eficiència","Respecte","Coratge"], correct:[0,2,3],
     exp:["Correcte.","Incorrecte: 'eficiència' no és un valor citat a la Guia.","Correcte.","Correcte."],
     trap:"Els 5 valors són: Compromís, Enfocament, Obertura, Respecte i Coratge. Paraules similars com 'eficiència' o 'qualitat' són distractors habituals."},
    {type:"single", q:"Què permet la transparència segons la teoria de Scrum?",
     opts:["L'adaptació directa","La inspecció","La planificació de releases","La creació del Sprint Backlog"], correct:1,
     exp:["Incorrecte: la transparència permet la inspecció, i aquesta permet l'adaptació — és una cadena.","Correcte.","Incorrecte.","Incorrecte."],
     trap:"La cadena lògica és: Transparència → permet la Inspecció → permet l'Adaptació. No saltis directament de transparència a adaptació."},
    {type:"single", q:"Quan es tornen més difícils les adaptacions segons la Guia?",
     opts:["Quan l'equip és massa gran","Quan les persones no estan empoderades o no poden autogestionar-se","Quan el Sprint dura més d'un mes","Quan hi ha massa stakeholders"], correct:1,
     exp:["Incorrecte.","Correcte: cita literal.","Incorrecte.","Incorrecte."],
     trap:"L'empoderament i la capacitat d'autogestió són condicions necessàries per adaptar-se amb eficàcia."},
    {type:"tf", q:"Els valors de Scrum s'aprenen i s'exploren mentre l'equip treballa amb els esdeveniments i artefactes, no com a formació separada.",
     opts:["Vertader","Fals"], correct:[0],
     exp:["Correcte: la Guia ho descriu així literalment."],
     trap:"Els valors no són un mòdul de formació aïllat; sorgeixen de la pràctica diària amb Scrum."},
    {type:"single", q:"Quina afirmació descriu millor l'empirisme?",
     opts:["Planificar tot el treball abans de començar per evitar sorpreses","Prendre decisions basades en el que s'observa i l'experiència","Seguir un pla fix sense revisar-lo","Delegar totes les decisions al Product Owner"], correct:1,
     exp:["Incorrecte: és l'enfocament contrari (Big Design Up Front).","Correcte.","Incorrecte.","Incorrecte: l'empirisme implica tot l'equip Scrum, no només el PO."],
     trap:"Planificar-ho tot per endavant (BDUF) és l'oposat de l'empirisme, un distractor molt habitual."},
    {type:"single", q:"Com ajuda Scrum a la inspecció freqüent dels artefactes i el progrés?",
     opts:["Mitjançant informes setmanals obligatoris","Proporcionant cadència amb els seus cinc esdeveniments","Amb auditories externes trimestrals","Amb un Sprint 0 de preparació"], correct:1,
     exp:["Incorrecte: no existeix aquest requisit a la Guia.","Correcte.","Incorrecte.","Incorrecte: 'Sprint 0' no existeix a Scrum."],
     trap:"'Sprint 0' és un dels distractors més recurrents a l'examen: no existeix a la Guia Scrum."},
    {type:"multi", q:"Quines afirmacions sobre el risc i la complexitat són correctes segons la teoria de Scrum?",
     opts:["Scrum optimitza la previsibilitat i controla el risc mitjançant un enfocament iteratiu i incremental","El risc es controla només mitjançant documentació detallada prèvia","Scrum s'utilitza en entorns complexos on el resultat no es coneix per endavant","Els Sprints més curts poden limitar el risc de cost i esforç"], correct:[0,2,3],
     exp:["Correcte.","Incorrecte: contrari a l'enfocament empíric.","Correcte.","Correcte: cita literal de la Guia."],
     trap:"La documentació detallada prèvia (BDUF) és l'oposat del control de risc empíric que proposa Scrum."}
  ]
},

{
  id: "scrum-team",
  name: "L'Equip Scrum i les seves accountabilities",
  theory: `
<h3>Estructura</h3>
<p>La unitat fonamental és l'<b>Scrum Team</b>: Scrum Master, Product Owner i Developers. No hi ha sub-equips ni jerarquies. És <b>multifuncional</b> i <b>autogestionat</b> (decideix internament qui fa què, quan i com — terme 2020, ja no "auto-organitzat").</p>
<p>Mida habitual: <b>10 persones o menys</b>. Tot l'Scrum Team és responsable de crear un Increment valuós cada Sprint.</p>
<h3>Developers</h3>
<ul>
<li>Creen el Sprint Backlog (el pla).</li>
<li>Incorporen qualitat seguint la Definition of Done.</li>
<li>Adapten el seu pla cada dia cap al Sprint Goal.</li>
<li>Es responsabilitzen mútuament com a professionals.</li>
</ul>
<h3>Product Owner</h3>
<p>Responsable de <b>maximitzar el valor del producte</b>. Gestiona el Product Backlog: desenvolupa i comunica el Product Goal, crea i comunica els elements, els <b>ordena</b> (no "prioritza"), i assegura la seva transparència. Pot delegar el treball però mai la responsabilitat. És <b>una persona, no un comitè</b>.</p>
<h3>Scrum Master</h3>
<p>Responsable d'establir Scrum tal com el defineix la Guia. Serveix a l'equip, al PO i a l'organització. És un "verdader líder que serveix" (servant leader), sense autoritat jeràrquica.</p>`,
  questions: [
    {type:"single", q:"Quantes persones formen habitualment un Scrum Team, segons la Guia?",
     opts:["5 o menys","10 o menys","Entre 15 i 20","No hi ha límit definit"], correct:1,
     exp:["Incorrecte.","Correcte.","Incorrecte.","Incorrecte: la Guia sí que dona una xifra orientativa."],
     trap:"La xifra exacta ('en general 10 o menys') és una dada memoritzable típica d'examen."},
    {type:"multi", q:"Quines són responsabilitats explícites dels Developers segons la Guia?",
     opts:["Crear el Sprint Backlog","Ordenar el Product Backlog","Adherir-se a una Definition of Done","Adaptar el seu pla cada dia cap al Sprint Goal"], correct:[0,2,3],
     exp:["Correcte.","Incorrecte: ordenar el Product Backlog és responsabilitat del Product Owner.","Correcte.","Correcte."],
     trap:"Ordenar el Product Backlog és sempre del PO, mai dels Developers — trampa d'intercanvi de responsabilitats molt freqüent."},
    {type:"single", q:"Qui pot delegar la gestió efectiva del Product Backlog?",
     opts:["Ningú, és intransferible fins i tot el treball","El Product Owner pot delegar el treball, però mai la responsabilitat","El Scrum Master, si el PO no hi és","Els Developers, per consens"], correct:1,
     exp:["Incorrecte: el treball sí es pot delegar.","Correcte: cita literal.","Incorrecte.","Incorrecte."],
     trap:"Distingeix sempre 'delegar el treball' (possible) de 'delegar la responsabilitat' (impossible, sempre és del PO)."},
    {type:"tf", q:"El Product Owner pot ser un comitè de diverses persones per representar millor els stakeholders.",
     opts:["Vertader","Fals"], correct:[1],
     exp:["Incorrecte.","Correcte: 'El Propietario del Producto es una persona, no un comité' — cita literal."],
     trap:"El PO és sempre una única persona, encara que representi moltes veus de negoci."},
    {type:"single", q:"Com ha de procedir algú que vulgui canviar la prioritat d'un element del Product Backlog?",
     opts:["Modificar-lo directament si és urgent","Negociar-ho amb el Product Owner","Demanar-ho als Developers al Daily Scrum","Esperar a la Retrospective"], correct:1,
     exp:["Incorrecte.","Correcte: cita literal de la Guia.","Incorrecte.","Incorrecte."],
     trap:"Qualsevol canvi d'ordre o abast del backlog passa sempre per una negociació amb el PO."},
    {type:"single", q:"Quin terme va introduir la Guia 2020 per substituir 'auto-organitzat'?",
     opts:["Auto-suficient","Autogestionat","Multidisciplinari","Auto-dirigit"], correct:1,
     exp:["Incorrecte.","Correcte.","Incorrecte.","Incorrecte."],
     trap:"'Auto-organitzat' és terminologia 2017, obsoleta. 2020 usa 'autogestionat' (self-managing): decideixen qui, com i on treballar."},
    {type:"multi", q:"Quines de les següents són formes en què el Scrum Master serveix al Product Owner?",
     opts:["Ajudar a trobar tècniques per definir el Product Goal","Decidir l'ordre del Product Backlog en el seu lloc","Ajudar l'equip a entendre la necessitat d'elements clars i concisos","Facilitar la col·laboració amb stakeholders quan es sol·liciti"], correct:[0,2,3],
     exp:["Correcte.","Incorrecte: mai substitueix la decisió del PO.","Correcte.","Correcte."],
     trap:"El SM 'ajuda' i 'facilita', però mai pren decisions que són accountability exclusiva del PO."},
    {type:"single", q:"Qui és responsable de determinar el tamany (sizing) dels elements del Product Backlog?",
     opts:["El Product Owner","El Scrum Master","Els Developers","Els stakeholders"], correct:2,
     exp:["Incorrecte: el PO pot influir, però no decideix.","Incorrecte.","Correcte: qui fa el treball és qui l'estima.","Incorrecte."],
     trap:"El PO 'pot influir ajudant-los a entendre i seleccionar millors alternatives', però la decisió final és dels Developers."},
    {type:"tf", q:"Dins de l'Scrum Team hi ha sub-equips diferenciats, per exemple un equip de QA i un altre de desenvolupament.",
     opts:["Vertader","Fals"], correct:[1],
     exp:["Incorrecte.","Correcte: la Guia diu explícitament que no hi ha sub-equips ni jerarquies dins l'Scrum Team."],
     trap:"Frase literal: 'no hi ha sub-equips ni jerarquies'. Qualsevol opció que suggereixi sub-divisions internes és incorrecta."},
    {type:"single", q:"Quina és la responsabilitat central i única del Scrum Master segons la Guia?",
     opts:["Assegurar que l'equip compleixi terminis","Ser responsable d'establir Scrum tal com es defineix a la Guia","Gestionar el pressupost del projecte","Assignar tasques als Developers"], correct:1,
     exp:["Incorrecte.","Correcte: cita literal.","Incorrecte: no és una funció Scrum.","Incorrecte: els Developers s'auto-assignen tasques."],
     trap:"El SM no assigna feina; això trencaria l'autogestió de l'equip."},
    {type:"single", q:"Quan diversos Scrum Teams treballen en el mateix producte, què han de compartir obligatòriament?",
     opts:["El mateix Scrum Master per a tots els equips","El mateix Product Goal, Product Backlog i Product Owner","El mateix Sprint Backlog per a tots","Els mateixos Developers rotant entre equips"], correct:1,
     exp:["Incorrecte: cada equip pot tenir el seu propi SM.","Correcte: cita literal.","Incorrecte: cada equip té el seu propi Sprint Backlog.","Incorrecte."],
     trap:"Regla d''un producte, un Product Backlog, un Product Owner' encara que hi hagi múltiples equips Scrum treballant-hi."},
    {type:"multi", q:"Quines afirmacions sobre el Product Owner són correctes?",
     opts:["És responsable de maximitzar el valor del producte","Ha de comptar amb l'aprovació dels Developers per canviar l'ordre del backlog","Pot representar les necessitats de moltes parts interessades","Ha de ser respectat per tota l'organització perquè les seves decisions siguin efectives"], correct:[0,2,3],
     exp:["Correcte.","Incorrecte: el PO ordena el backlog sense necessitar aprovació dels Developers.","Correcte.","Correcte: cita literal sobre el respecte organitzacional."],
     trap:"El PO decideix l'ordre unilateralment; no necessita 'aprovació' dels Developers, encara que sí col·labori amb ells."}
  ]
},

{
  id: "esdeveniments",
  name: "Esdeveniments de Scrum",
  theory: `
<h3>El Sprint</h3>
<p>Contenidor de tots els esdeveniments. Durada fixa d'<b>un mes o menys</b>. Un nou Sprint comença immediatament després de l'anterior. Només el <b>Product Owner</b> té autoritat per cancel·lar-lo.</p>
<h3>Sprint Planning</h3>
<p>Tres temes: <b>Why</b> (per què és valuós), <b>What</b> (què es pot fer), <b>How</b> (com es farà). Màxim <b>8 hores</b> per un Sprint d'un mes.</p>
<h3>Daily Scrum</h3>
<p>Màxim <b>15 minuts</b>, sempre — no escala amb la durada del Sprint. És per i per als Developers; si el PO o el SM treballen activament en el Sprint Backlog, hi participen com a Developers.</p>
<h3>Sprint Review</h3>
<p>Màxim <b>4 hores</b> per un Sprint d'un mes. Inspecciona el resultat i mai és una "porta" per alliberar valor — un Increment pot lliurar-se abans que acabi el Sprint.</p>
<h3>Sprint Retrospective</h3>
<p>Màxim <b>3 hores</b> per un Sprint d'un mes. Conclou el Sprint. Hi participa tot l'Scrum Team, PO inclòs, com un membre més.</p>`,
  questions: [
    {type:"single", q:"Què significa que un esdeveniment tingui un 'timebox'?",
     opts:["Té una durada mínima obligatòria","Té una durada màxima fixada per endavant","Es fa sempre a la mateixa hora","Ha d'acabar abans d'una data límit externa"], correct:1,
     exp:["Incorrecte.","Correcte.","Incorrecte: confon timebox amb horari fix.","Incorrecte: confon amb deadline."],
     trap:"Un timebox mai exigeix un mínim — pot acabar abans, mai després del màxim."},
    {type:"single", q:"Quin és el timebox màxim del Daily Scrum, independentment de la durada del Sprint?",
     opts:["30 minuts","15 minuts, sempre","1 hora per Sprints d'un mes","Escala proporcionalment amb la durada del Sprint"], correct:1,
     exp:["Incorrecte.","Correcte.","Incorrecte.","Incorrecte: és l'única excepció que NO escala."],
     trap:"Planning, Review i Retro escalen amb la durada del Sprint; el Daily Scrum sempre és 15 min màxim."},
    {type:"multi", q:"Quins tres temes s'aborden al Sprint Planning?",
     opts:["Per què és valuós aquest Sprint","Qui assistirà al Sprint Review","Què es pot fer aquest Sprint","Com es realitzarà el treball escollit"], correct:[0,2,3],
     exp:["Correcte.","Incorrecte.","Correcte.","Correcte."],
     trap:"El 'Why' és l'afegit de la Guia 2020; qualsevol resposta que l'ometi és incompleta."},
    {type:"single", q:"Qui té l'autoritat per cancel·lar un Sprint?",
     opts:["El Scrum Master","Tot l'Scrum Team per consens","Només el Product Owner","Els stakeholders principals"], correct:2,
     exp:["Incorrecte.","Incorrecte.","Correcte: cita literal.","Incorrecte."],
     trap:"Decisió unilateral i exclusiva del PO — no requereix consens de ningú més."},
    {type:"tf", q:"El Sprint Review és una porta d'aprovació formal per alliberar l'Increment a producció.",
     opts:["Vertader","Fals"], correct:[1],
     exp:["Incorrecte.","Correcte: la Guia ho nega explícitament."],
     trap:"És una sessió de treball d'inspecció i adaptació, no un 'gate' d'aprovació estil Waterfall."},
    {type:"single", q:"Quina és la durada màxima de la Sprint Retrospective per un Sprint d'un mes?",
     opts:["1 hora","2 hores","3 hores","4 hores"], correct:2,
     exp:["Incorrecte.","Incorrecte.","Correcte.","Incorrecte (això és la Review)."],
     trap:"Ordre a memoritzar: Planning 8h, Review 4h, Retro 3h (per Sprint d'un mes)."},
    {type:"single", q:"Qui participa al Daily Scrum?",
     opts:["Tot l'Scrum Team amb el mateix pes de veu","Només els Developers; PO i SM només si treballen com Developers","Només el Product Owner i els stakeholders","El Scrum Master en solitari per informar l'organització"], correct:1,
     exp:["Incorrecte.","Correcte.","Incorrecte.","Incorrecte."],
     trap:"És un esdeveniment intern dels Developers. Si PO/SM hi participen és perquè estan fent treball del Sprint Backlog, no per rol de gestió."},
    {type:"single", q:"Quan comença un nou Sprint?",
     opts:["Una setmana després que acabi l'anterior, per revisar resultats","Immediatament després que acabi l'anterior","Quan el Product Owner ho decideixi discrecionalment","Després d'un 'Sprint 0' de preparació"], correct:1,
     exp:["Incorrecte.","Correcte.","Incorrecte.","Incorrecte: 'Sprint 0' no existeix."],
     trap:"No hi ha buit entre Sprints ni un 'Sprint 0' de preparació — un dels distractors més recurrents."},
    {type:"multi", q:"Quines afirmacions sobre el Sprint són correctes?",
     opts:["Té una durada fixa d'un mes o menys","Durant el Sprint es poden fer canvis que posin en perill el Sprint Goal si el PO ho aprova","La qualitat no disminueix durant el Sprint","L'abast es pot clarificar i renegociar amb el PO a mesura que s'aprèn més"], correct:[0,2,3],
     exp:["Correcte.","Incorrecte: mai es posa en perill el Sprint Goal, ni amb aprovació del PO.","Correcte.","Correcte."],
     trap:"Cap canvi durant el Sprint pot posar en perill el Sprint Goal, sense excepcions, ni tan sols amb 'permís' del PO."},
    {type:"single", q:"Quin és el propòsit principal del Daily Scrum?",
     opts:["Informar el Scrum Master de l'estat de cada persona","Inspeccionar el progrés cap al Sprint Goal i adaptar el Sprint Backlog","Assignar noves tasques als Developers per part del PO","Revisar l'Increment amb els stakeholders"], correct:1,
     exp:["Incorrecte.","Correcte: cita literal.","Incorrecte.","Incorrecte: això és el Sprint Review."],
     trap:"No és un 'status report' cap a un cap; és inspecció i adaptació feta pel mateix equip, per a ell mateix."},
    {type:"single", q:"Un Sprint de dues setmanes: quin és el timebox màxim aproximat del Sprint Planning?",
     opts:["8 hores, igual que en un Sprint d'un mes","Proporcionalment menor, normalment més curt","15 minuts","No aplica Sprint Planning en sprints curts"], correct:1,
     exp:["Incorrecte: 8h és el màxim NOMÉS per sprints d'un mes.","Correcte: 'Para sprints más cortos, el evento suele ser más corto'.","Incorrecte.","Incorrecte."],
     trap:"La xifra de 8h és específica per sprints d'un mes; en sprints més curts el timebox s'escurça proporcionalment (sense un nombre exacte fixat per la Guia)."},
    {type:"tf", q:"La Sprint Retrospective és exclusivament per als Developers; el Product Owner no hi participa.",
     opts:["Vertader","Fals"], correct:[1],
     exp:["Incorrecte.","Correcte: tot l'Scrum Team hi participa, PO inclòs, com un membre més."],
     trap:"El PO no queda fora de cap esdeveniment intern de l'equip — participa igual que Developers i SM."}
  ]
},

{
  id: "artefactes",
  name: "Artefactes i els seus compromisos",
  theory: `
<h3>Els tres artefactes i els seus compromisos</h3>
<table style="width:100%; border-collapse:collapse; font-size:14px;">
<tr><th style="text-align:left;">Artefacte</th><th style="text-align:left;">Compromís</th></tr>
<tr><td>Product Backlog</td><td>Product Goal</td></tr>
<tr><td>Sprint Backlog</td><td>Sprint Goal</td></tr>
<tr><td>Increment</td><td>Definition of Done</td></tr>
</table>
<h3>Product Backlog</h3>
<p>Llista <b>emergent i ordenada</b> (no "priorizada") del que cal per millorar el producte. Única font de treball de l'Scrum Team.</p>
<h3>Product Goal</h3>
<p>Objectiu a <b>llarg termini</b> per l'Scrum Team. S'ha de complir (o abandonar) abans d'assumir el següent.</p>
<h3>Sprint Backlog</h3>
<p>Pla <b>per i per als Developers</b>: Sprint Goal (why) + elements seleccionats (what) + pla d'entrega (how). S'actualitza durant tot el Sprint.</p>
<h3>Increment</h3>
<p>Pas concret cap al Product Goal. Es poden crear diversos Increments dins d'un mateix Sprint. Pot lliurar-se abans que acabi el Sprint. Un element només forma part de l'Increment si compleix la <b>Definition of Done</b>.</p>
<h3>Definition of Done</h3>
<p>Descripció formal de l'estat de "fet". Si un element no la compleix, <b>torna al Product Backlog</b> — mai es presenta ni es lliura.</p>`,
  questions: [
    {type:"single", q:"Quin compromís està associat al Product Backlog?",
     opts:["Sprint Goal","Definition of Done","Product Goal","Increment"], correct:2,
     exp:["Incorrecte.","Incorrecte.","Correcte.","Incorrecte: l'Increment és un artefacte, no un compromís."],
     trap:"Empareja sempre: Product Backlog→Product Goal, Sprint Backlog→Sprint Goal, Increment→Definition of Done."},
    {type:"single", q:"Com descriu la Guia el Product Backlog?",
     opts:["Una llista fixa i priorizada de requisits","Una llista emergent i ordenada del que cal per millorar el producte","Un document d'abast aprovat pels stakeholders","Un pla de release amb dates fixes"], correct:1,
     exp:["Incorrecte.","Correcte.","Incorrecte.","Incorrecte."],
     trap:"Paraules clau textuals: 'emergent' i 'ordenada' — mai 'fixa' ni 'priorizada'."},
    {type:"tf", q:"Es pot considerar un element com a part de l'Increment encara que no compleixi la Definition of Done, si el PO ho aprova.",
     opts:["Vertader","Fals"], correct:[1],
     exp:["Incorrecte.","Correcte: sense excepcions, ni amb aprovació del PO."],
     trap:"La DoD no és negociable per ningú, ni tan sols pel PO — és un estàndard de qualitat objectiu."},
    {type:"single", q:"Què passa amb un element del Product Backlog que no compleix la Definition of Done al final del Sprint?",
     opts:["Es lliura amb una nota d'excepció","Es presenta al Sprint Review com 'gairebé fet'","Torna al Product Backlog per consideració futura","S'elimina definitivament"], correct:2,
     exp:["Incorrecte.","Incorrecte: ni tan sols es presenta.","Correcte.","Incorrecte."],
     trap:"'Gairebé fet' no existeix a Scrum: un element està Done o no ho està."},
    {type:"multi", q:"Quines afirmacions sobre l'Increment són correctes?",
     opts:["Es pot lliurar als stakeholders abans que acabi el Sprint","Només es pot crear un Increment per Sprint","Ha de complir la Definition of Done per considerar-se part de l'Increment","El Sprint Review és l'única oportunitat de lliurar valor"], correct:[0,2],
     exp:["Correcte.","Incorrecte: se'n poden crear diversos dins un mateix Sprint.","Correcte.","Incorrecte: la Guia ho nega explícitament."],
     trap:"Dues trampes juntes: creure que només hi ha un Increment per Sprint, i creure que el Sprint Review és l'únic moment de lliurar valor."},
    {type:"single", q:"Quin és l'objectiu a llarg termini per a l'Scrum Team, situat dins el Product Backlog?",
     opts:["El Sprint Goal","El Product Goal","La Definition of Done","El Release Plan"], correct:1,
     exp:["Incorrecte: és l'objectiu del Sprint, a curt termini.","Correcte.","Incorrecte.","Incorrecte: no és un artefacte formal de la Guia."],
     trap:"Product Goal = llarg termini; Sprint Goal = curt termini (només aquell Sprint)."},
    {type:"single", q:"Qui crea el Sprint Backlog?",
     opts:["El Product Owner en solitari","Els Developers","Tot l'Scrum Team col·lectivament durant el Sprint Planning, sent un pla per i per als Developers","El Scrum Master"], correct:2,
     exp:["Incorrecte.","Parcialment cert però incomplet — la resposta més precisa inclou el context de col·laboració.","Correcte: es crea durant el Planning col·laborativament, però és 'un pla por y para los desarrolladores'.","Incorrecte."],
     trap:"El Sprint Backlog sorgeix de la col·laboració de tot l'Scrum Team al Planning, però és propietat operativa dels Developers, que l'actualitzen durant el Sprint."},
    {type:"tf", q:"El Sprint Backlog és un document estàtic que no canvia un cop començat el Sprint.",
     opts:["Vertader","Fals"], correct:[1],
     exp:["Incorrecte.","Correcte: 's'actualitza al llarg del Sprint a mesura que s'aprèn més'."],
     trap:"El Sprint Backlog és una 'imagen muy visible y en tiempo real' — dinàmic, no estàtic."},
    {type:"single", q:"Si la Definition of Done forma part dels estàndards de l'organització, què han de fer els Scrum Teams?",
     opts:["Poden ignorar-la si el seu producte és diferent","Han de seguir-la com a mínim","És opcional per a equips experimentats","Només s'aplica al primer Sprint"], correct:1,
     exp:["Incorrecte.","Correcte: cita literal.","Incorrecte.","Incorrecte."],
     trap:"Si hi ha estàndard organitzatiu de DoD, és un mínim obligatori per a tots els equips, no una opció."},
    {type:"single", q:"Quan es crea un Increment segons la Guia?",
     opts:["Quan el PO l'aprova al Sprint Review","En el moment en què un element del Product Backlog compleix la Definition of Done","Al final de cada Sprint, sempre","Quan els stakeholders el validen"], correct:1,
     exp:["Incorrecte.","Correcte: cita literal.","Incorrecte: es pot crear en qualsevol moment del Sprint, no només al final.","Incorrecte."],
     trap:"La creació de l'Increment no depèn d'una aprovació humana — depèn únicament de complir la DoD."},
    {type:"multi", q:"Quins atributs es van afegir o reforçar a la Guia 2020 respecte als artefactes?",
     opts:["El concepte de Product Goal com a nou compromís","L'eliminació completa del Product Backlog","Cada artefacte té ara un 'compromís' associat explícit","La Definition of Done ja no és necessària per l'Increment"], correct:[0,2],
     exp:["Correcte.","Incorrecte: mai es va eliminar.","Correcte.","Incorrecte: segueix sent obligatòria."],
     trap:"La novetat clau de 2020 és formalitzar els 'compromisos' (Product Goal, Sprint Goal, DoD) per a cada artefacte."}
  ]
},

{
  id: "definition-of-done",
  name: "Definition of Done",
  theory: `
<h3>Què és</h3>
<p>Descripció formal de l'estat de l'Increment quan compleix les mesures de qualitat requerides pel producte. És el <b>compromís de l'Increment</b>.</p>
<h3>Regles clau</h3>
<ul>
<li>Un element de treball no es pot considerar part d'un Increment si no compleix la DoD.</li>
<li>Si no la compleix, <b>torna al Product Backlog</b> — no es lliura ni es presenta al Sprint Review.</li>
<li>Si la DoD forma part dels estàndards organitzatius, tots els Scrum Teams l'han de complir <b>com a mínim</b>.</li>
<li>Si no hi ha estàndard organitzatiu, l'Scrum Team crea una DoD adequada pel producte.</li>
<li>Si diversos equips treballen en el mateix producte, han de <b>definir i complir mútuament</b> la mateixa DoD.</li>
<li>Els Developers s'han d'ajustar a la DoD — no és negociable amb el PO ni amb stakeholders.</li>
</ul>
<h3>Trampa freqüent</h3>
<p>Confondre la DoD amb els "criteris d'acceptació" d'un item concret — la DoD és transversal a tot l'Increment, no específica d'un sol Product Backlog Item.</p>`,
  questions: [
    {type:"single", q:"Què és la Definition of Done?",
     opts:["Els criteris d'acceptació d'un item concret","Una descripció formal de l'estat de l'Increment quan compleix les mesures de qualitat requerides","Un document firmat pel PO al final del Sprint","Una llista de tasques pendents"], correct:1,
     exp:["Incorrecte: és un concepte diferent i més ampli que els criteris d'un item.","Correcte: definició literal.","Incorrecte.","Incorrecte."],
     trap:"La DoD no és el mateix que els 'criteris d'acceptació' d'un PBI concret — la DoD aplica a tot l'Increment."},
    {type:"tf", q:"Si diversos Scrum Teams treballen sobre el mateix producte, cada equip pot definir la seva pròpia Definition of Done sense coordinar-se.",
     opts:["Vertader","Fals"], correct:[1],
     exp:["Incorrecte.","Correcte: han de definir i complir mútuament la mateixa DoD."],
     trap:"En entorns escalats amb un sol producte, la DoD ha de ser compartida i coherent entre tots els equips."},
    {type:"single", q:"Si l'organització té un estàndard de qualitat per a tots els seus productes, com afecta a la DoD d'un Scrum Team?",
     opts:["El Scrum Team pot ignorar-lo si té la seva pròpia DoD","El Scrum Team ha de complir-lo com a mínim","Només s'aplica al primer Increment","No té relació amb la DoD de l'equip"], correct:1,
     exp:["Incorrecte.","Correcte.","Incorrecte.","Incorrecte."],
     trap:"L'estàndard organitzatiu és un mínim, mai un màxim ni una opció descartable."},
    {type:"single", q:"Qui ha de complir la Definition of Done?",
     opts:["Només el Product Owner, en validar l'Increment","Els Developers, en construir l'Increment","Els stakeholders, en revisar-lo al Sprint Review","El Scrum Master, en tancar el Sprint"], correct:1,
     exp:["Incorrecte.","Correcte: 'Los desarrolladores deben ajustarse a la definición de Hecho'.","Incorrecte.","Incorrecte."],
     trap:"La responsabilitat de complir la DoD és dels Developers, no una validació posterior d'algú altre."},
    {type:"tf", q:"Un Product Backlog Item que no compleix la Definition of Done es pot presentar al Sprint Review si s'explica el motiu.",
     opts:["Vertader","Fals"], correct:[1],
     exp:["Incorrecte.","Correcte: la Guia diu que ni tan sols es pot presentar al Sprint Review."],
     trap:"'Ni siquiera presentar en la revisión de Sprint' és una frase gairebé literal — cap excepció."},
    {type:"single", q:"Què ha de fer un Scrum Team si no existeix una Definition of Done com a estàndard organitzatiu?",
     opts:["Treballar sense DoD fins que l'organització en defineixi una","Crear una DoD adequada per al seu producte","Utilitzar la DoD d'un altre equip sense adaptar-la","Preguntar als stakeholders quina DoD volen"], correct:1,
     exp:["Incorrecte: la DoD és sempre obligatòria.","Correcte.","Incorrecte.","Incorrecte."],
     trap:"La DoD mai és opcional. Si no hi ha estàndard, l'equip n'ha de crear una pròpia."},
    {type:"single", q:"Quin dels següents és el compromís (commitment) associat específicament a l'Increment?",
     opts:["Product Goal","Sprint Goal","Definition of Done","Release Plan"], correct:2,
     exp:["Incorrecte.","Incorrecte.","Correcte.","Incorrecte: no és un artefacte ni compromís formal de la Guia."],
     trap:"Cadascun dels tres artefactes té exactament un compromís: no barregis els parells."},
    {type:"tf", q:"La Definition of Done pot variar entre Sprints d'un mateix producte segons convingui al PO.",
     opts:["Vertader","Fals"], correct:[1],
     exp:["Incorrecte.","Correcte: la DoD és un estàndard de qualitat estable pel producte, no una variable negociable Sprint a Sprint segons convingui."],
     trap:"La DoD pot evolucionar amb el temps (millorar-se), però no es 'flexibilitza' puntualment per conveniència en un Sprint concret."},
    {type:"single", q:"Quina relació hi ha entre la Definition of Done i la transparència?",
     opts:["Cap relació directa","La DoD crea transparència proporcionant una comprensió compartida de què significa 'fet'","La DoD substitueix la necessitat de transparència","La DoD només afecta la comunicació amb stakeholders externs"], correct:1,
     exp:["Incorrecte.","Correcte: cita literal.","Incorrecte.","Incorrecte."],
     trap:"La DoD és, per definició, un mecanisme de transparència compartida per a tot l'Scrum Team, no només cap enfora."},
    {type:"single", q:"Un Developer creu que un element ja es pot considerar 'fet' encara que li falti passar les proves automatitzades incloses a la DoD del producte. Què hauria de fer l'equip?",
     opts:["Acceptar-ho igualment si el PO no s'hi oposa","No considerar-lo part de l'Increment fins complir la DoD íntegrament","Presentar-ho al Sprint Review com a 'parcialment complet'","Deixar-ho a criteri individual de cada Developer"], correct:1,
     exp:["Incorrecte: la DoD no és negociable ni tan sols amb el PO.","Correcte.","Incorrecte: no existeix la categoria 'parcialment complet'.","Incorrecte: la DoD és un estàndard de tot l'equip, no individual."],
     trap:"Cap component de la DoD és opcional ni negociable puntualment, encara que sembli menor."},
    {type:"tf", q:"Si un producte té diversos Scrum Teams treballant-hi, cadascun pot tenir el seu propi nivell de qualitat sempre que compleixi el mínim intern del seu equip.",
     opts:["Vertader","Fals"], correct:[1],
     exp:["Incorrecte.","Correcte: han de definir i complir mútuament la mateixa DoD quan comparteixen producte."],
     trap:"'Nivell de qualitat propi de cada equip' és incorrecte quan es comparteix un únic producte: la DoD ha de ser comuna."}
  ]
},

{
  id: "autogestio",
  name: "Equips autogestionats",
  theory: `
<h3>Definició (Guia 2020)</h3>
<p>Els equips Scrum són <b>autogestionats</b> (self-managing): decideixen internament <b>qui</b> fa el treball, <b>com</b> es fa i <b>on</b> es fa. Aquest terme va substituir "auto-organitzat" (self-organizing) de la versió 2017.</p>
<h3>Multifuncionalitat</h3>
<p>Els membres tenen col·lectivament totes les habilitats necessàries per crear valor en cada Sprint, compartint-les o adquirint-les segons calgui.</p>
<h3>Rol del Scrum Master</h3>
<p>El SM capacita els membres de l'equip en autogestió i multifuncionalitat — no els gestiona ni els assigna tasques.</p>
<h3>Trampa freqüent</h3>
<p>Autogestió no significa absència de rendició de comptes: els Developers "es responsabilitzen mútuament com a professionals".</p>`,
  questions: [
    {type:"single", q:"Què decideixen internament els equips autogestionats segons la Guia 2020?",
     opts:["Qui fa el treball, com i on es fa","Quant es cobra per cada tasca","Qui és el Product Owner","Quan comença i acaba l'organització el projecte"], correct:0,
     exp:["Correcte.","Incorrecte.","Incorrecte: el PO no és triat pels Developers.","Incorrecte."],
     trap:"La fórmula exacta és 'quién, cómo y dónde trabajar' — memoritza-la literalment."},
    {type:"tf", q:"'Autogestionat' i 'auto-organitzat' són sinònims intercambiables a la Guia Scrum 2020.",
     opts:["Vertader","Fals"], correct:[1],
     exp:["Incorrecte.","Correcte: 'auto-organitzat' és terme de la versió 2017, substituït per 'autogestionat' el 2020."],
     trap:"Trampa de vocabulari molt freqüent: usar el terme antic (2017) com si fos l'actual."},
    {type:"single", q:"Què vol dir que un Scrum Team sigui multifuncional?",
     opts:["Que cada membre sap fer totes les tasques per si sol","Que col·lectivament tenen totes les habilitats necessàries per crear valor cada Sprint","Que treballen en diversos productes alhora","Que roten de rol cada Sprint"], correct:1,
     exp:["Incorrecte: no cal que cada individu sàpiga fer-ho tot.","Correcte.","Incorrecte.","Incorrecte."],
     trap:"Multifuncional és una propietat de l'equip com a conjunt, no una exigència individual de cada membre."},
    {type:"single", q:"Quin és el paper del Scrum Master respecte a l'autogestió de l'equip?",
     opts:["Assignar les tasques diàries per assegurar eficiència","Capacitar els membres de l'equip en autogestió i multifuncionalitat","Decidir qui forma part de l'equip","Substituir a un Developer si falta personal"], correct:1,
     exp:["Incorrecte: trencaria l'autogestió.","Correcte: cita literal.","Incorrecte.","Incorrecte."],
     trap:"Qualsevol opció on el SM 'decideix pel equip' trenca el principi d'autogestió."},
    {type:"tf", q:"L'autogestió implica que ningú es responsabilitza de res concret dins l'equip.",
     opts:["Vertader","Fals"], correct:[1],
     exp:["Incorrecte.","Correcte: els Developers 'se responsabilizan mutuamente como profesionales' — hi ha rendició de comptes."],
     trap:"Autogestió no és absència de responsabilitat individual ni col·lectiva."},
    {type:"single", q:"Quan un Scrum Team es torna massa gran, què recomana la Guia?",
     opts:["Afegir més Scrum Masters per coordinar","Considerar reorganitzar-se en diversos equips cohesionats centrats en el mateix producte","Dividir el Product Backlog en diversos backlogs paral·lels","Crear un equip de coordinació superior"], correct:1,
     exp:["Incorrecte.","Correcte.","Incorrecte: sempre ha d'existir un únic Product Backlog.","Incorrecte: no existeix aquesta figura a la Guia."],
     trap:"La solució a l'escalat és més equips cohesionats amb el mateix Product Goal, Product Backlog i PO — mai més backlogs ni jerarquies noves."},
    {type:"single", q:"Per què Scrum utilitza 'desarrolladores' com a terme general per a totes les persones que fan el treball?",
     opts:["Per excloure altres disciplines com investigadors o dissenyadors","Per simplificar, sense excloure ningú que aporti valor al producte","Perquè només aplica a equips de software","Per diferenciar-los legalment del Product Owner"], correct:1,
     exp:["Incorrecte: és el contrari de la intenció.","Correcte: cita literal del propòsit de la Guia.","Incorrecte.","Incorrecte."],
     trap:"'Si obtens valor de Scrum, considera't inclòs' — la Guia és explícita en no limitar el terme a programadors."},
    {type:"tf", q:"Els Developers poden decidir dividir-se en sub-equips estables per especialitat (frontend, backend) dins del mateix Scrum Team.",
     opts:["Vertader","Fals"], correct:[1],
     exp:["Incorrecte.","Correcte: la Guia prohibeix explícitament sub-equips dins d'un Scrum Team."],
     trap:"Encara que cada persona tingui especialitats, no es formalitzen sub-equips permanents dins l'Scrum Team."},
    {type:"single", q:"Quina és la relació entre autogestió i ritme sostenible?",
     opts:["No hi ha relació entre ambdós conceptes","Treballar en Sprints a un ritme sostenible millora l'enfocament i la consistència de l'equip autogestionat","L'autogestió exigeix hores extra per complir el Sprint Goal","El ritme sostenible només aplica al Scrum Master"], correct:1,
     exp:["Incorrecte.","Correcte: cita literal.","Incorrecte: contrari a l'esperit de la Guia.","Incorrecte."],
     trap:"El 'ritme sostenible' és un concepte explícit de la Guia associat al benestar de l'equip, no a treballar més hores."}
  ]
},

{
  id: "forecasting",
  name: "Forecasting i planificació de releases",
  theory: `
<h3>Pràctiques mencionades</h3>
<p>La Guia cita com a útils els <b>burn-downs, burn-ups i flujos acumulativos (cumulative flow)</b> per pronosticar el progrés. Aquestes eines <b>no substitueixen la importància de l'empirisme</b>.</p>
<h3>Idea clau</h3>
<p>En entorns complexos es desconeix què passarà; només allò que ja ha succeït es pot utilitzar per prendre decisions de futur (mirada enrere basada en dades reals, no en estimacions teòriques).</p>
<h3>Planificació de releases</h3>
<p>La Guia Scrum no prescriu un procés formal de "release planning", però les Professional Scrum Competencies remarquen que el forecasting s'ha de basar en dades empíriques (velocitat real, rendiment passat) i comunicar-se com a rang de probabilitat, no com a compromís fix.</p>
<h3>Trampa freqüent</h3>
<p>Presentar un forecast com una data de compromís absolut en lloc d'una previsió basada en probabilitats i dades històriques.</p>`,
  questions: [
    {type:"multi", q:"Quines pràctiques cita la Guia Scrum com a útils per al forecasting?",
     opts:["Diagrames de Gantt","Burn-down charts","Burn-up charts","Flujos acumulatius (cumulative flow)"], correct:[1,2,3],
     exp:["Incorrecte: Gantt no apareix a la Guia Scrum.","Correcte.","Correcte.","Correcte."],
     trap:"Gantt és un distractor clàssic de metodologia tradicional, no forma part del vocabulari de la Guia Scrum."},
    {type:"tf", q:"Les eines de forecasting com el burn-down substitueixen la importància de l'empirisme.",
     opts:["Vertader","Fals"], correct:[1],
     exp:["Incorrecte.","Correcte: la Guia ho nega explícitament — no la substitueixen."],
     trap:"Són eines de suport; la decisió empírica real segueix sent primordial per sobre de qualsevol gràfic."},
    {type:"single", q:"Segons la teoria de Scrum, en quins entorns es desconeix per endavant què succeirà?",
     opts:["Entorns simples","Entorns complexos","Entorns predictibles","Entorns amb requisits fixos"], correct:1,
     exp:["Incorrecte.","Correcte.","Incorrecte.","Incorrecte."],
     trap:"Scrum s'orienta a problemes complexos, on el resultat futur és incert per definició."},
    {type:"single", q:"Quina és la base correcta per fer un forecast fiable, segons l'enfocament empíric?",
     opts:["Una estimació teòrica feta abans de començar el projecte","Dades sobre el que ja ha succeït (rendiment passat)","L'opinió del stakeholder més sènior","Un pla detallat aprovat a l'inici"], correct:1,
     exp:["Incorrecte.","Correcte: 'solo lo que ya ha sucedido se puede utilizar para la toma de decisiones con vistas a futuro'.","Incorrecte.","Incorrecte: contrari a l'enfocament empíric (BDUF)."],
     trap:"Únicament les dades reals passades són vàlides per projectar el futur en un entorn empíric."},
    {type:"tf", q:"Un forecast de release ha de comunicar-se com un compromís fix i inamovible.",
     opts:["Vertader","Fals"], correct:[1],
     exp:["Incorrecte.","Correcte: un forecast és una previsió basada en probabilitat i dades, no un compromís absolut."],
     trap:"Presentar un forecast com a data fixa contradiu l'enfocament probabilístic i empíric que promou Scrum."},
    {type:"single", q:"Quin factor és clau perquè els Developers puguin fer pronòstics de Sprint més segurs?",
     opts:["Conèixer el pressupost total del projecte","Conèixer el seu rendiment passat, capacitat futura i la seva Definition of Done","Tenir l'aprovació prèvia de tots els stakeholders","Disposar d'un pla de release aprovat per la direcció"], correct:1,
     exp:["Incorrecte.","Correcte: cita literal de la secció de Sprint Planning.","Incorrecte.","Incorrecte."],
     trap:"El forecast de Sprint es basa en dades pròpies de l'equip (rendiment passat, DoD), no en factors externs com pressupostos o aprovacions."},
    {type:"single", q:"Quantes vegades, com a mínim, garanteixen els Sprints la inspecció i adaptació del progrés cap a un Product Goal?",
     opts:["Una vegada per trimestre","Una vegada al mes, com a mínim, atès que el Sprint dura un mes o menys","Una vegada per setmana obligatòriament","Només al final del producte"], correct:1,
     exp:["Incorrecte.","Correcte: cita literal.","Incorrecte: depèn de la durada real del Sprint escollida per l'equip.","Incorrecte."],
     trap:"La freqüència mínima ve donada pel límit superior del Sprint (un mes), no per una cadència setmanal obligatòria."},
    {type:"tf", q:"Quan l'horitzó d'un Sprint és massa llarg, el Sprint Goal pot tornar-se obsolet i el risc pot augmentar.",
     opts:["Vertader","Fals"], correct:[0],
     exp:["Correcte: cita literal de la secció 'El Sprint'."],
     trap:"Sprints més llargs augmenten la incertesa acumulada abans de la següent inspecció formal."},
    {type:"single", q:"Quin és un motiu per utilitzar Sprints més curts, segons la Guia?",
     opts:["Redueixen la burocràcia documental","Generen més cicles d'aprenentatge i limiten el risc de cost i esforç a un període més petit","Eliminen la necessitat de Sprint Review","Redueixen el nombre de Product Backlog Items necessaris"], correct:1,
     exp:["Incorrecte.","Correcte: cita literal.","Incorrecte.","Incorrecte."],
     trap:"Els Sprints curts no eliminen esdeveniments — simplement limiten el risc i acceleren l'aprenentatge empíric."}
  ]
},

{
  id: "visio-valor",
  name: "Visió i valor de producte",
  theory: `
<h3>Producte</h3>
<p>Un producte és un <b>vehicle per lliurar valor</b>. Té un límit clar, stakeholders coneguts, usuaris o clients ben definits. Pot ser un servei, un producte físic o quelcom més abstracte.</p>
<h3>Product Goal</h3>
<p>Descriu un <b>estat futur</b> del producte que serveix d'objectiu per a l'Scrum Team. És l'objectiu a <b>llarg termini</b>; la resta del Product Backlog emergeix per definir "què" complirà aquest objectiu.</p>
<h3>Maximitzar el valor</h3>
<p>El Product Owner és responsable de maximitzar el valor del producte resultant del treball de l'Scrum Team — la manera concreta de fer-ho varia àmpliament entre organitzacions.</p>
<h3>Trampa freqüent</h3>
<p>Confondre "Product Goal" amb un pla de releases o un roadmap detallat — el Product Goal és un objectiu de futur, no un pla d'execució amb dates.</p>`,
  questions: [
    {type:"single", q:"Com defineix la Guia un 'producte'?",
     opts:["Un projecte amb data d'inici i fi definides","Un vehicle per lliurar valor, amb límits clars i usuaris/clients definits","Un conjunt de funcionalitats de software exclusivament","Un document de requisits aprovat"], correct:1,
     exp:["Incorrecte.","Correcte: definició literal.","Incorrecte: la Guia diu explícitament que pot ser més abstracte que software.","Incorrecte."],
     trap:"Un producte no és un 'projecte' — Scrum evita aquest terme; és un vehicle continu de valor."},
    {type:"single", q:"Què descriu el Product Goal?",
     opts:["Un pla de releases amb dates concretes","Un estat futur del producte que serveix d'objectiu per l'Scrum Team","Els criteris d'acceptació de tots els PBI","Un document firmat pels stakeholders"], correct:1,
     exp:["Incorrecte.","Correcte.","Incorrecte.","Incorrecte."],
     trap:"El Product Goal és una direcció/objectiu, no un pla detallat amb dates — no és un roadmap."},
    {type:"tf", q:"L'Scrum Team ha de complir o abandonar un Product Goal abans d'assumir-ne un altre.",
     opts:["Vertader","Fals"], correct:[0],
     exp:["Correcte: cita literal."],
     trap:"No es pot treballar simultàniament cap a dos Product Goals diferents amb el mateix equip."},
    {type:"single", q:"Qui és responsable de maximitzar el valor del producte?",
     opts:["El Scrum Master","Els stakeholders","El Product Owner","Tot l'Scrum Team per igual, sense diferenciar responsabilitats"], correct:2,
     exp:["Incorrecte.","Incorrecte.","Correcte.","Incorrecte."],
     trap:"Encara que tot l'equip aporta valor amb l'Increment, la responsabilitat formal de maximitzar-lo és específicament del PO."},
    {type:"single", q:"Quina afirmació sobre un producte és correcta segons la Guia?",
     opts:["Ha de ser sempre un producte físic tangible","Pot ser un servei, un producte físic o quelcom més abstracte","Ha de tenir sempre un únic usuari final","No necessita límits clars, ja que és emergent"], correct:1,
     exp:["Incorrecte.","Correcte.","Incorrecte.","Incorrecte: sí necessita un límit clar."],
     trap:"Un producte no s'ha de confondre amb 'software' exclusivament — pot ser molt més abstracte."},
    {type:"single", q:"Què emergeix per definir 'què' complirà el Product Goal?",
     opts:["La resta del Product Backlog","El Sprint Backlog únicament","La Definition of Done","El pla de releases anual"], correct:0,
     exp:["Correcte: cita literal.","Incorrecte.","Incorrecte.","Incorrecte."],
     trap:"El Product Backlog complet (no només el Sprint Backlog) és el que evoluciona per assolir el Product Goal."},
    {type:"multi", q:"Quines característiques té un producte segons la Guia Scrum?",
     opts:["Té un límit clar","Ha de generar sempre ingressos directes","Té stakeholders coneguts","Té usuaris o clients ben definits"], correct:[0,2,3],
     exp:["Correcte.","Incorrecte: la Guia no ho exigeix; un producte intern també és vàlid.","Correcte.","Correcte."],
     trap:"Generar ingressos directes no és un requisit de la definició de 'producte' a la Guia — pot ser un servei intern o una plataforma sense monetització directa."},
    {type:"single", q:"Quina diferència hi ha entre el Product Goal i un Sprint Goal en termes d'horitzó temporal?",
     opts:["Ambdós són a llarg termini","El Product Goal és a llarg termini; el Sprint Goal és específic d'aquell Sprint","El Sprint Goal és a llarg termini; el Product Goal és puntual","No hi ha diferència, són sinònims"], correct:1,
     exp:["Incorrecte.","Correcte.","Incorrecte: invertit.","Incorrecte."],
     trap:"No confonguis l'abast temporal: Product Goal = visió a llarg termini; Sprint Goal = objectiu d'un únic Sprint."},
    {type:"tf", q:"El Product Owner pot tenir dos Product Goals actius simultàniament per accelerar el desenvolupament.",
     opts:["Vertader","Fals"], correct:[1],
     exp:["Incorrecte.","Correcte: cal complir o abandonar un Product Goal abans d'assumir el següent."],
     trap:"Un únic Product Goal actiu a la vegada — treballar-ne dos en paral·lel dilueix el focus de l'equip."}
  ]
},

{
  id: "gestio-backlog",
  name: "Gestió del Product Backlog",
  theory: `
<h3>Refinament (refinement)</h3>
<p>Acte de descompondre i definir més els elements en peces més petites i precises. Activitat <b>continuada</b> que afegeix descripció, ordre i tamany. Els atributs varien segons el domini.</p>
<h3>Ordenar, no prioritzar</h3>
<p>El PO <b>ordena</b> els elements del Product Backlog — terme exacte de la Guia, mai "prioritzar".</p>
<h3>Sizing</h3>
<p>Els Developers que faran el treball són responsables del tamany. El PO pot influir ajudant-los a entendre i seleccionar millors alternatives.</p>
<h3>Bones pràctiques per minimitzar desperdici</h3>
<ul>
<li>Refinar només els elements que probablement s'implementaran aviat (just in time, just enough).</li>
<li>Eliminar elements obsolets que porten temps sense tocar-se.</li>
<li>Mai crear un segon backlog paral·lel — el Product Backlog és l'única font de veritat.</li>
</ul>
<h3>Transparència</h3>
<p>El PO ha d'assegurar que el Product Backlog sigui transparent, visible i comprès per tots.</p>`,
  questions: [
    {type:"single", q:"Com s'anomena l'acte de descompondre i definir més els elements del Product Backlog?",
     opts:["Priorització","Refinament (refinement)","Sizing","Ordenació estratègica"], correct:1,
     exp:["Incorrecte.","Correcte.","Incorrecte: sizing és només l'atribut de tamany.","Incorrecte."],
     trap:"El terme oficial és 'refinement', una activitat contínua, no un esdeveniment formal de Scrum."},
    {type:"single", q:"Quin verb utilitza la Guia Scrum per descriure com el PO gestiona els elements del Product Backlog?",
     opts:["Priorizar","Ordenar","Classificar per urgència","Segmentar per departament"], correct:1,
     exp:["Incorrecte: terme evitat deliberadament per la Guia.","Correcte.","Incorrecte.","Incorrecte."],
     trap:"'Priorizar' és possiblement la trampa de vocabulari més repetida de tot l'examen PSPO I."},
    {type:"multi", q:"Quines pràctiques ajuden a minimitzar el desperdici en la gestió del Product Backlog?",
     opts:["Refinar en detall només els elements que probablement s'implementaran aviat","Crear un segon backlog paral·lel per als elements 'nous'","Eliminar elements obsolets que porten molt temps sense tocar-se","Detallar exhaustivament tots els elements des del principi"], correct:[0,2],
     exp:["Correcte: enfocament 'just in time, just enough'.","Incorrecte: trenca el principi d'única font de veritat.","Correcte.","Incorrecte: és una forma de desperdici (BDUF a nivell de backlog)."],
     trap:"Un segon backlog 'paral·lel' sempre és incorrecte: només ha d'existir un Product Backlog com a font única de veritat."},
    {type:"single", q:"Qui és responsable del tamany (size) dels elements del Product Backlog?",
     opts:["El Product Owner en exclusiva","Els Developers que faran el treball","Els stakeholders principals","El Scrum Master"], correct:1,
     exp:["Incorrecte.","Correcte.","Incorrecte.","Incorrecte."],
     trap:"El PO pot influir-hi, però la decisió final de mida és sempre dels Developers."},
    {type:"tf", q:"El refinament del Product Backlog és un esdeveniment formal de Scrum amb un timebox fix.",
     opts:["Vertader","Fals"], correct:[1],
     exp:["Incorrecte.","Correcte: és una activitat contínua, no un dels quatre esdeveniments formals amb timebox de la Guia."],
     trap:"El refinement NO és un dels 4 esdeveniments formals (Planning, Daily, Review, Retro) — és una activitat en curs."},
    {type:"single", q:"Quina responsabilitat té el PO respecte a la visibilitat del Product Backlog?",
     opts:["Assegurar que sigui transparent, visible i comprès","Amagar-lo als stakeholders fins que estigui complet","Compartir-lo només amb els Developers","Publicar-lo només al final de cada release"], correct:0,
     exp:["Correcte: responsabilitat explícita del PO.","Incorrecte.","Incorrecte.","Incorrecte."],
     trap:"La transparència del backlog és per a tot l'Scrum Team i els stakeholders, no un document restringit."},
    {type:"single", q:"Quan es considera que un element del Product Backlog està 'llest' (ready) per seleccionar-se en un Sprint Planning?",
     opts:["Quan el PO l'ha aprovat formalment per escrit","Quan ha adquirit prou transparència, normalment després d'activitats de refinament","Quan té una estimació en hores exacta","Quan tots els stakeholders l'han validat"], correct:1,
     exp:["Incorrecte.","Correcte.","Incorrecte: la Guia no exigeix hores exactes.","Incorrecte."],
     trap:"'Ready' és un grau de transparència/comprensió assolit via refinament, no una aprovació formal ni una estimació exacta."},
    {type:"single", q:"Quin percentatge de temps de l'equip s'hauria de dedicar al refinament segons la Guia Scrum?",
     opts:["Un 10% fix segons la Guia","La Guia no especifica un percentatge fix; és una activitat contínua segons calgui","Un 25% obligatori cada Sprint","Ha de fer-se sempre en un esdeveniment separat d'1 hora"], correct:1,
     exp:["Incorrecte: la Guia no dona cap percentatge.","Correcte.","Incorrecte.","Incorrecte."],
     trap:"Trampa comuna: atribuir a la Guia Scrum xifres concretes (com el famós '10% del temps') que en realitat provenen de pràctiques externes, no del text oficial."},
    {type:"single", q:"Si dos Product Backlog Items competeixen pel mateix Sprint, qui decideix quin ordre tenen?",
     opts:["Els Developers, per pura capacitat tècnica","El Product Owner, ordenant el Product Backlog","Es vota entre tot l'Scrum Team i stakeholders","Es decideix per antiguitat de l'element al backlog"], correct:1,
     exp:["Incorrecte.","Correcte.","Incorrecte.","Incorrecte."],
     trap:"L'ordre del backlog és responsabilitat única del PO — no és un procés de votació ni d'antiguitat."}
  ]
},

{
  id: "estrategia-negoci",
  name: "Estratègia de negoci",
  theory: `
<h3>Context (Professional Scrum Competencies)</h3>
<p>Encara que la Guia Scrum no detalla estratègia de negoci, les competències PSPO esperen que el Product Owner entengui:</p>
<ul>
<li>El <b>mercat</b>, la competència i les tendències que afecten el producte.</li>
<li>Com el producte contribueix als <b>objectius estratègics</b> de l'organització.</li>
<li>La necessitat de prendre decisions basades en <b>dades i experimentació</b> (validar hipòtesis de valor), no només en opinions.</li>
<li>El <b>cost d'oportunitat</b>: cada decisió d'incloure un element al Sprint implica no fer-ne un altre.</li>
</ul>
<h3>Trampa freqüent</h3>
<p>L'examen pot presentar opcions on el PO ignora el context de negoci per centrar-se només en detalls tècnics — és incorrecte: el PO ha d'equilibrar visió de producte, negoci i execució de l'equip.</p>`,
  questions: [
    {type:"single", q:"Segons les competències PSPO, per què és important que el PO entengui el mercat i la competència?",
     opts:["Per poder programar ell mateix funcionalitats competitives","Per prendre decisions informades sobre com maximitzar el valor del producte","Per substituir l'equip de màrqueting de l'organització","Perquè és un requisit tècnic de la Guia Scrum"], correct:1,
     exp:["Incorrecte.","Correcte.","Incorrecte.","Incorrecte: la Guia Scrum no ho detalla; ve de les competències PSPO."],
     trap:"Aquest contingut prové de les Professional Scrum Competencies, no de la Guia Scrum en si — combina ambdues fonts a l'examen."},
    {type:"single", q:"Què implica el 'cost d'oportunitat' en la presa de decisions del PO?",
     opts:["El cost monetari exacte de cada Product Backlog Item","Que triar fer una cosa implica renunciar (de moment) a fer-ne una altra amb els mateixos recursos","El cost de formació de l'equip","El pressupost total assignat al producte"], correct:1,
     exp:["Incorrecte.","Correcte.","Incorrecte.","Incorrecte."],
     trap:"Cost d'oportunitat no és un càlcul financer exacte, és el concepte de renúncia implícita en cada decisió d'ordenació del backlog."},
    {type:"tf", q:"Un bon Product Owner es centra exclusivament en detalls tècnics d'implementació, deixant l'estratègia de negoci a la direcció.",
     opts:["Vertader","Fals"], correct:[1],
     exp:["Incorrecte.","Correcte: el PO ha d'equilibrar visió de producte, negoci i execució — no és només una figura tècnica."],
     trap:"Reduir el PO a un rol purament tècnic o purament administratiu són dues simplificacions incorrectes habituals a l'examen."},
    {type:"single", q:"Quin enfocament recomanen les competències PSPO per validar si una funcionalitat aportarà valor real?",
     opts:["Confiar en la intuïció del PO sense validar-ho","Basar-se en dades i experimentació per validar hipòtesis de valor","Esperar que ho decideixi la direcció general","Copiar directament el que fa la competència"], correct:1,
     exp:["Incorrecte.","Correcte.","Incorrecte.","Incorrecte."],
     trap:"L'enfocament empíric també s'aplica a l'estratègia de producte: validar hipòtesis amb dades, no assumir-les."},
    {type:"single", q:"Com hauria d'utilitzar el PO l'Increment presentat al Sprint Review en relació amb l'estratègia de negoci?",
     opts:["Com una prova per justificar el pressupost invertit","Com a base empírica per ajustar la direcció del producte segons canvis del mercat","Com un document legal per als stakeholders","Només com a demostració tècnica interna"], correct:1,
     exp:["Incorrecte.","Correcte: el Sprint Review inspecciona resultats i entorn per decidir pròxims passos alineats amb el valor de negoci.","Incorrecte.","Incorrecte."],
     trap:"El Sprint Review connecta directament execució i estratègia: no és només una demo tècnica, és input per a decisions de negoci."},
    {type:"tf", q:"El Product Owner ha d'ignorar els canvis del mercat un cop el Product Backlog està definit, per mantenir estabilitat.",
     opts:["Vertader","Fals"], correct:[1],
     exp:["Incorrecte.","Correcte: el Product Backlog és emergent i s'ha d'ajustar a noves oportunitats i canvis d'entorn."],
     trap:"'Emergent' vol dir que el backlog evoluciona contínuament amb el mercat, mai és un document tancat i estable."},
    {type:"single", q:"Quin concepte descriu millor per què el PO ha de prioritzar objectius estratègics per sobre de peticions puntuals de stakeholders individuals?",
     opts:["Maximitzar el valor global del producte a llarg termini, no només satisfer demandes aïllades","Evitar conflictes personals amb l'equip","Complir estrictament amb el pressupost anual","Reduir el nombre de reunions amb stakeholders"], correct:0,
     exp:["Correcte: coherent amb la responsabilitat de maximitzar el valor del producte.","Incorrecte.","Incorrecte.","Incorrecte."],
     trap:"El PO no és un simple 'gestor de peticions' — ha d'equilibrar-les amb la visió estratègica global del producte."}
  ]
},

{
  id: "stakeholders",
  name: "Stakeholders i clients",
  theory: `
<h3>Rol dels stakeholders</h3>
<p>Participen especialment al <b>Sprint Review</b>, on col·laboren amb l'Scrum Team sobre què fer a continuació, en base al que s'ha aconseguit i al que ha canviat en l'entorn.</p>
<h3>Negociació de canvis</h3>
<p>Qui vulgui canviar el Product Backlog ho ha de fer <b>negociant amb el Product Owner</b> — mai directament amb els Developers ni imposant canvis unilaterals durant el Sprint.</p>
<h3>Scrum Master i stakeholders</h3>
<p>El SM <b>facilita la col·laboració de les parts interessades</b> quan se sol·licita o és necessari, i ajuda a eliminar barreres entre stakeholders i l'Scrum Team.</p>
<h3>Trampa freqüent</h3>
<p>Pensar que els stakeholders formen part de l'Scrum Team — no en formen part; són externs, encara que col·laborin estretament (especialment al Sprint Review).</p>`,
  questions: [
    {type:"single", q:"En quin esdeveniment col·laboren especialment els stakeholders amb l'Scrum Team?",
     opts:["Daily Scrum","Sprint Planning","Sprint Review","Sprint Retrospective"], correct:2,
     exp:["Incorrecte: només Developers.","Incorrecte: principalment l'Scrum Team, encara que poden convidar-se assessors.","Correcte.","Incorrecte: intern de l'equip."],
     trap:"El Sprint Review és l'esdeveniment obert a stakeholders per excel·lència; els altres tres són majoritàriament interns."},
    {type:"single", q:"Com ha de procedir un stakeholder que vulgui canviar l'ordre del Product Backlog?",
     opts:["Parlar-ho directament amb els Developers durant el Sprint","Negociar-ho amb criteri amb el Product Owner","Esperar la propera auditoria de qualitat","Escalar-ho a direcció general immediatament"], correct:1,
     exp:["Incorrecte.","Correcte: cita literal.","Incorrecte.","Incorrecte."],
     trap:"Tota negociació de canvis d'abast o ordre passa pel PO, mai directament pels Developers."},
    {type:"tf", q:"Els stakeholders formen part de l'Scrum Team.",
     opts:["Vertader","Fals"], correct:[1],
     exp:["Incorrecte.","Correcte: l'Scrum Team és només PO, SM i Developers; els stakeholders són externs."],
     trap:"Confondre 'col·laborar estretament' amb 'formar part de l'equip' és un error freqüent."},
    {type:"single", q:"Quina és una manera en què el Scrum Master serveix a l'organització respecte als stakeholders?",
     opts:["Decidint per ells quines funcionalitats són prioritàries","Eliminant les barreres entre les parts interessades i els Scrum Teams","Substituint el PO en la negociació de canvis","Aprovant personalment els canvis de Product Backlog"], correct:1,
     exp:["Incorrecte.","Correcte: cita literal.","Incorrecte.","Incorrecte."],
     trap:"El SM elimina barreres i facilita, però mai substitueix les decisions o negociacions que corresponen al PO."},
    {type:"single", q:"Durant el Sprint Review, què fan conjuntament l'Scrum Team i els stakeholders?",
     opts:["Aproven formalment el pressupost del següent Sprint","Revisen el que s'ha aconseguit i col·laboren sobre què fer a continuació","Assignen tasques concretes als Developers per al següent Sprint","Redacten la Definition of Done del producte"], correct:1,
     exp:["Incorrecte.","Correcte.","Incorrecte: l'assignació és interna dels Developers.","Incorrecte: la DoD la defineix l'Scrum Team, no és tema específic del Review amb stakeholders."],
     trap:"El Sprint Review és col·laboratiu i de treball conjunt, no una reunió d'aprovacions formals ni d'assignació de tasques."},
    {type:"tf", q:"El Product Owner pot representar les necessitats de moltes parts interessades dins del Product Backlog.",
     opts:["Vertader","Fals"], correct:[0],
     exp:["Correcte: cita literal de la Guia."],
     trap:"El PO és un punt de síntesi de moltes veus de negoci, sense deixar de ser una única persona responsable."},
    {type:"single", q:"Un client extern demana directament als Developers que canviïn l'abast d'un item que ja està al Sprint Backlog. Què hauria de passar?",
     opts:["Els Developers ho accepten si tècnicament és senzill","Es negocia amb el Product Owner, sense posar en perill el Sprint Goal","S'aplica directament perquè el client sempre té raó","Es porta a votació al Daily Scrum següent"], correct:1,
     exp:["Incorrecte: els Developers no negocien abast directament amb externs.","Correcte.","Incorrecte.","Incorrecte: el Daily Scrum no és un fòrum de negociació d'abast amb externs."],
     trap:"Cap canvi d'abast durant el Sprint es fa sense passar pel PO i sense posar en perill el Sprint Goal ja acordat."},
    {type:"single", q:"Quin és el risc principal de deixar que els stakeholders parlin directament amb els Developers sobre prioritats, sense passar pel PO?",
     opts:["Cap risc, millora la comunicació","Es trenca la gestió coherent i unificada del valor del producte que ha de liderar el PO","Els Developers es tornen massa autònoms","Augmenta la transparència del Product Backlog"], correct:1,
     exp:["Incorrecte.","Correcte.","Incorrecte: no és negatiu que siguin autònoms tècnicament.","Incorrecte."],
     trap:"El risc no és de comunicació general, sinó de perdre un punt únic i coherent de decisió sobre valor i ordre — exactament el que soluciona tenir un PO."}
  ]
}

];

// Aplanem totes les preguntes amb referència al seu tema, per als modes general i final
const ALL_QUESTIONS = TOPICS.flatMap(t => t.questions.map(q => ({...q, topicId: t.id, topicName: t.name})));
