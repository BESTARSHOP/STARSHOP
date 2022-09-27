import "./index.scss";
import Layout from "../../Layout";
import useUser from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

export default function Account() {
  const user = useUser();
  const navigate = useNavigate();
  const handleLogout = async () => {
    await user.logout();
    navigate("/login");
  };

  return (
    <Layout>
      <div className="Accaount">
        <div className="titel">
          {user.data && (
            <div style={{ display: "flex" }}>
              <div className="row mb-5 gx-5">
                <div className="col-xxl-8 mb-5 mb-xxl-0">
                  <div className="bg-secondary-soft px-4 py-5 rounded">
                    <div className="row g-3">
                      <h4 className="mb-4 mt-0">Contact detail</h4>

                      <div className="col-md-6">
                        <label className="form-label">Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                          aria-label="First name"
                          value={user.data.name}
                        />
                      </div>

                      <div className="col-md-6">
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
                  </div>
                </div>
                <div class="col-xxl-6">
                  <div class="bg-secondary-soft px-4 py-5 rounded">
                    <div class="row g-3">
                      <h4 class="my-4">Change Password</h4>

                      <div class="col-md-6">
                        <label for="exampleInputPassword1" class="form-label">
                          Old password *
                        </label>
                        <input
                          type="password"
                          class="form-control"
                          id="exampleInputPassword1"
                        />
                      </div>

                      <div class="col-md-6">
                        <label for="exampleInputPassword2" class="form-label">
                          New password *
                        </label>
                        <input
                          type="password"
                          class="form-control"
                          id="exampleInputPassword2"
                        />
                      </div>

                      <div class="col-md-12">
                        <label for="exampleInputPassword3" class="form-label">
                          Confirm Password *
                        </label>
                        <input
                          type="password"
                          class="form-control"
                          id="exampleInputPassword3"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="gap-3 d-md-flex justify-content-md text-center">
                  <button type="button" class="btn btn-danger btn-lg">
                    Delete profile
                  </button>
                  <button
                    type="button"
                    class="btn  btn-lg"
                    style={{
                      background: "brown",
                      color: "white",
                      border: "1px solid black",
                    }}
                  >
                    Update profile
                  </button>
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
                    <h4>Upload your profile photo</h4>
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
                          width: "19rem",
                          height: "15rem",
                          background: "#FFFFFF",
                        }}
                      >
                        <FaUserAlt
                          size={120}
                          class=" text-secondary"
                          style={{ marginTop: "4rem" }}
                        />
                      </div>

                      {/* <input type="file" id="customFile" /> */}
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
              <button
                onClick={handleLogout}
                style={{
                  width: "12rem",
                  height: "3rem",
                  marginTop: "1.5rem",
                  marginLeft: "4rem",
                  background: "#DDC9BC",
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
