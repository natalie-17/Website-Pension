import { A, createAsyncStore, query } from "@solidjs/router";
import { readItems } from "@directus/sdk";
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
    <section class="mx-auto max-w-6xl px-6 py-12">
      <h1 class="mb-8 text-4xl font-bold">Apartments</h1>
      <Suspense>
        <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <For each={apartments()}>
            {(apartment: any) => (
              <li>
                <A
                  href={`/apartments/${apartment.id}`}
                  class="block overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  {apartment.titelbildUrl && (
                    <img
                      src={apartment.titelbildUrl}
                      alt={apartment.titel}
                      class="h-48 w-full object-cover"
                    />
                  )}
                  <h2 class="p-4 text-xl font-semibold">{apartment.id}</h2>
                </A>
              </li>
            )}
          </For>
        </ul>
      </Suspense>
    </section>
  );
}
