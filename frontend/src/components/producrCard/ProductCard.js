import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import StarRating from "../StarRating/StarRating";
import "./productCard.scss";
import React from "react";

export default function ProductCard(props) {
  let { _id, image, price, title, rating } = props.data;

  return (
    <Card
      style={{
        width: "19.4rem",
        height: "34rem",
        backgroundColor: " #ddc9bc",
      }}
      className={`text-center p-0 overflow-hidden shadow mx-auto mb-4`}
    >
      <div
        className={{
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
        <div className="starBG">
          <div>
            <StarRating />
          </div>
          <div>({rating.count})</div>
        </div>
        <Link
          to={"/product/" + _id}
          className={`d-flex `}
          style={{
            background: "#EFEAE3",
            color: "black",
            border: "solid 1px black",
            borderRadius: "10px",
            width: "10rem",
            height: "6vh",
            fontSize: "large",
            alignItems: "center",
            paddingLeft: "1.6rem",
            margin: "2rem 4rem",
            textDecoration: "none",
          }}
        >
          View Product
        </Link>
      </Card.Body>
    </Card>
  );
}
