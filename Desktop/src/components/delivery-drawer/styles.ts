import styled from 'styled-components';

export const Container = styled.div`
  
  width: 80%;
  position: fixed;
  height: 100%;
  top: 0;
  background-color: #FFFFFF;
  z-index: 101;
  transition: 0.2s ease-in-out;
  color: white;
  border-left: 1px solid #3b4253;
  right: 0;
 button{
   border: none;
   background: none;
 }
 .div-button{
    display: flex;
   justify-content:center ;
   align-items:center ;
   flex-direction:column ;
 }
`;



export const SectionBusca = styled.div`
  input {
    margin-top:5vh;
    background: #ffffff;
    border: 1px solid #ed3237;
    box-sizing: border-box;
    border-radius: 4px;
    width: 204px;
    height: 28px;
    padding-left: 2vh;
    font-weight: 400;
    font-size: 9px;
    letter-spacing: 0.33px;
  }
`;


export const SectionUser = styled.div`
  display: flex;
  justify-content:space-around ;
  width:80% ;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.2px;
  color: #ed3237;
  .DivAccount {
    margin-right: 10vh;
  }
  img {
    width: 22px;
   margin-bottom:0 ;
  }
  p{
    margin-top: 0;
  }
`;

