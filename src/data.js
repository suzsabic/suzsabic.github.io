import hjem from './assets/revivegames/hjem.jpg'
import forum from './assets/revivegames/forum.jpg'
import profil from './assets/revivegames/profil.jpg'
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
    id: 2, title: 'ReviveGames', type: 'Interaktiv prototype', icon: faPenRuler, tags: ['Figma', 'UI/UX'], tone: 'blush',
    year: '2025',
    description:
      'Prototype av en nettside for brukere som ønsker tilgang til spill som ikke lenger er tilgjengelige. Nettsiden har et spillbibliotek, et forum og en egen brukerprofil. Vi startet med spørreundersøkelser og low-fidelity skisser, og bygde deretter den interaktive prototypen i Figma.',
    link: {
      label: 'Åpne prototype i Figma',
      href: 'https://www.figma.com/proto/aVlGbl3QMHpYvmcqSBIkAt/ReviveGames?node-id=3486-882&starting-point-node-id=3486%3A882&t=aBZ6WylDzuC3yV1J-1',
    },
    slides: [
      { src: hjem, alt: 'ReviveGames, forsiden med introduksjon og månedens nyheter' },
      { src: forum, alt: 'ReviveGames, forumet med mest aktive diskusjoner' },
      { src: profil, alt: 'ReviveGames, brukerprofil med venner og favorittspill' },
    ],
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
