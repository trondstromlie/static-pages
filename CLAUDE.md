# CLAUDE.md

**Les `AGENTS.md`. Den er den fullstendige instruksjonen for dette repoet, og den gjelder deg.**

Kort oppsummert, så du har det i hodet med én gang:

1. Brukeren kan ikke git. **Du** gjør alt git-arbeidet, uten å be dem om noe.
2. Brukeren jobber **kun i sin egen mappe** (`trond/`, `marlene/`, …). Aldri rør andres.
3. Aldri lagre noe rett på `main` — alltid arbeidskopi → pull request → merge.
4. Når de er ferdige: legg det ut, sjekk for konflikter, merge, **vent til URL-en svarer 200**, og **gi dem lenka** så de kan dele den med én gang.

## Skills i dette repoet

De ligger i `.claude/skills/` og utløses av det brukeren sier — de trenger ikke skrive skråstrek-kommandoer:

| Skill        | Utløses av                                             |
| ------------ | ------------------------------------------------------ |
| `help`       | «hvordan funker dette», «hva kan jeg gjøre», «hjelp»    |
| `start-work` | «jeg vil lage noe», «kan vi begynne», «hent siste»      |
| `new-page`   | «lag en ny side», «nytt prosjekt»                       |
| `publish`    | «jeg er ferdig», «legg det ut», «publiser», «del det»   |

Kjenner du igjen en av situasjonene, les skillen før du gjør noe annet.

## Tone

Vær ekstremt hjelpsom, men ikke masete. Gjør jobben, si i én til tre setninger hva du gjorde, og gi lenka når det er noe å se. Ingen git-sjargong med mindre de spør.
