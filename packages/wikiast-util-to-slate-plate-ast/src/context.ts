import { builders, type IBuilders } from './builder';

/**
 * We need a context to know what parent node is wrapping the current node.
 * For example, mark in wikiast is tree structure, but in slate-plate-ast is flat structure, so need context to convert.
 */
export interface IContext {
  builders: IBuilders;
  idCreator?: () => string;
  marks: {
    bold?: boolean;
    code?: boolean;
    italic?: boolean;
    strikethrough?: boolean;
    subscript?: boolean;
    superscript?: boolean;
    underline?: boolean;
  };
}
export const initialContext: IContext = {
  builders,
  marks: {},
};
