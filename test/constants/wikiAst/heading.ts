/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { IParseTreeNode } from 'tiddlywiki';

export const heading: Record<string, IParseTreeNode[] | IParseTreeNode> = {
  heading: [
    {
      type: 'element',
      tag: 'h1',
      attributes: {
        class: {
          type: 'string',
          value: '',
          start: 1,
          end: 1,
        },
      },
      children: [
        {
          type: 'text',
          text: 'AAA',
          start: 2,
          end: 5,
        },
      ],
      start: 0,
      end: 5,
      rule: 'heading',
    },
    {
      type: 'element',
      tag: 'h2',
      attributes: {
        class: {
          type: 'string',
          value: '',
          start: 9,
          end: 9,
        },
      },
      children: [
        {
          type: 'text',
          text: 'AAA',
          start: 10,
          end: 13,
        },
      ],
      start: 7,
      end: 13,
      rule: 'heading',
    },
    {
      type: 'element',
      tag: 'h3',
      attributes: {
        class: {
          type: 'string',
          value: '',
          start: 18,
          end: 18,
        },
      },
      children: [
        {
          type: 'text',
          text: 'AAA',
          start: 19,
          end: 22,
        },
      ],
      start: 15,
      end: 22,
      rule: 'heading',
    },
    {
      type: 'element',
      tag: 'h4',
      attributes: {
        class: {
          type: 'string',
          value: '',
          start: 28,
          end: 28,
        },
      },
      children: [
        {
          type: 'text',
          text: 'AAA',
          start: 29,
          end: 32,
        },
      ],
      start: 24,
      end: 32,
      rule: 'heading',
    },
    {
      type: 'element',
      tag: 'h5',
      attributes: {
        class: {
          type: 'string',
          value: '',
          start: 39,
          end: 39,
        },
      },
      children: [
        {
          type: 'text',
          text: 'AAA',
          start: 40,
          end: 43,
        },
      ],
      start: 34,
      end: 43,
      rule: 'heading',
    },
    {
      type: 'element',
      tag: 'h6',
      attributes: {
        class: {
          type: 'string',
          value: '',
          start: 51,
          end: 51,
        },
      },
      children: [
        {
          type: 'text',
          text: 'AAA',
          start: 52,
          end: 55,
        },
      ],
      start: 45,
      end: 55,
      rule: 'heading',
    },
    {
      type: 'element',
      tag: 'p',
      children: [
        {
          type: 'text',
          text: 'AAA',
          start: 57,
          end: 60,
        },
      ],
      start: 57,
      end: 60,
      rule: 'parseblock',
    },
  ],
};
