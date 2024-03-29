import { type TElement } from '@udecode/slate';
import type { ICodeBlockParseTreeNode } from 'tiddlywiki';

import { ELEMENT_CODE_BLOCK } from 'wikiast-utils';
import { type IContext } from '..';

/**
 * Our custom code block plate ast
 */
export function codeblock(context: IContext, node: ICodeBlockParseTreeNode): TElement {
  const language = node.attributes.language?.value ?? '';
  const code = node.attributes.code?.value ?? '';
  return {
    type: ELEMENT_CODE_BLOCK,
    isElement: true,
    isVoid: true,
    language,
    code,
    children: [{ text: '' }],
  };
}
