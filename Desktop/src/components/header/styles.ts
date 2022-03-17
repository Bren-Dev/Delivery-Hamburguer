import styled from "styled-components";

export const Container = styled.div`
  background-color: #f4f4f4;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  padding: 2vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 20px;
  @media (max-width: 768px) {
    justify-content: space-between;
  }
  @media (min-width: 768px) {
    button{
      display:none ;
      visibility:hidden ;
}
  }

`;

export const DivLogo = styled.div`
  @media (max-width: 1440px) {
    img {
      width: 13vw;
    }
  }
  @media (max-width: 768px) {
    img {
      width: 22vw;
    }
  }
`;

export const SectionAllSearch = styled.div`
  display: flex;
  button{
   border: none;
   background: none;
 }
`;

export const SectionDelivery = styled.div`
  margin-right: 3vh;
  .delivery {
    color: #d80000;
    font-weight: 400;
    margin-top: 5px;
  }

  .adress {
    color: #656363;
    font-weight: 700;
    margin-bottom: 5px;
  }
  p {
    font-size: 12px;
    margin-left: 1.5vh;
  }
  img {
    margin-right: 1.5vh;
  }
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 230px;
  height: 48px;

  @media (max-width: 1440px) {
    width: 180px;
    height: 38px;
    p {
      font-size: 10px;
    }
  }
`;

export const SectionBusca = styled.div`
  input {
    background: #ffffff;
    border: 1px solid #ed3237;
    box-sizing: border-box;
    border-radius: 4px;
    width: 354px;
    height: 48px;
    padding-left: 2vh;

    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.33px;
  }
  @media (max-width: 1440px) {
    input {
      font-size: 8px;
      height: 38px;
      width: 200px;
    }
  }
  @media (max-width: 768px) {
    display:none ;
    visibility:hidden ;
  }
`;

export const SectionUser = styled.div`
  display: flex;
  font-weight: 400;
  font-size: 16px;
  line-height: 17px;
  letter-spacing: 0.2px;
  color: #ed3237;
  .DivAccount {
    margin-right: 2vh;
  }
  img {
    width: 32px;
    margin-right: 1vh;
  }
  div {
    display: flex;
    align-items: center;
  }
  @media (max-width: 1440px) {
    img {
      width: 20px;
    }
  }
  @media (max-width: 768px) {
   display:none ;
   visibility:hidden ;
  }
`;
