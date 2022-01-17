import styled from "styled-components";


const Black = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 70px;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  transition: all ease 500ms;

  .navbar-logo{
    height: 25px;
  }

  .navbar-logo img{
    height: 100%;
  }

  .navbar-user{
    height: 30px;
  }

  .navbar-user img{
    height: 100%;
    border-radius: 4px;
}
`;

export default Black;
