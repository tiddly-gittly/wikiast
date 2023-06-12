import type { ITextParseTreeNode, ITiddlerParseTreeNode } from 'tiddlywiki';
import type { IContext } from '..';

/**
 * The source tiddler is in the `type: 'tiddler', attributes: { tiddler: {type: 'string', value: 'favicon.ico',},}` part
 * And the transclude template part is its children with type `transclude`, same as the source tiddler if no template is used
 */
export function tiddler(context: IContext, node: ITextParseTreeNode): string[] {
  // TODO: will this be `string | IMacroCallParseTreeNode` ?
  const source = node.attributes?.tiddler === undefined ? '' : node.attributes.tiddler.value as string;
  const templateName = (node.children as ITiddlerParseTreeNode[])?.[0]?.attributes?.tiddler?.value;
  const templatePart = templateName !== undefined && templateName !== source && typeof templateName === 'string' ? `|${templateName}` : '';
  return [`{{${source}${templatePart}}}`];
}
