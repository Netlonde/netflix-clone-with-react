import styled from "styled-components";

const Featured = styled.section`
  height: 100vh;
  margin-bottom: 30px;

  .featured-vertical{
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #111 20%, transparent 80%);
  }

  .featured-horizontal{
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: inherit;
    height: inherit;
    background: linear-gradient(to right, #111 30%, transparent 70%);
    padding: 70px 0 120px 30px;
  }

  .featured-name{
    font-size: 3.8rem;
    font-weight: bold;
  }

  .featured-info{
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 15px;
  }

  .featured-points,
  .featured-year,
  .featured-seasons{
    display: inline-block;
    margin-right: 15px;
  }

  .featured-points{
    color: #46d369;
  }

  .featured-description{
    margin-top: 15px;
    color: #999;
    font-size: 1.3rem;
    width: 40%;
  }

  .featured-buttons{
    margin-top: 15px ;
  }

  .featured-addOnListButton,
  .featured-playButton{
    display: inline-block;
    font-size: 1.3rem;
    font-weight: bold;
    padding: 12px 25px;
    border-radius: 5px;
    text-decoration: none;
    opacity: 1;
    transition: all ease 200ms;
  }

  .featured-playButton{
    background-color: white;
    color: black;
  }

  .featured-playButton:hover{
    opacity: 0.7;
  }

  .featured-addOnListButton{
    background-color: #333;
    color: white;
    margin-left: 10px;
  }

  .featured-addOnListButton:hover{
    opacity: 0.7;
  }

  .featured-genres{
    color: #999;
    margin-top: 15px;
  }

  @media(max-width: 780px){
    .featured-name{
      font-size: 40px;
    }

    .featured-info{
      font-size: 16px;
    }

    .featured-description{
      font-size: 14px;
      width: 60%;
    }

    .featured-addOnListButton,
    .featured-playButton{
      font-size: 16px;
    }

    .featured-genres{
      font-size: 14px;
    }
  }

`;

export default Featured
