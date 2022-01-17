/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Featured from "./Styled";


export default ({item}) => {
  let firstDate = new Date(item.first_air_date);
  let genres = [];

  for(let i in item.genres){
    genres.push(item.genres[i].name);
  }

  const responsiveDescription = (description) =>{
    if(description.length > 120){
      return (description.substring(0, 200) + '...');
    }
    return description;
  }

  return(
    <Featured
      className="featured"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})` ,
      }}
    >

      <div className="featured-vertical">
        <div className="featured-horizontal">
          <div className="featured-name">{item.original_name}</div>

          <div className="featured-info">
            <div className="featured-points">{item.vote_average * 10}% relevância </div>
            <div className="featured-year">{firstDate.getFullYear()}</div>
            <div className="featured-seasons">
              {item.number_of_seasons} temporada{(item.number_of_seasons) > 1 ? 's' : ''}
              </div>
          </div>

          <div className="featured-description">
            {responsiveDescription(item.overview)}
          </div>

          <div className="featured-buttons">
            <a href="/" className="featured-playButton">Assistir</a>
            <a href="/" className="featured-addOnListButton">+ Minha Lista</a>
          </div>

          <div className="featured-genres"><strong>Gêneros:</strong> {genres.join(', ')}</div>
        </div>
      </div>
    </Featured>

  )
}
