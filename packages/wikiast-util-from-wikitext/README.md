# wikiast-util-from-wikitext

This package simply calling `$tw.wiki.parseText`.

This mainly contains test for this function.

## Usage

```ts
import { wikiAstFromWikiText } from "wikiast-util-from-wikitext";

const ast = wikiAstFromWikiText("AAA");
// with position info
expect(ast).toEqual([
  {
    type: "element",
    tag: "p",
    children: [{ type: "text" as const, text: "AAA", start: 0, end: 3 }],
    start: 0,
    end: 3,
  },
]);
```

Or just as simple as

```ts
const ast = $tw.wiki.parseText("text/vnd.tiddlywiki", "AAA").tree;
```

See more examples in the test folder.
