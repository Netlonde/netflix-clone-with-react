import styled from "styled-components";

const MovieRow = styled.div`
  margin-bottom: 30px;

  h2{
    margin-left: 30px;
  }

  .movieRow-lisArea{
    overflow-x: hidden;
    padding-left: 30px;
  }

  .movieRow-item{
    display: inline-block;
    width: 150px;
    height: 224px;
    cursor: pointer;
    transform: scale(0.9);
    transition: all ease 250ms;
  }

  .movieRow-item:hover{
    transform: scale(1);
  }

  .movieRow-list{
    transition: all ease 500ms;
  }

  .movieRow-item img{
    width: 100%;
    height: 100%;
  }

  .movieRow-leftArrow,
  .movieRow-rightArrow{
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 225px;
    cursor: pointer;
    background-color: black;
    opacity: 0;
    z-index: 2;
  }


  .movieRow-leftArrow{
    left: 0;
  }

  .movieRow-rightArrow{
    right: 0;
  }

  :hover .movieRow-leftArrow,
  :hover .movieRow-rightArrow{
    opacity: 0.5;
  }

  @media(max-width:780px){
    .movieRow-leftArrow,
    .movieRow-rightArrow{
      opacity: 0.5;
    }


  }

`;

export default MovieRow;
