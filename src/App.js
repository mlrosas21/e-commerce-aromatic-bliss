import "./App.css";

import {Item, ItemListContainer, NavBar} from "./components";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from './pages'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/category/:id"} element={<ItemListContainer/>}/>
          <Route path={"/item/:id"} element={<Item/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
