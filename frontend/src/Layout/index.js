import { Link } from "react-router-dom";
import "./index.scss";
import { FaUserAlt } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { BsList } from "react-icons/bs";
import { useState } from "react";

export default function Layout(props) {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div className="Layout">
      <header>
        <div
          className="header-left"
          onClick={() => {
            setShowSideBar(!showSideBar);
          }}
        >
          {showSideBar && <div>showSideBar</div>}
          <BsList size={50} color="black" />
        </div>
        <div className="logo">BE STAR SHOP</div>
        <div className="header-right">
          <Link to="/account" className="icon-account">
            <FaUserAlt size={35} color="black" />
          </Link>
          <Link to="/myCart" className="icon-myCart">
            <HiShoppingCart size={40} color="black" />
          </Link>
        </div>
      </header>
      <main>{props.children}</main>
    </div>
  );
}
