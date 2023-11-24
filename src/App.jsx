import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Portfolio from './components/portfolio/Portfolio'
import Books from './components/books/Books'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
   <>
    <Header/>
    <Nav/>
    <About/>
    <Projects/>
    <Experience/>
    <Portfolio/>
    <Books/>
    <Contact/>
    <Footer/>
   </>
  )
}

export default App
