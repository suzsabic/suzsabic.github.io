import { skills, experience } from '../data'

export default function About() {
  return (
    <section className="section about" id="om-meg">
      <div className="container about__inner">
        <div className="about__image" role="img" aria-label="Plassholderbilde">
          <div className="arch arch--small" />
        </div>
        <div>
          <p className="eyebrow">Om meg</p>
          <h2>Litt om hvem jeg er</h2>
          <p className="lead">
            Plassholdertekst. Her kan du fortelle din historie, hvordan du kom inn i
            frontend-utvikling, og hva du verdsetter i arbeidet ditt.
          </p>
          <ul className="tags tags--lg">
            {skills.map((s) => <li key={s}>{s}</li>)}
          </ul>
          <ul className="timeline">
            {experience.map((e) => (
              <li key={e.year}>
                <span className="muted">{e.year}</span>
                <div>
                  <strong>{e.title}</strong>
                  <span className="muted"> · {e.place}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
