import React, { useEffect, useState } from "react";
import { RiSubtractLine } from "react-icons/ri";
import axios from "axios";

import {
  Container,
  SectionFood,
  DivOffer,
  DivPrice,
  SectionChoose,
  SectionAddIngredient,
  DivAddFood,
  DivFood,
  DivCountFood,
  DivCount,
  SectionFinish,
  NeedCutlery,
  ContainerPopover,
  Alert,
  Offer,
  DivImage,
} from "./styles";

import hamburguer from "../../assets/hamburguer.svg";
import plus from "../../assets/Plus.svg";
import Polygon from "../../assets/polygon.svg";

const URI =
  "https://6077803e1ed0ae0017d6aea4.mockapi.io/test-frontend/products";

export const Main = () => {
  const [state, setState] = useState(1);
  const [queijoCheddar, setQueijoCheddar] = useState(0);
  const [crispy, setCrispy] = useState(0);
  const [molhoCheddar, setMolhoCheddar] = useState(0);
  const [picanha, setPicanha] = useState(0);
  const [showPopover, setShowPopover] = useState(false);
  const [shoppingCart, setShoppingCart] = useState(0);
  const [price] = useState(31.99);
  const [discount] = useState(34.95);
  useEffect(getTodos, []);

  function getTodos() {
    axios
      .get(`${URI}`)
      .then((res) => res.data)
      .catch(window.alert);
  }

  function EventShow() {
    setShowPopover(true);
    setShoppingCart(shoppingCart + 1);
  }

  return (
    <>
      <Container>
        <SectionFood>
          <DivOffer>
            <img src={hamburguer} alt="www.google.com" />
            <div>
              <h1>Oferta Picanha Cheddar Bacon</h1>
              <p>
                Hambúrguer de picanha, molho de picanha, cebola crispy, bacon,
                queijo cheddar, molho cheddar e pão mix de gergelim
              </p>

              <DivPrice>
                <span className="Price">R${(price + (queijoCheddar*4.99) + (crispy*1.50) + (molhoCheddar*3.50)+(picanha*3.50))*state}</span>
                <span className="Discount">R${(discount + (queijoCheddar*4.99) + (crispy*1.50) + (molhoCheddar*3.50)+(picanha*3.50))*state}</span>
              </DivPrice>
            </div>
          </DivOffer>
        </SectionFood>

        <SectionChoose>
          <SectionAddIngredient>
            <div className="DivIngredient">
              <h1>Adicionar Ingredientes</h1>
              <p>Até 8 ingredientes.</p>
            </div>
            <DivAddFood>
              <DivFood>
                <div>
                  <h1>Queijo cheddar</h1>
                  <p>+ R$4,99</p>
                </div>
                <DivCountFood>
                  <button
                    onClick={
                      queijoCheddar > 0
                        ? () => setQueijoCheddar(queijoCheddar - 1)
                        : () => setQueijoCheddar(queijoCheddar)
                    }
                  >
                    <RiSubtractLine
                      color={queijoCheddar === 0 ? "#AEB6C1" : "#D80000"}
                    />
                  </button>
                  <p>{queijoCheddar}</p>
                  <button onClick={() => setQueijoCheddar(queijoCheddar + 1)}>
                    <img src={plus} alt="www.google.com" />
                  </button>
                </DivCountFood>
              </DivFood>

              <DivFood>
                <div>
                  <h1>Cebola crispy</h1>
                  <p>+ R$1,50</p>
                </div>
                <DivCountFood>
                  <button
                    onClick={
                      crispy > 0
                        ? () => setCrispy(crispy - 1)
                        : () => setCrispy(crispy)
                    }
                  >
                    <RiSubtractLine
                      color={crispy === 0 ? "#AEB6C1" : "#D80000"}
                    />
                  </button>
                  <p>{crispy}</p>
                  <button onClick={() => setCrispy(crispy + 1)}>
                    <img src={plus} alt="www.google.com" />
                  </button>
                </DivCountFood>
              </DivFood>

              <DivFood>
                <div>
                  <h1>Molho cheddar</h1>
                  <p>+ R$3,50</p>
                </div>
                <DivCountFood>
                  <button
                    onClick={
                      molhoCheddar > 0
                        ? () => setMolhoCheddar(molhoCheddar - 1)
                        : () => setMolhoCheddar(molhoCheddar)
                    }
                  >
                    <RiSubtractLine
                      color={molhoCheddar === 0 ? "#AEB6C1" : "#D80000"}
                    />
                  </button>
                  <p>{molhoCheddar}</p>
                  <button onClick={() => setMolhoCheddar(molhoCheddar + 1)}>
                    <img src={plus} alt="www.google.com" />
                  </button>
                </DivCountFood>
              </DivFood>

              <DivFood>
                <div>
                  <h1>Molho de picanha</h1>
                  <p>+ R$3,50</p>
                </div>
                <DivCountFood>
                  <button
                    onClick={
                      picanha > 0
                        ? () => setPicanha(picanha - 1)
                        : () => setPicanha(picanha)
                    }
                  >
                    <RiSubtractLine
                      color={picanha === 0 ? "#AEB6C1" : "#D80000"}
                    />
                  </button>
                  <p>{picanha}</p>
                  <button onClick={() => setPicanha(picanha + 1)}>
                    <img src={plus} alt="www.google.com" />
                  </button>
                </DivCountFood>
              </DivFood>
            </DivAddFood>
            <NeedCutlery>
              <p>Precisa de Talher?</p>
            </NeedCutlery>
            <SectionFinish>
              <DivCount>
                <button
                  onClick={
                    state > 0
                      ? () => setState(state - 1)
                      : () => setState(state)
                  }
                >
                  <RiSubtractLine color={state === 0 ? "#AEB6C1" : "#D80000"} />
                </button>
                <p>{state}</p>
                <button onClick={() => setState(state + 1)}>
                  <img src={plus} alt="www.google.com" />
                </button>
              </DivCount>
              <button onClick={EventShow} className="buttonAdd">
                Adicionar
              </button>
            </SectionFinish>
            {showPopover && (
              <ContainerPopover>
                <DivImage>
                  <img src={Polygon} alt="www.google.com" />
                </DivImage>
                <Alert>
                  <p>Adicionado com Sucesso</p>
                </Alert>
                <Offer>
                  <div>
                    <p>{state} Oferta Cheddar Bacon</p>
                    <h1>Ingredientes:</h1>
                    <div className="FinalOrder">
                      <ul>
                        <li>1 Carne 250gr</li>
                        <li>2 Queijo Cheddar</li>
                        <li>1 Bacon</li>
                        <li>Molho Especial</li>
                        <li>{queijoCheddar} Queijo Cheddar</li>
                        <li>{crispy} Cebola crispy</li>
                        <li>{molhoCheddar} Molho cheddar</li>
                        <li>{picanha} Molho de picanha</li>
                      </ul>
                    </div>
                  </div>
                </Offer>
              </ContainerPopover>
            )}
          </SectionAddIngredient>
        </SectionChoose>
      </Container>
    </>
  );
};

export default Main;
