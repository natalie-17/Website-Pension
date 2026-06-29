import { createEffect, type Component } from 'solid-js';
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://api.pensionliebl.mkarl.io');

type PolaroidProps = {
  id: string
}

const Polaroid: Component<PolaroidProps> = (props: PolaroidProps) => {
  createEffect(() => {
    (async () => {
      const record = await pb.collection('polaroid').getOne(props.id);
      console.log(record);
    })();
  });
  
  return (
    <>
        <h1>ueberschrift</h1>
        <img src="bild" alt="alt_tag" />
        <p>polaroid.beschreibung</p>
    </>
  );
};

export default Polaroid;