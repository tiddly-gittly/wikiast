/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { IParseTreeNode } from 'tiddlywiki';

export const set: Record<string, IParseTreeNode[] | IParseTreeNode> = {
  setDefine: [
    {
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
      children: [
        {
          type: 'transclude',
          start: 55,
          end: 77,
          attributes: {
            '0': {
              name: '0',
              type: 'string',
              value: 'Title/Prompt',
              start: 62,
              end: 75,
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
              end: 75,
            },
          ],
          isBlock: true,
          rule: 'macrocallblock',
        },
      ],
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
      start: 0,
      end: 53,
      rule: 'macrodef',
    },
  ],
};
