import { A } from '@solidjs/router';
import { type Component } from 'solid-js';
import NavItem from './navigation/nav-item';
import NavDropdown from './navigation/nav-dropdown';
import NavDropdownItem from './navigation/nav-dropdown-item';

const Header: Component = () => {
  return (
    <header class="fixed top-0 left-0 z-50 w-full bg-white shadow flex items-center justify-between px-10 py-1">
      <A href='/' class='flex items-center gap-4'>
        <img src="/logo.png" class='h-12 w-auto' alt="Logo" />
        <h1 class='text-xl'>Apartments Liebl</h1>
      </A>

      <nav>
        <ul class="flex space-x-8">
          <NavItem href='#' itemName='Über uns'/>
          <NavDropdown href='#' itemName='Apartments'>
            <NavDropdownItem href='#' itemName='Apartment mit Balkon "Baumwipfel"'/>
            <NavDropdownItem href='#' itemName='Apartment mit Wintergarten und Balkon "Rachel"'/>
            <NavDropdownItem href='#' itemName='1-Zimmer Apartment mit kleinem Balkon "Kirsche"'/>
            <NavDropdownItem href='#' itemName='1-Zimmer Apartment "Lusen"'/>
            <NavDropdownItem href='#' itemName='Zimmer mit Balkon ohne Küche "Eiche"'/>
          </NavDropdown>
          <NavItem href='#' itemName='Preise'/>
          <NavItem href='#' itemName='Honigverkostung'/>
          <NavItem href='#' itemName='Kontakt'/>
        </ul>
      </nav>
    </header>
  );
};

export default Header;