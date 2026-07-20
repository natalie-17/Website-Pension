type EventProps = {
  id: string | number;
};

export function Event(props: EventProps) {

  return (
          <article class="overflow-hidden bg-cream">
            <div class="flex flex-col md:flex-row">
              (
                <div class="md:w-2/5">
                  <img
                    class="h-56 w-full object-cover md:h-full md:min-h-55"
                  />
                </div>
              <div class="flex flex-col justify-center p-8 w-full">
                <p class="section-label text-xs text-rust">Veranstaltung</p>
                <h3 class="mt-1 font-display text-3xl tracking-wide">Titel</h3>
                <p class="mt-2 text-sm text-stone-muted">
                  {new Date().toLocaleString("de-DE")} –{" "}
                  {new Date().toLocaleString("de-DE")}
                </p>
                <p class="mt-4 leading-relaxed text-charcoal/80">Beschreibung</p>
              </div>
            </div>
          </article>
  );
}
