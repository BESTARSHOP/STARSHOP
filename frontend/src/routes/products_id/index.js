import "./index.scss";
import Layout from "../../Layout";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCard from "../../component/productCard";
import { useParams } from "react-router-dom";

export default function Products() {
  const [productData, setProductData] = useState([]);

  const { id } = useParams();

  async function getResponse() {
    const res = await fetch(`https://fakestoreapi.com/products ${id}`).then(
      (res) => res.json()
    );
    setProductData(res);
  }

  useEffect(() => {
    getResponse();
  }, []);

  return (
    <>
      <Layout>{}</Layout>
      <div className="products">
        <ProductCard />
      </div>
    </>
  );
}
