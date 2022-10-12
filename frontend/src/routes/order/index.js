import "./index.scss";
import Layout from "../../Layout";
import ListGroup from "react-bootstrap/ListGroup";
import useCart from "../../hooks/useCart";
import { Button } from "react-bootstrap";
import moment from "moment";
import useUser from "../../hooks/useUser";
import { Link } from "react-router-dom";

export default function Order() {
  const user = useUser();
  const cart = useCart();
  return (
    <Layout>
      <div className="orderContainer">
        <div className="productsOrder">
          <h1 className="myOrders">My Orders</h1>
          <div className="scrolling">
            <ListGroup>
              {cart.data?.products.map((item) => {
                return (
                  <ListGroup key={item.product._id} className="listGroup">
                    <div className="cartInfo">
                      <div className="img-Titel">
                        <img
                          src={item.product.image}
                          alt={item.product.title}
                        />
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
          </div>
        </div>
        <div className="towBoxes">
          <div className="payment">
            <div className="div">
              <h6>Delivery To: {user.data.name}</h6>
              <div className="deliveryToArea">
                <p>
                  Address: {cart.data.address.street},
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
            <div className="paragraph"></div>
            <div className="paragraph">
              <p>
                invoice amount <span className="span">VAT included.</span>
              </p>
              <p>{(cart.cartTotal + 5.95).toFixed(2)} $</p>
            </div>
            <hr />

            <Link to={"/thanks"} className="bt-buyNow">Buy Now</Link>
            <h3>-</h3>
            <Link to={"/myCart"} className="link-button">
              Edit Your Order
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
