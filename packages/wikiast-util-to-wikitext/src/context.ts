
import type { IParseTreeNode } from 'tiddlywiki';
import { builders, type IBuilders } from './builders';
import { type convertOneNode } from './traverse';

export type IAnyBuilder = IBuilders & Record<string, typeof convertOneNode>;

/**
 * Wikitext is context aware, we need to know how current indentation is affected by the former code, and current list mode, etc.
 */
export interface IContext {
  /** Builders from node to text
   * Using dependency injection (pass-in via function parameter) to avoid circular dependency */
  builders: IAnyBuilder;
  /**
   * ul or ol will indent the following lines if they are inside other ul or ol, this counter variable tracks how much should we indent, it starts at -1, and may +1 for each ul or ol level before generating text (so it becomes 0 for the first ul or ol)
   */
  indentLevels: number;
  /** when working on children array, we provide child index in this property */
  index: number;
  /** let li know it should use which symbol for list dot
   * If this is not undefined, means we are in a li
   */
  listMode: 'ul' | 'ol' | undefined;
  marks: {
    code?: boolean;
    em?: boolean;
    strike?: boolean;
    strong?: boolean;
    sub?: boolean;
    sup?: boolean;
    u?: boolean;
  };
  /** the root nodes array */
  nodes: IParseTreeNode[];
  /** is root's children, we add \n between root's children */
  root: boolean;
}
// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const defaultContext = {
  builders,
  indentLevels: -1,
  index: 0,
  listMode: undefined,
  marks: {},
  nodes: [] as IParseTreeNode[],
  root: true,
} as IContext;
