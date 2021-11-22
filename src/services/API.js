import axios from 'axios'

const { REACT_APP_BASE_URL } = process.env

const BASE_URL = REACT_APP_BASE_URL ? REACT_APP_BASE_URL : 'http://localhost:4000/'

function config(token) {
    return {
        headers: { Authorization: `Bearer ${token}` },
    };
}

function postSignUp(body){
    return axios.post(`${BASE_URL}sign-up`, body)
}
function postSignIn(body){
    return axios.post(`${BASE_URL}sign-in`, body)
}
function postPlan(token, body){
    return axios.post(`${BASE_URL}plan`, body, config(token))
}
function getPlan(token){
    return axios.get(`${BASE_URL}plan`, config(token))
}

export {
    postSignUp,
    postSignIn,
    postPlan,
    getPlan
}