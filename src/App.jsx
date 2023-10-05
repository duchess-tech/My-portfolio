import { useRef, useState } from 'react'
import Aboutme from './components/aboutme'
import Appreciation from './components/appreciation'
import Contact from './components/contactme'
import Footer from './components/footer'
import Myproject from './components/myprojects'
import Nav from './components/nav'
import Skills from './components/skills'
import Tools from './components/toolsused'
import './css/App.css'


function App() {
  const aboutmeRef = useRef(null);
  const skillsRef = useRef(null);
  const myprojectRef = useRef(null);
  const toolsRef = useRef(null);
  const contactRef = useRef(null);
  const refs = {
    aboutmeRef: aboutmeRef,
    skillsRef: skillsRef,
    myprojectRef: myprojectRef,
    toolsRef: toolsRef,
    contactRef: contactRef
  }


  return (
    <div>
      <Nav ref={refs} />
      <Aboutme ref={refs} />
      <Skills ref={refs} />
      <Myproject ref={refs} />
      <Contact ref={refs} />
      <Tools ref={refs} />
      <Appreciation />
      <Footer />
    </div>
  )
}

export default App
