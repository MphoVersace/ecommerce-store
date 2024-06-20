import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddAddress from "./Components/address";
import ShoppingCart from "./Components/Bag";
import PaymentMethod from "./Components/payment";
import PurchaseCheckout from "./Components/CheckOut";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Bag" element={<ShoppingCart />} />
        <Route path="/Checkout" element={<PurchaseCheckout />} />
        <Route path="/AddPayment" element={<PaymentMethod />} />
        <Route path="/AddAdress" element={<AddAddress />} />
      </Routes>
    </Router>
  );
}

export default App;
