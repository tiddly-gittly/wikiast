import type { ICustomParseTreeNode, IWikiASTNode } from 'tiddlywiki';

/**
 * Some information to tell wikiast-util-from-slate-plate-ast how to restore previous type
 */
export interface ISlateAstExtraTwMarkers {
  attributes?: IWikiASTNode['attributes'];
  /**
   * The original TW AST node, for seamless round-trip in difficult cases
   */
  node?: ICustomParseTreeNode;
  orderedAttributes?: IWikiASTNode['orderedAttributes'];
  /**
   * Which rule produce this node
   */
  rule?: string;
}
