import type { TText } from '@udecode/plate-core';

/**
 * This version of @udecode/plate-core has no tree shaking, so copy it here until we upgrade it.
 * import { isText } from '@udecode/plate-core';
 */
export const isText = (item: unknown): item is TText => item !== null && typeof item === 'object' && 'text' in item && typeof item.text === 'string';
