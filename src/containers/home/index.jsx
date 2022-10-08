import {FaFacebook, FaLinkedin, FaInstagram, FaTwitter}  from 'react-icons/fa'
import {Animate} from 'react-simple-animate'
import './styles.scss'
const Home = () => {
  return(
    <section className="home" id="home">
      <div className="home__text-wrapper">
        <h1 className="intro">
          Hello, I'm Wasim.
          <br />
          Full Stack Developer.
        </h1>
      </div>
      <Animate
        play = {true}
        duration= {1.5}
        delay= {1}
        start={{
          transform: 'translateY(600px)'
        }}
        end={{
          transform: 'translateX(0px)'
        }}
      >
        <div className="contact-me">
          <div className="contact-me__buttons-wrapper">
            <a href="/contact">Hire me</a>
            <a href="/resume.pdf" target="_blank">Download resume</a>
          </div>
          <div className="contact-me__socials-wrapper">
            <a href="https://www.linkedin.com/in/wasim-hyder-250040b1" target="_blank"><FaLinkedin size={32} /></a>
            <a href="https://facebook.com/wasimhyder09" target="_blank"><FaFacebook size={32} /></a>
            <a href="https://twitter.com/wasimhyder09" target="_blank"><FaTwitter size={32} /></a>
            <a href="https://instagram.com/wasimhyder09" target="_blank"><FaInstagram size={32} /></a>
          </div>
        </div>
      </Animate>
    </section>
  )
}

export default Home
