import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import CreateTeam from '../../components/CreateTeam'
import MissionVission from '../../components/MissionVission'
import AboutUs from '../../components/AboutUs'
import BuiltDiff from '../../components/BuiltDifferent'


const App = () => {
  return (
    <div className='mx-48 mt-20 '>
      <Nav />
      <BuiltDiff />
      <AboutUs />
      <MissionVission />
      <CreateTeam />
      <Footer />
    </div>
  )
}

export default App;
