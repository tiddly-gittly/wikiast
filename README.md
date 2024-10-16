# Wikiast Transform

This folder contains AST transformers, in two types:

- Between text and AST: `wikiast-util-to-wikitext`
- Between ASTs: `wikiast-util-from-slate-plate-ast` `wikiast-util-to-slate-plate-ast`

1. In `src/transform/serialize.ts`
   1. when loading, get slate-plate-ast using wikitext -> `wikiast-util-from-wikitext` -> `wikiast-util-to-slate-plate-ast`
   1. when saving, get wikitext using slate-plate-ast -> `wikiast-util-from-slate-plate-ast` -> `wikiast-util-to-wikitext`

## AST

### slate-plate-ast

SlateJS don't have many constrains on how user construct their JSONSchema, so each slate-based-editor will have different AST. For example, [udecode/plate](https://github.com/udecode/plate) and [prezly/slate](https://github.com/prezly/slate) uses similar but different JSON structure.

In our packages, we choose to use udecode/plate, so we use `wikiast-util-from-slate-plate-ast` to convert Slate generated JSON to wikiast.

### Wiki AST

Similar to SlateJS AST, each wiki system will generate different AST. In our package, we focus on tiddlywiki-generated AST.

## How to develop new transformer for new syntax

### pnpm i

```sh
pnpm i
```

(See [https://npmmirror.com/](https://npmmirror.com/) for how to speed up in China)

### Add code

1. Add test in `test` folder as described in its [Readme](../../test/README.md) (Test Driven Development).
1. In each `xxx-util-to/from-xxx` folder, add new transform functions to `xxxBuilder` folder.
1. Import and put them in `builders` object in each `xxxBuilder/index.ts` file.

### Test it

`npm run test`

You can use `it.only` to run a single test.

You can `console.log` an ast object to see its struct and use [transform.tools](https://transform.tools/) to transform it into typescript and contribute back to [TW5-Typed](https://github.com/tiddly-gittly/TW5-Typed)

### traverse.ts file

It contains `one` and `all` functions (may have different name, but concept are the same) similar to [syntax-tree/mdast-util-to-hast](https://github.com/syntax-tree/mdast-util-to-hast/blob/dfd724a5e62fc270e71bc2d5a2e4471be0c5ef5b/lib/traverse.js#L38-L108).

See [https://onetwo.ren/wiki/#AST转换成另一种AST](https://onetwo.ren/wiki/#AST%E8%BD%AC%E6%8D%A2%E6%88%90%E5%8F%A6%E4%B8%80%E7%A7%8DAST) (in Chinese) for explanation of this compiler design pattern.

## Development

### `Unable to resolve path to module 'wikiast-utils'.`

Run `npm run build` can solve this, because wikiast-utils's `dist` needs to be build before import by other workspace members.

### Publish

We use changeset to update version of all packages at once, follow [its guide for how to use](https://github.com/changesets/changesets/blob/main/docs/intro-to-using-changesets.md#adding-changesets)

```sh
npx changeset
npx changeset version
npx changeset publish
```
