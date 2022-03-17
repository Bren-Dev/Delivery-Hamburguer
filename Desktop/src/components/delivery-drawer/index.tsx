import React from 'react';
import { VscClose } from 'react-icons/vsc';
import { Container, SectionBusca, SectionUser } from './styles';

import cart from "../../assets/shopping_cart.svg";
import account from "../../assets/account.svg";

export interface Props {
  openDrawer: boolean;
  closeDrawer: (value: boolean) => void;
}

const DeliveryDrawer: React.FC<Props> = ({ openDrawer, closeDrawer }) => {
  return (
    <Container
      style={{ transform: openDrawer ? 'translateX(0)' : 'translateX(100%)' }}>
      <div>
        <button onClick={() => closeDrawer(false)}>
          <VscClose/>
        </button>
      </div>

      <div className="div-button">

        <SectionUser>
          <div className="DivAccount">
            <img src={account} alt="www.google.com" />
            <p>Entrar</p>
          </div>
          <div>
            <img src={cart} alt="www.google.com" />
            <p>Carrinho</p>
          </div>
        </SectionUser>
        <SectionBusca>
          <input placeholder="Busque por estabelecimento ou produtos" />
        </SectionBusca>

      </div>
    </Container>
  );
};

export default DeliveryDrawer;
