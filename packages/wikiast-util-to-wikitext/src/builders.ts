import { codeblock, image, jsx, link, macro, macrocall, set, string, text, tiddler, widget } from './astSerializer';
import { element, elementBuilders } from './astSerializer/element/element';

export const builders = {
  element,
  ...elementBuilders,
  text,
  image,
  tiddler,
  link,
  jsx,
  widget,
  macro,
  macrocall,
  set,
  string,
  codeblock,
  'macro-parameter': string,
  number: string,
  bigint: string,
  boolean: string,
};
export type IBuilders = typeof builders;
