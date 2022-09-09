import "./index.scss";
import Layout from "../../Layout";
import { Link } from "react-router-dom";

export default function Overview() {
  return (
    <>
      <Layout></Layout>
      <div className="overview">
        <div className="products-fotos">
          <div className="logo-1">
            <Link to="/products" className="view-button-1">
              VIEW MEN PRODUCTS
            </Link>
          </div>
          <div className="logo-2">
            <Link to="/products" className="view-button-2">
              VIEW ACCESSORY PRODUCTS
            </Link>
          </div>
          <div className="logo-3">
            <Link to="/products" className="view-button-3">
              VIEW WOMEN PRODUCTS
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
              bestarshop.de ist durchschnittlich mit 4.61 von 5.00 Sternen
              ausgezeichnet, auf Grundlage von 69729 Trusted Shops-Bewertungen
              innerhalb der letzten 12 Monate.
              <br />* Alle Preise inkl. der gesetzlichen MwSt. zzgl.
              Versandkosten. Der Ursprungspreis bezieht sich auf den ehemaligen
              BeStarShop-Preis. Produkte ohne Dekoration.
              <br />
              ** Detaillierte Informationen zu den Garantiebedingungen findest
              du hier .
            </p>
          </div>
          <div className="footer-right">BESTARSHOP Deutschland SE & Co. KG</div>
        </footer>
      </div>
    </>
  );
}
