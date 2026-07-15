import { createAsyncStore, query } from "@solidjs/router";
import { readItems } from "@directus/sdk";
import { client } from "../lib/directus";
import { For, Suspense } from "solid-js";
import { Event } from "../components/Event";

const getEvents = query(async () => {
  "use server";
  const events = await client.request(readItems("events"));
  return events;
}, "events");

export default function Home() {
  const events = createAsyncStore(() => getEvents());

  return (
    <section class="mx-auto max-w-4xl px-6 py-12">
      <h1 class="mb-8 text-4xl font-bold">Veranstaltungen</h1>
      <Suspense>
        <ul class="space-y-8">
          <For each={events()}>
            {(event: any) => (
              <li>
                <Event id={event.id} />
              </li>
            )}
          </For>
        </ul>
      </Suspense>
    </section>
  );
}
