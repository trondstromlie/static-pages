# static-pages

Her lager vi nettsider. Én mappe per person, én undermappe per prosjekt — og alt som legges ut havner automatisk på nett.

**Se det som allerede ligger ute:** https://trondstromlie.github.io/static-pages/

---

## Kom i gang

### 1. Last ned repoet

```
git clone https://github.com/trondstromlie/static-pages.git
```

Da får du en mappe som heter `static-pages` på maskinen din. Har du GitHub CLI, funker `gh repo clone trondstromlie/static-pages` like bra.

### 2. Be om å bli contributor

Du kan laste ned og se på alt uten tilgang, men for å **legge ut** noe trenger du skrivetilgang til repoet.

Send GitHub-brukernavnet ditt til Trond, eller [be om tilgang her](https://github.com/trondstromlie/static-pages/issues/new?title=Jeg%20vil%20bli%20contributor&body=Hei!%20GitHub-brukernavnet%20mitt%20er:%20).

Når du er lagt til, får du din egen mappe — og da jobber du bare i den.

### 3. Lag og del

Åpne mappa med AI-assistenten din og si hva du vil lage. Når du er fornøyd, sier du «jeg er ferdig» — så legges sida ut, og du får en lenke du kan dele med en gang.

Prøver du å legge ut noe før du har fått tilgang, stopper det med en feil om manglende rettigheter. Arbeidet ditt er trygt lagret så lenge, og assistenten legger det ut så snart tilgangen er på plass.

---

## Hvis du er ny her

Du trenger ikke kunne git, GitHub eller programmering. Du trenger én ting: en AI-assistent som er åpnet i denne mappa — Claude Code, Copilot eller tilsvarende.

Så sier du bare hva du vil:

| Du sier | Det som skjer |
| --- | --- |
| «Hvordan funker dette?» | Assistenten forklarer resten, tilpasset deg |
| «Jeg vil lage en side om sommerfesten» | Den lager mappa og sida, og viser deg resultatet |
| «Kan du gjøre overskriften større?» | Den endrer sida |
| **«Jeg er ferdig»** | Den legger det ut, sjekker at alt går bra, og **gir deg lenka du kan dele** |

Du skal aldri måtte skrive en git-kommando eller åpne en terminal selv. Sier assistenten at du må gjøre noe teknisk, minn den om at instruksjonene i `AGENTS.md` sier at den skal gjøre det for deg.

---

## Den ene regelen

**Du jobber i din egen mappe. Andres mapper lar du være.**

| Person | Mappe |
| --- | --- |
| Trond | `trond/` |
| Marlene | `marlene/` |

Slik kan flere holde på samtidig uten å ødelegge for hverandre. Assistenten passer på dette for deg, og sier fra hvis du kommer borti noe som ikke er ditt.

Har du ingen mappe ennå? Si «jeg har ikke en mappe ennå» — så lager assistenten en.

---

## Hvordan det er bygd opp

```
static-pages/
├── index.html              forsida, med lenker til alle prosjektene
├── trond/
│   └── presentasjon/
│       └── index.html
└── marlene/
    └── test/
        └── index.html
```

Hver undermappe blir en egen adresse på nett:

```
marlene/sommerfest/index.html  →  https://trondstromlie.github.io/static-pages/marlene/sommerfest/
```

Sidene er vanlige HTML-filer — én fil per side, med design og funksjonalitet inni. Ingen installasjon, ingen byggesteg.

---

## Godt å vite

- **Alt her er offentlig.** Repoet er åpent, så alt du legger ut kan leses av hvem som helst. Ikke legg inn passord, personopplysninger eller noe du ikke vil at fremmede skal se.
- **Det tar et par minutter** fra noe legges ut til det er synlig på nett. Assistenten venter og sier fra når sida faktisk er oppe.
- **Bilder legges i samme mappe som sida.** Assistenten ordner koblingen.
- **Du kan endre ting etterpå.** Ingenting er hugget i stein — si hva du vil endre, så legges en ny versjon ut.

---

## For den som lurer på detaljene

- `AGENTS.md` — de fullstendige reglene assistenten følger
- `CLAUDE.md`, `COPILOT.md`, `.github/copilot-instructions.md` — peker til `AGENTS.md`
- `.claude/skills/` — ferdige arbeidsflyter for Claude Code: `help`, `start-work`, `new-page`, `publish`
- `.templates/page/index.html` — utgangspunktet for nye sider
- `.nojekyll` — slår av Jekyll-prosessering hos GitHub
- `.me` — hvem som jobber lokalt her; ligger i `.gitignore` og legges aldri ut
