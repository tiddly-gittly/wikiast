import { TEditor, Value, TElement, TText } from '@udecode/slate';

export const transclude: Record<string, TEditor<Value> | TElement | TText | Array<TEditor<Value> | TElement | TText>> = {
  transclude: {
    node: {
      type: 'tiddler',
      attributes: {
        tiddler: {
          type: 'string',
          value: 'favicon.ico',
        },
      },
      isBlock: true,
      children: [
        {
          type: 'transclude',
          attributes: {
            tiddler: {
              type: 'string',
              value: 'favicon.ico',
            },
          },
          isBlock: true,
        },
      ],
    },
    type: 'widget',
    isElement: true,
    isVoid: true,
    children: [
      {
        text: '',
      },
    ],
  },
};
