import htmlTags from 'html-tags';
import { codeblock, element, ELEMENT_CODE_BLOCK, ELEMENT_LIC, lic, set, text, widget } from './wikiAstBuilder';

type IElementBuilders = Record<keyof HTMLElementTagNameMap, typeof element>;

/**
 * Key is `node.type`, value is node converter function.
 */
export const builders = {
  // auto parse basic element nodes
  // eslint-disable-next-line unicorn/prefer-object-from-entries
  ...(htmlTags as unknown as Array<keyof HTMLElementTagNameMap>).reduce<IElementBuilders>(
    (previousValue: IElementBuilders, currentValue: keyof HTMLElementTagNameMap) => {
      previousValue[currentValue] = element;
      return previousValue;
    },
    // eslint-disable-next-line @typescript-eslint/prefer-reduce-type-parameter, @typescript-eslint/consistent-type-assertions
    {} as IElementBuilders,
  ),
  [ELEMENT_CODE_BLOCK]: codeblock,
  [ELEMENT_LIC]: lic,
  text,
  widget,
  macro: widget,
  set,
};

export type IBuilders = typeof builders;
