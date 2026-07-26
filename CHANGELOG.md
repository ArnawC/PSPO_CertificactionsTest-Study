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
