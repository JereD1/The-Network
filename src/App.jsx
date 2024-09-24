import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import CreateTeam from './components/CreateTeam'
import MissionVission from './components/MissionVission'
import AboutUs from './components/AboutUs'
import BuiltDiff from './components/BuiltDifferent'
import Hero from './components/Hero'

const App = () => {
  return (
    <div>
        <Nav />
         <div className=' mx-2 mt-4  lg:mx-48 lg:mt-20 '>
      <Hero />
      <BuiltDiff />
      <AboutUs />
      <MissionVission />
      <CreateTeam />
    </div>
    <Footer />
    </div>
  )
}

export default App;
