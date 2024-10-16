import { codeblock, element, link, set, text, transclude, widget, parseblock } from './slateBuilder';
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
  transclude,
  set,
  parseblock,
};
export type IBuilders = typeof builders;
export type IAnyBuilder = IBuilders & Record<string, typeof slateNode>;
