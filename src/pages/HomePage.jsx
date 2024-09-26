import Nav from '../components/Nav'
import Footer from '../components/Footer'
import CreateTeam from '../components/CreateTeam'
import MissionVission from '../components/MissionVission'
import AboutUs from '../components/AboutUs'
import BuiltDiff from '../components/BuiltDifferent'
import Hero from '../components/Hero'

const HomePage = () => {
  return (
    <div className='homepage-body'>
      <Nav />
      <div className='mx-4 lg:mx-48'>
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

export default HomePage;
