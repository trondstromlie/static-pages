---
name: new-page
description: Lag et nytt prosjekt med en ny HTML-side i brukerens egen mappe i static-pages, og lenk den opp fra forsida. Bruk denne når brukeren sier «lag en ny side», «nytt prosjekt», «jeg vil lage en presentasjon», «kan du lage en side om …», «jeg trenger en landingsside», «lag noe jeg kan vise fram», eller på annen måte ber om noe som ikke finnes fra før.
---

# Lag en ny side

## 1. Riktig sted

Mappa til brukeren står i `.me`. Den nye sida skal ligge her:

```
<person>/<prosjekt>/index.html
```

`<prosjekt>` er et kort navn i små bokstaver, uten æ/ø/å og uten mellomrom: `presentasjon`, `bursdagskort`, `sommerfest-2026`. Foreslå ett selv ut fra hva de beskrev — ikke be dem finne på et mappenavn.

Finnes mappa allerede, spør om de vil endre den som er der eller lage en ny ved siden av.

**Aldri lag mapper i en annen persons mappe.**

## 2. Lag sida

Start fra `.templates/page/index.html` hvis det passer, eller skriv den fra bunnen. Uansett:

- **Én fil.** CSS i `<style>`, JavaScript i `<script>`, alt i `index.html`. Ingen byggesteg, ingen npm, ingen rammeverk.
- **`<html lang="no">`** og `<meta name="viewport" content="width=device-width, initial-scale=1">`.
- **En `<title>` på to–fire ord.** Den vises i fanen.
- **Bilder i samme mappe**, lenket relativt: `<img src="bilde.png">`. Aldri `/bilde.png` — sida ligger under `/static-pages/`, så absolutte stier gir 404.
- **Skal fungere på mobil.** 16px luft i sidene, ingen horisontal scroll.
- **Mørk modus** via `@media (prefers-color-scheme: dark)`, og gi `body` en eksplisitt bakgrunnsfarge.
- **Engelske navn i koden** (klasser, variabler, funksjoner). Teksten brukeren ser er norsk.

Lag noe som ser bra ut med én gang. Brukeren skal kunne si «den var fin» før de har endret et komma.

## 3. Lenk den opp to steder

Sida skal inn både på personsida og på forsida. Glemmer du den ene, forsvinner prosjektet fra navigasjonen.

**a) `<person>/index.html`** — personens egen oversikt. Legg til et kort i `<ul>`-en:

```html
<li>
  <a class="card" href="sommerfest/">
    <strong>Sommerfest</strong>
    <span>Invitasjon med kart og påmelding</span>
    <span class="go">→</span>
  </a>
</li>
```

Finnes ikke personsida ennå, lag den etter mønster av `trond/index.html`: samme oppbygning, `../assets/site.css` og `../assets/site.js`, og navnet deres i `<h1>`.

**b) `index.html` i rota** — **i brukerens egen seksjon**. Har de ingen seksjon ennå, lag en ny `<h2>` med navnet deres nederst, lenket til personsida — rør aldri andres seksjoner:

```html
<h2><a href="marlene/">Marlene</a></h2>
<ul>
  <li>
    <a class="card" href="marlene/sommerfest/">
      <strong>Sommerfest</strong>
      <span>Invitasjon med kart og påmelding</span>
      <span class="go">→</span>
    </a>
  </li>
</ul>
```

## 4. Vis dem resultatet

Åpne sida lokalt så de ser den før den legges ut:

```
open <person>/<prosjekt>/index.html
```

Si hva du lagde, i én til to setninger, og spør om de vil endre noe. Ikke list opp alle designvalgene dine.

## 5. Så videre

Når de er fornøyde, går du over i `publish`-skillen. Ikke legg ut noe før de har sagt seg ferdige.
