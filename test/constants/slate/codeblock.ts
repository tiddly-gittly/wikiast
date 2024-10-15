import { TEditor, TElement, TText, Value } from '@udecode/slate';

export const codeblock: Record<string, TEditor<Value> | TElement | TText | Array<TEditor<Value> | TElement | TText>> = {
  codeblock: [
    {
      attributes: {
        code: '<$list filter="[tag[ExampleTag]sort[title]]"/>',
        language: 'tid',
      },
      'tw-attributes': {
        code: {
          type: 'string',
          value: '<$list filter="[tag[ExampleTag]sort[title]]"/>',
          start: 7,
          end: 57,
        },
        language: {
          type: 'string',
          value: 'tid',
          start: 3,
          end: 6,
        },
      },
      type: 'codeblock',
      rule: 'codeblock',
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
