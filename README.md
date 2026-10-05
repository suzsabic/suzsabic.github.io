# Portefølje

Min personlige portefølje som viser prosjekter innen frontend- og mobilutvikling.

**Live:** [suzsabic.github.io](https://suzsabic.github.io)

## Teknologier

- [React](https://react.dev) og [Vite](https://vite.dev)
- Vanlig CSS (ingen rammeverk)
- Publisert med GitHub Pages og GitHub Actions

## Struktur

```
src/
├── components/   # Header, Hero, Projects, ProjectModal, About, Contact
├── data.js       # tekst, prosjekter og ferdigheter
├── index.css     # farger, fonter og stil
└── main.jsx
```

Innholdet (prosjekter, ferdigheter, e-post) endres i `src/data.js`. Farger og fonter ligger som CSS-variabler øverst i `src/index.css`.

## Publisering

Siden bygges og publiseres automatisk til GitHub Pages hver gang det pushes til `main`. Oppsettet ligger i `.github/workflows/deploy.yml`.

## Kontakt

- [LinkedIn](https://linkedin.com/in/suzana-s-53bb9a196)
