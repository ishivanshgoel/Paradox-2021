import axios from 'axios'
import { getItem } from './LocalStorage'

// admin token
import { ADMINTOKEN } from './Constants'

const BASE_URL = "http://localhost:5000"

const endPoints = {

    login: "/userServer/login",
    register: "/userServer/register",
    evaluate: "/userServer/evaluate",
    alogin: "/adminServer/login"

}

function urlBuilder(endPoint, id = null) {
    if (id != null) {
        return BASE_URL + endPoints[endPoint] + "/" + id
    }
    else return BASE_URL + endPoints[endPoint]
}

function POST_Request(endPoint, data, id = null) {

    let token = getItem('token')

    if(endPoint === 'alogin'){
        token = ADMINTOKEN
    }
   
    console.log("Request URL ", urlBuilder(endPoint, id))

    console.log("Data ", data)

    return axios.post(urlBuilder(endPoint, id), data, {
        headers: { 'Authorization': token ? `Bearer ${token}` : '', 'Content-Type': 'application/json' }
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    });

}

export default POST_Request