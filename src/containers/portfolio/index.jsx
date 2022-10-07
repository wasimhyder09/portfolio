import {useState} from 'react';
import PageHeaderContent from '../../components/pageHeaderContent'
import {AiFillProject} from 'react-icons/ai'
import {filterOptions} from './utils.js'
import {portfolioData} from './utils.js'
import './styles.scss'

const Portfolio = () => {
  const[filterValue, setFilterValue] = useState(1)
  const[hoveredIndex, setHoveredIndex] = useState(null)
  const handleFilter = (id) => {
    setFilterValue(id)
  }

  const filteredPortfolioData = filterValue === 1 ? portfolioData :
  portfolioData.filter(item => item.sectionId === filterValue)
  return(
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText = "My Portfolio"
        icon = {<AiFillProject size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {
            filterOptions.map((option) => (
              <li className={filterValue === option.id ? 'active' : ''} onClick={() => handleFilter(option.id)} key = {`filter${option.id}`}>{option.label}</li>
            ))
          }
        </ul>
        <div className="portfolio__content__cards">
          {
            filteredPortfolioData.map((item, key) => (
              <div onMouseEnter={() => setHoveredIndex(key)} onMouseLeave={() => setHoveredIndex(null)} key = {key} className="portfolio__content__cards__item">
                <div className="portfolio__content__cards__item__img-wrapper">
                  <a href={item.projectLink} target="_blank"><img src={item.image} alt="Project image" /></a>
                </div>
                <div className="overlay">
                  {
                    hoveredIndex === key && (
                      <div>
                        <p>{item.projectName}</p>
                        <button>Visit</button>
                      </div>
                    )
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Portfolio
