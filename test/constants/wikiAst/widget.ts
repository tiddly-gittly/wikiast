/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { IParseTreeNode } from 'tiddlywiki';

export const widget: Record<string, IParseTreeNode[] | IParseTreeNode> = {
  'list widget': [
    {
      type: 'element',
      tag: 'p',
      children: [
        {
          type: 'list',
          start: 0,
          attributes: {
            filter: {
              start: 6,
              name: 'filter',
              type: 'string',
              value: '[tag[ExampleTag]sort[title]]',
              end: 44,
            },
          },
          orderedAttributes: [
            {
              start: 6,
              name: 'filter',
              type: 'string',
              value: '[tag[ExampleTag]sort[title]]',
              end: 44,
            },
          ],
          tag: '$list',
          isSelfClosing: true,
          end: 47,
          isBlock: false,
          rule: 'html',
        },
      ],
      start: 0,
      end: 47,
      rule: 'parseblock',
    },
  ],
  'list widget block': [
    {
      type: 'list',
      start: 0,
      attributes: {
        filter: {
          start: 6,
          name: 'filter',
          type: 'string',
          value: '[tag[ExampleTag]sort[title]]',
          end: 44,
        },
      },
      orderedAttributes: [
        {
          start: 6,
          name: 'filter',
          type: 'string',
          value: '[tag[ExampleTag]sort[title]]',
          end: 44,
        },
      ],
      tag: '$list',
      isSelfClosing: true,
      end: 47,
      isBlock: true,
      rule: 'html',
    },
    {
      type: 'element',
      tag: 'p',
      children: [
        {
          type: 'text',
          text: 'aaa',
          start: 49,
          end: 52,
        },
      ],
      start: 49,
      end: 52,
      rule: 'parseblock',
    },
  ],
  rpn: [
    {
      type: 'element',
      tag: 'p',
      children: [
        {
          type: 'macrocall',
          start: 0,
          attributes: {
            $name: {
              start: 11,
              name: '$name',
              type: 'string',
              value: 'rpn',
              end: 23,
            },
            a: {
              start: 23,
              name: 'a',
              type: 'macro',
              value: {
                type: 'macrocall',
                start: 26,
                params: [
                  {
                    type: 'macro-parameter',
                    start: 31,
                    value: '2',
                    end: 33,
                  },
                  {
                    type: 'macro-parameter',
                    start: 33,
                    value: '2',
                    end: 35,
                  },
                  {
                    type: 'macro-parameter',
                    start: 35,
                    value: '*',
                    end: 37,
                  },
                ],
                name: 'rpn',
                end: 39,
              },
              end: 39,
            },
            b: {
              start: 39,
              name: 'b',
              type: 'string',
              value: 'pi',
              end: 46,
            },
            operation: {
              start: 46,
              name: 'operation',
              type: 'string',
              value: '*',
              end: 60,
            },
            decimals: {
              start: 60,
              name: 'decimals',
              type: 'string',
              value: '4',
              end: 73,
            },
          },
          orderedAttributes: [
            {
              start: 11,
              name: '$name',
              type: 'string',
              value: 'rpn',
              end: 23,
            },
            {
              start: 23,
              name: 'a',
              type: 'macro',
              value: {
                type: 'macrocall',
                start: 26,
                params: [
                  {
                    type: 'macro-parameter',
                    start: 31,
                    value: '2',
                    end: 33,
                  },
                  {
                    type: 'macro-parameter',
                    start: 33,
                    value: '2',
                    end: 35,
                  },
                  {
                    type: 'macro-parameter',
                    start: 35,
                    value: '*',
                    end: 37,
                  },
                ],
                name: 'rpn',
                end: 39,
              },
              end: 39,
            },
            {
              start: 39,
              name: 'b',
              type: 'string',
              value: 'pi',
              end: 46,
            },
            {
              start: 46,
              name: 'operation',
              type: 'string',
              value: '*',
              end: 60,
            },
            {
              start: 60,
              name: 'decimals',
              type: 'string',
              value: '4',
              end: 73,
            },
          ],
          tag: '$macrocall',
          isSelfClosing: true,
          end: 76,
          isBlock: false,
          rule: 'html',
        },
      ],
      start: 0,
      end: 76,
      rule: 'parseblock',
    },
  ],
};
