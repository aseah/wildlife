import React from 'react'
import {Link} from 'react-router-dom'

const welcomeContainer = (props) => {
    return(
        <>
          <div className="splash-background">
            <div className="welcome-banner">
                <p className="slogan flicker">Music for everyone.</p>
                <p className="small splash-motto">Millions of songs. No credit card needed.</p>  
            {/* <Link to="/signup" className="session-button small getfirefyfree-button">   GET FIREFY FREE   </Link>  */}
            </div>
          </div>
        </>
    )
}

export default welcomeContainer