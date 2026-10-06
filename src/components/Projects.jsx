import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { projects } from '../data'
import ProjectModal from './ProjectModal'

export default function Projects() {
  const [active, setActive] = useState(null)

  return (
    <section className="section container" id="prosjekter">
      <div className="section__head">
        <p className="eyebrow">Utvalgt arbeid</p>
        <h2>Prosjekter</h2>
      </div>
      <div className="grid">
        {projects.map((p) => (
          <button type="button" className="card" key={p.id} onClick={() => setActive(p)}>
            <div className="card__top">
              <span className="card__icon" aria-hidden="true">
                <FontAwesomeIcon icon={p.icon} />
              </span>
            </div>
            <p className="card__type">{p.type}</p>
            <h3>{p.title}</h3>
            <p className="card__text">{p.description}</p>
            <ul className="tags">
              {p.tags.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </button>
        ))}
      </div>
      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  )
}
