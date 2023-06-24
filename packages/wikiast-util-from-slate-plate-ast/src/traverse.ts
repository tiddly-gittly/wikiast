import type { TNode } from '@udecode/plate-core';
import type { IParseTreeNode } from 'tiddlywiki';

import { getSlatePlateASTAdditionalProperties, isElement, isText } from 'wikiast-utils';
import type { IBuilders } from './builder';

export type IAnyBuilder = IBuilders & Record<string, typeof convertWikiAstNode>;

export function convertNodes(builders: IBuilders, nodes: TNode[] | undefined): IParseTreeNode[] {
  if (nodes === undefined || nodes.length === 0) {
    return [];
  }

  return nodes.reduce((accumulator: IParseTreeNode[], node) => {
    return [...accumulator, ...convertWikiAstNode(builders as IAnyBuilder, node)];
  }, []);
}

export function convertWikiAstNode(builders: IAnyBuilder, node: TNode): IParseTreeNode[] {
  // only text and root node don't have a `type` field, deal with it first
  if (isText(node)) {
    return [builders.text(builders, node)];
  }
  if (isElement(node)) {
    const builder = builders[node.type as keyof IBuilders];
    if (typeof builder === 'function') {
      const builtSlateNodeOrNodes = builder(builders, node as never);
      return Array.isArray(builtSlateNodeOrNodes)
        ? builtSlateNodeOrNodes.map((child) => ({ ...getSlatePlateASTAdditionalProperties(node as never), ...child }))
        : ([{ ...getSlatePlateASTAdditionalProperties(node as never), ...builtSlateNodeOrNodes }] as IParseTreeNode[]);
    }
  }
  // it might be a root or pure parent node, reduce it
  if ('children' in node) {
    return convertNodes(builders, node.children);
  }
  return [];
}
