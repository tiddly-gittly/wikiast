import type { TElement } from '@udecode/slate';
import type { IParseTreeNode } from 'tiddlywiki';

import { ISlateAstExtraTwMarkers } from 'wikiast-utils';
import type { IBuilders } from '../builder';

export function transclude(builders: IBuilders, node: TElement & ISlateAstExtraTwMarkers): IParseTreeNode | undefined {
  return node.node;
}
