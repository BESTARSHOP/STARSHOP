import "./index.scss";
import { BiChevronLeft } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "../../components/producrCard/ProductCard";

export default function Thanks() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/products?category=jewelery").then(
      async (res) => {
        const products = await res.json();
        setProducts(products);
      }
    );
  }, []);
  return (
    <>
      <div className="thanks">
        <div className="background">
          <div className="transbox">
            <span className="spanT">Thank</span>
            <span className="spanY"> you</span>
            <span className="spanF"> for</span>
            <span className="spanY2"> your</span>
            <span className="spanO"> order</span>
          </div>
        </div>
      </div>
      <div className="parrProducte">
        <h2>maybe you are also interested in</h2>
        <div className="products">
          {products.map((product, i) => {
            return (
              <div>
                <ProductCard data={product} key={i} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="zurück">
        <Link
          to="/products"
          className="linkCountinueShopping"
          style={{
            display: "flex",
            alignItems: "center",
            width: "35rem",
            textDecoration: "none",
            color: "black",
            background: "#ddc9bc",
            padding: "10px 20px",
            borderRadius: "5px",
            fontSize: "x-large",
            opacity: "0.6",
            fontFamily: "Cutive Mono",
            fontWeight: "bold",
            border: "1px solid black",
          }}
        >
          <BiChevronLeft size={35} />
          continue shopping to All Products
        </Link>
      </div>
    </>
  );
}
