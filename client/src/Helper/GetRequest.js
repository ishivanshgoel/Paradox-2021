import axios from 'axios'
import { getItem } from './LocalStorage'

// admin token
import { ADMINTOKEN } from './Constants'

const BASE_URL = "https://paradox21.azurewebsites.net"

const endPoints = {
    // user auth
    leaderboard: "/userServer/leaderboard",
    logout: "/userServer/logout",
    nextlevel: "/userServer/nextlevel",

    // admin
    all: "/adminServer/getall"
}

var urlBuilder = (endPoint, id = null) => {

    if (id != null) {
        return BASE_URL + endPoints[endPoint] + "/" + id
    }
    else return BASE_URL + endPoints[endPoint]

}

async function GET_Request(endPoint, id = null) {

    let token = getItem('token')

    if(endPoint === 'all'){
        token = ADMINTOKEN
    }
    
    return axios.get(urlBuilder(endPoint, id),{
            headers: { 'Authorization': token ? `Bearer ${token}` : '', 'Content-Type': 'application/json' }
        }).then((response) => {
            return response
        }).catch((err) => {
            if(err.response && err.response.data && err.response.data.error) return err.response.data.error.message
            return "Error Occured"
        })

}

export default GET_Request