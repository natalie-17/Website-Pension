import { createAsync, query } from "@solidjs/router";
import { readItem } from "@directus/sdk";
import { client } from "../lib/directus";
import { Show, Suspense } from "solid-js";

const getApartment = query(async (id: string | number) => {
  "use server";
  const apartment: any = await client.request(readItem("apartments", id));
  return {
    ...apartment,
    titelbildUrl: apartment.titelbild
      ? new URL(`assets/${apartment.titelbild}`, client.url).href
      : null,
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
          <article class="flex flex-col gap-6">
            {a().titelbildUrl && (
              <img
                src={a().titelbildUrl}
                alt={a().titel}
                class="h-64 w-full rounded-lg object-cover md:h-96"
              />
            )}
            <div>
              <h1 class="text-4xl font-bold">{a().titel}</h1>
              <p class="mt-4 leading-relaxed">{a().beschreibung}</p>
            </div>
          </article>
        )}
      </Show>
    </Suspense>
  );
}
