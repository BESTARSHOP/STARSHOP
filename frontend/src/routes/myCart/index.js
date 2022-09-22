import "./index.scss";
import Layout from "../../Layout";
import { BiChevronLeft } from "react-icons/bi";
import { CardItem } from "./CardItem";
import {
  FaCcPaypal,
  FaCcMastercard,
  FaCcVisa,
  FaCcAmex,
  FaCcDiscover,
} from "react-icons/fa";
import {
  Button,
  Container,
  Row,
  Table,
  Col,
  Form,
  FloatingLabel,
} from "react-bootstrap";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";

export default function MyCart() {
  const { isEmpty, items, cartTotal, emptyCart } = useCart();

  return (
    <>
      <Layout>
        <div className="payment-boxes">
          {isEmpty ? (
            <div></div>
          ) : (
            <div className="boxes">
              <div className="payment1">
                <h1 className="h1">Summary</h1>
                <div className="paragraph">
                  <p>Total Price</p>
                  <p> {cartTotal} $</p>
                </div>
                <div className="paragraph">
                  <p>Shipping</p>
                  <p>5,95 $</p>
                </div>
                <hr />
                <div className="paragraph">
                  <p>
                    invoice amount <span className="span">VAT included.</span>
                  </p>
                  <p>{cartTotal + 5.95} $</p>
                </div>
                <hr />
                <Form>
                  <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      placeholder="1234 Main St"
                      style={{ backgroundColor: " #efeae2" }}
                    />
                  </Form.Group>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>City</Form.Label>
                      <Form.Control style={{ backgroundColor: " #efeae2" }} />
                    </Form.Group>

                    <Form.Group as={Col}>
                      <Form.Label>Zip</Form.Label>
                      <Form.Control style={{ backgroundColor: " #efeae2" }} />
                    </Form.Group>
                  </Row>
                  <FloatingLabel label="Choose your payment method">
                    <Form.Select style={{ backgroundColor: " #efeae2" }}>
                      <option value="1">PayPal</option>
                      <option value="2">Visa</option>
                      <option value="3">MasterCard</option>
                      <option value="3">Discover</option>
                      <option value="3">Amex</option>
                    </Form.Select>
                  </FloatingLabel>
                </Form>
                <Button className="bt-buyNow"> Buy Now </Button>
              </div>
              <div className="payment2">
                <div className="div1">
                  <h6>This is how you can pay</h6>
                  <div className="methods-of-payment">
                    <FaCcPaypal size={40} color="blue" />
                    <FaCcMastercard size={40} color="red" />
                    <FaCcVisa size={40} color="darkblue" />
                    <FaCcAmex size={40} color=" orange" />
                    <FaCcDiscover size={40} color=" grey" />
                  </div>
                </div>
                <div className="div2">
                  <h6>This is how you can have it delivered</h6>
                  <div className="methods-of-payment2">
                    <img
                      src="https://www.wohnkabinen-shop.de/media/image/fd/cc/38/DHL2016.jpg"
                      alt="DHL "
                      title="DHL "
                      className="sc-jOhDuK kAilzX sc-bBrHrO kFHLcB dhl"
                    ></img>
                    <img
                      src="https://www.hermesworld.com/remote/content/logos/hermes-logo-366x183_teaser560x280.jpg"
                      alt="Hermes"
                      title="Hermes"
                      className="sc-jOhDuK kAilzX sc-bBrHrO kFHLcB hermes"
                    ></img>
                    <img
                      src="https://www.logistik-watchblog.de/images/2019/08/gls_logo_1.png"
                      alt="GLS"
                      title="GLS"
                      className="sc-jOhDuK kAilzX sc-bBrHrO kFHLcB gls"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <Container
          className="py-4 mt-5 m-lg-4"
          style={{ top: "10%", position: "absolute" }}
        >
          {isEmpty ? (
            <>
              <div
                style={{
                  border: "1px solid",
                  width: "1000px",
                  height: "250px",
                  padding: "20px",
                  borderRadius: "5px",
                  backgroundColor: " #ddc9bc",
                  display: "flex",
                  flexDirection: "column",
                  gap: "2rem",
                }}
              >
                <p style={{ fontSize: "xx-large" }}>
                  Your shopping cart is empty... <br />
                  continue shopping
                </p>
                <Link
                  to="/products"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "350px",
                    textDecoration: "none",
                    color: "black",
                    background: "#ddc9bc",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    fontSize: "x-large",
                    bottom: "50px",
                    opacity: "0.6",
                    fontFamily: "Cutive Mono",
                    fontWeight: "bold",
                    border: "1px solid black",
                  }}
                >
                  <BiChevronLeft size={35} />
                  continue shopping
                </Link>
              </div>
            </>
          ) : (
            <div className="header">
              <h1 style={{ color: "black" }}>The Cart</h1>
              <Button
                variant="danger"
                className="m-2"
                style={{ width: "10.3rem" }}
                onClick={() => emptyCart()}
              >
                Clear Cart
              </Button>
            </div>
          )}
          <Row>
            <Table responsive="sm" style={{ marginBottom: "5" }}>
              <tbody>
                {items.map((item, index) => {
                  return <CardItem index={index} item={item} key={index} />;
                })}
              </tbody>
            </Table>
            {!isEmpty && (
              <Row
                style={{
                  position: "fixed",
                  bottom: 0,
                  background: "#ddc9bc",
                  textAlign: "right",
                  width: "65rem",
                }}
              ></Row>
            )}
          </Row>
        </Container>
      </Layout>
    </>
  );
}
