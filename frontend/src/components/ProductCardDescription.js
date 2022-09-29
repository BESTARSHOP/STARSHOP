import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import "./ProductCardDescription.scss";
import { useCart } from "react-use-cart";

export default function ProductCardDescription(props) {
  const [productData, setProductData] = useState([]);
  const [price, setPrice] = useState();
  const [title, setTitle] = useState();
  const [error, setError] = useState();
  const id = props.id;

  async function getResponse() {
    const res = await fetch(`http://localhost:3001/products/${id}`).then(
      (res) => res.json()
    );
    setProductData(res);
    console.log(res);
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
      headres: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: title, price: price }),
    });
    const result = await res.json();
    if (res.status === 200) {
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
        style={{ width: "40rem", height: "45rem" }}
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
          </Card.Title>
          <div className="buttons">
            <Link to="/myCart" id="link-go-to-card">
              Go to Cart
              {/* <HiShoppingCart size={25} /> */}
            </Link>
            <Button onClick={() => addToCart()} id="link-add-to-card">
              Add to Cart
              {/* <FaCartPlus size={25} /> */}
            </Button>
            {error && <div className="error">{error}</div>}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
