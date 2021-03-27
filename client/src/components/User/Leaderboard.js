import React,{ useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import './Leaderboard.css'

//loading screen
import LoaderHook from '../Loader/LoaderHook'

// Helpers
import GET_Request  from '../../Helper/GetRequest'

/**
 * Level 2 Route - /user/leaderboard
 * @author ishivanhgoel
 */

function Leaderboard() {

    //fetch from store
    const user = useSelector(state => state.user)
    const id = useSelector((state)=>state.id)

    const history = useHistory()

    const [data,setData] = useState([{}])

    // loading screen
    const [loading, showLoader, hideLoader] = LoaderHook()

    useEffect(async ()=>{
        if(user){
            showLoader()
            const response = await GET_Request('leaderboard')
            setData(response.data.leaderboard)
            hideLoader()
        }
    },[])

    if(user){
        return(
            <>
            {loading}
                <div className="Leaderboard_heading">
                    <div className="Leaderboard_text">
                        <span className="blueheading">Leader</span><span>board</span>
                    </div>
                    <div className="Leaderboard_tablediv">
                        <table className="Leaderboard_table" cellPadding="6" cellSpacing="3">
                            <tr className="Leaderboard_head">
                                <th scope="col">Rank</th>
                                <th scope="col">Username</th>
                                <th scope="col">Level</th>
                            </tr>
                            {
                                data && data.map((member,index)=>{
                                    if(member._id == id)
                                        return(
                                        <tr className="Current_user Leaderboard_row">
                                            <td scope="row">{index+1}</td>
                                            <td>{member.userName}</td>
                                            <td>{member.score}</td>
                                        </tr>
                                )
                                })
                            }
                            {
                                data && data.map((member,index)=>{
                                    return(
                                    <tr className="Leaderboard_row">
                                        <td scope="row">{index+1}</td>
                                        <td>{member.userName}</td>
                                        <td>{member.score}</td>
                                    </tr>
                                )
                                })
                            }
                        </table>      
                    </div>
                </div>
            </>
        ) 
    }
    
    history.push('/user')
    return null
}

export default Leaderboard
