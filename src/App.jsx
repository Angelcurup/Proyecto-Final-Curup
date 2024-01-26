import { CartProvider } from "./context/CartContext";
import { MainRouter } from "./router/MainRouter";

const App = () => {
  return (
    <div>
      <CartProvider>
        <MainRouter />
      </CartProvider>
    </div>
  );
};

export default App;
