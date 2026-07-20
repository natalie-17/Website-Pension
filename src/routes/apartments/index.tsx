import { A, createAsyncStore, query } from "@solidjs/router";
import { PageHero } from "../../components/PageHero";
import { For, Suspense } from "solid-js";

export default function Apartments() {

  return (
    <>
      <PageHero
        label="Unterkünfte"
        title="Apartments"
        image="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80"
      />

      <section class="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <ul class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <li>
                  <A
                    href={`/apartments/Lusen`}
                    class="group relative block aspect-[4/5] overflow-hidden"
                  >
                    
                      <img
                        class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    <div class="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                    <div class="absolute inset-x-0 bottom-0 p-6 text-white">
                      <p class="section-label text-xs text-rust">Apartment</p>
                      <h2 class="font-display text-3xl tracking-wide">
                        Lusen
                      </h2>
                      <span class="mt-3 inline-block section-label text-sm opacity-0 transition-opacity group-hover:opacity-100">
                        Entdecken →
                      </span>
                    </div>
                  </A>
                </li>
          </ul>
      </section>
    </>
  );
}
