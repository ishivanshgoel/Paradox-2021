import React,{ useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

//loading screen
import LoaderHook from '../Loader/LoaderHook'

// Helpers
import GET_Request  from '../../Helper/GetRequest'

/**
 * Level 2 Route - /user/leaderboard
 * @author ishivanhgoel
 */

function Leaderboard() {
    const [data,setData] = useState(null)

    // loading screen
    const [loading, showLoader, hideLoader] = LoaderHook()

    useEffect(async ()=>{
        showLoader()
        const response = await GET_Request('leaderboard')
        setData(response.data)
        hideLoader()
    },[])

    //fetch from store
    const user = useSelector(state => state.user)

    const history = useHistory()

    if(user){
        return(
            data ? (
                <div>
                    {loading}
                    TABLE
                    { console.log(data) }
                </div>
            ):(null)
        ) 
    }
    
    history.push('/user')
    return null
}

export default Leaderboard
