import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OverviewRoute from "./routes/overview";
import AccountRoute from "./routes/account";
import LoginRoute from "./routes/login";
import MyCartRoute from "./routes/myCart";
import PaymentRoute from "./routes/payment";
import ProductRoute from "./routes/products_id";
import ProductsRoute from "./routes/products";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OverviewRoute />} />
        <Route path="/account" element={<AccountRoute />} />
        <Route path="/login" element={<LoginRoute />} />
        <Route path="/myCart" element={<MyCartRoute />} />
        <Route path="/payment" element={<PaymentRoute />} />
        <Route path="/products/:id" element={<ProductsRoute />} />
        {/* <Route path="/products/:id" element={<ProductRoute />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
