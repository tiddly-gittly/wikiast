import { TEditor, TElement, TText, Value } from '@udecode/slate';

export const macro: Record<string, TEditor<Value> | TElement | TText | Array<TEditor<Value> | TElement | TText>> = {
  'macro alert': [
    {
      orderedAttributes: [
        {
          name: '$variable',
          type: 'string',
          value: 'alert',
        },
        {
          name: '0',
          type: 'string',
          value: 'primary',
          start: 7,
          end: 17,
        },
        {
          name: '1',
          type: 'string',
          value: 'primary alert',
          start: 17,
          end: 33,
        },
        {
          name: 'width',
          type: 'string',
          value: '60%',
          start: 33,
          end: 45,
        },
      ],
      isBlock: true,
      attributes: {
        '0': 'primary',
        '1': 'primary alert',
        $variable: 'alert',
        width: '60%',
      },
      'tw-attributes': {
        '0': {
          name: '0',
          type: 'string',
          value: 'primary',
          start: 7,
          end: 17,
        },
        '1': {
          name: '1',
          type: 'string',
          value: 'primary alert',
          start: 17,
          end: 33,
        },
        $variable: {
          name: '$variable',
          type: 'string',
          value: 'alert',
        },
        width: {
          name: 'width',
          type: 'string',
          value: '60%',
          start: 33,
          end: 45,
        },
      },
      node: {
        type: 'transclude',
        start: 0,
        end: 47,
        attributes: {
          '0': {
            name: '0',
            type: 'string',
            value: 'primary',
            start: 7,
            end: 17,
          },
          '1': {
            name: '1',
            type: 'string',
            value: 'primary alert',
            start: 17,
            end: 33,
          },
          $variable: {
            name: '$variable',
            type: 'string',
            value: 'alert',
          },
          width: {
            name: 'width',
            type: 'string',
            value: '60%',
            start: 33,
            end: 45,
          },
        },
        orderedAttributes: [
          {
            name: '$variable',
            type: 'string',
            value: 'alert',
          },
          {
            name: '0',
            type: 'string',
            value: 'primary',
            start: 7,
            end: 17,
          },
          {
            name: '1',
            type: 'string',
            value: 'primary alert',
            start: 17,
            end: 33,
          },
          {
            name: 'width',
            type: 'string',
            value: '60%',
            start: 33,
            end: 45,
          },
        ],
        isBlock: true,
        rule: 'macrocallblock',
      },
      rule: 'macrocallblock',
      type: 'transclude',
      isElement: true,
      isVoid: true,
      children: [
        {
          text: '',
        },
      ],
    },
  ],
};
