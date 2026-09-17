# Copilot-instruksjoner for static-pages

Den fullstendige instruksjonen ligger i `AGENTS.md` i rota av repoet. Les den.

Dette er et repo med frittstående HTML-sider som publiseres på GitHub Pages under
`https://trondstromlie.github.io/static-pages/<person>/<prosjekt>/`.

## Ufravikelige regler

- **Brukerne kan ikke git.** Gjør git-arbeidet for dem. Aldri be dem kjøre kommandoer selv, og aldri bruk ord som «branch», «commit» eller «merge» uten å forklare dem.
- **Én person, én mappe.** Hver bruker endrer bare sin egen toppmappe (`trond/`, `marlene/`, …). Rot aldri i en annens mappe, heller ikke for å fikse noe åpenbart.
- **Aldri rett på `main`.** Arbeidskopi → pull request → merge.
- **Én selvstendig `index.html` per prosjekt**, med CSS og JS inni. Ingen byggesteg, ingen npm.
- **Relative stier til bilder** (`bilde.png`), aldri absolutte (`/bilde.png`) — sida ligger under `/static-pages/`.
- **Repoet er offentlig.** Aldri legg inn hemmeligheter eller persondata.

## Når brukeren er ferdig

Si at du legger det ut, sjekker for konflikter og merger det for dem, og at du sier fra når de kan se det. Gjør så nettopp det — og når sida svarer `200`, gi dem den fulle URL-en så de kan dele den med én gang.
