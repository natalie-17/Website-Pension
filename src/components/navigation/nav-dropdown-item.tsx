import { Component } from "solid-js";

type NavDropdownItemProps = {
    href: string,
    itemName: string
}

const NavDropdownItem: Component<NavDropdownItemProps> = (props: NavDropdownItemProps) => {
  return (
        <li>
              <a href={props.href} class="block px-4 py-2 hover:bg-blue-100">
                {props.itemName}
              </a>
        </li>
  );
};

export default NavDropdownItem;