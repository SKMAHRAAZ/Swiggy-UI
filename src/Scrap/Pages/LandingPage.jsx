import React from 'react'
import TopbarSection from '../Components/TopbarSection'
import Displayitems from '../Components/Displayitems'
import ChainSection from '../Components/ChainSection'
import FirmCollection from '../Components/FirmCollection'

const LandingPage = () => {
  return (
    <div>
        <TopbarSection/>
       <div className="landingSection">
       <Displayitems/>
       <ChainSection/>
       <FirmCollection/>
       </div>
    </div>
  )
}

export default LandingPage