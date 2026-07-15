import { A, createAsyncStore, query } from "@solidjs/router";
import { NavDropdown } from "./NavDropdown";
import { NavItem } from "./NavItem";
import { client } from "../lib/directus";
import { readItems } from "@directus/sdk";
import { For, Suspense } from "solid-js";

const getApartments = query(async () => {
  "use server";
  const apartments = await client.request(readItems("apartments"));
  return apartments;
}, "apartments");

export default function Header() {
  const apartments = createAsyncStore(() => getApartments());

  return (
    <header class="fixed top-0 left-0 z-50 w-full shadow bg-white flex items-center justify-between px-10 py-1">
      <A href="/" class="flex items-center gap-4">
        <img src="/logo.png" class="h-12 w-auto" alt="Logo" />
        <h1 class="text-xl">Apartments Liebl</h1>
      </A>
      <nav>
        <ul class="flex space-x-8">
          <NavDropdown href="/ueber-uns" text="Über uns">
            <NavItem href="/freizeit" text="Freizeit" />
            <NavItem href="/ausflugsziele" text="Ausflugsziele" />
          </NavDropdown>
          <NavDropdown href="/apartments" text="Apartments" >
            <Suspense>
              <For each={apartments()}>
                {(apartment:any) => (
                  <NavItem href={`/apartments/${apartment.id}`} text={apartment.id} />
                )}
              </For>
            </Suspense>
          </NavDropdown>
          <NavItem href="/preise" text="Preise" />
          <NavItem href="/honigverkostung" text="Honigverkostung" />
          <NavItem href="/kontakt" text="Kontakt" />
        </ul>
      </nav>
    </header>
  );
}
