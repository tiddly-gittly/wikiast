/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { IParseTreeNode } from 'tiddlywiki';

export const macro: Record<string, IParseTreeNode[] | IParseTreeNode> = {
  'macro alert': [
    {
      type: 'transclude',
      start: 0,
      end: 43,
      attributes: {
        '0': {
          name: '0',
          type: 'string',
          value: 'primary',
          start: 7,
          end: 15,
        },
        '1': {
          name: '1',
          type: 'string',
          value: 'primary alert',
          start: 15,
          end: 31,
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
          start: 31,
          end: 41,
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
          end: 15,
        },
        {
          name: '1',
          type: 'string',
          value: 'primary alert',
          start: 15,
          end: 31,
        },
        {
          name: 'width',
          type: 'string',
          value: '60%',
          start: 31,
          end: 41,
        },
      ],
      isBlock: true,
      rule: 'macrocallblock',
    },
  ],
};
