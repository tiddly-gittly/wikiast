import cloneDeep from 'lodash/cloneDeep';
import mapValues from 'lodash/mapValues';
import { type IParseTreeNode } from 'tiddlywiki';

import { mapToNoPosNode } from 'wikiast-utils';
import { codeblock } from './codeblock';
import { heading } from './heading';
import { image } from './image';
import { link } from './link';
import { macro } from './macro';
import { ol } from './ol';
import { p } from './p';
import { set } from './set';
import { table } from './table';
import { transclude } from './transclude';
import { widget } from './widget';

export const wikiAstDict: Record<string, IParseTreeNode | IParseTreeNode[]> = {
  ...p,
  ...ol,
  ...image,
  ...codeblock,
  ...transclude,
  ...widget,
  ...link,
  ...heading,
  ...macro,
  ...table,
  ...set,
};

export const wikiAstDictWithoutPos = mapValues(
  cloneDeep(wikiAstDict),
  (ast: IParseTreeNode | IParseTreeNode[]) => Array.isArray(ast) ? ast.map((aAst) => mapToNoPosNode(aAst)) : mapToNoPosNode(ast),
) as typeof wikiAstDict;
