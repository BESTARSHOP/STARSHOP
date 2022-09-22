import "./index.scss";
import Layout from "../../Layout";
import { BsCartCheck, BsCartX } from "react-icons/bs";
import { Button, Container, Col, Row, Table } from "react-bootstrap";
import { useCart } from "react-use-cart";
import useUser from "../../hooks/useUser";
export default function MyCart() {
  const user = useUser();
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
      <Layout> </Layout>
      <Container className="py-4 mt-5">
        <h1 style={{ color: "black" }}>
          {isEmpty ? "Your Cart is Empty" : "The Cart"}
        </h1>
        <Row className="justify-content-center">
          <Table
            responsive="sm"
            striped
            bordered
            hover
            style={{ backgroundColor: " #efeae2", marginBottom: "5" }}
          >
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <div
                        style={{
                          background: "white",
                          height: "15rem",
                          overflow: "hidden",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <div style={{ padding: ".5rem" }}>
                          <img
                            src={item.images}
                            style={{ width: "4rem" }}
                            alt={item.title}
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <h6
                        style={{
                          whiteSpace: "nowrap",
                          width: "14rem",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {item.title}
                      </h6>
                    </td>
                    <td>Rs. {item.price}</td>
                    <td>Quantity ({item.quantity})</td>
                    <td>
                      <Button
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                        className="ms-2"
                      >
                        -
                      </Button>
                      <Button
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                        className="ms-2"
                      >
                        +
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => removeItem(item.id)}
                        className="ms-2"
                      >
                        Remove Item
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {!isEmpty && (
            <Row
              style={{ position: "fixed", bottom: 0 }}
              className={`justify-content-center w-100`}
            >
              <Col className="py-2">
                <h4>Total Price: Rs. {cartTotal}</h4>
              </Col>
              <Col className="p-0" md={4}>
                <Button
                  variant="danger"
                  className="m-2"
                  onClick={() => emptyCart()}
                >
                  <BsCartX size="1.7rem" />
                  Clear Cart
                </Button>
                <Button variant="success" className="m-2">
                  <BsCartCheck size="1.7rem" />
                  Clear Cart
                </Button>
              </Col>
            </Row>
          )}
        </Row>
      </Container>
    </>
  );
}
