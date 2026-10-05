export const profile = {
  name: 'Ditt Navn',
  role: 'Frontend-utvikler',
  tagline: 'Jeg bygger rolige, tilgjengelige og vakre nettopplevelser.',
  email: 'hei@dittnavn.no',
}

const lorem =
  'Plassholdertekst. Her kan du beskrive prosjektet: hva det gikk ut på, hvilke utfordringer du løste og hva du er mest fornøyd med.'

export const projects = [
  {
    id: 1, title: 'Prosjekt Én', type: 'Nettbutikk', tags: ['React', 'CSS'], tone: 'sage',
    year: '2024', role: 'Frontend-utvikler', description: lorem,
    slides: ['sage', 'blush', 'sand'],
  },
  {
    id: 2, title: 'Prosjekt To', type: 'Dashboard', tags: ['TypeScript', 'D3'], tone: 'blush',
    year: '2024', role: 'Frontend-utvikler', description: lorem,
    slides: ['blush', 'sand', 'moss'],
  },
  {
    id: 3, title: 'Prosjekt Tre', type: 'Landingsside', tags: ['Vite', 'GSAP'], tone: 'sand',
    year: '2023', role: 'Design & utvikling', description: lorem,
    slides: ['sand', 'sage', 'blush'],
  },
  {
    id: 4, title: 'Prosjekt Fire', type: 'Mobilapp', tags: ['React Native'], tone: 'moss',
    year: '2023', role: 'Frontend-utvikler', description: lorem,
    slides: ['moss', 'sand', 'sage'],
  },
]

export const skills = [
  'HTML & CSS',
  'JavaScript',
  'React',
  'TypeScript',
  'Tilgjengelighet',
  'Figma',
]

export const experience = [
  { year: '2024 — nå', title: 'Stillingstittel', place: 'Firmanavn' },
  { year: '2022 — 2024', title: 'Stillingstittel', place: 'Firmanavn' },
  { year: '2019 — 2022', title: 'Utdanning', place: 'Skole / universitet' },
]
