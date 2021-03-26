import axios from 'axios'
import { getItem } from './LocalStorage'

// admin token
import { ADMINTOKEN } from './Constants'

const BASE_URL = ""

const endPoints = {

    login: "/userServer/login",
    register: "/userServer/register",
    evaluate: "/userServer/evaluate",
    alogin: "/adminServer/login",
    add: "/adminServer/add",
    update: "/adminServer/update"

}

function urlBuilder(endPoint, id = null) {
    if (id != null) {
        return BASE_URL + endPoints[endPoint] + "/" + id
    }
    else return BASE_URL + endPoints[endPoint]
}

async function POST_Request(endPoint, data, id = null) {

    let token = getItem('token')
    console.log("URL ",urlBuilder(endPoint, id))

    if(endPoint === 'alogin' || endPoint === 'add' || endPoint === 'update'){
        token = ADMINTOKEN
    }

    return axios.post(urlBuilder(endPoint, id), data, {
        headers: { 'Authorization': token ? `Bearer ${token}` : '', 'Content-Type': 'application/json' }
    }).then((response) => {
        return response
    }).catch((err) => {
        if(err.response && err.response.data) return err.response.data.error.message
        return "Error Occured"
    });

}

export default POST_Request