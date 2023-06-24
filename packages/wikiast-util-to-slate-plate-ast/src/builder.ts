import { codeblock, element, link, macro, set, text, widget } from './slateBuilder';
import type { slateNode } from './traverse';

export const builders = {
  element,
  text,
  link,
  codeblock,
  /**
   * We render most tw widgets using tw-react
   */
  widget,
  image: widget,
  tiddler: widget,
  macrocall: macro,
  set,
};
export type IBuilders = typeof builders;
export type IAnyBuilder = IBuilders & Record<string, typeof slateNode>;
