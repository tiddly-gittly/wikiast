# wikiast-util-to-wikitext

Serialize Wiki AST back to wikitext.

## Why not a `$tw` method?

This functionality is not included in the Tiddlywiki core, because Tiddlywiki normally will construct widget tree, and render Wiki AST as HTML for end user.

And Tiddlywiki itself does not allow directly edit rendered HTML or widget tree, so it doesn't need a way to get wikitext from rendered result in the core.

## Usage

```ts
import { wikiAstToWikiText } from "wikiast-util-to-wikitext";

// with or without position info `start: 0, end: 3` are both ok
const wikiast = [
  {
    type: "element",
    tag: "p",
    children: [{ type: "text" as const, text: "AAA" }],
  },
];
const wikitext = wikiAstToWikiText(wikiast);
expect(wikitext).toEqual("AAA");
```
