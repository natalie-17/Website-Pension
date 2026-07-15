import { A } from "@solidjs/router";
import { useContext } from "solid-js";
import { DropdownContext } from "./NavDropdown";

type NavItemProps = {
  href: string;
  text: string;
};

export function NavItem(props: NavItemProps) {
  const inDropdown = useContext(DropdownContext);

  return (
    <li>
      <A
        class={
          inDropdown
            ? "block px-4 py-2 hover:bg-blue-100"
            : "transition-colors duration-300 hover:text-blue-600"
        }
        href={props.href}
      >
        {props.text}
      </A>
    </li>
  );
}
