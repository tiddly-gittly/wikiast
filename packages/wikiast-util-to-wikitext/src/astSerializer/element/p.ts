import type { IDomParseTreeNode } from 'tiddlywiki';
import { convertNodes } from '../../src/traverse';
import { IContext } from '../../src';

/**
 * P can be omitted, just return the children with `\n`, so wikitext result will have \n\n
 */
export function p(context: IContext, { type, tag, children }: IDomParseTreeNode): string[] {
  return [...convertNodes(context, children), '\n'];
}
