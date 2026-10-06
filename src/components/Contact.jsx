import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { profile } from '../data'

export default function Contact() {
  return (
    <>
      <section className="section container contact" id="kontakt">
        <p className="eyebrow">Kontakt</p>
        <a className="contact__mail" href={`mailto:${profile.email}`}>{profile.email}</a>
        <div className="socials">
          <a href="https://github.com/suzsabic" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://linkedin.com/in/suzana-s-53bb9a196" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </section>
      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} {profile.name}</div>
      </footer>
    </>
  )
}
