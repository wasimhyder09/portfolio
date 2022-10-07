import imageOne from '../../images/1.jpg'
import imageTwo from '../../images/2.jpg'
import imageThree from '../../images/3.jpg'
import imageFour from '../../images/4.jpg'
import imageFive from '../../images/5.jpg'
export const portfolioData = [
  {
    sectionId : 2,
    projectName: 'Google',
    projectLink: 'https://google.com',
    image: imageOne
  },
  {
    sectionId : 3,
    projectName: 'Youtube',
    projectLink: 'https://youtube.com',
    image: imageTwo
  },
  {
    sectionId : 2,
    projectName: 'LinkedIn',
    projectLink: 'https://linkedin.com',
    image: imageThree
  },
  {
    sectionId : 3,
    projectName: 'Twitter',
    projectLink: 'https://twitter.com',
    image: imageFour
  },
  {
    sectionId : 2,
    projectName: 'Facebook',
    projectLink: 'https://facebook.com',
    image: imageFive
  }
]

export const filterOptions = [
  {
    label: 'All',
    id: 1
  },
  {
    label: 'Development',
    id: 2
  },
  {
    label: 'Design',
    id: 3
  }
]
