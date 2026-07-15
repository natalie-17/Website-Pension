import { A, createAsyncStore, query } from "@solidjs/router";
import { readItems } from "@directus/sdk";
import { PageHero } from "../../components/PageHero";
import { client } from "../../lib/directus";
import { For, Suspense } from "solid-js";

const getApartments = query(async () => {
  "use server";
  const apartments: any[] = await client.request(readItems("apartments"));
  return apartments.map((apartment) => {
    const titelbild =
      typeof apartment.titelbild === "string" ? apartment.titelbild : apartment.titelbild?.id;
    return {
      ...apartment,
      titelbildUrl: titelbild ? new URL(`assets/${titelbild}`, client.url).href : null,
    };
  });
}, "apartments-grid");

export default function Apartments() {
  const apartments = createAsyncStore(() => getApartments());

  return (
    <>
      <PageHero
        label="Unterkünfte"
        title="Apartments"
        image="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80"
      />

      <section class="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <Suspense>
          <ul class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <For each={apartments()}>
              {(apartment: any) => (
                <li>
                  <A
                    href={`/apartments/${apartment.id}`}
                    class="group relative block aspect-[4/5] overflow-hidden"
                  >
                    {apartment.titelbildUrl ? (
                      <img
                        src={apartment.titelbildUrl}
                        alt={apartment.titel ?? apartment.id}
                        class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div class="absolute inset-0 bg-sage" />
                    )}
                    <div class="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                    <div class="absolute inset-x-0 bottom-0 p-6 text-white">
                      <p class="section-label text-xs text-rust">Apartment</p>
                      <h2 class="font-display text-3xl tracking-wide">
                        {apartment.titel ?? apartment.id}
                      </h2>
                      <span class="mt-3 inline-block section-label text-sm opacity-0 transition-opacity group-hover:opacity-100">
                        Entdecken →
                      </span>
                    </div>
                  </A>
                </li>
              )}
            </For>
          </ul>
        </Suspense>
      </section>
    </>
  );
}
