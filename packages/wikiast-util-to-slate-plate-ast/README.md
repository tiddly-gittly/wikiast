# wikiast-util-to-slate-plate-ast

Get SlateJS AST (udecode/plate variant) from Wiki AST.

## Usage

```ts
import { wikiAstToSlateAst } from "wikiast-util-to-slate-plate-ast";

const wikiast = [
  {
    type: "element",
    tag: "p",
    children: [{ type: "text" as const, text: "AAA", start: 0, end: 3 }],
    start: 0,
    end: 3,
  },
];
const slatePlateAst = wikiAstToSlateAst(wikiast);
expect(slatePlateAst).toEqual({ type: "p", children: [{ text: "AAA" }] });
```
