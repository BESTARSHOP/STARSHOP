import "./index.scss";
import Layout from "../../Layout";
import ListGroup from "react-bootstrap/ListGroup";
import useCart from "../../hooks/useCart";
import { Button } from "react-bootstrap";
import useUser from "../../hooks/useUser";

export default function Order() {
  const user = useUser();
  const cart = useCart();
  return (
    <Layout>
      <h1 className="myOrders">My Orders</h1>
      <div className="allBoxes">
        <ListGroup>
          {cart.data?.products.map((item) => {
            return (
              <ListGroup key={item.product._id} className="listGroup">
                <div className="cartInfo">
                  <div className="img-Titel">
                    <img src={item.product.image} alt={item.product.title} />
                    <div className="titelInfo">
                      <p>{item.product.title}</p>
                    </div>
                  </div>
                  <div className="quantityInfo">{item.amount}</div>
                  <div className="priceInfo">
                    {item.product.price * item.amount} $
                  </div>
                </div>
              </ListGroup>
            );
          })}
        </ListGroup>

        <div className="towBoxesPayment">
          <div className="payment">
            <div className="div">
              <h6>Delivery To: {user.data.name}</h6>
              <div className="deliveryToArea">
                <p>
                  Address: {cart.data.address.street},{" "}
                  {cart.data.address.zipcode}, {cart.data.address.city}
                </p>
                <p>BuyMethode:{cart.data.buyMethode}</p>
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
              <p> {cart.cartTotal.toFixed(2)} $</p>
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
              <p>{(cart.cartTotal + 5.95).toFixed(2)} $</p>
            </div>
            <hr />

            <Button className="bt-buyNow">Buy Now</Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
