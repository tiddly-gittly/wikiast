/* eslint-disable @typescript-eslint/consistent-type-assertions */
import type { TElement } from '@udecode/slate';
import type { IDomParseTreeNode, IWikiASTNode } from 'tiddlywiki';
import { type ISlateAstExtraTwMarkers } from 'wikiast-utils';

import type { IBuilders } from '../../builder';
import { convertNodes } from '../../traverse';

import { a } from './a';
import { blockquote } from './blockquote';
import { table, td } from './table';

const elementBuilders: Partial<Record<keyof HTMLElementTagNameMap, (builders: IBuilders, node: TElement) => IWikiASTNode>> = {
  blockquote,
  a,
  table,
  td,
};

export function element(builders: IBuilders, node: TElement & ISlateAstExtraTwMarkers & { type: keyof HTMLElementTagNameMap }): IWikiASTNode {
  const { type: tag, children } = node;
  const customElementHandler = elementBuilders[tag];
  if (typeof customElementHandler === 'function') {
    return customElementHandler(builders, node);
  }
  return {
    type: 'element',
    rule: node.rule,
    tag,
    children: convertNodes(builders, children),
  } as IDomParseTreeNode;
}
