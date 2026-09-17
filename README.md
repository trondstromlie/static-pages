# static-pages

Samling av statiske HTML-sider, publisert med GitHub Pages fra `main` (rot-mappa).

## Struktur

```
/                       rot-index som lenker til alle prosjekter
/<person>/<prosjekt>/    index.html + eventuelle bilder
```

Eksempel:

```
trond/presentasjon/index.html
```

## Legge til et nytt prosjekt

1. Lag mappa: `mkdir -p <person>/<prosjekt>`
2. Legg `index.html` (og bilder) i den mappa.
3. Lenk den opp fra rot-`index.html`.
4. Commit og push — Pages bygger automatisk.

URL blir `https://trondstromlie.github.io/static-pages/<person>/<prosjekt>/`.

## Regler

- Bruk relative lenker (`bilder/foo.png`), aldri absolutte (`/bilder/foo.png`) — sida ligger under `/static-pages/`.
- `.nojekyll` i rota slår av Jekyll-prosessering, så mapper og filer med `_` fungerer.
