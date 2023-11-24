import React from 'react'
import './projects.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Projects = () => {
  return (
    <section id = 'projects'>
      <h2>My Experience</h2>

      <div className=" container experience_container">
        <div className="experience_frontend">
          <h3>OSI Digital</h3>
          <div>
            <article>
              <div className='boxx'>
                <h4>Software Engineer Intern</h4>
                <small className='text-light'>Jun 2023 - Jul 2023</small>
              </div>
              <div className='boxx'>
                <ul>
                    <li className='text-light-inside'>Implemented a Flask-based REST API for ONEScan, achieving 84% accuracy and serving 1200 customers. Integrating AWS S3 for document retrieval, I utilized advanced image processing and OCR technology to achieve a 96% precision rate. Exploring state-of-the-art open-source models, I contributed to a system automating invoice and sales order data extraction, potentially saving $600/month.</li>
                </ul>
              </div>
            </article>
          </div>
        </div>

        <div className="experience_frontend">
          <h3>Honeywell</h3>
          <div>
          <article>
              <div className='boxx'>
                <h4>Software Engineer I</h4>
                <small className='text-light'>Aug 2021 - Aug 2022</small>
              </div>
              <div className='boxx'>
                <ul>
                    <li className='text-light-inside'>Effectively managing system change requests in the CorePT formatting module, I implemented navigational data modifications across five builds using SQL and PL/SQL. Collaborating with developers, I conducted rigorous security analyses for ComPT, resulting in a notable 15% reduction in endpoint vulnerabilities. Additionally, I led efficiency improvements in Stakeholders Request Board Automation and Request Form apps, saving 7 hours weekly. As a mentor, I guided three interns in Spring MVC and core processing workflow.</li>
                </ul>
              </div>
            </article>
          </div>
        </div>

        <div className="experience_backend_2">
        <h3>Honeywell</h3>
          <div>
            <article >
              <div className='boxx'>
                <h4>Software Engineer Intern</h4>
                <small className='text-light'>Feb 2021 - Jul 2021</small>
              </div>
              <div className='boxx'>
                <ul>
                    <li className='text-light-inside'>Designed and implemented "Stakeholders Request Board Automation," reducing processing time by 30% and improving resource allocation. Integrating it into a Struts application resulted in a 25% reduction in compatibility issues. This initiative led to a significant 20-hour weekly productivity gain, alongside the development of a robust API for efficient data retrieval from Rational ClearCase.</li>
                </ul>
              </div>
            </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
