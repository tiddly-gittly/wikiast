/* eslint-disable @typescript-eslint/consistent-type-assertions */
import type { TElement } from '@udecode/slate';
import type { ParseTreeHtmlNode, WikiASTNode } from 'tiddlywiki/types/ast';

import type { IBuilders } from '../../builder';
import { convertNodes } from '../../traverse';

import { a } from './a';
import { blockquote } from './blockquote';
import { table, td } from './table';

const elementBuilders: Partial<Record<keyof HTMLElementTagNameMap, (builders: IBuilders, node: TElement) => WikiASTNode>> = {
  blockquote,
  a,
  table,
  td,
};

export function element(builders: IBuilders, node: TElement & { type: keyof HTMLElementTagNameMap }): WikiASTNode {
  const { type: tag, children } = node;
  const customElementHandler = elementBuilders[tag];
  if (typeof customElementHandler === 'function') {
    return customElementHandler(builders, node);
  }
  return {
    type: 'element',
    tag,
    children: convertNodes(builders, children),
  } satisfies ParseTreeHtmlNode;
}
