import "./index.scss";
import Layout from "../../Layout";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

export default function Overview() {
  return (
    <>
      <Layout></Layout>
      <div className="overview">
        <div className="products-fotos">
          <div className="logo-1">
            <Link to="/products" className="view-button-1">
              VIEW CLOTHES PRODUCTS
            </Link>
          </div>
          <div className="logo-2">
            <Link to="/products" className="view-button-2">
              VIEW ELECTRONICS PRODUCTS
            </Link>
          </div>
          <div className="logo-3">
            <Link to="/products" className="view-button-3">
              VIEW FURNITURE PRODUCTS
            </Link>
          </div>
        </div>
        <footer className="footer">
          <div className="footer-left">
            <p>
              AGB - Datenschutz - cookies Verwalten - Impressum - Online
              Marktplatz
            </p>
            <p>
              starshop.de ist durchschnittlich mit 4.61 von 5.00 Sternen
              ausgezeichnet, auf Grundlage von 69729 Trusted Shops-Bewertungen
              innerhalb der letzten 12 Monate.
              <br />* Alle Preise inkl. der gesetzlichen MwSt. zzgl.
              Versandkosten. Der Ursprungspreis bezieht sich auf den ehemaligen
              StarShop-Preis. Produkte ohne Dekoration.
              <br />
              ** Detaillierte Informationen zu den Garantiebedingungen findest
              du hier .
            </p>
          </div>
          <div className="footer-right">STARSHOP Deutschland SE & Co. KG</div>
          <div className="footer-contact">
            <p>You can also find us here</p>
            <div className="footer-icons">
              <a
                className="footer-icons-instagram"
                href="https://www.instagram.com/"
              >
                <BsInstagram />
              </a>
              <a className="footer-icons-twitter" href="https://twitter.com/">
                <BsTwitter />
              </a>
              <a className="footer-icons-facebook" href="https://facebook.com">
                <BsFacebook />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
