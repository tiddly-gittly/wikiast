import { TEditor, TElement, TText, Value } from '@udecode/slate';

export const set: Record<string, TEditor<Value> | TElement | TText | Array<TEditor<Value> | TElement | TText>> = {
  setDefine: [
    {
      orderedAttributes: [
        {
          name: 'name',
          type: 'string',
          value: 'lingo-base',
        },
        {
          name: 'value',
          type: 'string',
          value: '$:/language/ControlPanel/Basics/',
        },
      ],
      attributes: {
        name: 'lingo-base',
        value: '$:/language/ControlPanel/Basics/',
      },
      'tw-attributes': {
        name: {
          name: 'name',
          type: 'string',
          value: 'lingo-base',
        },
        value: {
          name: 'value',
          type: 'string',
          value: '$:/language/ControlPanel/Basics/',
        },
      },
      node: {
        type: 'set',
        attributes: {
          name: {
            name: 'name',
            type: 'string',
            value: 'lingo-base',
          },
          value: {
            name: 'value',
            type: 'string',
            value: '$:/language/ControlPanel/Basics/',
          },
        },
        params: [],
        isMacroDefinition: true,
        orderedAttributes: [
          {
            name: 'name',
            type: 'string',
            value: 'lingo-base',
          },
          {
            name: 'value',
            type: 'string',
            value: '$:/language/ControlPanel/Basics/',
          },
        ],
      },
      type: 'set',
      isElement: true,
      isVoid: true,
      children: [],
    },
  ],
};
