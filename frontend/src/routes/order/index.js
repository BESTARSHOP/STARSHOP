import "./index.scss";
import Layout from "../../Layout";
import ListGroup from "react-bootstrap/ListGroup";
import useCart from "../../hooks/useCart";
import { Button } from "react-bootstrap";
import moment from "moment";
import useUser from "../../hooks/useUser";

export default function Order() {
  const user = useUser();
  const cart = useCart();
  return (
    <Layout>
      <div className="orderContainer">
        <div className="productsOrder">
          <h1 className="myOrders">My Orders</h1>
          <ListGroup>
            {cart.data?.products.map((item) => {
              return (
                <ListGroup key={item.products._id} className="listGroup">
                  <div className="cartInfo">
                    <div className="img-Titel">
                      <img
                        src={item.products.image}
                        alt={item.products.title}
                      />
                      <div className="titelInfo">
                        <p>{item.products.title}</p>
                      </div>
                    </div>
                    <div className="quantityInfo">{item.amount}</div>
                    <div className="priceInfo">
                      {item.products.price * item.amount} $
                    </div>
                  </div>
                </ListGroup>
              );
            })}
            {console.log(cart.data.address.street)}
          </ListGroup>
        </div>
        <div className="towBoxes">
          <div className="payment">
            <div className="div">
              <h6>Delivery To: {user.data.name}</h6>
              <div className="deliveryToArea">
                <p>
                  ; Address: {cart.data.address.street},{" "}
                  {cart.data.address.zipcode}, {cart.data.address.city}
                </p>
                <p>BuyMethode:{cart.data.buyMethode}</p>
              </div>
              <h6 className="deliveryArea">
                Delivery: {moment().add(7, "days").format("DD.MM.YYYY")} &nbsp;
                - &nbsp;
                {moment().add(9, "days").format("DD.MM.YYYY")}
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
