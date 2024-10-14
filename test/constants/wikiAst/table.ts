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
          end: 704,
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
                              end: 353,
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
                          end: 354,
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
                      end: 356,
                    },
                    {
                      type: 'element',
                      tag: 'tr',
                      children: [
                        {
                          type: 'element',
                          tag: 'td',
                          start: 357,
                          children: [
                            {
                              type: 'link',
                              start: 357,
                              attributes: {
                                to: {
                                  start: 363,
                                  name: 'to',
                                  type: 'string',
                                  value: '$:/SiteSubtitle',
                                  end: 384,
                                },
                              },
                              orderedAttributes: [
                                {
                                  start: 363,
                                  name: 'to',
                                  type: 'string',
                                  value: '$:/SiteSubtitle',
                                  end: 384,
                                },
                              ],
                              tag: '$link',
                              end: 418,
                              openTagStart: 357,
                              openTagEnd: 385,
                              isBlock: false,
                              children: [
                                {
                                  type: 'transclude',
                                  start: 385,
                                  end: 410,
                                  attributes: {
                                    '0': {
                                      name: '0',
                                      type: 'string',
                                      value: 'Subtitle/Prompt',
                                      start: 392,
                                      end: 408,
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
                                      start: 392,
                                      end: 408,
                                    },
                                  ],
                                  rule: 'macrocallinline',
                                },
                              ],
                              closeTagEnd: 418,
                              closeTagStart: 410,
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
                          end: 419,
                        },
                        {
                          type: 'element',
                          tag: 'td',
                          start: 420,
                          children: [
                            {
                              type: 'edit-text',
                              start: 420,
                              attributes: {
                                tiddler: {
                                  start: 431,
                                  name: 'tiddler',
                                  type: 'string',
                                  value: '$:/SiteSubtitle',
                                  end: 457,
                                },
                                default: {
                                  start: 457,
                                  name: 'default',
                                  type: 'string',
                                  value: '',
                                  end: 468,
                                },
                                tag: {
                                  start: 468,
                                  name: 'tag',
                                  type: 'string',
                                  value: 'input',
                                  end: 480,
                                },
                              },
                              orderedAttributes: [
                                {
                                  start: 431,
                                  name: 'tiddler',
                                  type: 'string',
                                  value: '$:/SiteSubtitle',
                                  end: 457,
                                },
                                {
                                  start: 457,
                                  name: 'default',
                                  type: 'string',
                                  value: '',
                                  end: 468,
                                },
                                {
                                  start: 468,
                                  name: 'tag',
                                  type: 'string',
                                  value: 'input',
                                  end: 480,
                                },
                              ],
                              tag: '$edit-text',
                              isSelfClosing: true,
                              end: 483,
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
                          end: 484,
                        },
                      ],
                      start: 356,
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
                      end: 486,
                    },
                    {
                      type: 'element',
                      tag: 'tr',
                      children: [
                        {
                          type: 'element',
                          tag: 'td',
                          start: 487,
                          children: [
                            {
                              type: 'link',
                              start: 487,
                              attributes: {
                                to: {
                                  start: 493,
                                  name: 'to',
                                  type: 'string',
                                  value: '$:/DefaultTiddlers',
                                  end: 517,
                                },
                              },
                              orderedAttributes: [
                                {
                                  start: 493,
                                  name: 'to',
                                  type: 'string',
                                  value: '$:/DefaultTiddlers',
                                  end: 517,
                                },
                              ],
                              tag: '$link',
                              end: 558,
                              openTagStart: 487,
                              openTagEnd: 518,
                              isBlock: false,
                              children: [
                                {
                                  type: 'transclude',
                                  start: 518,
                                  end: 550,
                                  attributes: {
                                    '0': {
                                      name: '0',
                                      type: 'string',
                                      value: 'DefaultTiddlers/Prompt',
                                      start: 525,
                                      end: 548,
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
                                      start: 525,
                                      end: 548,
                                    },
                                  ],
                                  rule: 'macrocallinline',
                                },
                              ],
                              closeTagEnd: 558,
                              closeTagStart: 550,
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
                          end: 559,
                        },
                        {
                          type: 'element',
                          tag: 'td',
                          start: 560,
                          children: [
                            {
                              type: 'transclude',
                              start: 560,
                              end: 593,
                              attributes: {
                                '0': {
                                  name: '0',
                                  type: 'string',
                                  value: 'DefaultTiddlers/TopHint',
                                  start: 567,
                                  end: 591,
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
                                  start: 567,
                                  end: 591,
                                },
                              ],
                              rule: 'macrocallinline',
                            },
                            {
                              type: 'element',
                              start: 593,
                              attributes: {},
                              orderedAttributes: [],
                              tag: 'br',
                              end: 597,
                              openTagStart: 593,
                              openTagEnd: 597,
                              isBlock: false,
                              rule: 'html',
                            },
                            {
                              type: 'text',
                              text: ' ',
                              start: 597,
                              end: 598,
                            },
                            {
                              type: 'edit',
                              start: 598,
                              attributes: {
                                tag: {
                                  start: 604,
                                  name: 'tag',
                                  type: 'string',
                                  value: 'textarea',
                                  end: 619,
                                },
                                tiddler: {
                                  start: 619,
                                  name: 'tiddler',
                                  type: 'string',
                                  value: '$:/DefaultTiddlers',
                                  end: 648,
                                },
                              },
                              orderedAttributes: [
                                {
                                  start: 604,
                                  name: 'tag',
                                  type: 'string',
                                  value: 'textarea',
                                  end: 619,
                                },
                                {
                                  start: 619,
                                  name: 'tiddler',
                                  type: 'string',
                                  value: '$:/DefaultTiddlers',
                                  end: 648,
                                },
                              ],
                              tag: '$edit',
                              isSelfClosing: true,
                              end: 651,
                              isBlock: false,
                              rule: 'html',
                            },
                            {
                              type: 'element',
                              start: 651,
                              attributes: {},
                              orderedAttributes: [],
                              tag: 'br',
                              end: 655,
                              openTagStart: 651,
                              openTagEnd: 655,
                              isBlock: false,
                              rule: 'html',
                            },
                            {
                              type: 'element',
                              tag: 'em',
                              children: [
                                {
                                  type: 'transclude',
                                  start: 657,
                                  end: 693,
                                  attributes: {
                                    '0': {
                                      name: '0',
                                      type: 'string',
                                      value: 'DefaultTiddlers/BottomHint',
                                      start: 664,
                                      end: 691,
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
                                      start: 664,
                                      end: 691,
                                    },
                                  ],
                                  rule: 'macrocallinline',
                                },
                              ],
                              start: 655,
                              end: 695,
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
                          end: 696,
                        },
                      ],
                      start: 486,
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
                      end: 698,
                    },
                  ],
                  start: 235,
                  end: 698,
                },
              ],
              start: 235,
              end: 698,
              rule: 'table',
            },
          ],
          closeTagEnd: 704,
          closeTagStart: 698,
          rule: 'html',
        },
        {
          type: 'element',
          tag: 'p',
          children: [
            {
              type: 'text',
              text: '请参阅',
              start: 706,
              end: 709,
            },
            {
              type: 'link',
              attributes: {
                to: {
                  type: 'string',
                  value: '$:/ControlPanel',
                  start: 715,
                  end: 730,
                },
              },
              children: [
                {
                  type: 'text',
                  text: '控制台',
                  start: 711,
                  end: 714,
                },
              ],
              start: 709,
              end: 732,
              rule: 'prettylink',
            },
            {
              type: 'text',
              text: '查看更多选项。',
              start: 732,
              end: 739,
            },
          ],
          start: 706,
          end: 739,
          rule: 'parseblock',
        },
      ],
      params: [],
      isMacroDefinition: true,
      isBlock: true,
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
