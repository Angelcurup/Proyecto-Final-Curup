import { useParams } from "react-router-dom";
import { useGetProductById } from "../hooks/useProducts";
import { useState, useEffect } from "react";
import { Input, Button } from "@nextui-org/react";
import { CameraIcon } from "../components/icons/CameraIcon";
import Swal from "sweetalert2";
import { doc, getFirestore, updateDoc } from "firebase/firestore";

export const UpdateProduct = () => {

  const { id } = useParams();

  const { productData } = useGetProductById("products", id);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [price, setPrice] = useState(0);

  useEffect(() => {
    setTitle(productData.title);
    setCategory(productData.category);
    setDescription(productData.description);
    setThumbnail(productData.thumbnail);
    setPrice(productData.price);
  }, [productData]);

  const handleUpdateProduct = () => {
    const data = {
      title,
      description,
      price,
      thumbnail,
      category,
    };
    const db = getFirestore();
    const productsCollection = doc(db, "products", id);
    
    updateDoc(productsCollection, data).then(() => {
      return(
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
          id,
        })
      );
    });
  };

  useEffect(() => {
    document.title = `Update - ${productData.title}`;
  });
 

  return (
    <div className="flex flex-col gap-8 pt-12 mx-auto mt-6 max-w-5xl p-8">
      <h1>Edit product</h1>
      <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 mt-8">
        <Input
          type="text"
          label="Title"
          placeholder="Title"
          labelPlacement="outside"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          type="number"
          label="Price"
          placeholder="0.00"
          labelPlacement="outside"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">$</span>
            </div>
          }
        />
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 items-end">
        <Input
          type="text"
          endContent={<CameraIcon />}
          label="Image"
          placeholder="Url"
          labelPlacement="outside"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
        />
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
        <Input
          type="text"
          label="Description"
          placeholder="Description"
          labelPlacement="outside"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <Button
        radius="full"
        className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg w-[200px]"
        onClick={handleUpdateProduct}
      >
        Edit product
      </Button>
    </div>
  );
};
