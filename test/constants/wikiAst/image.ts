/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { IParseTreeNode } from 'tiddlywiki';

export const image: Record<string, IParseTreeNode[] | IParseTreeNode> = {
  image: [
    {
      type: 'element',
      tag: 'p',
      children: [
        {
          type: 'image',
          attributes: {
            source: {
              type: 'string',
              value: 'TiddlyWikiIconBlack.png',
              start: 5,
              end: 28,
            },
          },
          start: 0,
          end: 30,
          rule: 'image',
        },
      ],
      start: 0,
      end: 30,
      rule: 'parseblock',
    },
  ],
  'image with tooltip and width': [
    {
      type: 'element',
      tag: 'p',
      children: [
        {
          type: 'image',
          attributes: {
            width: {
              start: 5,
              name: 'width',
              type: 'string',
              value: '75%',
              end: 16,
            },
            tooltip: {
              type: 'string',
              value: 'black one',
              start: 18,
              end: 26,
            },
            source: {
              type: 'string',
              value: 'TiddlyWikiIconBlack.png',
              start: 27,
              end: 51,
            },
          },
          start: 0,
          end: 53,
          rule: 'image',
        },
      ],
      start: 0,
      end: 53,
      rule: 'parseblock',
    },
  ],
};
