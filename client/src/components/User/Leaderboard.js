import React from 'react'
import { useHistory } from 'react-router-dom'

/**
 * Level 2 Route - /user/leaderboard
 * @author ishivanhgoel
 */

function Leaderboard() {

    //fetch from store
    const user = false

    const history = useHistory()

    return (

        !user ? (
            <div>
                {
                    history.push('/user/play')
                }
            </div>
        ) : (
                <div>
                    <h1>Leaderboard</h1>
                </div>
            )
    )
}

export default Leaderboard
