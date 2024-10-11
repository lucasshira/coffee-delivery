import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { CoffeeList, Heading, Hero, HeroContent, Info } from "./styles";

import { coffees } from '../../../data.json';
import Card from "../../components/Card";

const Home = () => {
  return (
    <div>
      <Hero>
        <HeroContent>
          <div>
            <Heading>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>

              <span>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </span>
            </Heading>

            <Info>
              <div>
                <ShoppingCart 
                  weight="fill"
                  size={32}
                  color="white"
                  style={{ backgroundColor: "yellowgreen" }}
                />
                <span>Compra simples e segura</span>
              </div>

              <div>
                <Package 
                  weight="fill"
                  size={32}
                  color="white"
                  style={{ backgroundColor: "gray" }}
                />
                <span>"Embalagem mantém o café intacto</span>
              </div>

              <div>
                <Timer 
                  weight="fill"
                  size={32}
                  color="white"
                  style={{ backgroundColor: "orange" }}
                />
                <span>Entrega rápida e rastreada</span>
              </div>

              <div>
                <Coffee 
                  weight="fill"
                  size={32}
                  color="white"
                  style={{ backgroundColor: "purple" }}
                />
                <span>O café chega fresquinho até você</span>
              </div>
            </Info>
          </div>

            <img src="../../public/images/hero.svg" alt="Café do Coffee Delivery" />
        </HeroContent>
      </Hero>

      <CoffeeList>
        <h2>Nossos cafés</h2>

        <div>
          {coffees.map((coffee) => (
            <Card key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </CoffeeList>
    </div>
  );
}
 
export default Home;