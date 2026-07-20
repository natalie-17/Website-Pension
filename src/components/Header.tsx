import { A, createAsyncStore, query } from "@solidjs/router";
import { NavDropdown } from "./NavDropdown";
import { NavItem } from "./NavItem";
import { BOOKING_URL } from "../lib/booking";
import { createSignal, For, onMount, Show, Suspense } from "solid-js";

export default function Header() {
  const [menuOpen, setMenuOpen] = createSignal(false);
  const [scrolled, setScrolled] = createSignal(false);

  onMount(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  });

  return (
    <header
      class={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled()
          ? "bg-charcoal/95 py-2 shadow-lg backdrop-blur-md"
          : "bg-transparent py-4"
      }`}
    >
      <div class="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <A href="/" class="flex items-center gap-3">
          <img src="/logo.png" class="h-10 w-auto" alt="Logo" />
          <span class="font-display hidden text-2xl tracking-wide text-white sm:block">
            Apartments Liebl
          </span>
        </A>

        <nav class="hidden items-center lg:flex">
          <ul class="flex items-center gap-8">
            <NavDropdown href="/ueber-uns" text="Über uns">
              <NavItem href="/freizeit" text="Freizeit" />
              <NavItem href="/ausflugsziele" text="Ausflugsziele" />
            </NavDropdown>
            <NavDropdown href="/apartments" text="Apartments">
              <NavItem href="apartments/lusen" text="Lusen" />
                  
            </NavDropdown>
            <NavItem href="/preise" text="Preise" />
            <NavItem href="/honigverkostung" text="Honigverkostung" />
          </ul>
        </nav>

        <div class="flex items-center gap-4">
          <a
            href={BOOKING_URL}
            class="btn-primary hidden text-base sm:inline-block"
          >
            Jetzt anfragen
          </a>
          <button
            type="button"
            class="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label="Menü öffnen"
            onClick={() => setMenuOpen(!menuOpen())}
          >
            <span
              class={`block h-0.5 w-6 bg-white transition-transform ${menuOpen() ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              class={`block h-0.5 w-6 bg-white transition-opacity ${menuOpen() ? "opacity-0" : ""}`}
            />
            <span
              class={`block h-0.5 w-6 bg-white transition-transform ${menuOpen() ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      <Show when={menuOpen()}>
        <nav class="border-t border-white/10 bg-charcoal/98 px-6 py-6 lg:hidden">
          <ul class="flex flex-col gap-4">
            <NavItem href="/ueber-uns" text="Über uns" />
            <NavItem href="/apartments" text="Apartments" />
            <NavItem href="/preise" text="Preise" />
            <NavItem href="/honigverkostung" text="Honigverkostung" />
            <li class="pt-2">
              <a
                href={BOOKING_URL}
                class="btn-primary block text-center"
                onClick={() => setMenuOpen(false)}
              >
                Jetzt anfragen
              </a>
            </li>
          </ul>
        </nav>
      </Show>
    </header>
  );
}
