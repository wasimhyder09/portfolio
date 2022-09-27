import {useState, useEffect} from 'react'
import setTheme from '../../helpers/theme'
import {ImCog} from 'react-icons/im'
import './styles.scss'
const colorsArray = [
  {
    id:'yellow',
    bgColor: '#ffdd40'
  },
  {
    id:'red',
    bgColor: '#e82a2a'
  },
  {
    id:'green',
    bgColor: '#6ac045'
  },
  {
    id:'blue',
    bgColor: '#5078ff'
  }
]
const Theme = () => {
  const [currentTheme, setCurrentTheme] = useState('yellow')
  const [toggle, setToggle] = useState(false)
  const handleToggleTheme = (currentId) => {
    setCurrentTheme(currentId)
    setToggle(false)
  }

  useEffect(() => {
    setTheme(currentTheme)
  }, [currentTheme])
   return(
    <div className={`theme-wrapper ${toggle? "active" : ""}`}>
      <div className="theme-wrapper__toggle-icon">
        <ImCog onClick={() => setToggle(!toggle)} size={40} />
      </div>
      <div className="theme-wrapper__menu">
        <h4>Choose theme</h4>
        <ul>
          {colorsArray.map((item, key) => (
            <li onClick={() => handleToggleTheme(item.id)} key={key} style={{background: item.bgColor}}></li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Theme
