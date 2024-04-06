import React from "react";
import './header.css'
import SearchIcon from "@mui/icons-material/Search";
import Avatar from '@mui/material/Avatar';
import { useDataLayerValue } from "../DataLayer";

export default function Header(){
    const [{user}, dispatch] = useDataLayerValue();

    return(
        <div className="header">
            <div className="header_left">
                <SearchIcon />
                <input
                placeholder="What do you want to play?"
                type="text"
                />
            </div>
            <div className="header_right">
                <Avatar src={user?.images[0]?.url} alt={user?.display_name}/>
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}