import axios from 'axios'
import { getItem } from './LocalStorage'

// admin token
import { ADMINTOKEN } from './Constants'

const BASE_URL = ""

const endPoints = {
    // user auth
    leaderboard: "/userServer/leaderboard",
    logout: "/userServer/logout",
    nextlevel: "/userServer/nextlevel"
}

var urlBuilder = (endPoint, id = null) => {

    if (id != null) {
        return BASE_URL + endPoints[endPoint] + "/" + id
    }
    else return BASE_URL + endPoints[endPoint]

}

async function GET_Request(endPoint, id = null) {

    let token = getItem('token')
    
    return axios.get(urlBuilder(endPoint, id),{
            headers: { 'Authorization': token ? `Bearer ${token}` : '', 'Content-Type': 'application/json' }
        }).then((response) => {
            return response
        }).catch((err) => {
            if(err.response && err.response.data) return err.response.data.error.message
            return "Error Occured"
        })

}

export default GET_Request