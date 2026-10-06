import CodeCard from "./CodeCard"

export default function Hero() {
  return (
    <section className="hero container" id="top">
      <div className="hero__text">
        <p className="eyebrow">Introduksjon</p>
        <h1>
          Velkommen til min portefølje,
          <em> prosjekter innen frontend- og mobilutvikling.</em>
        </h1>
        <p className="lead">
          Jeg er Suzana, student ved Høyskolen Kristiania og ferdig utdannet våren 2027. Ta en titt på prosjektene mine, eller ta kontakt!
        </p>
        <div className="hero__actions">
          <a className="btn" href="#prosjekter">Se prosjekter</a>
          <a className="btn" href="#kontakt">Ta kontakt</a>
        </div>
      </div>
      <div>
        <CodeCard />
      </div>
    </section>
  )
}
