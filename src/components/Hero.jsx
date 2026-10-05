import { profile } from '../data'

export default function Hero() {
  return (
    <section className="hero container" id="top">
      <div className="hero__text">
        <p className="eyebrow">{profile.role}</p>
        <h1>
          Jeg bygger rolige nettopplevelser
          <em> med omtanke for detaljene.</em>
        </h1>
        <p className="lead">
          Her kommer en kort introduksjon om deg selv. Noen få setninger om hva du
          liker å bygge og hva som driver deg.
        </p>
        <div className="hero__actions">
          <a className="btn" href="#prosjekter">Se prosjekter</a>
          <a className="btn" href="#kontakt">Ta kontakt</a>
        </div>
      </div>
      <div className="hero__image" role="img" aria-label="Plassholder for portrett">
        <div className="arch" />
        <span className="hero__leaf" aria-hidden="true" />
      </div>
    </section>
  )
}
