import type { TNode, TText } from '@udecode/slate';
import { type IParseTreeNode } from 'tiddlywiki';
import type { IContext } from '.';

export function convertNodes(context: IContext, nodes: IParseTreeNode[] | undefined): TNode[] {
  if (nodes === undefined || nodes.length === 0) {
    return [{ text: '' }];
  }

  return nodes.reduce((accumulator: TNode[], node) => {
    return [...accumulator, ...slateNode(context, node)];
  }, []);
}

export function slateNode(context: IContext, node: IParseTreeNode): TNode[] {
  const id = context.idCreator?.();
  const withId = (nodeToAddId: TNode | TText): TNode | TText => (id === undefined ? nodeToAddId : { ...nodeToAddId, id });
  if ('rule' in node && node.rule !== undefined && node.rule in context.builders) {
    const builder = context.builders[node.rule as keyof IContext['builders']];
    if (typeof builder === 'function') {
      // basic elements
      const builtSlateNodeOrNodes = builder(context, node as never);
      return Array.isArray(builtSlateNodeOrNodes)
        ? builtSlateNodeOrNodes.map((child) => withId(child))
        : ([withId(builtSlateNodeOrNodes)] as TNode[]);
    }
  } else if ('text' in node) {
    // text node
    return [withId({ text: node.text } as TText)];
  } else {
    console.warn(`WikiAst get Unknown node type: ${JSON.stringify(node)}`);
    return [];
  }
  return [];
}
