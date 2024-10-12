/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { IParseTreeNode } from 'tiddlywiki';

export const codeblock: Record<string, IParseTreeNode[] | IParseTreeNode> = {
  codeblock: [
    {
      type: 'codeblock',
      attributes: {
        code: {
          type: 'string',
          value: '<$list filter="[tag[ExampleTag]sort[title]]"/>',
          start: 7,
          end: 57,
        },
        language: {
          type: 'string',
          value: 'tid',
          start: 3,
          end: 6,
        },
      },
      start: 0,
      end: 57,
      rule: 'codeblock',
    },
  ],
};
