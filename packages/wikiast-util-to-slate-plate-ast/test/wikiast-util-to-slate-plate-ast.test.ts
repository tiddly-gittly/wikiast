import { slateDict, wikiAstDict, wikiAstDictWithoutPos } from '../../../test/constants';
import { wikiAstToSlateAst } from '../src';
import fs from 'fs';

describe('Transform node', () => {
  test('wikiAstToSlateAst callable', () => {
    expect(typeof wikiAstToSlateAst).toBe('function');
  });
  test('text', () => {
    expect(wikiAstToSlateAst(wikiAstDict.text)).toEqual(slateDict.text);
  });
});

describe('Transform tree', () => {
  test('p > text', () => {
    expect(wikiAstToSlateAst(wikiAstDict['p > text'])).toEqual([slateDict['p > text']]);
  });
  test('ul > li > text', () => {
    expect(wikiAstToSlateAst(wikiAstDict['ul > li > text'])).toEqual([slateDict['ul > li > text']]);
  });
  test('ol > li > text', () => {
    expect(wikiAstToSlateAst(wikiAstDict['ol > li > text'])).toEqual([slateDict['ol > li > text']]);
  });
  test('ol > ol > ol > li', () => {
    expect(wikiAstToSlateAst(wikiAstDict['ol > ol > ol > li'])).toEqual([slateDict['ol > ol > ol > li']]);
  });
  test('p + ol + blockquote > div + ol', () => {
    expect(wikiAstToSlateAst(wikiAstDict['p + ol + blockquote > div + ol'])).toEqual(slateDict['p + ol + blockquote > div + ol']);
  });
  test('p basic sequence marks', () => {
    expect(wikiAstToSlateAst(wikiAstDict['p basic sequence marks'])).toEqual(slateDict['p basic sequence marks']);
  });
  test('ol > li > mark > text', () => {
    expect(wikiAstToSlateAst(wikiAstDict['ol > li > mark > text'])).toEqual(slateDict['ol > li > mark > text']);
  });
  test('ol > ol > p + empty p', () => {
    expect(wikiAstToSlateAst(wikiAstDict['ol > ol > p + empty p'])).toEqual(slateDict['ol > ol > p + empty p']);
  });
  test('ol + ol > ol > p', () => {
    expect(wikiAstToSlateAst(wikiAstDict['ol + ol > ol > p'])).toEqual(slateDict['ol + ol > ol > p']);
  });
  test('image', () => {
    expect(wikiAstToSlateAst(wikiAstDict.image)).toEqual([slateDict.image]);
  });
  test('transclude', () => {
    expect(wikiAstToSlateAst(wikiAstDict.transclude)).toEqual([slateDict.transclude]);
  });
  test('list widget', () => {
    expect(wikiAstToSlateAst(wikiAstDict['list widget'])).toEqual([slateDict['list widget']]);
  });
  test('list widget block', () => {
    expect(wikiAstToSlateAst(wikiAstDict['list widget block'])).toEqual(slateDict['list widget block']);
  });
  test('link', () => {
    expect(wikiAstToSlateAst(wikiAstDict.link)).toEqual(slateDict.link);
  });
  test('empty link', () => {
    expect(wikiAstToSlateAst(wikiAstDict['empty link'])).toEqual(slateDict['empty link']);
  });
  test('alias link', () => {
    expect(wikiAstToSlateAst(wikiAstDict['alias link'])).toEqual(slateDict['alias link']);
  });
  test('external link', () => {
    expect(wikiAstToSlateAst(wikiAstDict['external link'])).toEqual(slateDict['external link']);
  });
  test('link in a list', () => {
    expect(wikiAstToSlateAst(wikiAstDict['link in a list'])).toEqual(slateDict['link in a list']);
  });
  test('heading', () => {
    expect(wikiAstToSlateAst(wikiAstDict.heading)).toEqual(slateDict.heading);
  });
  test('rpn', () => {
    expect(wikiAstToSlateAst(wikiAstDictWithoutPos.rpn)).toEqual(slateDict.rpn);
  });
  test.only('macro alert', () => {
    const result = wikiAstToSlateAst(wikiAstDict['macro alert']);
    fs.writeFileSync('test.json', JSON.stringify(result, null, 2));
    expect(wikiAstToSlateAst(wikiAstDict['macro alert'])).toEqual(slateDict['macro alert']);
  });
  test('codeblock', () => {
    expect(wikiAstToSlateAst(wikiAstDict.codeblock)).toEqual(slateDict.codeblock);
  });
  test('tableGettingStarted', () => {
    expect(wikiAstToSlateAst(wikiAstDict.tableGettingStarted)).toEqual(slateDict.tableGettingStarted);
  });
  test('table', () => {
    expect(wikiAstToSlateAst(wikiAstDict.table)).toEqual(slateDict.table);
  });
  test('setDefine', () => {
    expect(wikiAstToSlateAst(wikiAstDict.setDefine)).toEqual(slateDict.setDefine);
  });
  /** new tests here generated using `npx zx scripts/test/add-new-test.mjs` */
});
