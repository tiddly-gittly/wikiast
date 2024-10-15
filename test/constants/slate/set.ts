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
      isBlock: true,
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
        isBlock: true,
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
        start: 0,
        end: 53,
        rule: 'macrodef',
      },
      type: 'set',
      isElement: true,
      isVoid: true,
      children: [
        {
          orderedAttributes: [
            {
              name: '$variable',
              type: 'string',
              value: 'lingo',
            },
            {
              name: '0',
              type: 'string',
              value: 'Title/Prompt',
              start: 62,
              end: 77,
            },
          ],
          isBlock: true,
          attributes: {
            '0': 'Title/Prompt',
            $variable: 'lingo',
          },
          'tw-attributes': {
            '0': {
              name: '0',
              type: 'string',
              value: 'Title/Prompt',
              start: 62,
              end: 77,
            },
            $variable: {
              name: '$variable',
              type: 'string',
              value: 'lingo',
            },
          },
          node: {
            type: 'transclude',
            start: 55,
            end: 79,
            attributes: {
              '0': {
                name: '0',
                type: 'string',
                value: 'Title/Prompt',
                start: 62,
                end: 77,
              },
              $variable: {
                name: '$variable',
                type: 'string',
                value: 'lingo',
              },
            },
            orderedAttributes: [
              {
                name: '$variable',
                type: 'string',
                value: 'lingo',
              },
              {
                name: '0',
                type: 'string',
                value: 'Title/Prompt',
                start: 62,
                end: 77,
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
    },
  ],
};
