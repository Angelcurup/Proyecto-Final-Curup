import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent/NavbarComponent";

import { Home } from "../pages/Home";
import { ItemDetailContainer } from "../pages/ItemDetailContainer";
import { Category } from "../pages/Category";
import { CreateProduct } from "../pages/CreateProduct";
import { UpdateProduct } from "../pages/UpdateProduct";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:productId" element={<ItemDetailContainer />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/update-product/:id" element={<UpdateProduct />} />
      </Routes>
    </BrowserRouter>
  );
};
