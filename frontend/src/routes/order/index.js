import "./index.scss";
import Layout from "../../Layout";
import ListGroup from "react-bootstrap/ListGroup";
import { useCart } from "react-use-cart";

export default function Order() {
  const { items, cartTotal } = useCart();
  return (
    <Layout>
      <h1>Your Order</h1>

      <ListGroup as="ol" numbered>
        {items.map((item) => {
          return (
            <ListGroup.Item as="li" key={item.id}>
              <hr style={{ width: "62%" }} />
              <div
                key={item.index}
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
                    ></td>
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
                  {item.price * item.quantity} $
                </div>
              </div>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </Layout>
  );
}
