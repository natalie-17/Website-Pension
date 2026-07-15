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
            ? "block px-4 py-2.5 text-charcoal transition-colors hover:bg-cream hover:text-rust"
            : "section-label text-sm text-white/90 transition-colors hover:text-rust"
        }
        href={props.href}
      >
        {props.text}
      </A>
    </li>
  );
}
