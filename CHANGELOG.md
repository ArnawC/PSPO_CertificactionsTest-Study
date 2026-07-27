# Changelog

Repositori: https://github.com/ArnawC/PSPO_CertificactionsTest-Study

Aquest fitxer és la font humana de l'historial de versions. Es mostra dins
l'app a "Sobre la app" → "Ver historial de versiones", a través del mirall
`app/changelog.js` (array `CHANGELOG` + `APP_VERSION`).

**Regla per a cada commit:** cada commit incrementa la versió (minor +1).
Abans de fer `git commit`, afegeix una entrada nova a dalt de tot d'aquest
fitxer amb la versió incrementada, la data i una descripció breu del canvi
(la mateixa que farà servir el missatge de commit), i afegeix la mateixa
entrada a l'inici de l'array `CHANGELOG` a `app/changelog.js`, actualitzant
també `APP_VERSION` allà i el camp `version` de `package.json`.

## v1.27.0 — 2026-07-27
Afegeix al temari (es/en) tot el contingut de la Guia Scrum 2020 que encara no hi era literalment: la definició formal de Scrum amb l'esquema en 4 passos al tema d'Empirisme, el llistat complet de les tres maneres en què el Scrum Master serveix (a l'equip, al Product Owner i a l'organització) al tema de l'Equip Scrum, i un nou apartat de context històric amb els canvis entre la Guia 2017 i la 2020.

## v1.26.0 — 2026-07-26
Verificades les 170 preguntes existents contra la Guia Scrum 2020 (cap error trobat) i afegides 40 preguntes noves més, prioritzant els temes amb menys preguntes per equilibrar el banc (210 preguntes per idioma).

## v1.25.0 — 2026-07-26
Afegeix 63 preguntes noves (revisades i verificades) a cada idioma, distribuïdes entre els temes existents, a partir d'un banc de preguntes extra proporcionat per l'usuari.

## v1.24.0 — 2026-07-26
Afegeix un README complet: funcionalitats, com fer servir l'app (web/mòbil/escriptori), idiomes, privacitat de dades i enllaç a la web de GitHub Pages.

## v1.23.0 — 2026-07-26
Corregeix la retroalimentació de respostes de tipus múltiple: les opcions correctes que NO vas marcar ara es distingeixen (verd amb ratlles + etiqueta "correcta, no marcada") de les que sí vas encertar, en lloc de mostrar-se totes en verd sòlid.

## v1.22.0 — 2026-07-26
Afegeix icona apple-touch-icon i manifest.json perquè "Afegir a pantalla d'inici" a iPhone detecti el logo correctament.

## v1.21.0 — 2026-07-26
Afegeix un diagrama visual (cicle dels tres pilars) al temari d'Empirismo, després de la frase que explica com es reforcen en cadena.

## v1.20.0 — 2026-07-26
Afegeix mida de lletra ajustable (Normal/Grande/Muy grande) i un nou mode Flashcards a Modos especiales, amb targetes terme/definició extretes del temari.

## v1.19.0 — 2026-07-26
Afegeix repàs espaiat (SM-2) com a nou mode especial, dreceres de teclat al test (1-6/A-F i Enter) i cercador de conceptes al temari.

## v1.18.0 — 2026-07-26
Afegeix botons de descarregar i importar còpia de seguretat (historial, preguntes pròpies i errors) a Historial i estadístiques.

## v1.17.0 — 2026-07-26
Corregeix el contrast del botó "Abandonar" dins la targeta de pregunta i fa que la barra de progrés mostri les respostes correctes en verd (abans taronja).

## v1.16.0 — 2026-07-26
Afegeix número de versió de l'app i un historial de versions (cada commit) a "Sobre la app".

## v1.15.0 — 2026-07-26
Fa que "Simular examen completo" al dashboard faci scroll directe a la seva secció.

## v1.14.0 — 2026-07-26
Fa que el temari ocupi tot l'ample i afegeix menú lateral col·lapsable al mòbil.

## v1.13.0 — 2026-07-24
Afegeix lectura en veu alta del temari amb suport de pantalla bloquejada.

## v1.12.0 — 2026-07-24
Fa que la barra lateral tingui scroll propi en pantalles curtes.

## v1.11.0 — 2026-07-24
Simplifica navegació: Temari amb vista completa, Test general+final unificats.

## v1.10.0 — 2026-07-24
El banc de preguntes de l'examen segueix ara l'idioma d'interfície (es/en).

## v1.9.0 — 2026-07-24
Amplia i verifica el banc de preguntes ES/EN amb contingut real basat en la Scrum Guide 2020.

## v1.8.0 — 2026-07-24
Separa el banc de preguntes per idioma i obre l'app maximitzada.

## v1.7.0 — 2026-07-24
Sistema d'idiomes ES/EN i correccions de text.

## v1.6.0 — 2026-07-24
Blocs 4 i 5: Pomodoro i pantalla "Sobre l'app".

## v1.5.0 — 2026-07-24
Bloc 3: mapa de calor, predicció de nota i historial d'errors a Estadístiques.

## v1.4.0 — 2026-07-24
Bloc 2: hub de modes especials.

## v1.3.0 — 2026-07-24
Bloc 1: motor de quiz — lector de veu i Dubte Extrem.

## v1.2.0 — 2026-07-24
Afegeix preguntes pròpies, mode clar/fosc i filtres d'estadístiques.

## v1.1.0 — 2026-07-23
Importa el codi font de PSPO I Trainer (app Electron).

## v1.0.0 — 2026-07-23
Commit inicial.
