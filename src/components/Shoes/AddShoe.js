import { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";

const AddShoe = (props) => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [small, setSmall] = useState("");
  const [medium, setMedium] = useState("");
  const [large, setLarge] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    const shoe = {
      id: { productName, productPrice },
      name: productName,
      desc: description,
      price: productPrice,
      s_quantity: small,
      m_quantity: medium,
      l_quantity: large,
    };
    props.onAddShoe(shoe);
    setProductName("");
    setDescription("");
    setProductPrice("");
    setSmall("");
    setMedium("");
    setLarge("");
  };
  return (
    <Container
      className="d-flex justify-content-center"
      style={{ marginTop: "15px" }}
    >
      <Form onSubmit={submitHandler}>
        <Row className="mx-0">
          <Col xs={12} sm={3} className="pr-0">
            <Form.Group controlId="productName" className="mb-0">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product name"
                value={productName}
                required
                onChange={(event) => setProductName(event.target.value)}
              />
            </Form.Group>
          </Col>
          <Col xs={12} sm={3} className="pr-0">
            <Form.Group controlId="productDescription" className="mb-0">
              <Form.Label>Product Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product description"
                value={description}
                required
                onChange={(event) => setDescription(event.target.value)}
              />
            </Form.Group>
          </Col>
          <Col xs={12} sm={3} className="pr-0">
            <Form.Group controlId="productPrice" className="mb-0">
              <Form.Label>Product Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product price"
                value={productPrice}
                required
                onChange={(event) => setProductPrice(event.target.value)}
              />
            </Form.Group>
          </Col>
          <Col xs={12} sm={1} className="pr-0">
            <Form.Group controlId="small" className="mb-0">
              <Form.Label>Small </Form.Label>
              <Form.Control
                type="text"
                placeholder="Quantity"
                value={small}
                required
                onChange={(event) => setSmall(event.target.value)}
              />
            </Form.Group>
          </Col>
          <Col xs={12} sm={1} className="pr-0">
            <Form.Group controlId="medium" className="mb-0">
              <Form.Label>Medium</Form.Label>
              <Form.Control
                type="text"
                placeholder="Quantity"
                value={medium}
                required
                onChange={(event) => setMedium(event.target.value)}
              />
            </Form.Group>
          </Col>
          <Col xs={12} sm={1} className="pr-0">
            <Form.Group controlId="large" className="mb-0">
              <Form.Label>Large</Form.Label>
              <Form.Control
                type="text"
                placeholder="Quantity"
                value={large}
                required
                onChange={(event) => setLarge(event.target.value)}
              />
            </Form.Group>
          </Col>
          <Col xs={12} sm={3} className="d-flex align-items-end">
            <Button
              variant="success"
              type="submit"
              style={{ marginTop: "15px" }}
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default AddShoe;
