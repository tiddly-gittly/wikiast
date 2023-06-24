import type { TElement, TText } from '@udecode/plate-core';
import type { IParseTreeNode, ITextParseTreeNode } from 'tiddlywiki';
import type { IBuilders } from '../builder';
import { convertNodes } from '../traverse';

// import { ELEMENT_LIC } from '@udecode/plate-list';
export const ELEMENT_LIC = 'lic';

export function lic(builders: IBuilders, node: TElement & { children: Array<TText | TElement>; type: typeof ELEMENT_LIC }): IParseTreeNode[] {
  const { children } = node;
  const nodesSpreadIntoList = convertNodes(builders, children);
  if (nodesSpreadIntoList.length > 0) {
    // when there is a list element in the lic, plate will generate two empty text child for lic, we don't need that in wikiast
    return nodesSpreadIntoList.filter((child) => child.type !== 'text' || (child as ITextParseTreeNode).text !== '');
  }
  return nodesSpreadIntoList;
}
