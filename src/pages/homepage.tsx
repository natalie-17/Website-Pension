import type { Component } from 'solid-js';
import Polaroid from '../components/polaroid';

const Homepage: Component = () => {
  return (
    <>
      <p class="text-4xl text-green-700 text-center py-20">Hello tailwind!</p>
      <Polaroid id='7757ziztm6y4rwu'/>
    </>
  );
};

export default Homepage;