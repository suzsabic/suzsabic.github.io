import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faArrowUpRightFromSquare, faXmark } from '@fortawesome/free-solid-svg-icons'

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
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <div className="slideshow">
          <div className="slideshow__track" style={{ transform: `translateX(-${index * 100}%)` }}>
            {project.slides.map((slide, i) => (
              typeof slide === 'string' ? (
                <div className={`slide tone-${slide}`} key={i} role="img"
                  aria-label={`Bilde ${i + 1} av ${count}`}>
                  <span>{String(i + 1).padStart(2, '0')}</span>
                </div>
              ) : (
                <img className="slide slide--img" key={i} src={slide.src} alt={slide.alt} />
              )
            ))}
          </div>
          <button className="slideshow__arrow slideshow__arrow--prev" onClick={() => go(-1)}
            aria-label="Forrige bilde">
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button className="slideshow__arrow slideshow__arrow--next" onClick={() => go(1)}
            aria-label="Neste bilde">
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
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
            {project.link && (
              <a className="btn modal__link" href={project.link.href} target="_blank" rel="noopener noreferrer">
                {project.link.label}
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            )}
          </div>
          <dl className="meta">
            <div><dt>År</dt><dd>{project.year}</dd></div>
          </dl>
        </div>
      </div>
    </div>
  )
}
