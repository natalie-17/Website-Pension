import { A } from "@solidjs/router";
import { BOOKING_URL } from "../lib/booking";

export default function Footer() {
  return (
    <footer class="bg-charcoal text-white">
      <div class="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-4 lg:px-10">
        <div class="lg:col-span-2">
          <A href="/" class="font-display text-3xl tracking-wide">
            Apartments Liebl
          </A>
          <p class="mt-4 max-w-md leading-relaxed text-white/70">
            Wo Natur und Komfort aufeinandertreffen. Ihr Zuhause auf Zeit inmitten
            der bayerischen Landschaft — zum Erkunden, Entspannen und Wohlfühlen.
          </p>
        </div>

        <div>
          <h3 class="section-label mb-4 text-lg text-rust">Entdecken</h3>
          <ul class="space-y-2 text-white/70">
            <li>
              <A href="/apartments" class="transition-colors hover:text-white">
                Apartments
              </A>
            </li>
            <li>
              <A href="/preise" class="transition-colors hover:text-white">
                Preise
              </A>
            </li>
            <li>
              <A href="/honigverkostung" class="transition-colors hover:text-white">
                Honigverkostung
              </A>
            </li>
            <li>
              <A href="/freizeit" class="transition-colors hover:text-white">
                Freizeit
              </A>
            </li>
            <li>
              <A href="/ausflugsziele" class="transition-colors hover:text-white">
                Ausflugsziele
              </A>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="section-label mb-4 text-lg text-rust">Anfragen</h3>
          <ul class="space-y-2 text-white/70">
            <li>
              <a
                href={BOOKING_URL}
                class="transition-colors hover:text-white"
              >
                Jetzt anfragen
              </a>
            </li>
            <li>
              <A href="/ueber-uns" class="transition-colors hover:text-white">
                Über uns
              </A>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-white/10">
        <div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-white/50 sm:flex-row lg:px-10">
          <p>© {new Date().getFullYear()} Apartments Liebl</p>
          <div class="flex items-center gap-8">
            <A href="/agb" class="transition-colors hover:text-white">
              AGB
            </A>
            <A href="/datenschutz" class="transition-colors hover:text-white">
              Datenschutz
            </A>
            <A href="/impressum" class="transition-colors hover:text-white">
              Impressum
            </A>
          </div>
        </div>
      </div>
    </footer>
  );
}
