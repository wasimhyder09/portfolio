import PageHeaderContent from '../../components/pageHeaderContent'
import {BsInfoCircleFill} from 'react-icons/bs'
import {personalData} from './utils'
import './styles.scss'
const About = () => {
  return(
    <section className="about" id="about">
      <PageHeaderContent
        headerText="About me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <h3 className="developerContent">Full Stack Developer</h3>
          <p>I'm a full stack developer with 7 years of experience in backend development and 1 year experience in front end development.
          I'm currently learnign React with NodsJS to earn the badge of MERN Stack developer and using PHP as backend, title of Full Stack Developer.</p>
          <h3 className="personalContent">Personal Information</h3>
          <ul>
            {
              personalData.map((item, key) => (
                <li key={key}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="about__content__serviceWrapper">
          service wrapper
        </div>
      </div>
    </section>
  )
}

export default About
