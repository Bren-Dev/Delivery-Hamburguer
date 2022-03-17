import { useEffect, useState } from "react";
import { ContainerPopover, Alert, Offer, DivImage } from "./styles";
import Polygon from "../../assets/polygon.svg";

type Repository = {
    description: string;
    nm_item: string;
}


function Teste() {

    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch("https://6077803e1ed0ae0017d6aea4.mockapi.io/test-frontend/products")
        .then(response => response.json())
        .then(data => {
            setRepositories(data);
        })
    }, []
  
    )
  return (
      
    <ContainerPopover> 
        <DivImage>
        <img src={Polygon} alt="www.google.com" />
        </DivImage>
        <Alert><p>Adicionado com Sucesso</p></Alert>
        <Offer>
            <div>
        <p>Oferta Cheddar Bacon</p>
        <h1>Ingredientes:</h1>
        <div>
        {repositories.map(repo => {
            return(
                <ul key={repo.description}>
                    <li>{repo.nm_item}</li>
                    <li>AAAAAA
                        {repo.nm_item}
                    </li>
                </ul>
            )
        })}
        </div>
        </div>
        </Offer>
    </ContainerPopover>
      
  )
}

export default Teste;
