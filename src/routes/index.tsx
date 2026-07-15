import { A, createAsyncStore, query } from "@solidjs/router";
import { readItems } from "@directus/sdk";
import { BOOKING_URL } from "../lib/booking";
import { client } from "../lib/directus";
import { For, Suspense } from "solid-js";
import { Event } from "../components/Event";

const getEvents = query(async () => {
  "use server";
  const events = await client.request(readItems("events"));
  return events;
}, "events");

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
}, "home-apartments");

const features = [
  {
    title: "Gemütliche Betten",
    text: "Morgen geht's auf Entdeckungstour — heute Nacht schläfst du tief und erholsam in unseren komfortablen Apartments.",
  },
  {
    title: "Lokale Expertise",
    text: "Wanderwege, Ausflugsziele, Geheimtipps — wir kennen die Region und teilen unsere besten Empfehlungen gerne mit Ihnen.",
  },
  {
    title: "Natur vor der Tür",
    text: "Umgeben von Wiesen, Wäldern und Bergen — die bayerische Landschaft liegt direkt vor Ihrer Haustür.",
  },
  {
    title: "Honigverkostung",
    text: "Probieren Sie unseren hauseigenen Honig — ein besonderes Erlebnis, das Sie so schnell nicht vergessen werden.",
  },
  {
    title: "Freizeit & Erholung",
    text: "Ob Radfahren, Wandern oder einfach nur Abschalten — bei uns finden Sie Raum für Ihr persönliches Abenteuer.",
  },
  {
    title: "Kostenloses WLAN",
    text: "Bleiben Sie verbunden — zuverlässiges WLAN in allen Apartments für Gäste, die auch unterwegs online sein möchten.",
  },
];

export default function Home() {
  const events = createAsyncStore(() => getEvents());
  const apartments = createAsyncStore(() => getApartments());

  return (
    <>
      {/* Hero */}
      <section class="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
        <video
          class="absolute inset-0 h-full w-full object-cover filter brightness-40"
          src="/Timeline%201.mov"
          autoplay
          loop
          muted
          playsinline
        />
        <div class="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
          <p class="section-label mb-4 text-rust">Apartments Liebl</p>
          <h1 class="font-display text-5xl leading-none tracking-wide sm:text-7xl lg:text-8xl">
            Hier beginnt Ihr Abenteuer
          </h1>
          <p class="mx-auto mt-6 max-w-xl text-lg font-light text-white/85 sm:text-xl">
            Entdecken Sie unsere Apartments inmitten der bayerischen Natur —
            komfortabel, gemütlich und nah an allem, was die Region zu bieten hat.
          </p>
          <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <A href="/apartments" class="btn-primary">
              Apartments entdecken
            </A>
            <a
              href={BOOKING_URL}
              class="btn-outline"
            >
              Jetzt anfragen
            </a>
          </div>
        </div>
      </section>

      {/* Promo strip */}
      <section class="bg-rust py-5 text-center text-white">
        <p class="section-label text-base sm:text-lg">
          Direkt anfragen &amp; entspannt ankommen — fragen Sie uns nach Verfügbarkeit
        </p>
        <a
          href={BOOKING_URL}
          class="mt-2 inline-block text-sm underline underline-offset-4 hover:text-cream"
        >
          Jetzt anfragen →
        </a>
      </section>

      {/* Apartments picker */}
      <section class="bg-cream px-6 py-20 lg:px-10">
        <div class="mx-auto max-w-7xl">
          <p class="section-label text-center text-rust">Unterkünfte</p>
          <h2 class="mt-2 text-center font-display text-4xl tracking-wide sm:text-5xl">
            Wählen Sie Ihr Apartment
          </h2>
          <Suspense>
            <ul class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                        <h3 class="font-display text-3xl tracking-wide">
                          {apartment.titel ?? apartment.id}
                        </h3>
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
          <div class="mt-10 text-center">
            <A href="/apartments" class="btn-primary">
              Alle Apartments
            </A>
          </div>
        </div>
      </section>

      {/* Features */}
      <section class="bg-charcoal px-6 py-20 text-white lg:px-10">
        <div class="mx-auto max-w-7xl">
          <p class="section-label text-center text-rust">Warum bei uns</p>
          <h2 class="mx-auto mt-2 max-w-3xl text-center font-display text-3xl leading-tight tracking-wide sm:text-4xl lg:text-5xl">
            Kommen Sie wegen der Lage. Bleiben Sie wegen der Gastfreundschaft.
          </h2>
          <ul class="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <For each={features}>
              {(feature) => (
                <li>
                  <h3 class="section-label text-lg text-rust">{feature.title}</h3>
                  <p class="mt-3 leading-relaxed text-white/70">{feature.text}</p>
                </li>
              )}
            </For>
          </ul>
        </div>
      </section>

      {/* About / mission */}
      <section class="px-6 py-20 lg:px-10">
        <div class="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div
            class="aspect-[4/3] bg-cover bg-center"
            style={{
              "background-image":
                "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80')",
            }}
          />
          <div>
            <p class="section-label text-rust">Der Liebl-Weg</p>
            <h2 class="mt-2 font-display text-4xl tracking-wide sm:text-5xl">
              Schöne Orte finden und mit Herz ausstatten
            </h2>
            <p class="mt-6 leading-relaxed text-stone-muted">
              Apartments Liebl ist der Ort, an dem Abenteuer und Komfort zusammentreffen.
              Ein Rückzugsort für Reisende und Naturliebhaber — zum Erkunden, Erholen und
              Erinnerungen schaffen inmitten der Landschaft, die unsere Unterkünfte umgibt.
            </p>
            <A href="/ueber-uns" class="btn-primary mt-8">
              Mehr erfahren
            </A>
          </div>
        </div>
      </section>

      {/* Events */}
      <section class="bg-cream-dark px-6 py-20 lg:px-10">
        <div class="mx-auto max-w-4xl">
          <p class="section-label text-center text-rust">Veranstaltungen</p>
          <h2 class="mt-2 text-center font-display text-4xl tracking-wide sm:text-5xl">
            Immer etwas zu erleben
          </h2>
          <Suspense>
            <ul class="mt-12 space-y-8">
              <For each={events()}>
                {(event: any) => (
                  <li>
                    <Event id={event.id} />
                  </li>
                )}
              </For>
            </ul>
          </Suspense>
        </div>
      </section>

      {/* CTA */}
      <section class="relative overflow-hidden bg-sage px-6 py-20 text-white lg:px-10">
        <div class="absolute inset-0 opacity-10">
          <div
            class="h-full w-full bg-cover bg-center"
            style={{
              "background-image":
                "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80')",
            }}
          />
        </div>
        <div class="relative mx-auto max-w-2xl text-center">
          <h2 class="font-display text-4xl tracking-wide sm:text-5xl">
            Bereit für Ihr nächstes Abenteuer?
          </h2>
          <p class="mt-4 text-lg text-white/85">
            Lassen Sie uns Ihren Aufenthalt unvergesslich machen.
          </p>
          <a
            href={BOOKING_URL}
            class="btn-primary mt-8 bg-white text-charcoal hover:bg-cream"
          >
            Jetzt anfragen
          </a>
        </div>
      </section>
    </>
  );
}
