import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { SETUSER } from '../../Reducers/ActionTypes'

//CSS
import './Leaderboard.css'

//loading screen
import LoaderHook from '../Loader/LoaderHook'

// Helpers
import GET_Request from '../../Helper/GetRequest'

// local storage
import { getItem } from '../../Helper/LocalStorage'

/**
 * Level 2 Route - /user/leaderboard
 * @author ishivanhgoel
 */

function Leaderboard() {

    const [loaded, setLoaded] = useState(false)

    //fetch from store
    const user = true
    // const user = useSelector(state => state.user)
    const id = useSelector((state) => state.id)

    const history = useHistory()
    const dispatch = useDispatch()

    const [data, setData] = useState([{}])

    // loading screen
    const [loading, showLoader, hideLoader] = LoaderHook()

    const redirect = ()=>{
        history.push("/")
    }

    useEffect(async () => {
        if (user) {
            showLoader()
            const response = await GET_Request('leaderboard')
            setData(response.data.leaderboard)
            hideLoader()
            setLoaded(true)
        } else {
            // start loading screen
            showLoader()
            let token = getItem('token')
            let username = getItem('username')
            let id = getItem('id')

            // verify token
            if (token) {
                // leaderboard route verifies token before giving out data
                const response = await GET_Request('leaderboard')

                if (response.data) {
                    dispatch({
                        type: SETUSER,
                        token: token,
                        username: username,
                        id: id
                    })
                    setData(response.data.leaderboard)
                   
                }

            } else{
                history.push("/user")
            }

            //hide loading screen
            hideLoader()
            setLoaded(true)
        }
    }, [user])

    if(!user) history.push("/user")

    return (
        user?(
        loaded?(
            <div>
                <div className="Leaderboard_heading">
                    <div className="Leaderboard_text">
                        <span className="blueheading">Leader</span><span>board</span>
                    </div>
                    <div className="Leaderboard_tablediv">
                        <table className="Leaderboard_table" cellPadding="6" cellSpacing="3">
                            <tbody>
                                <tr className="Leaderboard_head" >
                                    <th scope="col">Rank</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Level</th>
                                </tr>
                                {
                                    data && data.map((member, index) => {
                                        if (member._id === id)
                                            return (
                                                <tr className="Current_user Leaderboard_row">
                                                    <td >{index + 1}</td>
                                                    <td >{member.userName}</td>
                                                    <td >{member.score}</td>
                                                </tr>
                                            )
                                    })
                                }
                                {
                                    data && data.map((member, index) => {
                                        return (
                                            <tr className="Leaderboard_row" id={member._id}>
                                                <td scope="row">{index + 1}</td>
                                                <td >{member.userName}</td>
                                                <td >{member.score}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        ):(<div>{loading}</div>)):(
            <div>
                {redirect}
            </div>
            )
    )
}


export default Leaderboard
