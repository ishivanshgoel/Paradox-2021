import axios from 'axios'

const BASE_URL = "http://localhost:5000"

const endPoints = {

    login: "/user/login",
    register: "/user/register",
    evaluate: "/user/evaluate",

}

function urlBuilder(endPoint, id = null) {
    if (id != null) {
        return BASE_URL + endPoints[endPoint] + "/" + id
    }
    else return BASE_URL + endPoints[endPoint]
}

function POST_Request(endPoint, data, id = null) {

    let token = localStorage.getItem("token")

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