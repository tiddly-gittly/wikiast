/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import type { IWikiASTNode } from 'tiddlywiki';

/**
 * import pick from 'lodash/pick';
 * prevent importing tons of lodash helpers
 * @url https://www.30secondsofcode.org/js/s/pick-object-keys/
 */
export const pick = (object: Record<string, unknown> | IWikiASTNode, array: string[]) =>
  array.reduce(
    // @ts-expect-error Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Record<string, unknown> | IWikiASTNode'.
    // eslint-disable-next-line no-sequences, @typescript-eslint/no-unsafe-assignment
    (accumulator: Record<string, unknown> | IWikiASTNode, current) => (current in object && (accumulator[current] = object[current]), accumulator),
    {},
  );
