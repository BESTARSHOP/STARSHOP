import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import "./ProductCardDescription.scss";
import { useCart } from "react-use-cart";
import StarRating from "../StarRating/StarRating";

export default function ProductCardDescription(props) {
  const [productData, setProductData] = useState([]);

  const [error, setError] = useState();
  const id = props.id;

  async function getResponse() {
    const res = await fetch(`http://localhost:3001/products/${id}`).then(
      (res) => res.json()
    );
    res.id = res._id;
    setProductData(res);
  }

  useEffect(() => {
    getResponse();
  }, []);

  const { addItem } = useCart();
  const addToCart = async () => {
    // addItem(productData);
    const res = await fetch("http://localhost:3001/cart/addProduct", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ product: id, amount: 1 }),
    });
    const result = await res.json();
    if (res.status === 200) {
      console.log(productData);
      addItem(productData);
    } else if (result.errors) {
      setError(result.errors[0].msg);
    } else if (result.error) {
      setError(result.error);
    }
  };

  return (
    <div className="context">
      <Card.Img
        src={productData.image}
        style={{ width: "35rem", height: "40rem" }}
        className="card-img"
      />
      <Card className="card">
        <Card.Body className="card-body">
          <Card.Title>
            <h1> {productData.title}</h1>
            <br /> {productData.description}
          </Card.Title>
          <Card.Title className="card-title2">
            <br />
            <span className="h3">{productData.price} $ </span>
            <p className="costs">incl. VAT., excl. Shipping costs</p>
            <div className="rating">
              <div>
                <StarRating rating={productData.rating?.rate} />
              </div>
              <div>{productData.rating?.rate}</div>
            </div>
          </Card.Title>
          <div className="buttons">
            <Link to="/myCart" id="link-go-to-card">
              Go to Cart
            </Link>
            <Button onClick={() => addToCart()} id="link-add-to-card">
              Add to Cart
            </Button>
            {error && <div className="error">{error}</div>}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
