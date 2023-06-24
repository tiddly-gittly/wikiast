/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { type TElement } from '@udecode/plate-core';
import { type IParseTreeAttribute, type IWikiASTNode } from 'tiddlywiki';
import { removeTypeFromAttributes } from './mapAttributes';

/**
 * import pick from 'lodash/pick';
 * prevent importing tons of lodash helpers
 * @url https://www.30secondsofcode.org/js/s/pick-object-keys/
 */
const pick = (object: Record<string, unknown> | IWikiASTNode, array: string[]) =>
  array.reduce(
    // @ts-expect-error Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Record<string, unknown> | IWikiASTNode'.
    // eslint-disable-next-line no-sequences, @typescript-eslint/no-unsafe-assignment
    (accumulator: Record<string, unknown> | IWikiASTNode, current) => (current in object && (accumulator[current] = object[current]), accumulator),
    {},
  );

/** store attribute to tw-attribute, so it can be seamlessly restore later. */
export function getWikiASTAdditionalProperties(node: IWikiASTNode) {
  const result = {
    ...pick(node, ['orderedAttributes', 'isBlock']),
  } as Partial<TElement>;
  if (node.attributes !== undefined) {
    result.attributes = removeTypeFromAttributes(node.attributes);
    // store here, so we can retrieve it back later
    result['tw-attributes'] = node.attributes;
  }
  return result;
}

/** Assign previously stored attributes back to wikiast, should be overwrite by node itself, because some node may assign attribute in its builder */
export function getSlatePlateASTAdditionalProperties(
  node: TElement & { isBlock: boolean; orderedAttributes: IParseTreeAttribute[]; 'tw-attributes': Record<string, IParseTreeAttribute> },
) {
  const result: Partial<IWikiASTNode> = {
    ...pick(node, ['orderedAttributes', 'isBlock']),
  };
  if (node['tw-attributes']) {
    result.attributes = node['tw-attributes'];
  }
  if (node.orderedAttributes) {
    result.orderedAttributes = node.orderedAttributes;
  }
  return result;
}
