import { A } from "@solidjs/router";
import type { Component } from "solid-js";

type Props = {
  name: string;
  image: string;
  href: string
};

const PolaroidApartments: Component<Props> = (props) => {
  return (
    <A
      href={props.href}
      class="
        group
        bg-white
        rounded-2xl
        p-4
        pb-8
        shadow-lg
        transition-all
        duration-500
        hover:scale-105
        hover:-translate-y-3
        hover:shadow-2xl
        cursor-pointer
      "
    >
      <div class="overflow-hidden rounded-xl">
        <img
          src={props.image}
          alt={props.name}
          class="
            w-full
            h-72
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />
      </div>

      <h2 class="mt-6 text-center text-2xl font-semibold text-gray-800">
        {props.name}
      </h2>
    </A>
  );
};

export default PolaroidApartments;