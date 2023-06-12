import type { IDomParseTreeNode } from 'tiddlywiki';
import type { IContext } from '../..';
import { convertNodes } from '../../traverse';

/**
 * P can be omitted, just return the children with `\n`, so wikitext result will have \n\n
 */
export function p(context: IContext, { type, tag, children }: IDomParseTreeNode): string[] {
  return [...convertNodes(context, children), '\n'];
}
