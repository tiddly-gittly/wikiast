import type { TText } from '@udecode/slate';
import type { ITextParseTreeNode } from 'tiddlywiki';
import { omit } from 'wikiast-utils';
import { IContext } from '..';

/** Slate node is compact, we need to filter out some keys from wikiast */
const textLevelKeysToOmit = ['type', 'start', 'end'];

export function text(context: IContext, text: ITextParseTreeNode): TText {
  return {
    text: '', // provides default text
    ...omit(text, textLevelKeysToOmit),
    ...context.marks,
  };
}
