type PageHeroProps = {
  label: string;
  title: string;
  image?: string;
};

export function PageHero(props: PageHeroProps) {
  return (
    <section class="relative flex h-56 items-end bg-charcoal sm:h-64">
      {props.image && (
        <div
          class="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ "background-image": `url('${props.image}')` }}
        />
      )}
      <div class="relative z-10 mx-auto w-full max-w-7xl px-6 pb-10 lg:px-10">
        <p class="section-label text-rust">{props.label}</p>
        <h1 class="font-display text-5xl tracking-wide text-white sm:text-6xl">{props.title}</h1>
      </div>
    </section>
  );
}
