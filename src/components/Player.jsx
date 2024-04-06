import React from "react"
import './player.css'
import SideBar from "./SideBar.jsx"
import Body from "./Body.jsx"
import Footer from "./Footer.jsx"



export default function Player ({spotify}){
    return(
        <div className="player">
            <div className="player_body">
                <SideBar/>
                <Body spotify={spotify} />
            </div>
            <Footer spotify = {spotify}/>
        </div>
    
    )
}