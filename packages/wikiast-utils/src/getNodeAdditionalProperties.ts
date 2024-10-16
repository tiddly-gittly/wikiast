/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { type TElement } from '@udecode/slate';
import { type IWikiASTNode } from 'tiddlywiki';
import { pick } from './lodash/pick';
import { ISlateAstExtraTwMarkers } from './metadata';

/** Assign previously stored attributes back to wikiast, should be overwrite by node itself, because some node may assign attribute in its builder */
export function getSlatePlateASTAdditionalProperties(
  node: TElement & ISlateAstExtraTwMarkers,
) {
  const result: Partial<IWikiASTNode> = {
    ...pick(node, ['orderedAttributes', 'isBlock']),
  };
  if (node?.node?.attributes) {
    result.attributes = node.attributes;
  }
  if (node?.node?.orderedAttributes) {
    result.orderedAttributes = node.orderedAttributes;
  }
  return result;
}
