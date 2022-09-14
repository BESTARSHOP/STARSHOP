import { Link } from "react-router-dom";
import "./index.scss";
import { FaUserAlt } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";

export default function Layout(props) {
  return (
    <div className="Layout">
      <header>
        <div className="header-left">
          <div className="logo">𝕊𝕋𝔸ℝ 𝕊ℍ𝕆ℙ </div>
        </div>
        <div className="header-center">
          <Link to="/" className="overview-button">
            Home
          </Link>
          <Link to="/products" className="products-button">
            All Products
          </Link>
        </div>
        <div className="header-right">
          <Link to="/account" className="icon-account">
            <FaUserAlt size={35} color="black" />
          </Link>
          <button>
            <Link to="/myCart" className="icon-myCart">
              <HiShoppingCart size={40} color="black" />
              <p>Cart (0)</p>
            </Link>
          </button>
        </div>
      </header>
      <main>{props.children}</main>
    </div>
  );
}
