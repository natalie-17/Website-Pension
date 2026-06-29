import type { Component } from 'solid-js';
import Polaroid from '../components/polaroid';

const Honigverkostung: Component = () => {
  return (
    <>
      <p class="text-4xl text-green-700 text-center py-20">Hier gibts Honig!</p>
      <Polaroid/>
      <Polaroid/>
      <Polaroid/>
      <Polaroid/>
    </>
  );
};

export default Honigverkostung;