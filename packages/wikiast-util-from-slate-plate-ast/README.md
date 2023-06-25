# wikiast-util-from-slate-plate-ast

Transform slate-plate based WYSIWYG editor's AST back to wikiast.

## Usage

```ts
import { wikiAstFromSlateAst } from "wikiast-util-from-slate-plate-ast";

const slatePlateAst = { type: "p", children: [{ text: "AAA" }] };
const wikiast = wikiAstFromSlateAst(slatePlateAst);
// without `, start: 0, end: 3` position info.
expect(wikiast).toEqual([
  {
    type: "element",
    tag: "p",
    children: [{ type: "text" as const, text: "AAA" }],
  },
]);
```
