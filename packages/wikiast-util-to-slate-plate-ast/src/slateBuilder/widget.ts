import { type TElement } from '@udecode/slate';
import type { ICustomParseTreeNode } from 'tiddlywiki';
import { type ISlateAstExtraTwMarkers } from 'wikiast-utils';

import { ELEMENT_WIDGET } from 'wikiast-utils';
import { type IContext } from '..';

/**
 * Render result as TW widget, instead of pure React component.
 */
export function widget(context: IContext, node: ICustomParseTreeNode): TElement & ISlateAstExtraTwMarkers {
  return {
    node,
    rule: node.rule,
    type: ELEMENT_WIDGET,
    isElement: true,
    isVoid: true,
    children: [{ text: '' }],
  };
}
