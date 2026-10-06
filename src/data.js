import { faLaptopCode, faMobileScreenButton, faPenRuler } from '@fortawesome/free-solid-svg-icons'

export const profile = {
  name: 'Suzana Sabic',
  email: 'suza_sabic@hotmail.com',
}

const lorem =
  'Placeholdertekst. Her kan du beskrive prosjektet: hva det gikk ut på, hvilke utfordringer du løste og hva du er mest fornøyd med.'

export const projects = [
  {
    id: 1, title: 'Prosjekt #1', type: 'Webapplikasjon', icon: faLaptopCode, tags: ['React', 'Typescript'], tone: 'sage',
    year: '2025', description: lorem,
    slides: ['sage', 'blush', 'sand'],
  },
  {
    id: 2, title: 'Prosjekt #2', type: 'Interaktiv prototype', icon: faPenRuler, tags: ['Figma', 'UI/UX'], tone: 'blush',
    year: '2025', description: lorem,
    slides: ['blush', 'sand', 'moss'],
  },
  {
    id: 3, title: 'Prosjekt #3', type: 'iOS-app', icon: faMobileScreenButton, tags: ['React Native', 'Swift'], tone: 'sand',
    year: '2026', description: lorem,
    slides: ['sand', 'sage', 'blush'],
  },
]

export const skills = [
  'React',
  'Typescript',
  'Javascript',
  'HTML & CSS',
  'Swift',
  'Kotlin',
  '.NET/C#',
  'SQL/MySQL',
  'Figma',
]
