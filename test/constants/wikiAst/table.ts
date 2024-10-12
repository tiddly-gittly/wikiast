/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { IParseTreeNode } from 'tiddlywiki';

export const table: Record<string, IParseTreeNode[] | IParseTreeNode> = {
  table: [
    {
      type: 'element',
      tag: 'table',
      children: [
        {
          type: 'element',
          tag: 'tbody',
          children: [
            {
              type: 'element',
              tag: 'tr',
              children: [
                {
                  type: 'element',
                  tag: 'td',
                  start: 1,
                  children: [
                    {
                      type: 'text',
                      text: 'cell one',
                      start: 1,
                      end: 9,
                    },
                  ],
                  end: 9,
                },
                {
                  type: 'element',
                  tag: 'td',
                  start: 10,
                  children: [
                    {
                      type: 'text',
                      text: 'cell two',
                      start: 10,
                      end: 18,
                    },
                  ],
                  end: 18,
                },
              ],
              start: 0,
              attributes: {
                class: {
                  name: 'class',
                  type: 'string',
                  value: 'evenRow',
                },
              },
              orderedAttributes: [
                {
                  name: 'class',
                  type: 'string',
                  value: 'evenRow',
                },
              ],
              end: 20,
            },
            {
              type: 'element',
              tag: 'tr',
              children: [
                {
                  type: 'element',
                  tag: 'td',
                  start: 21,
                  children: [
                    {
                      type: 'text',
                      text: 'cell three',
                      start: 21,
                      end: 31,
                    },
                  ],
                  end: 31,
                },
                {
                  type: 'element',
                  tag: 'td',
                  start: 32,
                  children: [
                    {
                      type: 'text',
                      text: 'cell four',
                      start: 32,
                      end: 41,
                    },
                  ],
                  end: 41,
                },
              ],
              start: 20,
              attributes: {
                class: {
                  name: 'class',
                  type: 'string',
                  value: 'oddRow',
                },
              },
              orderedAttributes: [
                {
                  name: 'class',
                  type: 'string',
                  value: 'oddRow',
                },
              ],
              end: 42,
            },
          ],
          start: 0,
          end: 42,
        },
      ],
      start: 0,
      end: 42,
      rule: 'table',
    },
  ],
  tableGettingStarted: [
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
          type: 'element',
          tag: 'p',
          children: [
            {
              type: 'text',
              text: '欢迎使用 ',
              start: 54,
              end: 59,
            },
            {
              type: 'text',
              text: 'TiddlyWiki',
              start: 59,
              end: 70,
              rule: 'wikilinkprefix',
            },
            {
              type: 'text',
              text: ' 及参与 ',
              start: 70,
              end: 75,
            },
            {
              type: 'text',
              text: 'TiddlyWiki',
              start: 75,
              end: 86,
              rule: 'wikilinkprefix',
            },
            {
              type: 'text',
              text: ' 社群',
              start: 86,
              end: 89,
            },
          ],
          start: 54,
          end: 89,
          rule: 'parseblock',
        },
        {
          type: 'element',
          tag: 'p',
          children: [
            {
              type: 'text',
              text: '开始将重要资讯存放于 ',
              start: 91,
              end: 102,
            },
            {
              type: 'text',
              text: 'TiddlyWiki',
              start: 102,
              end: 113,
              rule: 'wikilinkprefix',
            },
            {
              type: 'text',
              text: ' 之前，确认您可以可靠地保存变更是很重要的。详细资讯请参阅 ',
              start: 113,
              end: 143,
            },
            {
              type: 'element',
              tag: 'a',
              attributes: {
                href: {
                  type: 'string',
                  value: 'https://tiddlywiki.com/#GettingStarted',
                },
                class: {
                  type: 'string',
                  value: 'tc-tiddlylink-external',
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
                  text: 'https://tiddlywiki.com/#GettingStarted',
                  start: 143,
                  end: 181,
                },
              ],
              start: 143,
              end: 181,
              rule: 'extlink',
            },
          ],
          start: 91,
          end: 181,
          rule: 'parseblock',
        },
        {
          type: 'element',
          tag: 'h2',
          attributes: {
            class: {
              type: 'string',
              value: '',
              start: 185,
              end: 185,
            },
          },
          children: [
            {
              type: 'text',
              text: '设置此 ',
              start: 186,
              end: 190,
            },
            {
              type: 'text',
              text: 'TiddlyWiki',
              start: 190,
              end: 201,
              rule: 'wikilinkprefix',
            },
          ],
          start: 183,
          end: 201,
          rule: 'heading',
        },
        {
          type: 'element',
          start: 203,
          attributes: {
            class: {
              start: 207,
              name: 'class',
              type: 'string',
              value: 'tc-control-panel',
              end: 232,
            },
          },
          orderedAttributes: [
            {
              start: 207,
              name: 'class',
              type: 'string',
              value: 'tc-control-panel',
              end: 232,
            },
          ],
          tag: 'div',
          end: 701,
          openTagStart: 203,
          openTagEnd: 233,
          isBlock: true,
          children: [
            {
              type: 'element',
              tag: 'table',
              children: [
                {
                  type: 'element',
                  tag: 'tbody',
                  children: [
                    {
                      type: 'element',
                      tag: 'tr',
                      children: [
                        {
                          type: 'element',
                          tag: 'td',
                          start: 236,
                          children: [
                            {
                              type: 'link',
                              start: 236,
                              attributes: {
                                to: {
                                  start: 242,
                                  name: 'to',
                                  type: 'string',
                                  value: '$:/SiteTitle',
                                  end: 260,
                                },
                              },
                              orderedAttributes: [
                                {
                                  start: 242,
                                  name: 'to',
                                  type: 'string',
                                  value: '$:/SiteTitle',
                                  end: 260,
                                },
                              ],
                              tag: '$link',
                              end: 291,
                              openTagStart: 236,
                              openTagEnd: 261,
                              isBlock: false,
                              children: [
                                {
                                  type: 'transclude',
                                  start: 261,
                                  end: 283,
                                  attributes: {
                                    '0': {
                                      name: '0',
                                      type: 'string',
                                      value: 'Title/Prompt',
                                      start: 268,
                                      end: 281,
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
                                      start: 268,
                                      end: 281,
                                    },
                                  ],
                                  rule: 'macrocallinline',
                                },
                              ],
                              closeTagEnd: 291,
                              closeTagStart: 283,
                              rule: 'html',
                            },
                          ],
                          attributes: {
                            align: {
                              name: 'align',
                              type: 'string',
                              value: 'left',
                            },
                          },
                          orderedAttributes: [
                            {
                              name: 'align',
                              type: 'string',
                              value: 'left',
                            },
                          ],
                          end: 292,
                        },
                        {
                          type: 'element',
                          tag: 'td',
                          start: 293,
                          children: [
                            {
                              type: 'edit-text',
                              start: 293,
                              attributes: {
                                tiddler: {
                                  start: 304,
                                  name: 'tiddler',
                                  type: 'string',
                                  value: '$:/SiteTitle',
                                  end: 327,
                                },
                                default: {
                                  start: 327,
                                  name: 'default',
                                  type: 'string',
                                  value: '',
                                  end: 338,
                                },
                                tag: {
                                  start: 338,
                                  name: 'tag',
                                  type: 'string',
                                  value: 'input',
                                  end: 350,
                                },
                              },
                              orderedAttributes: [
                                {
                                  start: 304,
                                  name: 'tiddler',
                                  type: 'string',
                                  value: '$:/SiteTitle',
                                  end: 327,
                                },
                                {
                                  start: 327,
                                  name: 'default',
                                  type: 'string',
                                  value: '',
                                  end: 338,
                                },
                                {
                                  start: 338,
                                  name: 'tag',
                                  type: 'string',
                                  value: 'input',
                                  end: 350,
                                },
                              ],
                              tag: '$edit-text',
                              isSelfClosing: true,
                              end: 352,
                              isBlock: false,
                              rule: 'html',
                            },
                          ],
                          attributes: {
                            align: {
                              name: 'align',
                              type: 'string',
                              value: 'left',
                            },
                          },
                          orderedAttributes: [
                            {
                              name: 'align',
                              type: 'string',
                              value: 'left',
                            },
                          ],
                          end: 353,
                        },
                      ],
                      start: 235,
                      attributes: {
                        class: {
                          name: 'class',
                          type: 'string',
                          value: 'evenRow',
                        },
                      },
                      orderedAttributes: [
                        {
                          name: 'class',
                          type: 'string',
                          value: 'evenRow',
                        },
                      ],
                      end: 355,
                    },
                    {
                      type: 'element',
                      tag: 'tr',
                      children: [
                        {
                          type: 'element',
                          tag: 'td',
                          start: 356,
                          children: [
                            {
                              type: 'link',
                              start: 356,
                              attributes: {
                                to: {
                                  start: 362,
                                  name: 'to',
                                  type: 'string',
                                  value: '$:/SiteSubtitle',
                                  end: 383,
                                },
                              },
                              orderedAttributes: [
                                {
                                  start: 362,
                                  name: 'to',
                                  type: 'string',
                                  value: '$:/SiteSubtitle',
                                  end: 383,
                                },
                              ],
                              tag: '$link',
                              end: 417,
                              openTagStart: 356,
                              openTagEnd: 384,
                              isBlock: false,
                              children: [
                                {
                                  type: 'transclude',
                                  start: 384,
                                  end: 409,
                                  attributes: {
                                    '0': {
                                      name: '0',
                                      type: 'string',
                                      value: 'Subtitle/Prompt',
                                      start: 391,
                                      end: 407,
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
                                      value: 'Subtitle/Prompt',
                                      start: 391,
                                      end: 407,
                                    },
                                  ],
                                  rule: 'macrocallinline',
                                },
                              ],
                              closeTagEnd: 417,
                              closeTagStart: 409,
                              rule: 'html',
                            },
                          ],
                          attributes: {
                            align: {
                              name: 'align',
                              type: 'string',
                              value: 'left',
                            },
                          },
                          orderedAttributes: [
                            {
                              name: 'align',
                              type: 'string',
                              value: 'left',
                            },
                          ],
                          end: 418,
                        },
                        {
                          type: 'element',
                          tag: 'td',
                          start: 419,
                          children: [
                            {
                              type: 'edit-text',
                              start: 419,
                              attributes: {
                                tiddler: {
                                  start: 430,
                                  name: 'tiddler',
                                  type: 'string',
                                  value: '$:/SiteSubtitle',
                                  end: 456,
                                },
                                default: {
                                  start: 456,
                                  name: 'default',
                                  type: 'string',
                                  value: '',
                                  end: 467,
                                },
                                tag: {
                                  start: 467,
                                  name: 'tag',
                                  type: 'string',
                                  value: 'input',
                                  end: 479,
                                },
                              },
                              orderedAttributes: [
                                {
                                  start: 430,
                                  name: 'tiddler',
                                  type: 'string',
                                  value: '$:/SiteSubtitle',
                                  end: 456,
                                },
                                {
                                  start: 456,
                                  name: 'default',
                                  type: 'string',
                                  value: '',
                                  end: 467,
                                },
                                {
                                  start: 467,
                                  name: 'tag',
                                  type: 'string',
                                  value: 'input',
                                  end: 479,
                                },
                              ],
                              tag: '$edit-text',
                              isSelfClosing: true,
                              end: 481,
                              isBlock: false,
                              rule: 'html',
                            },
                          ],
                          attributes: {
                            align: {
                              name: 'align',
                              type: 'string',
                              value: 'left',
                            },
                          },
                          orderedAttributes: [
                            {
                              name: 'align',
                              type: 'string',
                              value: 'left',
                            },
                          ],
                          end: 482,
                        },
                      ],
                      start: 355,
                      attributes: {
                        class: {
                          name: 'class',
                          type: 'string',
                          value: 'oddRow',
                        },
                      },
                      orderedAttributes: [
                        {
                          name: 'class',
                          type: 'string',
                          value: 'oddRow',
                        },
                      ],
                      end: 484,
                    },
                    {
                      type: 'element',
                      tag: 'tr',
                      children: [
                        {
                          type: 'element',
                          tag: 'td',
                          start: 485,
                          children: [
                            {
                              type: 'link',
                              start: 485,
                              attributes: {
                                to: {
                                  start: 491,
                                  name: 'to',
                                  type: 'string',
                                  value: '$:/DefaultTiddlers',
                                  end: 515,
                                },
                              },
                              orderedAttributes: [
                                {
                                  start: 491,
                                  name: 'to',
                                  type: 'string',
                                  value: '$:/DefaultTiddlers',
                                  end: 515,
                                },
                              ],
                              tag: '$link',
                              end: 556,
                              openTagStart: 485,
                              openTagEnd: 516,
                              isBlock: false,
                              children: [
                                {
                                  type: 'transclude',
                                  start: 516,
                                  end: 548,
                                  attributes: {
                                    '0': {
                                      name: '0',
                                      type: 'string',
                                      value: 'DefaultTiddlers/Prompt',
                                      start: 523,
                                      end: 546,
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
                                      value: 'DefaultTiddlers/Prompt',
                                      start: 523,
                                      end: 546,
                                    },
                                  ],
                                  rule: 'macrocallinline',
                                },
                              ],
                              closeTagEnd: 556,
                              closeTagStart: 548,
                              rule: 'html',
                            },
                          ],
                          attributes: {
                            align: {
                              name: 'align',
                              type: 'string',
                              value: 'left',
                            },
                          },
                          orderedAttributes: [
                            {
                              name: 'align',
                              type: 'string',
                              value: 'left',
                            },
                          ],
                          end: 557,
                        },
                        {
                          type: 'element',
                          tag: 'td',
                          start: 558,
                          children: [
                            {
                              type: 'transclude',
                              start: 558,
                              end: 591,
                              attributes: {
                                '0': {
                                  name: '0',
                                  type: 'string',
                                  value: 'DefaultTiddlers/TopHint',
                                  start: 565,
                                  end: 589,
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
                                  value: 'DefaultTiddlers/TopHint',
                                  start: 565,
                                  end: 589,
                                },
                              ],
                              rule: 'macrocallinline',
                            },
                            {
                              type: 'element',
                              start: 591,
                              attributes: {},
                              orderedAttributes: [],
                              tag: 'br',
                              end: 595,
                              openTagStart: 591,
                              openTagEnd: 595,
                              isBlock: false,
                              rule: 'html',
                            },
                            {
                              type: 'text',
                              text: ' ',
                              start: 595,
                              end: 596,
                            },
                            {
                              type: 'edit',
                              start: 596,
                              attributes: {
                                tag: {
                                  start: 602,
                                  name: 'tag',
                                  type: 'string',
                                  value: 'textarea',
                                  end: 617,
                                },
                                tiddler: {
                                  start: 617,
                                  name: 'tiddler',
                                  type: 'string',
                                  value: '$:/DefaultTiddlers',
                                  end: 646,
                                },
                              },
                              orderedAttributes: [
                                {
                                  start: 602,
                                  name: 'tag',
                                  type: 'string',
                                  value: 'textarea',
                                  end: 617,
                                },
                                {
                                  start: 617,
                                  name: 'tiddler',
                                  type: 'string',
                                  value: '$:/DefaultTiddlers',
                                  end: 646,
                                },
                              ],
                              tag: '$edit',
                              isSelfClosing: true,
                              end: 648,
                              isBlock: false,
                              rule: 'html',
                            },
                            {
                              type: 'element',
                              start: 648,
                              attributes: {},
                              orderedAttributes: [],
                              tag: 'br',
                              end: 652,
                              openTagStart: 648,
                              openTagEnd: 652,
                              isBlock: false,
                              rule: 'html',
                            },
                            {
                              type: 'element',
                              tag: 'em',
                              children: [
                                {
                                  type: 'transclude',
                                  start: 654,
                                  end: 690,
                                  attributes: {
                                    '0': {
                                      name: '0',
                                      type: 'string',
                                      value: 'DefaultTiddlers/BottomHint',
                                      start: 661,
                                      end: 688,
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
                                      value: 'DefaultTiddlers/BottomHint',
                                      start: 661,
                                      end: 688,
                                    },
                                  ],
                                  rule: 'macrocallinline',
                                },
                              ],
                              start: 652,
                              end: 692,
                              rule: 'italic',
                            },
                          ],
                          attributes: {
                            align: {
                              name: 'align',
                              type: 'string',
                              value: 'left',
                            },
                          },
                          orderedAttributes: [
                            {
                              name: 'align',
                              type: 'string',
                              value: 'left',
                            },
                          ],
                          end: 693,
                        },
                      ],
                      start: 484,
                      attributes: {
                        class: {
                          name: 'class',
                          type: 'string',
                          value: 'evenRow',
                        },
                      },
                      orderedAttributes: [
                        {
                          name: 'class',
                          type: 'string',
                          value: 'evenRow',
                        },
                      ],
                      end: 695,
                    },
                  ],
                  start: 235,
                  end: 695,
                },
              ],
              start: 235,
              end: 695,
              rule: 'table',
            },
          ],
          closeTagEnd: 701,
          closeTagStart: 695,
          rule: 'html',
        },
        {
          type: 'element',
          tag: 'p',
          children: [
            {
              type: 'text',
              text: '请参阅',
              start: 703,
              end: 706,
            },
            {
              type: 'link',
              attributes: {
                to: {
                  type: 'string',
                  value: '$:/ControlPanel',
                  start: 712,
                  end: 727,
                },
              },
              children: [
                {
                  type: 'text',
                  text: '控制台',
                  start: 708,
                  end: 711,
                },
              ],
              start: 706,
              end: 729,
              rule: 'prettylink',
            },
            {
              type: 'text',
              text: '查看更多选项。',
              start: 729,
              end: 736,
            },
          ],
          start: 703,
          end: 736,
          rule: 'parseblock',
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
