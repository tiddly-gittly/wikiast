import type { IDomParseTreeNode } from 'tiddlywiki';
import type { IContext } from '../..';
import { convertNodes } from '../../traverse';

/**
 * Div can be omitted, just return the children
 */
export function div(context: IContext, { type, tag, children }: IDomParseTreeNode): string[] {
  return convertNodes(context, children);
}
