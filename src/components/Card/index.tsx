import { useState } from "react";
import { CoffeeImg, Container, Control, Description, Order, Price, Tags, Title } from "./styles";
import { Check, ShoppingCart } from "phosphor-react";

type Props = {
  coffee: {
    id: string;
    title: string;
    description: string;
    tags: string[];
    price: number;
    image: string;
  }
}
const Card = ({ coffee }: Props) => {
  const [quantity, setQuantity] = useState(1);
  const [isItemAdded, setIsItemAdded] = useState(false);

  // const incrementQuantity = () => {
  //   setQuantity((prev) => prev + 1);
  // }

  // const decrementQuantity = () => {
  //   if (quantity > 1) {
  //     setQuantity((prev) => prev - 1);
  //   }
  // }

  const handleAddItem = () => {
    setIsItemAdded(true);
  }

  return (
    <Container>
      <CoffeeImg src={coffee.image} alt={coffee.title} />

      <Tags>{coffee.tags.map((tag) => (
        <span key={coffee.id}> {tag}</span>
      ))}</Tags>

      <Title>{coffee.title}</Title>
      
      <Description>{coffee.description}</Description>
      
      <Control>
        <Price>
          <span>R$</span>
          <Price>{coffee.price.toFixed(2)}</Price>
        </Price>

        <Order>
          {/* <QuantityInput>
            
          </QuantityInput> */}

          <button disabled={isItemAdded} onClick={handleAddItem}>
            {isItemAdded ? (
              <Check
                weight="fill"
                size={22}
                color='black'
              />
            ) : (
              <ShoppingCart size={22} color='black' />
            )}
          </button>
        </Order>
      </Control>
    </Container>
  );
}
 
export default Card;