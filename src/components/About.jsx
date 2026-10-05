import { skills } from '../data'

export default function About() {
  return (
    <section className="section about" id="om-meg">
      <div className="container about__inner">
        <div className="about__image" role="img" aria-label="Placeholderbilde">
          <div className="arch arch--small" />
        </div>
        <div>
          <p className="eyebrow">Om meg</p>
          <h2>Hei! Jeg er Suzana Sabic.</h2>
          <p className="lead">
            Bachelorstudent i informasjonsteknologi med fordypning i frontend- og mobilutvikling ved Høyskolen Kristiania. Jeg går nå tredje året og er ferdig utdannet våren 2027. Jeg er interessert i moderne webutvikling og UI/UX, og liker å kombinere kreativitet og teknologi for å bygge løsninger som både ser bra ut og fungerer godt i praksis.
          </p>
          <ul className="tags tags--lg">
            {skills.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}
