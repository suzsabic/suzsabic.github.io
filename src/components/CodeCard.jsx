export default function CodeCard() {
  return (
    <div className="code" role="img" aria-label="Kodebit som beskriver Suzana">
      <div className="code__bar">
        <span /><span /><span />
        <small>suzana.js</small>
      </div>
      <pre className="code__body">
        <code>
          <span className="line">
            <span><span className="k">const</span> suzana = {'{'}</span>
          </span>
          <span className="line line--prop">
            <span><span className="p">rolle</span>: <span className="s">'Frontend-utvikler'</span>,</span>
          </span>
          <span className="line line--prop">
            <span><span className="p">skole</span>: <span className="s">'Høyskolen Kristiania'</span>,</span>
          </span>
          <span className="line line--prop">
            <span><span className="p">ferdig</span>: <span className="n">2027</span>,</span>
          </span>
          <span className="line line--prop">
            <span>
              <span className="p">skills</span>: [<span className="s">'React'</span>, <span className="s">'Typescript'</span>,{' '}
              <span className="s">'Javascript'</span>, <span className="s">'HTML'</span>, <span className="s">'CSS'</span>,{' '}
              <span className="s">'UI/UX'</span>]
            </span>
          </span>
          <span className="line">
            <span>{'}'}<span className="caret" aria-hidden="true" /></span>
          </span>
        </code>
      </pre>
    </div>
  )
}
