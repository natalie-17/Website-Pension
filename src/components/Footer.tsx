import { A } from "@solidjs/router";

export default function Footer() {
  return (
    <footer class="flex bg-white border-t border-gray-300 items-center justify-between px-10 py-3">
      <p class="text-center">© Copyright Apartments Liebl 2026</p>
      <div class="flex items-center gap-10">
        <A href="/agb" class="transition-colors duration-300 hover:text-blue-600">
          AGB
        </A>
        <A href="/datenschutz" class="transition-colors duration-300 hover:text-blue-600">
          Datenschutz
        </A>
        <A href="/impressum" class="transition-colors duration-300 hover:text-blue-600">
          Impressum
        </A>
      </div>
    </footer>
  );
}
