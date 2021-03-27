import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Countdown from './Countdown'
import Playarea from './Playarea'

/**
 * @author Sanika, ishivanshgoel
 * Level 2 Route - /user/play
 */

function Play() {

    const user = true
    const history = useHistory()


    //##### countodown-timer #####
    const countdownDate = new Date('March 10, 2021 00:00:00').getTime()
    const now = new Date().getTime()
    const distance = countdownDate - now
    //##### end countdown-timer #####

    return (

        !user ? (
            <div>
                {
                    history.push('/user')
                }
            </div>
        ) : (
                <div>
                    {
                        distance < 0 ? <Playarea /> : <Countdown countdownDate={countdownDate} />
                    }
                </div>
            )
    )
}

export default Play;
