import "./index.scss";
import Layout from "../../Layout";
import useUser from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";
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
            <h3>
              {`Name :${user.data.name}`} <p>{`Email :  ${user.data.email}`}</p>
            </h3>
          )}

          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </Layout>
  );
}
