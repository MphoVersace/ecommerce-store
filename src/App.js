import { BrowserRouter as AppRouter, Routes as AppRoutes, Route as AppRoute } from "react-router-dom";
import AddAddress from "./Components/address";
import ShoppingCart from "./Components/Bag";
import PaymentMethod from "./Components/payment";
import PurchaseCheckout from "./Components/CheckOut";

function App() {
  return (
    <AppRouter>
      <AppRoutes>
        <AppRoute path="/Bag" element={<ShoppingCart />} />
        <AppRoute path="/Checkout" element={<PurchaseCheckout />} />
        <AppRoute path="/AddPayment" element={<PaymentMethod />} />
        <AppRoute path="/AddAdress" element={<AddAddress />} />
      </AppRoutes>
    </AppRouter>
  );
}

export default App;
