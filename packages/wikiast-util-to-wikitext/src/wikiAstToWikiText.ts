import { cloneDeep, repeat } from 'lodash';
import type { IParseTreeNode } from 'tiddlywiki';
import { parents } from 'unist-util-parents';
import { dropExtraTailingN } from 'wikiast-utils';
import { defaultContext } from './context';
import { convertNodes } from './traverse';

export interface IWikiAstToWikiTextOptions {
  /** Number of extra `\n` added to the end of file. We will remove extra `\n`, so if you still need them, you have to say you want to add some of them back by this. */
  extraTailingNCount?: number;
}
export function wikiAstToWikiText(input: IParseTreeNode | IParseTreeNode[], options?: IWikiAstToWikiTextOptions): string {
  const { extraTailingNCount = 0 } = options ?? {};
  const nodes = Array.isArray(input) ? input.map((node) => parents(node) as IParseTreeNode) : [parents(input) as IParseTreeNode];
  const lines = convertNodes(cloneDeep(cloneDeep({ ...defaultContext, nodes })), nodes);
  return dropExtraTailingN(lines).join('') + repeat('\n', extraTailingNCount);
}
