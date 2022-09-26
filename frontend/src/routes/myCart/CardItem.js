import "./index.scss";
import { RiDeleteBinLine } from "react-icons/ri";
import { Button, Form } from "react-bootstrap";
import { useCart } from "react-use-cart";

export function CardItem(props) {
  const { updateItemQuantity, removeItem } = useCart();

  return (
    <>
      <hr style={{ width: "62%" }} />
      <div
        key={props.index}
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
            src={props.item.image}
            style={{ width: "17rem", height: "17rem" }}
            alt={props.item.title}
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
              {props.item.title}
            </h6>

            <td
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Form.Select
                value={props.item.quantity}
                onChange={(event) =>
                  updateItemQuantity(props.item.id, +event.target.value)
                }
                style={{
                  width: "7rem",
                }}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="5">6</option>
                <option value="5">7</option>
                <option value="5">8</option>
                <option value="5">9</option>
                <option value="5">10</option>
              </Form.Select>
              {/* <div>
                Quantity ({props.item.quantity})
                <Button
                  variant="light"
                  style={{
                    color: "black",
                    border: "1px solid black",
                    fontWeight: "bolder",
                    marginLeft: "1rem",
                  }}
                  onClick={() =>
                    updateItemQuantity(props.item.id, props.item.quantity - 1)
                  }
                >
                  -
                </Button>
                <Button
                  variant="light"
                  style={{
                    color: "black",
                    border: "1px solid black",
                    fontWeight: "bolder",
                    marginLeft: "0.7rem",
                  }}
                  onClick={() =>
                    updateItemQuantity(props.item.id, props.item.quantity + 1)
                  }
                >
                  +
                </Button>
              </div> */}
            </td>
            <Button
              variant="danger"
              onClick={() => removeItem(props.item.id)}
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
          {props.item.price} $
        </div>
      </div>
    </>
  );
}
