import "./index.scss";
import Layout from "../../Layout";
import useUser from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import useCart from "../../hooks/useCart";

export default function Account() {
  const user = useUser();
  const navigate = useNavigate();
  const handleLogout = async () => {
    await user.logout();
    navigate("/login");
  };
  const cart = useCart();

  return (
    <Layout>
      <div className="Accaount">
        <div className="ContactDetail">
          {user.data && (
            <div className="firstDiv">
              <h2 className="titel">Contact detail</h2>
              <div className="contactDetailArea">
                <div className="nameLabelArea">
                  <div className="nameArea">
                    <label className="form-label">Name *</label>
                    <input
                      type="text"
                      placeholder=""
                      aria-label="First name"
                      value={user.data.name}
                    />
                  </div>
                  <div>
                    <label htmlFor="inputEmail4" className="form-label">
                      Email *
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      value={user.data.email}
                    />
                  </div>
                </div>
                <div>
                  <div style={{ marginTop: "3rem" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "3rem",
                      }}
                    >
                      <h5>Upload your profile photo</h5>
                      <div
                        class="text-center"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "1rem",
                        }}
                      >
                        <div
                          class="square position-relative display-2 mb-3"
                          style={{
                            border: "1px ",
                            width: "8rem",
                            height: "8rem",
                            background: "#FFFFFF",
                          }}
                        >
                          <FaUserAlt
                            size={60}
                            class=" text-secondary"
                            style={{ marginTop: "2rem" }}
                          />
                        </div>

                        <input type="file" id="customFile" />
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "1rem",
                            marginLeft: "4.3rem",
                          }}
                        >
                          <label
                            class="btn btn-success-soft btn-block"
                            for="customFile"
                            style={{
                              color: "#28a745",
                              backgroundColor: "rgba(40, 167, 69, 0.1)",
                            }}
                          >
                            Upload
                          </label>
                          <button
                            type="button"
                            class="btn btn-danger-soft"
                            style={{
                              color: "#dc3545",
                              backgroundColor: "rgba(220, 53, 69, 0.1)",
                            }}
                          >
                            Remove
                          </button>
                        </div>

                        <p class="text-muted mt-3 mb-0">
                          <span class="me-1">Note:</span>Minimum size 300px x
                          300px
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="passwordArea">
                <div class="passwordArea1">
                  {/* <h4 class="titel2">Change Password</h4> 
                     <div className="passwordCangeArea">
                    <div className="oldNewPassword">
                      <div class="oldPassword">
                        <label for="exampleInputPassword1" class="form-label">
                          Old password *
                        </label>
                        <input
                          type="password"
                          class="form-control"
                          id="exampleInputPassword1"
                        />
                      </div>

                      <div class="newPassword">
                        <label for="exampleInputPassword2" class="form-label">
                          New password *
                        </label>
                        <input
                          type="password"
                          class="form-control"
                          id="exampleInputPassword2"
                        />
                      </div>
                    </div>

                    <div class="ConfirmPassword">
                      <label for="exampleInputPassword3" class="form-label">
                        Confirm Password *
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword3"
                      />
                    </div>
                  </div> */}

                  <div class="button-delete-update ">
                    <button type="button" class="button1 btn btn-danger btn-lg">
                      Delete profile
                    </button>
                    <button type="button" class="button2 btn btn-danger">
                      Update profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="orderList">
          <h2>my Order</h2>
          <ListGroup>
            {cart.data?.products.map((item) => {
              return (
                <ListGroup key={item.product._id} className="listGroupAccount">
                  <div className="cartInfoAccount">
                    <div className="img-TitelAccount">
                      <img src={item.product.image} alt={item.product.title} />
                      <div className="titelInfoAccount">
                        <p>{item.product.title}</p>
                      </div>
                    </div>
                    <div className="quantityInfoAccount">{item.amount}</div>
                    <div className="priceInfoAccount">
                      {item.product.price * item.amount} $
                    </div>
                  </div>
                </ListGroup>
              );
            })}
          </ListGroup>
        </div>
        <div className="button-logout">
          <button
            onClick={handleLogout}
            style={{
              width: "8rem",
              height: "3rem",

              marginTop: "1.5rem",
              background: "#DDC9BC",
            }}
          >
            Logout
          </button>
        </div>
        {/* <footer className="footerAccount">
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
        </footer> */}
      </div>
    </Layout>
  );
}
