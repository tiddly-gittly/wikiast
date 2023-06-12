/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import type { IDomParseTreeNode, ILinkParseTreeNode } from 'tiddlywiki';
import type { IContext } from '../..';

/**
 * A may need to transform back to `[ext[xxx|yyy]]`, but may be just real `<a />`
 */
export function a(context: IContext, node: IDomParseTreeNode): string[] {
  const { attributes, children } = node;
  /**
   * // TODO: Property 'includes' does not exist on type 'string | IMacroCallParseTreeNode'.
  Property 'includes' does not exist on type 'IMacroCallParseTreeNode'.ts(2339)
   */
  if (typeof attributes?.class?.value === 'string' && attributes.class.value.includes('tc-tiddlylink-external')) {
    // is `[ext[xxx]]` link
    return context.builders.link(
      context,
      {
        type: 'link',
        attributes: {
          to: attributes.href,
        },
        children,
      } as ILinkParseTreeNode,
      { prefix: 'ext' },
    );
  }
  // is real a tag
  const jsxResult = context.builders.jsx(context, node);
  return jsxResult;
}
