export default function CodeCard() {
    return (
        <div className="code" role="img">
            <div className="code__bar">
                <span /><span /><span />
                <small>suzana.js</small>
            </div>
            <pre>
                <code>
                    <span className="k">const</span> suzana = {'{'}
                    {'\n'}  <span className="p">rolle</span>: <span className="s">'Frontend-utvikler'</span>,
                    {'\n'}  <span className="p">skole</span>: <span className="s">'Høyskolen Kristiania'</span>,
                    {'\n'}  <span className="p">ferdig</span>: <span className="n">2027</span>,
                    {'\n'}  <span className="p">skills</span>: [<span className="s">'React'</span>, <span className="s">'Typescript'</span>, <span className="s">'Javascript'</span>, <span className="s">'HTML'</span>, <span className="s">'CSS'</span>, <span className="s">'UI/UX'</span>]
                    {'\n'}{'}'}
                </code>
            </pre>
        </div>
    )
}