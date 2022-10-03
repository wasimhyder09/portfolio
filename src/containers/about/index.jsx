import PageHeaderContent from '../../components/pageHeaderContent'
import {BsInfoCircleFill} from 'react-icons/bs'
import {DiApple, DiAndroid} from 'react-icons/di'
import {FaDev, FaDatabase} from 'react-icons/fa'
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
          I'm currently learnign React with NodsJS to earn the badge of MERN Stack developer and using PHP as backend, title of Full Stack Developer. My next phase of learning after this tutorial is to learn about CSS and HTML via Scrimba course. Then I'll learn NodeJS and ExpressJS. After that, I will learn MongoDB to earn MERN Stack Developer role and in the end, I will learn Laravel to become Full Stack Developer.<br /> When I have achieved that role, then I will start applying as Full Stack and MERN Developer to switch my career from PHP & Drupal developer.</p>
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
        <div className="about__content__servicesWrapper">
          <div className="about__content__servicesWrapper__innerContent">
            <div>
              <DiApple color="var(--selected-theme-main-color)" size={60} />
            </div>
            <div>
              <FaDatabase color="var(--selected-theme-main-color)" size={60} />
            </div>
            <div>
              <DiAndroid color="var(--selected-theme-main-color)" size={60} />
            </div>
            <div>
              <FaDev color="var(--selected-theme-main-color)" size={60} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
