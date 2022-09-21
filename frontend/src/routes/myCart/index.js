import "./index.scss";
import Layout from "../../Layout";
import { BiChevronLeft } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import {
  FaCcPaypal,
  FaCcMastercard,
  FaCcVisa,
  FaCcAmex,
  FaCcDiscover,
} from "react-icons/fa";
import { Button, Container, Col, Row, Table } from "react-bootstrap";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";

export default function MyCart() {
  const {
    isEmpty,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  return (
    <>
      <Layout>
        <div className="payment-boxes">
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
                  class="sc-jOhDuK kAilzX sc-bBrHrO kFHLcB dhl"
                ></img>
                <img
                  src="https://www.hermesworld.com/remote/content/logos/hermes-logo-366x183_teaser560x280.jpg"
                  alt="Hermes"
                  title="Hermes"
                  class="sc-jOhDuK kAilzX sc-bBrHrO kFHLcB hermes"
                ></img>
                <img
                  src="https://www.logistik-watchblog.de/images/2019/08/gls_logo_1.png"
                  alt="GLS"
                  title="GLS"
                  class="sc-jOhDuK kAilzX sc-bBrHrO kFHLcB gls"
                ></img>
              </div>
            </div>
          </div>
        </div>
        <Container className="py-4 mt-5 m-lg-4">
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
            <h1 style={{ color: "black" }}>The Cart</h1>
          )}
          <Row>
            <Table
              responsive="sm"
              striped
              bordered
              hover
              style={{ marginBottom: "5" }}
            >
              <tbody>
                {items.map((item, index) => {
                  return (
                    <>
                      <hr style={{ width: "62%" }} />
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          width: "100rem",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <img
                            src={item.image}
                            style={{ width: "17rem", height: "17rem" }}
                            alt={item.title}
                          />

                          <td
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "space-between",
                              margin: "0.5rem 2rem",
                            }}
                          >
                            <h6
                              style={{
                                whiteSpace: "wrap",
                                width: "20rem",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                fontWeight: "bolder",
                                fontSize: "x-large",
                              }}
                            >
                              {item.title}
                            </h6>

                            <td
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                              }}
                            >
                              <div>
                                Quantity ({item.quantity})
                                <Button
                                  style={{
                                    color: "black",
                                    background: "#efeae2",
                                    fontWeight: "bolder",
                                  }}
                                  onClick={() =>
                                    updateItemQuantity(
                                      item.id,
                                      item.quantity - 1
                                    )
                                  }
                                  className="ms-2"
                                >
                                  -
                                </Button>
                                <Button
                                  style={{
                                    color: "black",
                                    background: "#efeae2",
                                    fontWeight: "bolder",
                                  }}
                                  onClick={() =>
                                    updateItemQuantity(
                                      item.id,
                                      item.quantity + 1
                                    )
                                  }
                                  className="ms-2"
                                >
                                  +
                                </Button>
                              </div>
                            </td>
                            <Button
                              variant="danger"
                              onClick={() => removeItem(item.id)}
                              style={{
                                width: "10rem",
                                display: "flex",
                                gap: "0.5rem",
                              }}
                            >
                              <RiDeleteBinLine size={20} />
                              Remove Item
                            </Button>
                          </td>
                        </div>
                        <div
                          style={{
                            width: "20rem",
                            textAlign: "right",
                            padding: "2.5rem",
                            fontWeight: "bolder",
                          }}
                        >
                          {item.price} $
                        </div>
                      </div>
                    </>
                  );
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
              >
                <Col className="p-0">
                  <Button
                    variant="danger"
                    className="m-2"
                    style={{ width: "10.3rem" }}
                    onClick={() => emptyCart()}
                  >
                    Clear Cart
                  </Button>
                </Col>
                <Col className="py-2">
                  <h4>Total Price : {cartTotal} $</h4>
                </Col>
              </Row>
            )}
          </Row>
        </Container>
      </Layout>
    </>
  );
}
