import { example } from "./example";
import { Registry } from "./schema";
import { ui } from "./ui";

export const registry: Registry = {
    ...ui,
    ...example,
  };
  
  export type ComponentName = keyof (typeof ui & typeof example);