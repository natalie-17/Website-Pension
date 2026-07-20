type ApartmentProps = {
  id: string | number;
};

export function Apartment(props: ApartmentProps) {

  return (
          <article>
              <div class="relative -mx-6 mb-10 h-72 overflow-hidden sm:mx-0 sm:h-96 sm:rounded-sm lg:h-112">
                <img
                  class="h-full w-full object-cover"
                />
              </div>
            <p class="section-label text-rust">Apartment</p>
            <h1 class="font-display text-5xl tracking-wide sm:text-6xl">Titel</h1>
            <div class="mt-8 max-w-2xl leading-relaxed text-stone-muted">
              <p>Beschreibung</p>
            </div>
          </article>
  );
}
