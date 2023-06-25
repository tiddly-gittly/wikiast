import type { TElement } from '@udecode/slate';

/**
 * This version of @udecode/slate has no tree shaking, so copy it here until we upgrade it.
 * import { isElement } from '@udecode/slate';
 *
 * ```js
 * u = isPlainObject
 * const isElement=e=>u(e)&&Node.isNodeList(e.children)&&!Editor.isEditor(e)
 * ```
 */
export const isElement = (item: unknown): item is TElement => item !== null && typeof item === 'object' && 'children' in item && Array.isArray(item.children);
