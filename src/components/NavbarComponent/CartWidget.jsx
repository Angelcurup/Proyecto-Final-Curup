import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Badge } from "@nextui-org/react";
import { CartIcon } from "../icons/CartIcon";

export const CartWidget = () => {
  const { count } = useContext(CartContext);

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-3">
        <Badge color="danger" content={count} shape="circle">
          <CartIcon size={30} />
        </Badge>
      </div>
    </div>
  );
};
