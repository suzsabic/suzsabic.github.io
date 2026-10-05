import { useState } from 'react'
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
            <div className={`card__img tone-${p.tone}`} role="img" aria-label="Placeholderbilde">
              <span>{String(p.id).padStart(2, '0')}</span>
            </div>
            <div className="card__body">
              <div>
                <h3>{p.title}</h3>
                <p className="muted">{p.type}</p>
              </div>
              <ul className="tags">
                {p.tags.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </div>
          </button>
        ))}
      </div>
      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  )
}
