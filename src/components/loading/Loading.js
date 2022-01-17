/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Loading from "./styled";


export default () =>{
    return(
      <Loading>
        <img
          alt="tela de carregamento"
          src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif"
          width={500}
        />
      </Loading>
    )
}
