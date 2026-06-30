import { Component } from "solid-js";

type NavItemProps = {
    href: string,
    itemName: string
}

const NavItem: Component<NavItemProps> = (props: NavItemProps) => {
  return (
        <li>
            <a href={props.href} class="transition-colors duration-300 hover:text-blue-600">
                {props.itemName}
            </a>
        </li>
  );
};

export default NavItem;