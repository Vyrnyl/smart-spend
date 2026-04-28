import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTabClass = (active: boolean) =>
  `flex-1 py-4 text-sm font-medium border-b-2 transition-colors
   ${
     active
       ? "border-primarys text-primarys bg-surface-bright"
       : "border-transparent text-on-surface-variant bg-surface-bright hover:bg-surface-container-low"
   }`;
