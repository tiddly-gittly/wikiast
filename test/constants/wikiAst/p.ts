/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { IParseTreeNode } from 'tiddlywiki';

/**
 * Need to use `type: 'text' as const,`.
 */
export const p: Record<string, IParseTreeNode[] | IParseTreeNode> = {
  text: {
    type: 'text',
    text: 'AAA',
    start: 0,
    end: 3,
  },
  'p > text': [
    {
      type: 'element',
      tag: 'p',
      children: [
        {
          type: 'text',
          text: 'AAA',
          start: 0,
          end: 3,
        },
      ],
      start: 0,
      end: 3,
      rule: 'parseblock',
    },
  ],
  'p basic nested marks': [
    {
      type: 'element',
      tag: 'p',
      children: [
        {
          type: 'text',
          text: 'A',
          start: 0,
          end: 1,
        },
        {
          type: 'element',
          tag: 'strong',
          children: [
            {
              type: 'text',
              text: 'A',
              start: 3,
              end: 4,
            },
            {
              type: 'element',
              tag: 'em',
              children: [
                {
                  type: 'text',
                  text: 'A',
                  start: 6,
                  end: 7,
                },
              ],
            },
            {
              type: 'text',
              text: 'A',
              start: 9,
              end: 10,
            },
          ],
        },
        {
          type: 'text',
          text: 'A',
          start: 12,
          end: 13,
        },
      ],
      start: 0,
      end: 13,
    },
    {
      type: 'element',
      tag: 'p',
      children: [
        {
          type: 'text',
          text: 'B',
          start: 15,
          end: 16,
        },
        {
          type: 'element',
          tag: 'em',
          children: [
            {
              type: 'text',
              text: 'B',
              start: 18,
              end: 19,
            },
            {
              type: 'element',
              tag: 'u',
              children: [
                {
                  type: 'text',
                  text: 'B',
                  start: 21,
                  end: 22,
                },
              ],
            },
            {
              type: 'text',
              text: 'B',
              start: 24,
              end: 25,
            },
          ],
        },
        {
          type: 'text',
          text: 'B',
          start: 27,
          end: 28,
        },
      ],
      start: 15,
      end: 28,
    },
    {
      type: 'element',
      tag: 'p',
      children: [
        {
          type: 'text',
          text: 'C',
          start: 30,
          end: 31,
        },
        {
          type: 'element',
          tag: 'u',
          children: [
            {
              type: 'text',
              text: 'C',
              start: 33,
              end: 34,
            },
            {
              type: 'element',
              tag: 'strike',
              children: [
                {
                  type: 'text',
                  text: 'C',
                  start: 36,
                  end: 37,
                },
              ],
            },
            {
              type: 'text',
              text: 'C',
              start: 39,
              end: 40,
            },
          ],
        },
        {
          type: 'text',
          text: 'C',
          start: 42,
          end: 43,
        },
      ],
      start: 30,
      end: 43,
    },
    {
      type: 'element',
      tag: 'p',
      children: [
        {
          type: 'text',
          text: 'D',
          start: 45,
          end: 46,
        },
        {
          type: 'element',
          tag: 'strike',
          children: [
            {
              type: 'text',
              text: 'D',
              start: 48,
              end: 49,
            },
            {
              type: 'element',
              tag: 'code',
              children: [
                {
                  type: 'text',
                  text: 'D',
                },
              ],
            },
            {
              type: 'text',
              text: 'D',
              start: 52,
              end: 53,
            },
          ],
        },
        {
          type: 'text',
          text: 'D',
          start: 55,
          end: 56,
        },
      ],
      start: 45,
      end: 56,
    },
    {
      type: 'element',
      tag: 'p',
      children: [
        {
          type: 'text',
          text: 'E',
          start: 58,
          end: 59,
        },
        {
          type: 'element',
          tag: 'code',
          children: [
            {
              type: 'text',
              text: 'EEE',
            },
          ],
        },
        {
          type: 'text',
          text: 'E',
          start: 64,
          end: 65,
        },
      ],
      start: 58,
      end: 65,
    },
    {
      type: 'element',
      tag: 'p',
      children: [
        {
          type: 'text',
          text: 'F',
          start: 67,
          end: 68,
        },
        {
          type: 'element',
          tag: 'sup',
          children: [
            {
              type: 'text',
              text: 'F',
              start: 70,
              end: 71,
            },
            {
              type: 'element',
              tag: 'sub',
              children: [
                {
                  type: 'text',
                  text: 'F',
                  start: 73,
                  end: 74,
                },
              ],
            },
            {
              type: 'text',
              text: 'F',
              start: 76,
              end: 77,
            },
          ],
        },
        {
          type: 'text',
          text: 'F',
          start: 79,
          end: 80,
        },
      ],
      start: 67,
      end: 80,
    },
    {
      type: 'element',
      tag: 'p',
      children: [
        {
          type: 'text',
          text: 'G',
          start: 82,
          end: 83,
        },
        {
          type: 'element',
          tag: 'sub',
          children: [
            {
              type: 'text',
              text: 'G',
              start: 85,
              end: 86,
            },
            {
              type: 'element',
              tag: 'strong',
              children: [
                {
                  type: 'text',
                  text: 'G',
                  start: 88,
                  end: 89,
                },
              ],
            },
            {
              type: 'text',
              text: 'G',
              start: 91,
              end: 92,
            },
          ],
        },
        {
          type: 'text',
          text: 'G',
          start: 94,
          end: 95,
        },
      ],
      start: 82,
      end: 95,
    },
  ],
  'p basic sequence marks': [
    {
      type: 'element',
      tag: 'p',
      children: [
        {
          type: 'text',
          text: 'A',
          start: 0,
          end: 1,
        },
        {
          type: 'element',
          tag: 'strong',
          children: [
            {
              type: 'text',
              text: 'A',
              start: 3,
              end: 4,
            },
          ],
          start: 1,
          end: 6,
          rule: 'bold',
        },
        {
          type: 'element',
          tag: 'strong',
          children: [
            {
              type: 'element',
              tag: 'em',
              children: [
                {
                  type: 'text',
                  text: 'A',
                  start: 10,
                  end: 11,
                },
              ],
              start: 8,
              end: 13,
              rule: 'italic',
            },
          ],
          start: 6,
          end: 15,
          rule: 'bold',
        },
        {
          type: 'element',
          tag: 'strong',
          children: [
            {
              type: 'text',
              text: 'A',
              start: 17,
              end: 18,
            },
          ],
          start: 15,
          end: 20,
          rule: 'bold',
        },
        {
          type: 'text',
          text: 'A',
          start: 20,
          end: 21,
        },
      ],
      start: 0,
      end: 21,
      rule: 'parseblock',
    },
    {
      type: 'element',
      tag: 'p',
      children: [
        {
          type: 'text',
          text: 'B',
          start: 23,
          end: 24,
        },
        {
          type: 'element',
          tag: 'em',
          children: [
            {
              type: 'text',
              text: 'B',
              start: 26,
              end: 27,
            },
          ],
          start: 24,
          end: 29,
          rule: 'italic',
        },
        {
          type: 'element',
          tag: 'em',
          children: [
            {
              type: 'element',
              tag: 'u',
              children: [
                {
                  type: 'text',
                  text: 'B',
                  start: 33,
                  end: 34,
                },
              ],
              start: 31,
              end: 36,
              rule: 'underscore',
            },
          ],
          start: 29,
          end: 38,
          rule: 'italic',
        },
        {
          type: 'element',
          tag: 'em',
          children: [
            {
              type: 'text',
              text: 'B',
              start: 40,
              end: 41,
            },
          ],
          start: 38,
          end: 43,
          rule: 'italic',
        },
        {
          type: 'text',
          text: 'B',
          start: 43,
          end: 44,
        },
      ],
      start: 23,
      end: 44,
      rule: 'parseblock',
    },
    {
      type: 'element',
      tag: 'p',
      children: [
        {
          type: 'text',
          text: 'C',
          start: 46,
          end: 47,
        },
        {
          type: 'element',
          tag: 'u',
          children: [
            {
              type: 'text',
              text: 'C',
              start: 49,
              end: 50,
            },
          ],
          start: 47,
          end: 52,
          rule: 'underscore',
        },
        {
          type: 'element',
          tag: 'u',
          children: [
            {
              type: 'element',
              tag: 'strike',
              children: [
                {
                  type: 'text',
                  text: 'C',
                  start: 56,
                  end: 57,
                },
              ],
              start: 54,
              end: 59,
              rule: 'strikethrough',
            },
          ],
          start: 52,
          end: 61,
          rule: 'underscore',
        },
        {
          type: 'element',
          tag: 'u',
          children: [
            {
              type: 'text',
              text: 'C',
              start: 63,
              end: 64,
            },
          ],
          start: 61,
          end: 66,
          rule: 'underscore',
        },
        {
          type: 'text',
          text: 'C',
          start: 66,
          end: 67,
        },
      ],
      start: 46,
      end: 67,
      rule: 'parseblock',
    },
    {
      type: 'element',
      tag: 'p',
      children: [
        {
          type: 'text',
          text: 'D',
          start: 69,
          end: 70,
        },
        {
          type: 'element',
          tag: 'strike',
          children: [
            {
              type: 'text',
              text: 'D',
              start: 72,
              end: 73,
            },
          ],
          start: 70,
          end: 75,
          rule: 'strikethrough',
        },
        {
          type: 'element',
          tag: 'strike',
          children: [
            {
              type: 'element',
              tag: 'code',
              children: [
                {
                  type: 'text',
                  text: 'D',
                  start: 78,
                  end: 80,
                },
              ],
              start: 77,
              end: 80,
              rule: 'codeinline',
            },
          ],
          start: 75,
          end: 82,
          rule: 'strikethrough',
        },
        {
          type: 'element',
          tag: 'strike',
          children: [
            {
              type: 'text',
              text: 'D',
              start: 84,
              end: 85,
            },
          ],
          start: 82,
          end: 87,
          rule: 'strikethrough',
        },
        {
          type: 'text',
          text: 'D',
          start: 87,
          end: 88,
        },
      ],
      start: 69,
      end: 88,
      rule: 'parseblock',
    },
    {
      type: 'element',
      tag: 'p',
      children: [
        {
          type: 'text',
          text: 'E',
          start: 90,
          end: 91,
        },
        {
          type: 'element',
          tag: 'code',
          children: [
            {
              type: 'text',
              text: 'EEE',
              start: 92,
              end: 96,
            },
          ],
          start: 91,
          end: 96,
          rule: 'codeinline',
        },
        {
          type: 'text',
          text: 'E',
          start: 96,
          end: 97,
        },
      ],
      start: 90,
      end: 97,
      rule: 'parseblock',
    },
    {
      type: 'element',
      tag: 'p',
      children: [
        {
          type: 'text',
          text: 'F',
          start: 99,
          end: 100,
        },
        {
          type: 'element',
          tag: 'sup',
          children: [
            {
              type: 'text',
              text: 'F',
              start: 102,
              end: 103,
            },
          ],
          start: 100,
          end: 105,
          rule: 'superscript',
        },
        {
          type: 'element',
          tag: 'sub',
          children: [
            {
              type: 'text',
              text: 'F',
              start: 107,
              end: 108,
            },
          ],
          start: 105,
          end: 110,
          rule: 'subscript',
        },
        {
          type: 'element',
          tag: 'sup',
          children: [
            {
              type: 'text',
              text: 'F',
              start: 112,
              end: 113,
            },
          ],
          start: 110,
          end: 115,
          rule: 'superscript',
        },
        {
          type: 'text',
          text: 'F',
          start: 115,
          end: 116,
        },
      ],
      start: 99,
      end: 116,
      rule: 'parseblock',
    },
    {
      type: 'element',
      tag: 'p',
      children: [
        {
          type: 'text',
          text: 'G',
          start: 118,
          end: 119,
        },
        {
          type: 'element',
          tag: 'sub',
          children: [
            {
              type: 'text',
              text: 'G',
              start: 121,
              end: 122,
            },
          ],
          start: 119,
          end: 124,
          rule: 'subscript',
        },
        {
          type: 'element',
          tag: 'strong',
          children: [
            {
              type: 'element',
              tag: 'sub',
              children: [
                {
                  type: 'text',
                  text: 'G',
                  start: 128,
                  end: 129,
                },
              ],
              start: 126,
              end: 131,
              rule: 'subscript',
            },
          ],
          start: 124,
          end: 133,
          rule: 'bold',
        },
        {
          type: 'element',
          tag: 'sub',
          children: [
            {
              type: 'text',
              text: 'G',
              start: 135,
              end: 136,
            },
          ],
          start: 133,
          end: 138,
          rule: 'subscript',
        },
        {
          type: 'text',
          text: 'G',
          start: 138,
          end: 139,
        },
      ],
      start: 118,
      end: 139,
      rule: 'parseblock',
    },
  ],
};
