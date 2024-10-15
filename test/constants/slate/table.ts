import { TElement } from '@udecode/slate';

export const table: Record<string, TElement | TElement[]> = {
  table: [
    {
      type: 'table',
      children: [
        {
          orderedAttributes: [
            {
              name: 'class',
              type: 'string',
              value: 'evenRow',
            },
          ],
          attributes: {
            class: 'evenRow',
          },
          'tw-attributes': {
            class: {
              name: 'class',
              type: 'string',
              value: 'evenRow',
            },
          },
          type: 'tr',
          children: [
            {
              type: 'td',
              children: [
                {
                  type: 'p',
                  rule: 'parseblock',
                  children: [
                    {
                      text: 'cell one',
                    },
                  ],
                },
              ],
            },
            {
              type: 'td',
              children: [
                {
                  type: 'p',
                  rule: 'parseblock',
                  children: [
                    {
                      text: 'cell two',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          orderedAttributes: [
            {
              name: 'class',
              type: 'string',
              value: 'oddRow',
            },
          ],
          attributes: {
            class: 'oddRow',
          },
          'tw-attributes': {
            class: {
              name: 'class',
              type: 'string',
              value: 'oddRow',
            },
          },
          type: 'tr',
          children: [
            {
              type: 'td',
              children: [
                {
                  type: 'p',
                  rule: 'parseblock',
                  children: [
                    {
                      text: 'cell three',
                    },
                  ],
                },
              ],
            },
            {
              type: 'td',
              children: [
                {
                  type: 'p',
                  rule: 'parseblock',
                  children: [
                    {
                      text: 'cell four',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      rule: 'table',
    },
  ],
  tableGettingStarted: [
    {
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
      isBlock: true,
      attributes: {
        name: 'lingo-base',
        value: '$:/language/ControlPanel/Basics/',
      },
      'tw-attributes': {
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
      node: {
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
      type: 'set',
      isElement: true,
      isVoid: true,
      children: [
        {
          type: 'p',
          children: [
            {
              text: '欢迎使用 ',
            },
            {
              text: 'TiddlyWiki',
              rule: 'wikilinkprefix',
            },
            {
              text: ' 及参与 ',
            },
            {
              text: 'TiddlyWiki',
              rule: 'wikilinkprefix',
            },
            {
              text: ' 社群',
            },
          ],
          rule: 'parseblock',
        },
        {
          type: 'p',
          children: [
            {
              text: '开始将重要资讯存放于 ',
            },
            {
              text: 'TiddlyWiki',
              rule: 'wikilinkprefix',
            },
            {
              text: ' 之前，确认您可以可靠地保存变更是很重要的。详细资讯请参阅 ',
            },
            {
              attributes: {
                href: 'https://tiddlywiki.com/#GettingStarted',
                class: 'tc-tiddlylink-external',
                target: '_blank',
                rel: 'noopener noreferrer',
              },
              'tw-attributes': {
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
              type: 'a',
              children: [
                {
                  text: 'https://tiddlywiki.com/#GettingStarted',
                },
              ],
              rule: 'extlink',
            },
          ],
          rule: 'parseblock',
        },
        {
          attributes: {
            class: '',
          },
          'tw-attributes': {
            class: {
              type: 'string',
              value: '',
              start: 185,
              end: 185,
            },
          },
          type: 'h2',
          children: [
            {
              text: '设置此 ',
            },
            {
              text: 'TiddlyWiki',
              rule: 'wikilinkprefix',
            },
          ],
          rule: 'heading',
        },
        {
          orderedAttributes: [
            {
              start: 207,
              name: 'class',
              type: 'string',
              value: 'tc-control-panel',
              end: 232,
            },
          ],
          isBlock: true,
          attributes: {
            class: 'tc-control-panel',
          },
          'tw-attributes': {
            class: {
              start: 207,
              name: 'class',
              type: 'string',
              value: 'tc-control-panel',
              end: 232,
            },
          },
          type: 'div',
          children: [
            {
              type: 'table',
              children: [
                {
                  orderedAttributes: [
                    {
                      name: 'class',
                      type: 'string',
                      value: 'evenRow',
                    },
                  ],
                  attributes: {
                    class: 'evenRow',
                  },
                  'tw-attributes': {
                    class: {
                      name: 'class',
                      type: 'string',
                      value: 'evenRow',
                    },
                  },
                  type: 'tr',
                  children: [
                    {
                      orderedAttributes: [
                        {
                          name: 'align',
                          type: 'string',
                          value: 'left',
                        },
                      ],
                      attributes: {
                        align: 'left',
                      },
                      'tw-attributes': {
                        align: {
                          name: 'align',
                          type: 'string',
                          value: 'left',
                        },
                      },
                      type: 'td',
                      children: [
                        {
                          orderedAttributes: [
                            {
                              start: 242,
                              name: 'to',
                              type: 'string',
                              value: '$:/SiteTitle',
                              end: 260,
                            },
                          ],
                          isBlock: false,
                          attributes: {
                            to: '$:/SiteTitle',
                          },
                          'tw-attributes': {
                            to: {
                              start: 242,
                              name: 'to',
                              type: 'string',
                              value: '$:/SiteTitle',
                              end: 260,
                            },
                          },
                          type: 'a',
                          rule: 'html',
                          url: '$:/SiteTitle',
                          children: [
                            {},
                          ],
                        },
                      ],
                    },
                    {
                      orderedAttributes: [
                        {
                          name: 'align',
                          type: 'string',
                          value: 'left',
                        },
                      ],
                      attributes: {
                        align: 'left',
                      },
                      'tw-attributes': {
                        align: {
                          name: 'align',
                          type: 'string',
                          value: 'left',
                        },
                      },
                      type: 'td',
                      children: [
                        {
                          node: {
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
                          rule: 'html',
                          type: 'widget',
                          isElement: true,
                          isVoid: true,
                          children: [
                            {
                              text: '',
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  orderedAttributes: [
                    {
                      name: 'class',
                      type: 'string',
                      value: 'oddRow',
                    },
                  ],
                  attributes: {
                    class: 'oddRow',
                  },
                  'tw-attributes': {
                    class: {
                      name: 'class',
                      type: 'string',
                      value: 'oddRow',
                    },
                  },
                  type: 'tr',
                  children: [
                    {
                      orderedAttributes: [
                        {
                          name: 'align',
                          type: 'string',
                          value: 'left',
                        },
                      ],
                      attributes: {
                        align: 'left',
                      },
                      'tw-attributes': {
                        align: {
                          name: 'align',
                          type: 'string',
                          value: 'left',
                        },
                      },
                      type: 'td',
                      children: [
                        {
                          orderedAttributes: [
                            {
                              start: 363,
                              name: 'to',
                              type: 'string',
                              value: '$:/SiteSubtitle',
                              end: 384,
                            },
                          ],
                          isBlock: false,
                          attributes: {
                            to: '$:/SiteSubtitle',
                          },
                          'tw-attributes': {
                            to: {
                              start: 363,
                              name: 'to',
                              type: 'string',
                              value: '$:/SiteSubtitle',
                              end: 384,
                            },
                          },
                          type: 'a',
                          rule: 'html',
                          url: '$:/SiteSubtitle',
                          children: [
                            {},
                          ],
                        },
                      ],
                    },
                    {
                      orderedAttributes: [
                        {
                          name: 'align',
                          type: 'string',
                          value: 'left',
                        },
                      ],
                      attributes: {
                        align: 'left',
                      },
                      'tw-attributes': {
                        align: {
                          name: 'align',
                          type: 'string',
                          value: 'left',
                        },
                      },
                      type: 'td',
                      children: [
                        {
                          node: {
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
                          rule: 'html',
                          type: 'widget',
                          isElement: true,
                          isVoid: true,
                          children: [
                            {
                              text: '',
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  orderedAttributes: [
                    {
                      name: 'class',
                      type: 'string',
                      value: 'evenRow',
                    },
                  ],
                  attributes: {
                    class: 'evenRow',
                  },
                  'tw-attributes': {
                    class: {
                      name: 'class',
                      type: 'string',
                      value: 'evenRow',
                    },
                  },
                  type: 'tr',
                  children: [
                    {
                      orderedAttributes: [
                        {
                          name: 'align',
                          type: 'string',
                          value: 'left',
                        },
                      ],
                      attributes: {
                        align: 'left',
                      },
                      'tw-attributes': {
                        align: {
                          name: 'align',
                          type: 'string',
                          value: 'left',
                        },
                      },
                      type: 'td',
                      children: [
                        {
                          orderedAttributes: [
                            {
                              start: 493,
                              name: 'to',
                              type: 'string',
                              value: '$:/DefaultTiddlers',
                              end: 517,
                            },
                          ],
                          isBlock: false,
                          attributes: {
                            to: '$:/DefaultTiddlers',
                          },
                          'tw-attributes': {
                            to: {
                              start: 493,
                              name: 'to',
                              type: 'string',
                              value: '$:/DefaultTiddlers',
                              end: 517,
                            },
                          },
                          type: 'a',
                          rule: 'html',
                          url: '$:/DefaultTiddlers',
                          children: [
                            {},
                          ],
                        },
                      ],
                    },
                    {
                      orderedAttributes: [
                        {
                          name: 'align',
                          type: 'string',
                          value: 'left',
                        },
                      ],
                      attributes: {
                        align: 'left',
                      },
                      'tw-attributes': {
                        align: {
                          name: 'align',
                          type: 'string',
                          value: 'left',
                        },
                      },
                      type: 'td',
                      children: [
                        {
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
                          attributes: {
                            '0': 'DefaultTiddlers/TopHint',
                            $variable: 'lingo',
                          },
                          'tw-attributes': {
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
                          node: {
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
                          rule: 'macrocallinline',
                          type: 'transclude',
                          isElement: true,
                          isVoid: true,
                          children: [
                            {
                              text: '',
                            },
                          ],
                        },
                        {
                          orderedAttributes: [],
                          isBlock: false,
                          attributes: {},
                          'tw-attributes': {},
                          type: 'br',
                          children: [
                            {
                              text: '',
                            },
                          ],
                          rule: 'html',
                        },
                        {
                          type: 'p',
                          rule: 'parseblock',
                          children: [
                            {
                              text: ' ',
                            },
                          ],
                        },
                        {
                          node: {
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
                          rule: 'html',
                          type: 'widget',
                          isElement: true,
                          isVoid: true,
                          children: [
                            {
                              text: '',
                            },
                          ],
                        },
                        {
                          orderedAttributes: [],
                          isBlock: false,
                          attributes: {},
                          'tw-attributes': {},
                          type: 'br',
                          children: [
                            {
                              text: '',
                            },
                          ],
                          rule: 'html',
                        },
                        {
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
                          attributes: {
                            '0': 'DefaultTiddlers/BottomHint',
                            $variable: 'lingo',
                          },
                          'tw-attributes': {
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
                          node: {
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
                          rule: 'macrocallinline',
                          type: 'transclude',
                          isElement: true,
                          isVoid: true,
                          children: [
                            {
                              text: '',
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
              rule: 'table',
            },
          ],
          rule: 'html',
        },
        {
          type: 'p',
          children: [
            {
              text: '请参阅',
            },
            {
              attributes: {
                to: '$:/ControlPanel',
              },
              'tw-attributes': {
                to: {
                  type: 'string',
                  value: '$:/ControlPanel',
                  start: 715,
                  end: 730,
                },
              },
              type: 'a',
              rule: 'prettylink',
              url: '$:/ControlPanel',
              children: [
                {
                  text: '控制台',
                },
              ],
            },
            {
              text: '查看更多选项。',
            },
          ],
          rule: 'parseblock',
        },
      ],
    },
  ],
};
