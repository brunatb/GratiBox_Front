import { useContext, useEffect } from "react"
import { useNavigate } from "react-router"
import UserContext from "../context/UserContext"

export default function NoRoute(){
    const navigate=useNavigate()
    const {login} = useContext(UserContext)
    
    useEffect(()=>{
        if(!login) navigate ("/")
        if(login && !login.user.planId) navigate("/plans")
        if(login && login.user.planId) navigate("/plan")
    },[login,navigate])
    return (
        <>
            There's nothing here!
        </>
    )
}