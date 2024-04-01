/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { IParseTreeNode } from 'tiddlywiki';

export const transclude: Record<string, IParseTreeNode[] | IParseTreeNode> = {
  // `attributes` is the source tiddler
  // `children` is the transclude template part, same as the source tiddler if no template is used
  transclude: [
    {
      type: 'tiddler',
      attributes: {
        tiddler: {
          name: 'tiddler',
          type: 'string',
          value: 'favicon.ico',
        },
      },
      isBlock: true,
      children: [
        {
          type: 'transclude',
          attributes: {
            $tiddler: {
              name: '$tiddler',
              type: 'string',
              value: 'favicon.ico',
            },
          },
          isBlock: true,
        },
      ],
    },
  ],
};
