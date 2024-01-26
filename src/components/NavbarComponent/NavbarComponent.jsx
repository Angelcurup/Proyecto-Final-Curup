import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Tooltip,
  Avatar,
} from "@nextui-org/react";
import { ChevronDown } from "../icons/Icons.jsx";
import { Link } from "react-router-dom";
import { CartWidget } from "./CartWidget.jsx";
import { useGetCategories } from "../../hooks/useProducts.jsx";

export default function NavbarComponent() {
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
  };

  const { categories } = useGetCategories("categories");

  const placements = ["bottom"];

  return (
    <Navbar>
      <NavbarBrand>
        <Link className="font-bold text-inherit" to={"/"}>
          Smart-Technology
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Category
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{ base: "gap-4" }}
          >
            {categories.map((item, index) => {
              return (
                <DropdownItem key={index}>
                  <Link key={index} to={`/category/${item}`}>
                    {item}
                  </Link>
                </DropdownItem>
              );
            })}
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="sm:flex gap-1">
          <CartWidget />
        </NavbarItem>
        <NavbarItem>
          {placements.map((placement) => (
            <Tooltip
              key={placement}
              placement={placement}
              content="Create New Product"
              color="secondary"
            >
              <Link className="text-inherit" to={"/create-product"}>
                <div className="overflow-hidden rounded-full bg-gray-200  group-hover:opacity-75 w-[40px] h-[40px] text-center flex justify-center items-center">
                  <span className="text-xl font-bold">+</span>
                </div>
              </Link>
            </Tooltip>
          ))}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
