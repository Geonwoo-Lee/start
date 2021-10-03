import React from 'react'
import ShrtcodeApp from '../shorten/ShrtcodeApp'
import './css/shrt.css'
import empty from '../images/itsempty.png'

function GameInven() {
    return (
        <div>
        <img src = {empty} alt='hi' className="empty"/>
        <p>아직 URL을 저장 하지 않으셨어요 !</p>
       <div className='shrt_app'>
          <ShrtcodeApp/>
       </div>
    </div>   
    )
}

export default GameInven
