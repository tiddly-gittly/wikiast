import { TEditor, TElement, TText, Value } from '@udecode/slate';
import { ELEMENT_CODE_BLOCK } from 'wikiast-utils';

export const codeblock: Record<string, TEditor<Value> | TElement | TText | Array<TEditor<Value> | TElement | TText>> = {
  codeblock: [
    {
      type: ELEMENT_CODE_BLOCK,
      isElement: true,
      isVoid: true,
      language: 'tid',
      code: '<$list filter="[tag[ExampleTag]sort[title]]"/>',
      children: [
        {
          text: '',
        },
      ],
    },
  ],
};
