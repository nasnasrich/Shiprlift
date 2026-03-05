import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { LanguageProvider } from "./components/LanguageContext.jsx"; // ✅ ADD THIS

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <LanguageProvider>   {/* ✅ MOVE IT HERE */}
      <CartProvider>
        <App />
      </CartProvider>
    </LanguageProvider>
  </BrowserRouter>
);
