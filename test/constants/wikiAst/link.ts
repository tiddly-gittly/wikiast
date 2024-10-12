/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { IParseTreeNode } from 'tiddlywiki';

export const link: Record<string, IParseTreeNode[] | IParseTreeNode> = {
  link: [
    {
      type: 'element',
      tag: 'p',
      children: [
        {
          type: 'link',
          attributes: {
            to: {
              type: 'string',
              value: 'ExampleTag',
              start: 2,
              end: 12,
            },
          },
          children: [
            {
              type: 'text',
              text: 'ExampleTag',
              start: 2,
              end: 12,
            },
          ],
          start: 0,
          end: 14,
          rule: 'prettylink',
        },
      ],
      start: 0,
      end: 14,
      rule: 'parseblock',
    },
  ],
  'empty link': [
    {
      type: 'element',
      tag: 'p',
      children: [
        {
          type: 'link',
          attributes: {
            to: {
              type: 'string',
              value: '',
              start: 2,
              end: 2,
            },
          },
          children: [
            {
              type: 'text',
              text: '',
              start: 2,
              end: 2,
            },
          ],
          start: 0,
          end: 4,
          rule: 'prettylink',
        },
      ],
      start: 0,
      end: 4,
      rule: 'parseblock',
    },
  ],
  'alias link': [
    {
      type: 'element',
      tag: 'p',
      children: [
        {
          type: 'link',
          attributes: {
            to: {
              type: 'string',
              value: 'ExampleTag',
              start: 11,
              end: 21,
            },
          },
          children: [
            {
              type: 'text',
              text: 'SomeText',
              start: 2,
              end: 10,
            },
          ],
          start: 0,
          end: 23,
          rule: 'prettylink',
        },
      ],
      start: 0,
      end: 23,
      rule: 'parseblock',
    },
  ],
  'external link': [
    {
      type: 'element',
      tag: 'p',
      children: [
        {
          type: 'element',
          start: 0,
          attributes: {
            id: {
              start: 2,
              name: 'id',
              type: 'string',
              value: '#Top_of_tiddler',
              end: 23,
            },
          },
          orderedAttributes: [
            {
              start: 2,
              name: 'id',
              type: 'string',
              value: '#Top_of_tiddler',
              end: 23,
            },
          ],
          tag: 'a',
          end: 28,
          openTagStart: 0,
          openTagEnd: 24,
          isBlock: false,
          children: [],
          closeTagEnd: 28,
          closeTagStart: 24,
          rule: 'html',
        },
      ],
      start: 0,
      end: 28,
      rule: 'parseblock',
    },
    {
      type: 'element',
      tag: 'p',
      children: [
        {
          type: 'element',
          tag: 'a',
          start: 30,
          attributes: {
            class: {
              type: 'string',
              value: 'tc-tiddlylink-external',
            },
            href: {
              type: 'string',
              value: 'https://tiddlywiki.com',
              start: 39,
              end: 61,
            },
            target: {
              type: 'string',
              value: '_blank',
            },
            rel: {
              type: 'string',
              value: 'noopener noreferrer',
            },
          },
          children: [
            {
              type: 'text',
              start: 35,
              text: 'TW5',
              end: 38,
            },
          ],
          end: 63,
          rule: 'prettyextlink',
        },
      ],
      start: 30,
      end: 63,
      rule: 'parseblock',
    },
    {
      type: 'element',
      tag: 'p',
      children: [
        {
          type: 'element',
          tag: 'a',
          start: 65,
          attributes: {
            class: {
              type: 'string',
              value: 'tc-tiddlylink-external',
            },
            href: {
              type: 'string',
              value: 'mailto:me@where.net',
              start: 78,
              end: 97,
            },
            target: {
              type: 'string',
              value: '_blank',
            },
            rel: {
              type: 'string',
              value: 'noopener noreferrer',
            },
          },
          children: [
            {
              type: 'text',
              start: 70,
              text: 'Mail me',
              end: 77,
            },
          ],
          end: 99,
          rule: 'prettyextlink',
        },
      ],
      start: 65,
      end: 99,
      rule: 'parseblock',
    },
    {
      type: 'element',
      tag: 'p',
      children: [
        {
          type: 'element',
          tag: 'a',
          start: 101,
          attributes: {
            class: {
              type: 'string',
              value: 'tc-tiddlylink-external',
            },
            href: {
              type: 'string',
              value: '../README.md',
              start: 116,
              end: 128,
            },
            target: {
              type: 'string',
              value: '_blank',
            },
            rel: {
              type: 'string',
              value: 'noopener noreferrer',
            },
          },
          children: [
            {
              type: 'text',
              start: 106,
              text: 'Open file',
              end: 115,
            },
          ],
          end: 130,
          rule: 'prettyextlink',
        },
      ],
      start: 101,
      end: 130,
      rule: 'parseblock',
    },
    {
      type: 'element',
      tag: 'p',
      children: [
        {
          type: 'element',
          start: 132,
          attributes: {
            href: {
              start: 134,
              name: 'href',
              type: 'string',
              value: '##Top_of_tiddler',
              end: 158,
            },
          },
          orderedAttributes: [
            {
              start: 134,
              name: 'href',
              type: 'string',
              value: '##Top_of_tiddler',
              end: 158,
            },
          ],
          tag: 'a',
          end: 166,
          openTagStart: 132,
          openTagEnd: 159,
          isBlock: false,
          children: [
            {
              type: 'text',
              text: 'Top',
              start: 159,
              end: 162,
            },
          ],
          closeTagEnd: 166,
          closeTagStart: 162,
          rule: 'html',
        },
      ],
      start: 132,
      end: 166,
      rule: 'parseblock',
    },
  ],
  'link in a list': [
    {
      type: 'element',
      tag: 'ol',
      children: [
        {
          type: 'element',
          tag: 'li',
          children: [
            {
              type: 'text',
              text: 'AAA',
              start: 2,
              end: 5,
            },
            {
              type: 'element',
              tag: 'ol',
              children: [
                {
                  type: 'element',
                  tag: 'li',
                  children: [
                    {
                      type: 'link',
                      attributes: {
                        to: {
                          type: 'string',
                          value: 'BBB',
                          start: 11,
                          end: 14,
                        },
                      },
                      children: [
                        {
                          type: 'text',
                          text: 'BBB',
                          start: 11,
                          end: 14,
                        },
                      ],
                      start: 9,
                      end: 16,
                      rule: 'prettylink',
                    },
                    {
                      type: 'element',
                      tag: 'ol',
                      children: [
                        {
                          type: 'element',
                          tag: 'li',
                          children: [
                            {
                              type: 'text',
                              text: 'CCC',
                              start: 21,
                              end: 24,
                            },
                          ],
                          start: 17,
                          end: 24,
                        },
                      ],
                      start: 17,
                      end: 24,
                    },
                  ],
                  start: 6,
                  end: 16,
                },
              ],
              start: 6,
              end: 16,
            },
          ],
          start: 0,
          end: 5,
        },
      ],
      start: 0,
      end: 5,
      rule: 'list',
    },
  ],
  'bare external link': [{
    children: [{
      attributes: {
        class: { type: 'string', value: 'tc-tiddlylink-external' },
        href: { type: 'string', value: 'https://tiddlywiki.com' },
        rel: { type: 'string', value: 'noopener noreferrer' },
        target: { type: 'string', value: '_blank' },
      },
      children: [{ end: 22, start: 0, text: 'https://tiddlywiki.com', type: 'text' }],
      end: 22,
      rule: 'extlink',
      start: 0,
      tag: 'a',
      type: 'element',
    }],
    end: 22,
    rule: 'parseblock',
    start: 0,
    tag: 'p',
    type: 'element',
  }, {
    children: [{
      attributes: {
        class: { type: 'string', value: 'tc-tiddlylink-external' },
        href: { type: 'string', value: 'file://../README.md' },
        rel: { type: 'string', value: 'noopener noreferrer' },
        target: { type: 'string', value: '_blank' },
      },
      children: [{ end: 43, start: 24, text: 'file://../README.md', type: 'text' }],
      end: 43,
      rule: 'extlink',
      start: 24,
      tag: 'a',
      type: 'element',
    }],
    end: 43,
    rule: 'parseblock',
    start: 24,
    tag: 'p',
    type: 'element',
  }],
};
