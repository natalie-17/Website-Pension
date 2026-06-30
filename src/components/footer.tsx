import { A } from '@solidjs/router';
import { type Component } from 'solid-js';

const Footer: Component = () => {
  return (
    <>
        <div class='flex justify-evenly h-10'>
            <A href='/agb'>AGB</A>
            <A href='/datenschutz'>Datenschutz</A>
            <A href='/impressum'>Impressum</A> 
        </div>
       
        <p class='text-center'>© Copyright Familie Liebl 2026</p>
    </>
  );
};

export default Footer;