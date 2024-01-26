import { Input, Button, Select, SelectItem } from "@nextui-org/react";
import { CameraIcon } from "../components/icons/CameraIcon";
import { useState } from "react";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { useGetCategories } from "../hooks/useProducts";

export const CreateProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [price, setPrice] = useState(0);

  const { categories } = useGetCategories();

  const placements = ["outside"];

  const handleFieldReset = () => {
    setTitle("");
    setDescription("");
    setCategory("");
    setThumbnail("");
    setPrice(0);
  };

  const handleCreateProduct = () => {
    const data = {
      title,
      description,
      price,
      thumbnail,
      category,
    };

    if (
      title === "" ||
      description === "" ||
      thumbnail === "" ||
      price === "" ||
      category === ""
    ) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }

    const db = getFirestore();
    const productsCollection = collection(db, "products");
    addDoc(productsCollection, data).then(({ id }) => {
      return handleFieldReset(
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
          id,
        })
      );
    });
  };

  return (
    <div className="flex flex-col gap-8 pt-12 mx-auto mt-6 max-w-5xl p-8">
      <h1>Create New Product</h1>
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
        <div className="w-full">
          <p className="text-sm text-gray-700 pb-1">Category</p>
          <select
            className="w-full p-2 rounded-lg bg-gray-100"
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

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
        onClick={handleCreateProduct}
      >
        Create product
      </Button>
    </div>
  );
};
