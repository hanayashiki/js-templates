import { red } from "kolorist";

export const log = (...args: any[]) =>
  // eslint-disable-next-line no-console
  console.log(red("js-templates"), ...args);
