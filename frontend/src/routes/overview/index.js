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
        <div className="imgBlock img1">
          <Link to="/products/?category=men's clothing" className="button">
            VIEW MEN'S CLOTHES PRODUCTS
          </Link>
        </div>
        <div className="imgBlock doppelBlock">
          <div className="imgBlock img2">
            <Link to="/products/?category=electronics" className="button2">
              VIEW ELECTRONICS PRODUCTS
            </Link>
          </div>
          <div className="imgBlock img3">
            <Link to="/products/?category=jewelery" className="button3">
              VIEW ACCESSORY PRODUCTS
            </Link>
          </div>
        </div>
        <div className="imgBlock img4">
          <Link to="/products/?category=women's clothing" className="button">
            VIEW WOMEN'S CLOTHES PRODUCTS
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
    </>
  );
}
