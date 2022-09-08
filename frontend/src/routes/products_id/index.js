import { useParams } from "react-router-dom";
import "./index.scss";
import Layout from "../../Layout";

export default function Product() {
  const params = useParams();
  return (
    <Layout>
      <h1>Product Route [{params.id}]</h1>
    </Layout>
  );
}
