import { useContext } from "react";
import { Table, Button, Container } from "react-bootstrap";
import CartContext from "../Store/CartContext";

const ShoeList = (props) => {
  const { shoes } = props;
  const cartCtx = useContext(CartContext);
  const handleBuy = (shoe, size) => {
    if (size === "S") {
      shoe.s_quantity -= 1;
    } else if (size === "M") {
      shoe.m_quantity -= 1;
    } else if (size === "L") {
      shoe.l_quantity -= 1;
    }
    cartCtx.addItem(shoe, 1, size);
  };
  return (
    <Container className="mx-auto my-4">
      <Table hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Size - S</th>
            <th>Size - M</th>
            <th>Size - L</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {shoes.map((shoe, index) => (
            <tr key={index}>
              <td>{shoe.name}</td>
              <td>{shoe.desc}</td>
              <td>{shoe.price}</td>
              <td>{shoe.s_quantity}</td>
              <td>{shoe.m_quantity}</td>
              <td>{shoe.l_quantity}</td>
              <td>
                <Button
                  variant="danger"
                  style={{ marginRight: "15px" }}
                  onClick={() => handleBuy(shoe, "L")}
                >
                  Buy Large
                </Button>
                <Button
                  variant="danger"
                  style={{ marginRight: "15px" }}
                  onClick={() => handleBuy(shoe, "M")}
                >
                  Buy Medium
                </Button>
                <Button variant="danger" onClick={() => handleBuy(shoe, "S")}>
                  Buy Small
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ShoeList;
