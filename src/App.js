import "./App.css";

import { ItemDetailContainer, ItemListContainer, NavBar, CartContainer, Footer } from "./components";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/category/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/cart"} element={<CartContainer/>}/>
          </Routes>
          <Footer/>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
