import type { JSX } from "solid-js";

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "wa-icon": JSX.HTMLAttributes<HTMLElement> & {
        name?: string;
        variant?: string;
      };
    }
  }
}