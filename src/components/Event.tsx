import { createAsync, query } from "@solidjs/router";
import { readItem } from "@directus/sdk";
import { client } from "../lib/directus";
import { Show, Suspense } from "solid-js";

const getEvent = query(async (id: string | number) => {
  "use server";
  const event: any = await client.request(readItem("events", id));
  const bild = typeof event.bild === "string" ? event.bild : event.bild?.id;
  return {
    ...event,
    bildUrl: bild ? new URL(`assets/${bild}`, client.url).href : null,
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
          <article class="overflow-hidden bg-cream">
            <div class="flex flex-col md:flex-row">
              {e().bildUrl && (
                <div class="md:w-2/5">
                  <img
                    src={e().bildUrl}
                    alt={e().titel}
                    class="h-56 w-full object-cover md:h-full md:min-h-[220px]"
                  />
                </div>
              )}
              <div class={`flex flex-col justify-center p-8 ${e().bildUrl ? "md:w-3/5" : "w-full"}`}>
                <p class="section-label text-xs text-rust">Veranstaltung</p>
                <h3 class="mt-1 font-display text-3xl tracking-wide">{e().titel}</h3>
                <p class="mt-2 text-sm text-stone-muted">
                  {new Date(e().von).toLocaleString("de-DE")} –{" "}
                  {new Date(e().bis).toLocaleString("de-DE")}
                </p>
                <p class="mt-4 leading-relaxed text-charcoal/80">{e().beschreibung}</p>
              </div>
            </div>
          </article>
        )}
      </Show>
    </Suspense>
  );
}
