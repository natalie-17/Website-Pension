import { createSignal, For, onMount, type Component } from "solid-js";
import PolaroidApartments from "../components/polaroidApartments";
import pb, { getApartments } from "../lib/pocketbase";
import { RecordModel } from "pocketbase";

const Apartments: Component = () => {
    const [apartments, setApartments] = createSignal<RecordModel[]>([]);

    onMount(async () => {
        setApartments(await getApartments());
    });

  return (
    <>
      <h1 class="text-5xl font-bold text-center m-14">
        Apartments
      </h1>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        <For each={apartments()}>
          {(apartment) => (
            <PolaroidApartments
              name={`${apartment.name} "${apartment.spitzname}"`}
              image={pb.files.getURL(apartment, apartment.bilder[0])}
              href={`/apartments/${apartment.spitzname}`}
            />
          )}
        </For>
      </div>
    </>
  );
};

export default Apartments;