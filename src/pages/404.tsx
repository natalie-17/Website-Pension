import { A } from '@solidjs/router';
import type { Component } from 'solid-js';

const NotFound: Component = () => {
  return (
    <>
      <p class="text-4xl text-green-700 text-center py-20">Seite konnte nicht gefunden werden!</p>
      <A href='/'>Zurück zur Startseite</A>
    </>
  );
};

export default NotFound;