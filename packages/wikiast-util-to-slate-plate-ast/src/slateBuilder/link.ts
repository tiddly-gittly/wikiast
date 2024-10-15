import { type TElement } from '@udecode/slate';
import type { IDomParseTreeNode, ITextParseTreeNode } from 'tiddlywiki';

import { type ISlateAstExtraTwMarkers } from 'wikiast-utils';
import { type IContext } from '..';

export function link(context: IContext, node: IDomParseTreeNode): TElement & ISlateAstExtraTwMarkers {
  // we always have these attributes and child, even in empty link `[[]]`
  const {
    to: { value: to },
  } = node.attributes ?? {};
  const [{ text }] = (node.children as ITextParseTreeNode[]) ?? [];

  return {
    type: 'a',
    rule: node.rule,
    url: to,
    children: [{ text }],
  };
}
