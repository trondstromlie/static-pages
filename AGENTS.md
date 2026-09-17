# Instruksjoner for AI-assistenten i dette repoet

Dette er fasiten. `CLAUDE.md`, `COPILOT.md` og `.github/copilot-instructions.md` peker hit.

---

## 1. Hva dette repoet er

En samling frittstående HTML-sider som publiseres automatisk på GitHub Pages.

```
static-pages/
├── index.html              ← forsida som lenker til alle prosjektene
├── trond/                  ← Trond sin mappe
│   └── presentasjon/
│       └── index.html
└── marlene/                ← Marlene si mappe
    └── test/
        └── index.html
```

Alt som ligger på `main` er live noen minutter senere på:

```
https://trondstromlie.github.io/static-pages/<person>/<prosjekt>/
```

---

## 2. Hvem du snakker med

**Brukerne her har ingen erfaring med git, GitHub eller kommandolinja.** Det er ikke en mangel du skal fikse — det er en forutsetning du skal jobbe rundt.

Det betyr:

- **Du gjør git-arbeidet. Ikke de.** Aldri be brukeren kjøre en git-kommando. Aldri be dem åpne en terminal. Aldri be dem klikke seg rundt på github.com. Du kjører kommandoene selv med verktøyene dine.
- **Ikke forklar git med mindre de spør.** Ord som «branch», «commit», «merge», «pull request» og «konflikt» betyr ingenting for dem. Si heller «jeg lager en egen arbeidskopi», «jeg lagrer det», «jeg legger det ut».
- **Ingen spørsmål de ikke kan svare på.** Ikke spør «hva skal branchen hete?» eller «vil du squashe?». Velg selv, si hva du valgte i én setning, og gå videre.
- **Én ting om gangen.** Ikke legg fram fem alternativer. Anbefal ett, gjør det.
- **Vær konkret om hva som skjedde.** «Ferdig» er ikke nok. Si hva som er lagt ut, hvor det ligger, og gi lenka.

Snakk norsk med brukeren, med mindre de skriver på et annet språk.

---

## 3. Den viktigste regelen: én person, én mappe

| Person  | Mappe      | Får endre            |
| ------- | ---------- | -------------------- |
| Trond   | `trond/`   | alt under `trond/`   |
| Marlene | `marlene/` | alt under `marlene/` |

**Du skal aldri endre, flytte eller slette filer i en mappe som tilhører en annen person.** Ikke «bare en liten fiks». Ikke selv om du ser en åpenbar feil der. Ikke selv om brukeren ber om det.

Hvis brukeren ber deg endre noe i en annens mappe, si det rett ut:

> Den sida ligger i Marlene si mappe, så jeg lar den være. Vil du at jeg sier fra til henne i stedet?

### Hvordan du finner ut hvilken mappe som er brukerens

1. Se etter en fil `.me` i rota av repoet. Hvis den finnes, inneholder den mappenavnet — det er fasit.
2. Finnes den ikke: spør **én gang** («Hva heter mappa di?»), lag `.me` med svaret, og ikke spør igjen.
3. Har de ingen mappe ennå, lag den. Mappenavn skal være fornavn i små bokstaver, uten æ/ø/å og uten mellomrom (`marlene`, `per-olav`).

`.me` er i `.gitignore` og blir aldri lagt ut.

### To unntak

- **`index.html` i rota** har alle lov til å redigere — men *bare* for å legge til eller endre sin egen lenke i sin egen seksjon. Aldri rør andres lenker.
- **Filer i rota** (`README.md`, `AGENTS.md`, `.gitignore` osv.) rører du ikke uten at brukeren uttrykkelig ber om det.

### Sjekk før du lagrer

Kjør alltid `git status --short` før du lagrer, og se over lista. Ligger det en fil der som ikke er i brukerens mappe (og ikke er rot-`index.html`), stopp og spør.

---

## 4. Arbeidsflyten

### Når brukeren starter å jobbe

Før du redigerer noe som helst:

1. Hent siste versjon fra GitHub, så de ikke jobber på noe utdatert.
2. Lag en egen arbeidskopi (branch) med et kort engelsk navn: `<person>/<hva-det-er>`, for eksempel `marlene/update-test-page`. Du velger navnet.
3. Si fra i én setning at du er klar: «Henta siste versjon og laget en arbeidskopi — nå kan vi gå i gang.»

Skjer dette midt i en samtale fordi de plutselig begynte å endre ting, er det helt greit å gjøre det da i stedet. Bare aldri lagre noe rett på `main`.

### Mens de jobber

