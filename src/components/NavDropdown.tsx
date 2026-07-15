import { A } from "@solidjs/router";
import { createContext, ParentComponent } from "solid-js";

export const DropdownContext = createContext(false);

const dropdownClasses =
  "absolute left-0 mt-2 w-60 rounded-lg overflow-hidden bg-white shadow-lg opacity-0 invisible -translate-y-2 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:visible group-hover:translate-y-0";

type NavDropdownProps = {
  href: string;
  text: string;
};

export const NavDropdown: ParentComponent<NavDropdownProps> = (props) => {
  return (
    <li class="relative group">
      <A
        class="transition-colors duration-300 group-hover:text-blue-600"
        href={props.href}
      >
        {props.text}
      </A>
      <ul class={dropdownClasses}>
        <DropdownContext.Provider value={true}>{props.children}</DropdownContext.Provider>
      </ul>
    </li>
  );
};
