---
name: publish
description: Legg brukerens side ut på nett, sjekk at det ikke er konflikter, merge den til main, og gi brukeren den delbare lenka. Bruk denne når brukeren sier «jeg er ferdig», «legg det ut», «publiser», «send det», «kan andre se det nå», «del det», «legg det på nett», «gi meg lenka», «push det», eller på annen måte signaliserer at de er ferdige.
---

# Legg det ut og gi dem lenka

Brukeren kan ikke git og skal ikke trenge å gjøre noe. Du gjør alle stegene.

## 0. Si hva du skal gjøre — før du gjør det

Dette er første melding, i din egen ordlyd:

> Jeg legger det ut på GitHub, sjekker at det ikke er konflikter, og så merger jeg det for deg. Jeg gir deg beskjed når du kan se det.

## 1. Se over endringene

```
git status --short
```

Alt som står der skal være i brukerens mappe (fra `.me`), eventuelt rot-`index.html`. Dukker det opp noe annet, **stopp** og spør før du går videre. Ligger det ingenting der, si at det ikke er noe nytt å legge ut, og spør hva de ville endre.

## 2. Lagre endringene

Står du fortsatt på `main`, lag en arbeidskopi først (`git checkout -b <person>/<hva-det-gjelder>`), ellers blir det liggende feil sted.

```
git add <bare brukerens mappe, og index.html hvis den er endret>
git commit -m "Add sommerfest invitation page for Marlene"
```

Meldinga er kort og på engelsk. Ingen spor av hvilken AI som skrev den.

## 3. Legg dem ut og lag en pull request

```
git push -u origin <arbeidskopien>
gh pr create --base main --head <arbeidskopien> --title "<samme som commit-meldinga>" --body "<to–tre linjer om hva sida er>"
```

Får du `403` eller `Permission denied`: brukeren mangler skrivetilgang.

> Du har ikke skrivetilgang til repoet ennå. Trond må legge deg til — når det er gjort, tar jeg resten. Arbeidet ditt er trygt lagret i mellomtida.

## 4. Sjekk at det ikke er konflikter

```
gh pr view <nr> --json mergeable,mergeStateStatus --jq '{mergeable, mergeStateStatus}'
```

- `MERGEABLE` / `CLEAN` → gå videre.
- `BEHIND` → hent inn siste `main` i arbeidskopien og prøv igjen.
- `DIRTY` → ekte konflikt. Endringene ligger nesten alltid i brukerens egen mappe, så prøv å løse den selv. Klarer du det ikke:
  > Noen andre har endret den samme fila samtidig. Jeg trenger litt hjelp til å velge hva som skal gjelde — kan du ta dette med Trond?

## 5. Merge

```
gh pr merge <nr> --merge --delete-branch
```

## 6. Vent til sida faktisk er live

GitHub Pages bruker vanligvis 1–3 minutter, av og til mer. **Ikke si at det er live før URL-en svarer `200`** — bygget kan stå som ferdig før sida er ute.

```
curl -s -o /dev/null -w "%{http_code}" https://trondstromlie.github.io/static-pages/<person>/<prosjekt>/
```

Sjekk hvert 15. sekund. Tar det over et par minutter, si fra underveis i stedet for å være stille:

> Den bygges fortsatt — gi meg et halvminutt til.

Er den ikke ute etter ti minutter, si at den er lagt ut og dukker opp om litt, og gi dem lenka likevel.

## 7. Gi dem lenka — dette er hele poenget

Den fulle URL-en på egen linje, så den er lett å kopiere, og et ord om at den kan deles nå:

> Nå er den ute:
>
> https://trondstromlie.github.io/static-pages/marlene/sommerfest/
>
> Den er offentlig, så du kan sende lenka til hvem du vil med én gang.

Er også forsida endret, nevn at den ligger på https://trondstromlie.github.io/static-pages/ — men hovedlenka er sida de nettopp lagde.

## 8. Rydd opp etter deg

```
git checkout main
git pull --ff-only
```

Så står alt klart til neste gang. Ikke si noe om dette til brukeren.

## Aldri

- Aldri merge uten å ha sjekket for konflikter først.
- Aldri si «det er live» uten å ha sett `200`.
- Aldri legg ut filer fra en annen persons mappe.
- Aldri be brukeren gjøre et eneste git-steg selv.
