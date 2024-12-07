import React from 'react'
import Hero from '../Hero'
import Categories from '../Categories'
import Interior from '../Interior'
import Colors from '../Colors'
import HowTo from '../HowTo'
import Inspitation from '../Inspitation'
import Footer from '../Footer'
import Award from '../Award'

const LandingPage = () => {
  return (
    <div>
      <>
      <Hero />
      <Categories/>
      <Interior/>
      <Colors />
      {/* <HowTo/> */}
      <Award />
      <Inspitation />
      </>
    </div>
  )
}

export default LandingPage
