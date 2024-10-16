/**
 * This is an example of custom element processing. The logic here is the same as `src/transform/wikiast-util-to-slate-plate-ast/slateBuilder/element/index.ts`, purely for example.
 */
import { TElement, TNode } from '@udecode/slate';
import type { IDomParseTreeNode } from 'tiddlywiki';
import { IContext } from '../..';
import { convertNodes } from '../../traverse';

export function tbody(context: IContext, node: IDomParseTreeNode): TElement[] {
  const { children } = node;
  // slate ast don't have tbody node
  return convertNodes(context, children) as TElement[];
}

/**
 * In table, wikiast has bare text node in td, but slateast requires we have a p wrapper
 */
export function wrapTextWithP(nodes: TNode[]): TNode[] {
  return nodes.map((node) => {
    if (typeof node.text === 'string' && node.type === undefined) {
      return {
        type: 'p',
        rule: 'parseblock',
        children: [node],
      } as TNode;
    }
    return node;
  });
}

export function td(context: IContext, node: IDomParseTreeNode): TElement {
  const { tag, children } = node;
  return {
    type: tag,
    children: wrapTextWithP(convertNodes(context, children)) as TElement[],
  };
}
