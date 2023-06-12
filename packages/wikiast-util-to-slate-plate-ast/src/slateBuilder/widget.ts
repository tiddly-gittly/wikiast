import { type TElement } from '@udecode/plate-core';
import type { ICustomParseTreeNode } from 'tiddlywiki';

import { ELEMENT_WIDGET } from 'wikiast-utils';
import { type IContext } from '..';

/**
 * Render result as TW widget, instead of pure React component.
 */
export function widget(context: IContext, node: ICustomParseTreeNode): TElement & { node: ICustomParseTreeNode } {
  return {
    node,
    type: ELEMENT_WIDGET,
    isElement: true,
    isVoid: true,
    children: [{ text: '' }],
  };
}
