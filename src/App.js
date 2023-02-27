import "./App.css";

import { ItemDetailContainer, ItemListContainer, NavBar, Cart, Footer, Success } from "./components";
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
            <Route path={"/cart"} element={<Cart/>}/>
            <Route path={"/success"} element={<Success/>}/>
          </Routes>
          <Footer/>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
