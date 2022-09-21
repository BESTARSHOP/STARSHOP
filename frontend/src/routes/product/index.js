import "./index.scss";
import Layout from "../../Layout";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import ProductCardDescription from "../../component/ProductCardDescription";

export default function Product() {
  const { id } = useParams();
  return (
    <>
      <Layout>
        <div className="products">
          <ProductCardDescription id={id} />
        </div>
      </Layout>
    </>
  );
}
