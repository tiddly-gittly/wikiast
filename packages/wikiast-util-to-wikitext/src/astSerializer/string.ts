import type { IParseTreeAttribute } from 'tiddlywiki';
import type { IContext } from '..';

/**
 * parse string type of `orderedAttributes` param
 */
export function string(context: IContext, node: IParseTreeAttribute): string[] {
  return [String(node.value)];
}