- Lag sider som **én selvstendig `index.html`** med CSS og JavaScript inni. Ingen byggesteg, ingen npm, ingen rammeverk.
- **Bilder legges i samme mappe som sida** og lenkes relativt: `<img src="bilde.png">`. Aldri `/bilde.png` — sida ligger under `/static-pages/`, så absolutte stier blir 404.
- Alle undermapper trenger en `index.html`, ellers blir URL-en 404.
- Sidene skal se bra ut på mobil. Test bredden mentalt: 16px luft i sidene, ingen horisontal scroll.
- Skriv identifikatorer i koden (variabler, funksjoner, CSS-klasser) på engelsk. Tekst brukeren ser kan være på norsk.

### Når de er ferdige

Utløses av alt som betyr «ferdig»: «jeg er ferdig», «legg det ut», «publiser», «kan andre se det nå?», «send det».

**Si nøyaktig dette først, i din egen ordlyd, før du gjør noe:**

> Jeg legger det ut på GitHub, sjekker at det ikke er konflikter, og så merger jeg det for deg. Jeg gir deg beskjed når du kan se det.

Så gjør du, i denne rekkefølgen:

1. **Se over endringene** — `git status --short`. Er alt innenfor brukerens mappe?
2. **Lagre dem** med en kort, beskrivende melding på engelsk.
3. **Legg dem ut** — send arbeidskopien til GitHub.
4. **Lag en pull request** mot `main`.
5. **Sjekk at det ikke er konflikter** — les `mergeable` og `mergeStateStatus`. Er den `MERGEABLE` / `CLEAN`, gå videre. Er den det ikke, se punkt 1 i seksjon 5.
6. **Merge den** til `main`, og slett arbeidskopien.
7. **Vent til sida faktisk er live.** GitHub Pages bruker vanligvis 1–3 minutter. Sjekk med jevne mellomrom at URL-en svarer `200` — ikke bare at bygget står som ferdig. Sier du «det er live» og de får 404, har du sagt noe usant.
8. **Gi dem lenka.** Dette er det viktigste steget. Skriv den fulle URL-en på egen linje så den er lett å kopiere, og si at den kan deles med en gang:

> Nå er den ute:
>
> https://trondstromlie.github.io/static-pages/marlene/test/
>
> Den er offentlig, så du kan sende lenka til hvem du vil med én gang.

Er ventetiden lang, si fra underveis («Den bygges fortsatt, gi meg et halvminutt til») i stedet for å være stille.

---

## 5. Når noe går galt

Brukeren skal aldri måtte feilsøke selv. Du fikser det, eller du forklarer i klartekst hva som må skje.

1. **Konflikt ved merge** (`mergeStateStatus` er `DIRTY` eller `BEHIND`).
   Ikke nevn ordet «konflikt» uten å forklare det. Prøv først å hente inn siste `main` i arbeidskopien deres og løse det selv — endringene deres ligger i deres egen mappe, så det er som regel trivielt. Klarer du det ikke, si:
   > Noen andre har endret den samme fila samtidig. Jeg trenger litt hjelp til å velge hva som skal gjelde — kan du se på dette med Trond?

2. **Ingen tilgang til å legge ut** (`403`, `Permission denied`).
   De er ikke lagt til som medarbeider på repoet.
   > Du har ikke skrivetilgang til repoet ennå. Trond må legge deg til — når det er gjort, tar jeg resten.

3. **Pages bygger og bygger.**
   Bygget tar av og til flere minutter. Vent i opptil ti, si fra underveis, og hvis det fortsatt ikke er live: si at det er lagt ut og at sida dukker opp om litt, og gi dem lenka uansett.

4. **Sida er live, men bildene mangler.**
   Nesten alltid absolutt sti. Se etter `src="/..."` og `href="/..."` og gjør dem relative.

5. **`404` på en mappe.**
   Mangler `index.html`. Lag den.

6. **Brukeren angrer på noe som allerede er lagt ut.**
   Du kan legge ut en ny versjon. Gjør endringen, og kjør hele ferdig-flyten på nytt.

---

## 6. Ting du aldri gjør

- Lagre eller legge ut noe rett på `main`. Alt går via en arbeidskopi og en pull request.
- Tvinge gjennom endringer (`--force`), kaste ucommittet arbeid, eller slette arbeidskopien til noen andre.
- Endre filer i en annen persons mappe.
- Endre `.github/workflows/`, repo-innstillinger eller Pages-oppsettet.
- Legge inn hemmeligheter, passord, API-nøkler, persondata eller noe brukeren ikke vil ha offentlig. **Repoet er offentlig — alt som legges ut kan leses av hvem som helst.** Er du i tvil om noe er sensitivt, spør før du publiserer.
- Si at noe er live før du har sjekket at URL-en svarer.
- Be brukeren kjøre git-kommandoer selv.
