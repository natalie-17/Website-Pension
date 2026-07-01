import type { Component } from 'solid-js';
import Polaroid from '../components/polaroid';
import { Title } from '@solidjs/meta';

const Honigverkostung: Component = () => {
  return (
    <>
      <Title>Honigverkostung</Title>
      <p class="text-4xl text-green-700 text-center py-20">Hier gibts Honig!</p>
    </>
  );
};

export default Honigverkostung;