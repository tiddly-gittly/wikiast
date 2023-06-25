import type { IDomParseTreeNode } from 'tiddlywiki';
import find from 'unist-util-find';
import { omit } from 'wikiast-utils';
import type { IContext } from '../..';
import { convertNodes } from '../../traverse';

export function li(context: IContext, node: IDomParseTreeNode): string[] {
  const listItemDot = context.listMode === 'ul' ? '*' : '#';
  // the `rest` here maybe another ol or ul, so we need to indent it by making it list element in the result
  const childTextContent = convertNodes(context, node.children);
  /** only li that don't contain other li should generate a \n. Assign `tag: undefined` because otherwise `find` will find itself.  */
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const isLeafLi = find({ ...omit(node, ['tag']) as IDomParseTreeNode }, { tag: 'li' }) === undefined;
  // add \n so list will change line automatically
  return [`${listItemDot.repeat(context.indentLevels + 1)} ${childTextContent.join('')}`, isLeafLi ? '\n' : ''];
}
