import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  margin-top: 10vh;
  margin-bottom: 5vh;
  display: flex;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const SectionFood = styled.div`
  @media (max-width: 768px) {
    margin-bottom: 10vw;
  }
`;

export const DivOffer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #4e4e4e;
  h1 {
    font-weight: 500;
    font-size: 28px;
    margin-bottom: 5vh;
  }
  p {
    font-weight: 400;
    font-size: 20px;
    width: 597px;
  }

  @media (max-width: 1440px) {
    p {
      font-size: 1.5vw;
      width: 30vw;
    }
    h1 {
      font-size: 2vw;
    }
    img {
      width: 40vw;
    }
  }

  @media (max-width: 768px) {
    p {
      width: 50vw;
      font-size: 3vw;
    }
    h1 {
      font-size: 4vw;
    }
  }
`;

export const DivPrice = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-top: 0;
  .Price {
    margin-right: 3vh;
    color: #dc6e05;
  }
  .Discount {
    text-decoration: line-through;
    color: #4e4e4e;
  }
  span {
    font-weight: 400;
    font-size: 32px;
    margin-top: 0;
  }

  @media (max-width: 1440px) {
    span {
      font-size: 3vw;
    }
  }
  @media (max-width: 768px) {
    span {
      font-size: 4.2vw;
    }
  }
`;

export const SectionChoose = styled.div`
  border: 1px solid #686868;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 32px;
  width: 439px;
  height: 662px;
  display: flex;
  justify-content: center;
  h1 {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #4e4e4e;
  }
  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #e49700;
  }
  @media (max-width: 768px) {
    width: 70vw;
    h1 {
      font-size: 12px;
    }
    p {
      font-size: 10px;
    }
  }
`;

export const SectionAddIngredient = styled.div`
  background: rgba(253, 215, 14, 0.2);
  width: 375px;
  height: 55px;

  .DivIngredient {
    padding: 8px;
    padding-left: 20px;
    p,
    h1 {
      margin-top: 0;
    }
  }
  @media (max-width: 768px) {
    width: 55vw;
  }
`;

export const DivAddFood = styled.div`
  div {
    margin-left: 10px;
    p {
      font-size: 14px;
      margin-top: 30px;
    }
  }
  h1 {
    margin-left: 0;
    margin-bottom: 25px;
  }
`;

export const DivFood = styled.div`
  border-bottom: 1px solid #e8a634;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    margin-top: 10px;
  }
`;

export const DivCountFood = styled.div`
  background: #ffffff;
  border: 1px solid #f09035;
  border-radius: 4px;
  width: 89px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  button {
    background: none;
    border: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  img {
    width: 14px;
  }
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    margin: 0 !important;

    color: #4e4e4e;
  }
`;

export const NeedCutlery = styled.div`
  background: rgba(253, 215, 14, 0.2);
  width: 100%;
  height: 55px;

  p {
    padding: 2vh;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    color: #4e4e4e;
  }
`;

export const SectionFinish = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 3vw;
  .buttonAdd {
    background: #f09035;
    border-radius: 4px;
    border: 1px solid #f09035;
    font-weight: 500;
    font-size: 14px;
    line-height: 10px;
    text-align: center;
    letter-spacing: 0.33px;
    color: #ffffff;
    width: 219px;
    height: 40px;
  }
`;

export const DivCount = styled.div`
  background: #ffffff;
  border: 1px solid #f09035;
  border-radius: 4px;
  width: 140px;
  height: 40px;
  margin-right: 6vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  button {
    background: none;
    border: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  img {
    width: 14px;
  }
  p {
    color: #4e4e4e;
    font-weight: 500;
    font-size: 14px;
    line-height: 10px;
    letter-spacing: 0.33px;
  }
`;

export const ContainerPopover = styled.div`
  margin-left: 10vw;
  width: 228px;
  img {
    padding-top: 10px;
  }
`;

export const Alert = styled.div`
  p {
    font-weight: 700;
    font-size: 18px;
    color: #ffffff;
    margin-bottom: 0;
    margin-top: 0;
  }
  background-color: #f09035;

  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px 4px 0px 0px;
`;

export const Offer = styled.div`
  div {
    padding-left: 10px;
    padding-top: 10px;
  }
  p {
    font-weight: 700;
    font-size: 14px;
    line-height: 100%;
    color: #bc2e31;
    margin-top: 0;
  }
  h1 {
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    color: #4e4e4e;
  }
  .FinalOrder {
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    margin-left:0 ;
    color: #4e4e4e;
    ul{
      padding-left:15px ;
    }
    padding-top:0 ;
  }

  background: #f8f8f8;
  border-radius: 0px 0px 4px 4px;
`;

export const DivImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
