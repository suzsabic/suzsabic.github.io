import { profile } from '../data'

export default function Contact() {
  return (
    <>
      <section className="section container contact" id="kontakt">
        <p className="eyebrow">Kontakt</p>
        <h2>La oss lage noe fint sammen</h2>
        <a className="contact__mail" href={`mailto:${profile.email}`}>{profile.email}</a>
        <div className="socials">
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">Instagram</a>
        </div>
      </section>
      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} {profile.name}</div>
      </footer>
    </>
  )
}
