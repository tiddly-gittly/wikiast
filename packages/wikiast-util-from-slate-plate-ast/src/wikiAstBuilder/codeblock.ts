import type { TElement } from '@udecode/slate';
import type { ICodeBlockParseTreeNode } from 'tiddlywiki';
import type { IBuilders } from '../builder';

export const ELEMENT_CODE_BLOCK = 'codeblock';

export function codeblock(builders: IBuilders, node: TElement): ICodeBlockParseTreeNode {
  const { code, language = '' } = node;
  const attributes: ICodeBlockParseTreeNode['attributes'] = {};
  if (language !== undefined) {
    attributes.language = {
      type: 'string',
      value: language as string,
    };
  }
  attributes.code = {
    type: 'string',
    value: code as string,
  };
  return {
    type: 'codeblock',
    attributes,
  };
}
