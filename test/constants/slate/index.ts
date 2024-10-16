import { type TEditor, type TElement, type TText, type Value } from '@udecode/slate';

import { codeblock } from './codeblock';
import { heading } from './heading';
import { image } from './image';
import { link } from './link';
import { macro } from './macro';
import { ol } from './ol';
import { set } from './set';
import { table } from './table';
import { text } from './text';
import { transclude } from './transclude';
import { widget } from './widget';

/**
 * Get value by adding `console.log(`newValue`, newValue);` in `onSave` of `src/components/editor.tsx`.
 *
 * Sometimes may need to add `as TElement` on nested `children: []` to prevent ts error.
 */
export const slateDict: Record<string, TEditor<Value> | TElement | TText | Array<TEditor<Value> | TElement | TText>> = {
  ...image,
  ...transclude,
  ...codeblock,
  ...widget,
  ...link,
  ...heading,
  ...ol,
  ...macro,
  ...table,
  ...set,
  ...text,
};
