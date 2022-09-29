import "./index.scss";
import Layout from "../../Layout";
import ListGroup from "react-bootstrap/ListGroup";
import { useCart } from "react-use-cart";
import { Button } from "react-bootstrap";

export default function Order() {
  const { items, cartTotal } = useCart();
  return (
    <Layout>
      <h1 className="myOrders">My Orders</h1>
      <div className="allBoxes">
        <ListGroup>
          {items.map((item) => {
            return (
              <ListGroup key={item.id} className="listGroup">
                <div key={item.index} className="cartInfo">
                  <div className="img-Titel">
                    <img src={item.image} alt={item.image} />
                    <div className="titelInfo">
                      <p>{item.title}</p>
                    </div>
                  </div>
                  <div className="quantityInfo">{item.quantity}</div>
                  <div className="priceInfo">
                    {item.price * item.quantity} $
                  </div>
                </div>
              </ListGroup>
            );
          })}
        </ListGroup>
        <div className="towBoxesPayment">
          <div className="payment">
            <div className="div">
              <h6>Delivery To: </h6>
              <div className="deliveryToArea">
                <p>street 1</p>
                <p>11111 city</p>
              </div>
              <h6 className="deliveryArea">
                Delivery: November 1, 2022 - November 6, 2022
              </h6>
            </div>
          </div>
          <div className="paymentTwo">
            <h1 className="h1">Summary</h1>
            <div className="paragraph">
              <p>Total Price</p>
              <p> {cartTotal.toFixed(2)} $</p>
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
              <p>{(cartTotal + 5.95).toFixed(2)} $</p>
            </div>
            <hr />

            <Button className="bt-buyNow">Buy Now</Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
