/* eslint-disable import/no-anonymous-default-export */
import React, {useState} from "react";
import MovieRow from './Styled'
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'

export default ({items,title}) => {
  const [scrollX, setScroolX] = useState(-1000);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth /2);
    if(x > 0) x = 0;
    setScroolX(x);
  }

   const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth /2);
    const listW = items.results.length *150;
    if((window.innerWidth - listW) > x) x = (window.innerWidth - listW) - 60;
    setScroolX(x);
  }

  return(
    <MovieRow>
      <h2>{title}</h2>


      <div className="movieRow-leftArrow" onClick={handleLeftArrow}>
        <FaAngleLeft fontSize={35}/>
      </div>

      <div className="movieRow-rightArrow" onClick={handleRightArrow}>
        <FaAngleRight fontSize={35}/>
      </div>


      <div className="movieRow-lisArea">
        <div className="movieRow-list" style={{
          marginLeft: scrollX,
          width: 150 * items.results.length,
        }}>
          {items.results.length > 0 && items.results.map((item, key) => (
            <div className="movieRow-item" key={key}>
              <img
                src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                alt={item.original_name}
              />
            </div>
          ))}
        </div>
      </div>
    </MovieRow>
  )
}
