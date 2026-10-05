import { useEffect, useRef, useState } from 'react'

export default function ProjectModal({ project, onClose }) {
  const [index, setIndex] = useState(0)
  const closeRef = useRef(null)
  const count = project.slides.length

  const go = (dir) => setIndex((i) => (i + dir + count) % count)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose, count])

  return (
    <div className="modal" onClick={onClose}>
      <div
        className="modal__panel"
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        onClick={(e) => e.stopPropagation()}
      >
        <button ref={closeRef} className="modal__close" onClick={onClose} aria-label="Lukk">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor"
            strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>

        <div className="slideshow">
          <div className="slideshow__track" style={{ transform: `translateX(-${index * 100}%)` }}>
            {project.slides.map((tone, i) => (
              <div className={`slide tone-${tone}`} key={i} role="img"
                aria-label={`Bilde ${i + 1} av ${count}`}>
                <span>{String(i + 1).padStart(2, '0')}</span>
              </div>
            ))}
          </div>
          <button className="slideshow__arrow slideshow__arrow--prev" onClick={() => go(-1)}
            aria-label="Forrige bilde">‹</button>
          <button className="slideshow__arrow slideshow__arrow--next" onClick={() => go(1)}
            aria-label="Neste bilde">›</button>
          <div className="slideshow__dots">
            {project.slides.map((_, i) => (
              <button key={i} className={i === index ? 'is-active' : ''}
                onClick={() => setIndex(i)} aria-label={`Gå til bilde ${i + 1}`} />
            ))}
          </div>
        </div>

        <div className="modal__info">
          <div>
            <p className="eyebrow">{project.type}</p>
            <h3>{project.title}</h3>
            <p className="lead">{project.description}</p>
            <ul className="tags tags--lg">
              {project.tags.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </div>
          <dl className="meta">
            <div><dt>År</dt><dd>{project.year}</dd></div>
            <div><dt>Rolle</dt><dd>{project.role}</dd></div>
          </dl>
          <div className="modal__links">
            <a className="btn" href="#">Se live</a>
            <a className="btn" href="#">Kildekode</a>
          </div>
        </div>
      </div>
    </div>
  )
}
