import { useParams } from "react-router-dom";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import { useGetProductByCategory, useGetProductById } from "../hooks/useProducts";
import { useEffect } from "react";

export const Category = () => {
  const { id } = useParams();
  const { productsByCategory } = useGetProductByCategory(id);

  useEffect(() => {
    document.title = `Category - ${id}`;
  });
 

  return <ItemListContainer productsData={productsByCategory} />;
};
