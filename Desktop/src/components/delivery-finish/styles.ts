import styled from "styled-components";

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

  background: #f8f8f8;
  border-radius: 0px 0px 4px 4px;
`;

export const DivImage = styled.div`
  display: flex;
  justify-content:center ;
  align-items: center;
  width: 100%;
`;
