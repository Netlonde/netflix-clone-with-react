/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Black from "./styled";

export default ({black}) =>{
  return(
    <Black style={black ? {background: 'rgba(0,0,0,0.8)'} : {background: 'transparent'}}>
      <div className="navbar-logo" >
        <a href="/">
          <img
            alt="Logo da netflix"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          />
        </a>
      </div>

      <div className="navbar-user">
        <a href="/">
          <img
            alt="ícone usuário"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          />
        </a>
      </div>
    </Black>
  )
}
