import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OverviewRoute from "./routes/overview";
import AccountRoute from "./routes/account";
import LoginRoute from "./routes/login";
import MyCartRoute from "./routes/myCart";
import OrderRoute from "./routes/order";
import ProductRoute from "./routes/product";
import ProductsRoute from "./routes/products";
import { UserProvieder } from "./hooks/useUser";

export default function App() {
  return (
    <UserProvieder>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OverviewRoute />} />
          <Route path="/account" element={<AccountRoute />} />
          <Route path="/login" element={<LoginRoute />} />
          <Route path="/myCart" element={<MyCartRoute />} />
          <Route path="/order" element={<OrderRoute />} />
          <Route path="/products" element={<ProductsRoute />} />
          <Route path="/products/:id" element={<ProductsRoute />} />
          <Route path="/product/:id" element={<ProductRoute />} />
        </Routes>
      </BrowserRouter>
    </UserProvieder>
  );
}
