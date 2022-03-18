import React, {useState} from "react";
import { AiOutlineBars } from 'react-icons/ai';

import {
  Container,
  DivLogo,
  SectionAllSearch,
  SectionDelivery,
  SectionBusca,
  SectionUser,
} from "./styles";

import logo from "../../assets/logo.svg";
import arrow from "../../assets/arrow_down.svg";
import cart from "../../assets/shopping_cart.svg";
import account from "../../assets/account.svg";
import DeliveryDrawer from "../delivery-drawer";
import ellipse from "../../assets/Ellipse.svg";


const Header: React.FC = () => {
  const [MenuClick, setClick] = useState(false);
  return (
    <>
      <Container>
        <DivLogo>
          <img src={logo} alt="www.google.com" />
        </DivLogo>

        <SectionAllSearch>
        <SectionDelivery>
          <div>
            <p className="delivery">Entrega:</p>
            <p className="adress">R. Antonio Braune, 222</p>
          </div>
          <div>
            <img src={arrow} alt="www.google.com" />
          </div>
        </SectionDelivery>

        <DeliveryDrawer openDrawer={MenuClick} closeDrawer={()=>setClick(!MenuClick)} />
        <button onClick={() => setClick(true)} className="toggle">
          <AiOutlineBars/>
        </button>

        <SectionBusca>
          <input placeholder="Busque por estabelecimento ou produtos" />
        </SectionBusca>
        </SectionAllSearch>
        <SectionUser>
          <div className="DivAccount">
            <img src={account} alt="www.google.com" />
            <p>Entrar</p>
          </div>
          <div>
            <img src={cart} alt="www.google.com" />
            <img id="ellipse" src={ellipse} alt="www.google.com" />
            <span>0</span>
            <p>Carrinho</p>
          </div>
        </SectionUser>
      </Container>
    </>
  );
}


export default Header;