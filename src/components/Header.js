import React from 'react';
import './Header.css';

export default ({black})=>{
    return(
        <header className={black ? "black" : ''}>
            <div className="header--logo">
                <img src="https://img.elo7.com.br/product/original/2F57C45/poster-impresso-netflix-logo-basquete.jpg"/>
            </div>
            <div className="header--user">
                <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"/>
            </div>
        </header>
    )
}