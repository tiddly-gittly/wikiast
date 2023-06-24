/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/**
 * This is an example of custom element processing. The logic here is the same as `src/transform/wikiast-util-to-slate-plate-ast/slateBuilder/element/index.ts`, purely for example.
 */
import type { TElement, TNode } from '@udecode/plate-core';
import type { IDomParseTreeNode, ITextParseTreeNode, IWikiASTNode } from 'tiddlywiki';
import { mergeAdjacent } from 'wikiast-utils';
import { type IContext } from '../..';
import { convertNodes } from '../../traverse';

// import { ELEMENT_LI, ELEMENT_LIC } from '@udecode/plate-list';
const ELEMENT_LI = 'li';
const ELEMENT_LIC = 'lic';
export interface IListItemDomParseTreeNode extends IDomParseTreeNode {
  children: Array<IDomParseTreeNode | ITextParseTreeNode>;
  tag: 'li';
}

export function li(context: IContext, node: IDomParseTreeNode): TElement {
  const { children } = node as IListItemDomParseTreeNode;
  const childrenWithLic = children.flatMap((child) => {
    if (child.type === 'text' || (child.tag !== 'ol' && child.tag !== 'ul')) {
      return { type: ELEMENT_LIC, children: convertNodes(context, [child]) } as TNode;
    }
    return convertNodes(context, [child]);
  });

  // wikiast have li > text, but slate-plate-ast have li > lic > text
  // and merge multiple lic > text created by the flatMap, into a single lic containing multiple text
  const childrenWithLicMerged = mergeAdjacent(childrenWithLic as unknown as Array<(IWikiASTNode | TNode) & { children: TNode[] }>, ELEMENT_LIC) as TElement[];
  const childrenWithLicPadded = childrenWithLicMerged.map((child: TElement) => {
    if (child.type === ELEMENT_LIC) {
      if (child.children.length > 0) {
        // if first child is not a text, we need to add an empty text to pad first, because plate will generate ast like this
        if (!child.children[0].text) {
          child.children.push({ text: '' });
        }
        if (!(child.children.at(-1)?.text)) {
          child.children.unshift({ text: '' });
        }
      } else {
        // slate don't allow empty element, we need to provide at least one empty text node
        child.children.push({ text: '' });
      }
    }
    return child;
  });
  return {
    type: ELEMENT_LI,
    // slate don't allow empty element, we need to provide at least one empty lic node
    children: childrenWithLicPadded.length > 0 ? childrenWithLicPadded : [{ type: ELEMENT_LIC, children: [{ text: '' }] }],
  };
}
