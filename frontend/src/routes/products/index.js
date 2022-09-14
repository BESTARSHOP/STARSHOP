import "./index.scss";
import Layout from "../../Layout";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, InputGroup } from "react-bootstrap";
import SearchFilter from "react-filter-search";
import ProductCard from "../../component/productCard";
// import { useParams } from "react-router-dom";

export default function Products() {
  const [searchInput, setSearchInput] = useState("");
  const [productData, setProductData] = useState([]);
  const [filter, setFilter] = useState(productData);

  // const { id } = useParams();
  // const search = window.location.search;
  async function getResponse() {
    const res = await fetch("https://api.escuelajs.co/api/v1/products").then(
      (res) => res.json()
    );
    setProductData(res);
    setFilter(res);
  }

  useEffect(() => {
    getResponse();
  }, []);

  const filterProduct = (cat) => {
    const results = productData.filter((x) => x.category.id === cat);
    setFilter(results);
    console.log(results, cat);
  };
  // useEffect(() => {
  //   if (id) filterProduct(parseInt(id));
  // }, [id, productData]);

  return (
    <>
      <Layout>{}</Layout>
      <div className="products">
        <div className="products-buttons">
          <button
            className="button products-All-button"
            onClick={() => setFilter(productData)}
          >
            All
          </button>
          <button
            className="button products-men-button"
            onClick={() => filterProduct(1)}
          >
            Clothes
          </button>
          <button
            className="button products-women-button"
            onClick={() => filterProduct(2)}
          >
            Electronics
          </button>
          <button
            className="button products-women-button"
            onClick={() => filterProduct(3)}
          >
            Furniture
          </button>
          <button
            className="button products-women-button"
            onClick={() => filterProduct(4)}
          >
            Shoes
          </button>
          <button
            className="button products-women-button"
            onClick={() => filterProduct(5)}
          >
            Others
          </button>
        </div>

        <Row id="row" className="justify-content-center ">
          <Col
            id="col"
            xs={10}
            md={7}
            lg={6}
            xl={4}
            className="mb-3 mx-auto text-center"
          >
            <InputGroup
              id="inputGroup"
              style={{
                margin: "2rem",
              }}
            >
              <input
                type="text"
                name="search"
                className="input-search"
                placeholder="Search products..."
                value={searchInput}
                onChange={(e) => {
                  setSearchInput(e.target.value);
                }}
              />
            </InputGroup>
          </Col>
          <SearchFilter
            value={searchInput}
            data={filter}
            renderResults={(results) => (
              <Row className="justify-content-center">
                {results.map((item, i) => (
                  <ProductCard data={item} key={i} />
                ))}
              </Row>
            )}
          />
        </Row>
      </div>
    </>
  );
}
