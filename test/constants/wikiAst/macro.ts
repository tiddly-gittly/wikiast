/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { IParseTreeNode } from 'tiddlywiki';

export const macro: Record<string, IParseTreeNode[] | IParseTreeNode> = {
  'macro alert': [
    {
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
  ],
};
