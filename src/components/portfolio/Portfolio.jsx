import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG5,
    title: 'Maternal Health Risk Level Prediction',
    github: 'https://github.com/divija-kanumury',
    demo: 'Spearheaded data processing for accurate maternal risk prediction, employing various feature selection techniques to reduce features by 44%. This contributed to a real-world analytics project, guiding the selection of a minimal set of IoMT devices to influence cost-effective future designs'
  },
  {
    id: 1,
    image: IMG6,
    title: 'Parkinson’s Disease from a Digital Health Perspective',
    github: 'https://github.com/divija-kanumury',
    demo: 'Reviewed the role of digital health in Parkinson\'s Disease, emphasizing its potential impact. Explored challenges and digital solutions, achieving a 20% improvement in early symptom detection. Investigated AI and Virtual Reality for personalized treatment, showcasing a 15% increase in efficacy in clinical studies.'
  },
  {
    id: 1,
    image: IMG4,
    title: 'Painting Generator Using Cycle GAN',
    github: 'https://github.com/divija-kanumury',
    demo: 'Developed a Cycle GAN with TensorFlow to generate 7,000 to 10,000 Monet-style paintings using adversarial learning. Through careful experimentation and addressing mode collapse, achieved a stable model with an impressive 73.2 inception score.'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Do Your Homework',
    github: 'https://github.com/divija-kanumury',
    demo: 'Contributed to Dr. Patrick Traynor\'s research on reproducibility in top security conference papers, achieving a 31% reproducibility rate. Also, developed Python and Matlab models for voice assistant security and behavioral authentication using insights from innovative research papers and analyzed brainwave data from 38 participants.'
  },
  {
    id: 3,
    image: IMG3,
    title: 'BookRec.',
    github: 'https://github.com/divija-kanumury',
    demo: 'Implemented a book recommendation system using NumPy, pandas, scikit-learn, and Streamlit, achieving a 25% boost in personalized recommendations. The project attained an impressive 82% recommendation accuracy.'
  }
]
const Portfolio = () => {
  return (
    <section id = 'portfolio'>
      <h5>My recent work</h5>
      <h2>Projects</h2>

      <div className='container portfolio_container'>
       {
        data.map(({id,image,title,github,demo}) => {
          return (
            <article key={id} className='portfolio_item'>
              <div className='portfolio_item-image'>
                <img src={image} alt={title}/>
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <p>{demo}</p>
              {/*  <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btm-primary' target='_blank'>Live Demo</a> */}
              </div>
            </article>
          )     
       }) 
      }
      </div>
    </section>
  )
}

export default Portfolio
