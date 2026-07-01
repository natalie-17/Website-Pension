import { Title } from '@solidjs/meta';
import { A } from '@solidjs/router';
import type { Component } from 'solid-js';

const NotFound: Component = () => {
  return (
    <>
      <Title>Seite nicht gefunden</Title>
      <p class="text-4xl text-red-500 text-center py-20">Seite konnte nicht gefunden werden!</p>
      <A href='/' class='text-center block text-2xl transition-colors duration-300 hover:text-blue-600'><wa-icon name="house" variant="regular" class='mr-1.5'/>Zurück zur Startseite</A>
    </>
  );
};

export default NotFound;