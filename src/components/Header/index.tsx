import { Link } from "react-router-dom";
import { Aside, Container } from "./styles";
import { MapPin, ShoppingCart } from "phosphor-react";

const Header = () => {
  return (
    <Container>
      <Link to="/">
        <img src="../../../public/logo.svg" alt="Coffee Delivery Logo" />
      </Link>

      <Aside>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Curitiba, PR</span>
        </div>

        <Link to={`cart`}>
          <ShoppingCart size={22} weight="fill" />
          <span>2</span>
        </Link>
      </Aside>
    </Container>
  );
}
 
export default Header;