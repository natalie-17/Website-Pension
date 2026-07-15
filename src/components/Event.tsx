import { createAsync, query } from "@solidjs/router";
import { readItem } from "@directus/sdk";
import { client } from "../lib/directus";
import { Show, Suspense } from "solid-js";

const getEvent = query(async (id: string | number) => {
  "use server";
  const event: any = await client.request(readItem("events", id));
  return {
    ...event,
    bildUrl: event.bild ? new URL(`assets/${event.bild}`, client.url).href : null,
  };
}, "event");

type EventProps = {
  id: string | number;
};

export function Event(props: EventProps) {
  const event = createAsync(() => getEvent(props.id));

  return (
    <Suspense>
      <Show when={event()}>
        {(e) => (
          <article class="flex flex-col gap-4 rounded-lg border border-gray-200 p-6 md:flex-row">
            {e().bildUrl && (
              <img
                src={e().bildUrl}
                alt={e().titel}
                class="h-48 w-full rounded object-cover md:h-auto md:w-64 md:shrink-0"
              />
            )}
            <div>
              <h3 class="text-2xl font-semibold">{e().titel}</h3>
              <p class="text-sm text-gray-600">
                {new Date(e().von).toLocaleString("de-DE")} –{" "}
                {new Date(e().bis).toLocaleString("de-DE")}
              </p>
              <p class="mt-2">{e().beschreibung}</p>
            </div>
          </article>
        )}
      </Show>
    </Suspense>
  );
}
