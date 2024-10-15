import { type TElement } from '@udecode/slate';
import type { ICustomParseTreeNode } from 'tiddlywiki';

import { ELEMENT_TRANSCLUDE, ISlateAstExtraTwMarkers } from 'wikiast-utils';
import { type IContext } from '..';

/**
 * Render result as TW transclude / macrocall, instead of pure React component.
 */
export function transclude(context: IContext, node: ICustomParseTreeNode): TElement & ISlateAstExtraTwMarkers {
  /** it may be `<$macrocall` widget */
  return {
    node,
    rule: node.rule,
    type: ELEMENT_TRANSCLUDE,
    isElement: true,
    isVoid: true,
    children: [{ text: '' }],
  };
}
