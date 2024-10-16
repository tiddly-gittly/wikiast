import { TEditor, TElement, TText, Value } from '@udecode/slate';

export const text: Record<string, TEditor<Value> | TElement | TText | Array<TEditor<Value> | TElement | TText>> = {
  text: [{ text: 'AAA' }],
  'p > text': { type: 'p', children: [{ text: 'AAA' }] },
};
