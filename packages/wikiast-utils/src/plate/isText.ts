import type { TText } from '@udecode/slate';

/**
 * This version of @udecode/slate has no tree shaking, so copy it here until we upgrade it.
 * import { isText } from '@udecode/slate';
 */
export const isText = (item: unknown): item is TText => item !== null && typeof item === 'object' && 'text' in item && typeof item.text === 'string';
