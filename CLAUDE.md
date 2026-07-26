# PSPO I Trainer

App Electron (embolcall d'un `app/index.html`+JS+CSS estàtic) que també es
publica com a web (GitHub Pages) des de `app/`.

## Abans de fer qualsevol `git commit`

Aquest projecte manté un historial de versions visible dins l'app, a
"Sobre la app" → "Ver historial de versiones". Cada commit incrementa la
versió. Abans de committejar:

1. Llegeix `CHANGELOG.md` (arrel del repo) per veure l'última versió.
2. Incrementa el número de versió (minor +1, ex. 1.16.0 → 1.17.0).
3. Afegeix una entrada nova a dalt de `CHANGELOG.md` amb versió, data i una
   descripció breu del canvi (pot ser la mateixa que el missatge de commit).
4. Afegeix la mateixa entrada a l'inici de l'array `CHANGELOG` a
   `app/changelog.js`, i actualitza la constant `APP_VERSION` d'aquest fitxer.
   La descripció d'aquest fitxer és la que es mostra a l'app, així que ha
   d'anar **traduïda a `es` i `en`** (objecte `desc:{es, en}`), no en català
   — l'app només té interfície en castellà i anglès.
5. Actualitza el camp `"version"` de `package.json` amb el mateix número.
6. Fes el commit normalment.

Si un canvi és purament intern (neteja, comentaris) i no afecta l'usuari,
pregunta abans de saltar-te aquest pas — per defecte, incrementa sempre.
