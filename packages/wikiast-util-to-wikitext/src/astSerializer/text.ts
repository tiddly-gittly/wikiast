import type { ITextParseTreeNode } from 'tiddlywiki';
import { IContext } from '../src';

/**
 * This is a parameter type
 */
export function text(context: IContext, node: ITextParseTreeNode): string[] {
  return [node.text];
}
