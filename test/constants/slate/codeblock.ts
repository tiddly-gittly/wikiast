import { TEditor, TElement, TText, Value } from '@udecode/slate';

export const codeblock: Record<string, TEditor<Value> | TElement | TText | Array<TEditor<Value> | TElement | TText>> = {
  codeblock: [
    {
      type: 'codeblock',
      isElement: true,
      isVoid: true,
      children: [
        {
          text: '',
        },
      ],
      code: '<$list filter="[tag[ExampleTag]sort[title]]"/>',
      language: 'tid',
    },
  ],
};
