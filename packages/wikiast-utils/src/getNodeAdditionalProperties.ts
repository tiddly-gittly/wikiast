/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { type TElement } from '@udecode/slate';
import { type IParseTreeAttribute, type IWikiASTNode } from 'tiddlywiki';
import { pick } from './lodash/pick';
import { removeTypeFromAttributes } from './mapAttributes';

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
