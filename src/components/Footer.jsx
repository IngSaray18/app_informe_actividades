import React from 'react';
import styled from 'styled-components';
import InfoOutlineIcon from '@rsuite/icons/InfoOutline';
const FooterContainer = styled.footer`
  position: absolute;
bottom: -150px;
  width: 100%;
  background-color: #333;
  color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;

`;

const Copyright = styled.p`
  margin:0px;
  margin-right: 10px;
  text-align: center;
`;

const Contenido = styled.div`
  
  display: flex;
  justify-content: space-between;
`

function Footer() {
  return (
    <FooterContainer>
      <Copyright>&copy; 2023 DERNApp</Copyright>
      <Copyright> <a href="https://www.linkedin.com/in/pedro-saray-cevallos-378ba923a/"> <InfoOutlineIcon fontSize='large' />    </a>   </Copyright>
    </FooterContainer>
  );
}

export default Footer;
