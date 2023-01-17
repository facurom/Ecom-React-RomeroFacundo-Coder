import { useState } from "react";


import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartContainer from "./components/CartContainer/CartContainer";

import 'bootstrap/dist/css/bootstrap.min.css';


import {CartContextProvider } from "./components/CartContext/CartContext";



function App() {
  const [count, setCount] = useState(0);
  let saludo = "NaturePharma Home";
  let saludar = () => alert("Bienvenido a nuestra web");
  return (
    <div>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer saludo={saludo} />} />
            <Route
              path="/categoria/:categoriaId"
              element={<ItemListContainer saludo={saludo} />}
            />

            <Route
              path="/detail/:productoId"
              element={<ItemDetailContainer />}
            />
            <Route path="/cart" element={<CartContainer />} />
            {/*<Route path="/notpage" element={<Component404NotFound />} /> */}

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
