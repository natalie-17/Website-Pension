import { A } from '@solidjs/router';
import { type Component } from 'solid-js';
import NavItem from './navigation/nav-item';
import NavDropdown from './navigation/nav-dropdown';
import NavDropdownItem from './navigation/nav-dropdown-item';

const Header: Component = () => {
  return (
    <header class='fixed top-0 left-0 z-50 w-full shadow bg-white flex items-center justify-between px-10 py-1'>
      <A href='/' class='flex items-center gap-4'>
        <img src="/logo.png" class='h-12 w-auto' alt="Logo" />
        <h1 class='text-xl'>Apartments Liebl</h1>
      </A>

      <nav>
        <ul class="flex space-x-8">
          <NavDropdown href='/ueber-uns' itemName='Über uns'>
            <NavDropdownItem href='/freizeit' itemName='Freizeit'/>
            <NavDropdownItem href='/ausflugsziele' itemName='Ausflugsziele'/>
          </NavDropdown>
          <NavDropdown href='/apartments' itemName='Apartments'>
            <NavDropdownItem href='/apartment-baumwipfel' itemName='Apartment mit Balkon "Baumwipfel"'/>
            <NavDropdownItem href='/apartment-rachel' itemName='Apartment mit Wintergarten und Balkon "Rachel"'/>
            <NavDropdownItem href='/apartment-kirsche' itemName='1-Zimmer Apartment mit kleinem Balkon "Kirsche"'/>
            <NavDropdownItem href='/apartment-lusen' itemName='1-Zimmer Apartment "Lusen"'/>
            <NavDropdownItem href='/zimmer-eiche' itemName='Zimmer mit Balkon ohne Küche "Eiche"'/>
          </NavDropdown>
          <NavItem href='/preise' itemName='Preise'/>
          <NavItem href='/honigverkostung' itemName='Honigverkostung'/>
          <NavItem href='/kontakt' itemName='Kontakt'/>
        </ul>
      </nav>
    </header>
  );
};

export default Header;