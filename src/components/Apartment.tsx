import { createAsync, query } from "@solidjs/router";
import { readItem } from "@directus/sdk";
import { client } from "../lib/directus";
import { Show, Suspense } from "solid-js";

const getApartment = query(async (id: string | number) => {
  "use server";
  const apartment: any = await client.request(readItem("apartments", id));
  const titelbild =
    typeof apartment.titelbild === "string" ? apartment.titelbild : apartment.titelbild?.id;
  return {
    ...apartment,
    titelbildUrl: titelbild ? new URL(`assets/${titelbild}`, client.url).href : null,
  };
}, "apartment");

type ApartmentProps = {
  id: string | number;
};

export function Apartment(props: ApartmentProps) {
  const apartment = createAsync(() => getApartment(props.id));

  return (
    <Suspense>
      <Show when={apartment()}>
        {(a) => (
          <article>
            {a().titelbildUrl && (
              <div class="relative -mx-6 mb-10 h-72 overflow-hidden sm:-mx-0 sm:h-96 sm:rounded-sm lg:h-[28rem]">
                <img
                  src={a().titelbildUrl}
                  alt={a().titel}
                  class="h-full w-full object-cover"
                />
              </div>
            )}
            <p class="section-label text-rust">Apartment</p>
            <h1 class="font-display text-5xl tracking-wide sm:text-6xl">{a().titel}</h1>
            <div class="mt-8 max-w-2xl leading-relaxed text-stone-muted">
              <p>{a().beschreibung}</p>
            </div>
          </article>
        )}
      </Show>
    </Suspense>
  );
}
