import fs from 'fs';
import { slateDict, wikiAstDict, wikiAstDictWithoutPos } from '../../../test/constants';
import { wikiAstToSlateAst } from '../src';

describe('Transform node', () => {
  test('wikiAstToSlateAst callable', () => {
    expect(typeof wikiAstToSlateAst).toBe('function');
  });
  test('text', () => {
    expect(wikiAstToSlateAst(wikiAstDict.text)).toEqual(slateDict.text);
  });
});

describe('Transform tree', () => {
  const results = {};
  test('p > text', () => {
    const result = wikiAstToSlateAst(wikiAstDict['p > text']);
    results['p > text'] = result;
    expect(wikiAstToSlateAst(wikiAstDict['p > text'])).toEqual([slateDict['p > text']]);
  });
  test('ul > li > text', () => {
    const result = wikiAstToSlateAst(wikiAstDict['ul > li > text']);
    results['ul > li > text'] = result;
    expect(wikiAstToSlateAst(wikiAstDict['ul > li > text'])).toEqual([slateDict['ul > li > text']]);
  });
  test('ol > li > text', () => {
    const result = wikiAstToSlateAst(wikiAstDict['ol > li > text']);
    results['ol > li > text'] = result;
    expect(wikiAstToSlateAst(wikiAstDict['ol > li > text'])).toEqual([slateDict['ol > li > text']]);
  });
  test('ol > ol > ol > li', () => {
    const result = wikiAstToSlateAst(wikiAstDict['ol > ol > ol > li']);
    results['ol > ol > ol > li'] = result;
    expect(wikiAstToSlateAst(wikiAstDict['ol > ol > ol > li'])).toEqual([slateDict['ol > ol > ol > li']]);
  });
  test('p + ol + blockquote > div + ol', () => {
    const result = wikiAstToSlateAst(wikiAstDict['p + ol + blockquote > div + ol']);
    results['p + ol + blockquote > div + ol'] = result;
    expect(wikiAstToSlateAst(wikiAstDict['p + ol + blockquote > div + ol'])).toEqual(slateDict['p + ol + blockquote > div + ol']);
  });
  test('p basic sequence marks', () => {
    const result = wikiAstToSlateAst(wikiAstDict['p basic sequence marks']);
    results['p basic sequence marks'] = result;
    expect(wikiAstToSlateAst(wikiAstDict['p basic sequence marks'])).toEqual(slateDict['p basic sequence marks']);
  });
  test('ol > li > mark > text', () => {
    const result = wikiAstToSlateAst(wikiAstDict['ol > li > mark > text']);
    results['ol > li > mark > text'] = result;
    expect(wikiAstToSlateAst(wikiAstDict['ol > li > mark > text'])).toEqual(slateDict['ol > li > mark > text']);
  });
  test('ol > ol > p + empty p', () => {
    const result = wikiAstToSlateAst(wikiAstDict['ol > ol > p + empty p']);
    results['ol > ol > p + empty p'] = result;
    expect(wikiAstToSlateAst(wikiAstDict['ol > ol > p + empty p'])).toEqual(slateDict['ol > ol > p + empty p']);
  });
  test('ol + ol > ol > p', () => {
    const result = wikiAstToSlateAst(wikiAstDict['ol + ol > ol > p']);
    results['ol + ol > ol > p'] = result;
    expect(wikiAstToSlateAst(wikiAstDict['ol + ol > ol > p'])).toEqual(slateDict['ol + ol > ol > p']);
  });
  test('image', () => {
    const result = wikiAstToSlateAst(wikiAstDict.image);
    results.image = result;
    expect(wikiAstToSlateAst(wikiAstDict.image)).toEqual([slateDict.image]);
  });
  test('transclude', () => {
    const result = wikiAstToSlateAst(wikiAstDict.transclude);
    results.transclude = result;
    expect(wikiAstToSlateAst(wikiAstDict.transclude)).toEqual([slateDict.transclude]);
  });
  test('list widget', () => {
    const result = wikiAstToSlateAst(wikiAstDict['list widget']);
    results['list widget'] = result;
    expect(wikiAstToSlateAst(wikiAstDict['list widget'])).toEqual([slateDict['list widget']]);
  });
  test('list widget block', () => {
    const result = wikiAstToSlateAst(wikiAstDict['list widget block']);
    results['list widget block'] = result;
    expect(wikiAstToSlateAst(wikiAstDict['list widget block'])).toEqual(slateDict['list widget block']);
  });
  test('link', () => {
    const result = wikiAstToSlateAst(wikiAstDict.link);
    results.link = result;
    expect(wikiAstToSlateAst(wikiAstDict.link)).toEqual(slateDict.link);
  });
  test('empty link', () => {
    const result = wikiAstToSlateAst(wikiAstDict['empty link']);
    results['empty link'] = result;
    expect(wikiAstToSlateAst(wikiAstDict['empty link'])).toEqual(slateDict['empty link']);
  });
  test('alias link', () => {
    const result = wikiAstToSlateAst(wikiAstDict['alias link']);
    results['alias link'] = result;
    expect(wikiAstToSlateAst(wikiAstDict['alias link'])).toEqual(slateDict['alias link']);
  });
  test('external link', () => {
    const result = wikiAstToSlateAst(wikiAstDict['external link']);
    results['external link'] = result;
    expect(wikiAstToSlateAst(wikiAstDict['external link'])).toEqual(slateDict['external link']);
  });
  test('link in a list', () => {
    const result = wikiAstToSlateAst(wikiAstDict['link in a list']);
    results['link in a list'] = result;
    expect(wikiAstToSlateAst(wikiAstDict['link in a list'])).toEqual(slateDict['link in a list']);
  });
  test('heading', () => {
    const result = wikiAstToSlateAst(wikiAstDict.heading);
    results.heading = result;
    expect(wikiAstToSlateAst(wikiAstDict.heading)).toEqual(slateDict.heading);
  });
  test('rpn', () => {
    const result = wikiAstToSlateAst(wikiAstDict.rpn);
    results.rpn = result;
    expect(wikiAstToSlateAst(wikiAstDictWithoutPos.rpn)).toEqual(slateDict.rpn);
  });
  test('macro alert', () => {
    const result = wikiAstToSlateAst(wikiAstDict['macro alert']);
    results['macro alert'] = result;
    expect(wikiAstToSlateAst(wikiAstDict['macro alert'])).toEqual(slateDict['macro alert']);
  });
  test('codeblock', () => {
    const result = wikiAstToSlateAst(wikiAstDict.codeblock);
    results.codeblock = result;
    expect(wikiAstToSlateAst(wikiAstDict.codeblock)).toEqual(slateDict.codeblock);
  });
  test('tableGettingStarted', () => {
    const result = wikiAstToSlateAst(wikiAstDict.tableGettingStarted);
    results.tableGettingStarted = result;
    expect(wikiAstToSlateAst(wikiAstDict.tableGettingStarted)).toEqual(slateDict.tableGettingStarted);
  });
  test('table', () => {
    const result = wikiAstToSlateAst(wikiAstDict.table);
    results.table = result;
    expect(wikiAstToSlateAst(wikiAstDict.table)).toEqual(slateDict.table);
  });
  test('setDefine', () => {
    expect(wikiAstToSlateAst(wikiAstDict.setDefine)).toEqual(slateDict.setDefine);
  });
  /** new tests here generated using `npx zx scripts/test/add-new-test.mjs` */
  // afterAll(() => {
  //   fs.writeFileSync('test.json', JSON.stringify(results, null, 2));
  // });
});
