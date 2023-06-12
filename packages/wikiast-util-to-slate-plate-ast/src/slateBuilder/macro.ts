import { type TElement } from '@udecode/plate-core';
import type { ICustomParseTreeNode } from 'tiddlywiki';

import { ELEMENT_MACRO } from 'wikiast-utils';
import { type IContext } from '..';

/**
 * Render result as TW macrocall, instead of pure React component.
 */
export function macro(context: IContext, node: ICustomParseTreeNode): TElement & { node: ICustomParseTreeNode } {
  /** it may be `<$macrocall` widget */
  if ('tag' in node) {
    return context.builders.widget(context, node);
  }
  return {
    node,
    type: ELEMENT_MACRO,
    isElement: true,
    isVoid: true,
    children: [{ text: '' }],
  };
}
