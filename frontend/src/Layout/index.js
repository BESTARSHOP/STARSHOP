import { Link } from "react-router-dom";
import "./index.scss";
import { FaUserAlt } from "react-icons/fa";
import { useCart } from "react-use-cart";
import { HiOutlineShoppingBag } from "react-icons/hi";
import useUser from "../hooks/useUser";

export default function Layout(props) {
  const user = useUser();
  const { isEmpty, totalItems } = useCart();
  const accountLink = user.data ? "/account" : "/login";

  return (
    <div className="Layout">
      <header>
        <div className="header-left">
          <div className="logo" >𝕊𝕋𝔸ℝ 𝕊ℍ𝕆ℙ </div>
        </div>
        <div className="header-center">
          <Link to="/" className="home-button">
            Home
          </Link>
          <Link to="/products" className="products-button">
            All Products
          </Link>
        </div>
        <div className="header-right">
          {user.data && <h3>{user.data.name}</h3>}
          <Link to={accountLink} className="icon-account">
            <FaUserAlt size={35} color="black" />
          </Link>
          <button>
            <Link to="/myCart" className="icon-myCart">
              <HiOutlineShoppingBag size={40} color="black" />

              {!isEmpty && (
                <span style={{ position: "relative" }}>{totalItems}</span>
              )}
              <span style={{ marginLeft: !isEmpty ? "-13px" : 0 }}></span>
            </Link>
          </button>
        </div>
      </header>
      <main>{props.children}</main>
    </div>
  );
}
