import { Component, ComponentProps, ParentProps } from "solid-js";

type NavDropdownProps = ParentProps<{
    href: string,
    itemName: string
}>

const NavDropdown: Component<NavDropdownProps> = (props: NavDropdownProps) => {
  
  return (
    <li class="relative group">
          <a href={props.href} class="transition-colors duration-300 group-hover:text-blue-600">
            {props.itemName}
          </a>
            <ul class="absolute left-0 mt-2 w-60 rounded-lg overflow-hidden bg-white shadow-lg
            opacity-0 invisible -translate-y-2
            transition-all duration-300 ease-in-out
            group-hover:opacity-100
            group-hover:visible
            group-hover:translate-y-0">

            {props.children}
            
          </ul>
        </li>
  );
};

export default NavDropdown;