import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 10px;

  a{
    color: white;
    text-decoration: none;
    opacity: 1;
    transition: all ease 150ms;
  }

  a:hover{
    opacity: 0.6;
  }

  .heart{
    color: red;
  }
`;

export default Footer;
