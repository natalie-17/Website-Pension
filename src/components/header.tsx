import { A } from '@solidjs/router';
import { createSignal, For, onMount, type Component } from 'solid-js';
import NavItem from './navigation/nav-item';
import NavDropdown from './navigation/nav-dropdown';
import NavDropdownItem from './navigation/nav-dropdown-item';
import { RecordModel } from 'pocketbase';
import { getApartments } from '../lib/pocketbase';

const Header: Component = () => {

  const [apartments, setApartments] = createSignal<RecordModel[]>([]);

    onMount(async () => {
        setApartments(await getApartments());
    });

    
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
            <For each={apartments()}>
              {(apartment) => (
                <NavDropdownItem
                  itemName={`${apartment.name} "${apartment.spitzname}"`}
                  href={`/apartments/${apartment.spitzname}`}
                />
              )}
            </For>
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