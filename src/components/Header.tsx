import { A } from "@solidjs/router";

const dropdownClasses =
  "absolute left-0 mt-2 w-60 rounded-lg overflow-hidden bg-white shadow-lg opacity-0 invisible -translate-y-2 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:visible group-hover:translate-y-0";

export default function Header() {
  return (
    <header class="fixed top-0 left-0 z-50 w-full shadow bg-white flex items-center justify-between px-10 py-1">
      <A href="/" class="flex items-center gap-4">
        <img src="/logo.png" class="h-12 w-auto" alt="Logo" />
        <h1 class="text-xl">Apartments Liebl</h1>
      </A>
      <nav>
        <ul class="flex space-x-8">
          <li class="relative group">
            <A
              class="transition-colors duration-300 group-hover:text-blue-600"
              href="/ueber-uns"
            >
              Über uns
            </A>
            <ul class={dropdownClasses}>
              <li>
                <A class="block px-4 py-2 hover:bg-blue-100" href="/freizeit">
                  Freizeit
                </A>
              </li>
              <li>
                <A class="block px-4 py-2 hover:bg-blue-100" href="/ausflugsziele">
                  Ausflugsziele
                </A>
              </li>
            </ul>
          </li>
          <li class="relative group">
            <A
              class="transition-colors duration-300 group-hover:text-blue-600"
              href="/apartments"
            >
              Apartments
            </A>
            <ul class={dropdownClasses} />
          </li>
          <li>
            <A class="transition-colors duration-300 hover:text-blue-600" href="/preise">
              Preise
            </A>
          </li>
          <li>
            <A
              class="transition-colors duration-300 hover:text-blue-600"
              href="/honigverkostung"
            >
              Honigverkostung
            </A>
          </li>
          <li>
            <A class="transition-colors duration-300 hover:text-blue-600" href="/kontakt">
              Kontakt
            </A>
          </li>
        </ul>
      </nav>
    </header>
  );
}
