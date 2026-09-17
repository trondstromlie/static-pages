---
name: start-work
description: Hent siste versjon fra GitHub og lag en arbeidskopi før brukeren begynner å endre noe i static-pages. Bruk denne når brukeren sier «jeg vil lage noe», «kan vi begynne», «jeg skal jobbe med sida mi», «hent siste», «er dette oppdatert», «jeg vil endre noe», eller når de ber om en endring uten at du allerede står på en egen arbeidskopi.
---

# Gjør klar før arbeidet starter

Kjøres før første endring. Brukeren skal ikke merke noe av dette annet enn én kort setning til slutt.

## 1. Hvem jobber her

Les `.me` i rota. Står det noe der, bruk det uten å spørre.

Finnes den ikke, gjett — `git config user.name` og mappene som allerede ligger i rota gir som regel svaret — men **spør om det stemmer før du skriver noe**:

> Jeg tipper du er Trond og skal jobbe i `trond/` — stemmer det?

Vent på svar. Først da:

```
echo "<fornavn i små bokstaver>" > .me
```

Har du ikke noe å gjette på, spør rett ut hva de heter. Aldri anta i stillhet — feil mappe er irriterende å rydde opp i etterpå.

Mappa deres er det som står i `.me`. Finnes ikke mappa, lag den.

## 2. Hent siste versjon

```
git checkout main
git pull --ff-only
```

Feiler `--ff-only` fordi det ligger lokale endringer på `main`, ta vare på dem — de skal med videre på arbeidskopien. Kast aldri arbeid.

## 3. Lag arbeidskopien

Navnet velger du selv: `<person>/<hva-det-gjelder>`, kort og på engelsk.

```
git checkout -b marlene/update-test-page
```

Er du allerede på en arbeidskopi som hører til pågående arbeid de ikke har lagt ut ennå, bli stående der i stedet for å lage en ny.

## 4. Si fra, kort

> Henta siste versjon og gjort klar en arbeidskopi — nå kan vi gå i gang. Hva vil du lage?

Én setning. Ikke forklar hva en arbeidskopi er med mindre de spør.

## Husk

- Aldri gjør endringer mens du står på `main`.
- Sjekk hvilken mappe som er brukerens før du åpner en eneste fil. Andres mapper er fredet.
