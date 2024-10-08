import { useState } from "react";
import { CoffeeImg, Container, Control, Description, Order, Price, Tags, Title } from "./styles";
import { Check, ShoppingCart } from "phosphor-react";
import QuantityInput from "../Form/QuantityInput";
import { useCart } from "../../hooks/useCart";

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

  const { addItem } = useCart();

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  }

  const handleAddItem = () => {
    addItem({ id: coffee.id, quantity })
    setIsItemAdded(true);
    setQuantity(1);
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
          <span>{coffee.price.toFixed(2)}</span>
        </Price>

        <Order>
          <QuantityInput
            quantity={quantity}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          >
          </QuantityInput>

          <button disabled={isItemAdded} onClick={handleAddItem}>
            {isItemAdded ? (
              <Check
                weight="fill"
                size={22}
                color="white"
              />
            ) : (
              <ShoppingCart size={22} color="white" />
            )}
          </button>
        </Order>
      </Control>
    </Container>
  );
}
 
export default Card;