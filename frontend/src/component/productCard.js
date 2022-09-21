import { Card } from "react-bootstrap";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  let { image, price, title } = props.data;
  const { addItem } = useCart();

  const addToCart = (props) => {
    addItem(props.data);
  };
  return (
    <Card
      style={{
        width: "20rem",
        height: "30rem",
        backgroundColor: " #ddc9bc",
      }}
      className={`text-center p-0 overflow-hidden shadow mx-auto mb-4`}
    >
      <div
        className={{
          background: "white",
          height: "15rem",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "inherit",
        }}
      >
        <div style={{ width: "auto", height: "auto" }}>
          <Card.Img
            variant="top"
            src={image}
            style={{ height: "35vh" }}
            className="img-fluid"
          />
        </div>
      </div>
      <Card.Body>
        <Card.Title
          style={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </Card.Title>
        <Card.Title>
          Rs. <span className="h3">{price}</span>
        </Card.Title>
        <Link
          to="/products/:id"
          onClick={() => addToCart()}
          className={`d-flex `}
          style={{
            background: "#EFEAE3",
            color: "black",
            border: "solid 1px black",
            borderRadius: "10px",
            width: "35wh",
            height: "7vh",
            fontSize: "large",
            alignItems: "center",
            paddingLeft: "1.8rem",
            margin: "2rem 5rem",
            textDecoration: "none",
          }}
        >
          Buy now
        </Link>
      </Card.Body>
    </Card>
  );
}
