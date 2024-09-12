import type { ParseTreeNode } from 'tiddlywiki/types/core/modules/parsers/base';

export function wikiAstFromWikiText(input: string): ParseTreeNode[] {
  if (typeof $tw === 'undefined') {
    return [];
  }
  const wikiParser = $tw.wiki.parseText('text/vnd.tiddlywiki', input);
  if (wikiParser === null) return [];
  const rootNode = wikiParser.tree;
  return rootNode;
}
