import { createResource, For, Show, type Component } from 'solid-js';
import PolaroidApartments from '../components/polaroidApartments';
import { useParams } from '@solidjs/router';
import pb from '../lib/pocketbase';

const ApartmentPage: Component = () => {
   const params = useParams();

    const [apartment] = createResource(
        () => params.spitzname,
            async (spitzname) => {
                return await pb.collection("apartments").getFirstListItem(
                    pb.filter("spitzname = {:name}", { name: spitzname }));
            }
    );

  return (
    <Show when={apartment()} fallback={<></>}>
    {(apartment) => (
        <>
        <PolaroidApartments
        name={`${apartment().name} "${apartment().spitzname}"`}
        image={pb.files.getURL(apartment(), apartment().bilder[0])}
        href={`/apartments/${apartment().spitzname}`}
        />
        <p>{apartment().beschreibung}</p>
        <For each={apartment().bilder}>
          {(bild) => (
            <img
              src={pb.files.getURL(apartment(), bild)}
              alt={apartment().spitzname}
            />
          )}
        </For>
        </>
    )}
    </Show>
  );
};

export default ApartmentPage;