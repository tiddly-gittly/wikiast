import type { TElement } from '@udecode/slate';
import type { IDomParseTreeNode } from 'tiddlywiki';
import type { IBuilders } from '../../builder';
import { convertNodes } from '../../traverse';
import { unwrapSlateTextWithP } from '../text';

export function table(builders: IBuilders, node: TElement): IDomParseTreeNode {
  const children = convertNodes(builders, node.children);
  return {
    type: 'element',
    tag: 'table',
    children: [
      {
        type: 'element',
        tag: 'tbody',
        children,
      },
    ],
  };
}

export function td(builders: IBuilders, node: TElement): IDomParseTreeNode {
  const children = convertNodes(builders, unwrapSlateTextWithP(node.children));
  return {
    type: 'element',
    tag: 'td',
    children,
  };
}
