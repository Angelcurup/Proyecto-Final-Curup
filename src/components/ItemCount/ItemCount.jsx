import { Button, ButtonGroup } from "@nextui-org/react";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

const ItemCount = () => {
  const [counItem, setCountItem] = useState(1);
  const { count, setCount } = useContext(CartContext);

  const handleAdd = () => {
    setCountItem(counItem + 1);
  };

  const handleRemove = () => {
    counItem > 1 && setCountItem(counItem - 1);
  };

  return (
    <div className="flex justify-between items-center gap-6">
      <Button
        className="w-full"
        variant="ghost"
        color="danger"
        onClick={() => {
          setCount(counItem + count);
          setCountItem(1);
        }}
      >
        Add to cart
      </Button>
      <ButtonGroup color="danger">
        <Button onClick={handleRemove}>-</Button>
        <Button isDisabled>{counItem}</Button>
        <Button onClick={handleAdd}>+</Button>
      </ButtonGroup>
    </div>
  );
};

export default ItemCount;
