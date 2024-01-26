import { Image } from "@nextui-org/react";
import "./ItemListContainer.css";
import { Link } from "react-router-dom";

export const ItemListContainer = ({ productsData }) => {
  return (
    <div className="cards">
      {productsData.map((products) => {
        return (
          <div className="w-full " key={products.id}>
            <div className="group relative w-full h-full">
              <div className="cads__img overflow-hidden rounded-md bg-gray-200  group-hover:opacity-75">
                <Image
                  src={products.thumbnail}
                  alt={products.title}
                  className="w-full h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link to={`item/${products.id}`} className="p-0 w-full">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      {products.title}
                    </Link>
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  ${products.price}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
