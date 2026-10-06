import { skills } from '../data'

// Hver linje: i = innrykk, t = deler av linjen. En del er enten ren tekst eller [klasse, tekst].
const skillParts = skills.flatMap((skill, n) => [n > 0 && ', ', ['s', `'${skill}'`]]).filter(Boolean)

const lines = [
  { i: 0, t: [['k', 'const'], ' suzana = {'] },
  { i: 1, t: [['p', 'rolle'], ': ', ['s', "'Bachelorstudent'"], ','] },
  { i: 1, t: [['p', 'skole'], ': ', ['s', "'Høyskolen Kristiania'"], ','] },
  { i: 1, t: [['p', 'ferdig'], ': ', ['n', '2027'], ','] },
  { i: 1, t: [['p', 'ferdigheter'], ': [', ...skillParts, ']'] },
  { i: 0, t: ['}'], caret: true },
]

function Part({ part }) {
  if (typeof part === 'string') return part
  const [cls, text] = part
  return <span className={cls}>{text}</span>
}

export default function CodeCard() {
  return (
    <div className="code" role="img" aria-label="Kodebit som beskriver Suzana">
      <div className="code__bar">
        <span /><span /><span />
        <small>suzana.js</small>
      </div>
      <pre className="code__body">
        <code>
          {lines.map((line, n) => (
            <span className="line" style={{ '--i': line.i }} key={n}>
              <span>
                {line.t.map((part, k) => <Part part={part} key={k} />)}
                {line.caret && <span className="caret" aria-hidden="true" />}
              </span>
            </span>
          ))}
        </code>
      </pre>
    </div>
  )
}
