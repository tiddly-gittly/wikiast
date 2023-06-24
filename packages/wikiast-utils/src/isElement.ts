import type { TElement } from '@udecode/plate-core';

/**
 * This version of @udecode/plate-core has no tree shaking, so copy it here until we upgrade it.
 * import { isElement } from '@udecode/plate-core';
 *
 * ```js
 * u = isPlainObject
 * const isElement=e=>u(e)&&Node.isNodeList(e.children)&&!Editor.isEditor(e)
 * ```
 */
export const isElement = (item: unknown): item is TElement => item !== null && typeof item === 'object' && 'children' in item && Array.isArray(item.children);
