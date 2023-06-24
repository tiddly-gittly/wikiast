/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/**
 * import dropRightWhile from 'lodash/dropRightWhile';
 * prevent importing tons of lodash helpers
 * @url https://www.30secondsofcode.org/js/s/drop-array-elements-from-right-while/
 */
const dropRightWhile = (array: string[], function_: (token: string) => boolean) => {
  let rightIndex = array.length;
  while (rightIndex-- && !function_(array[rightIndex]));
  return array.slice(0, rightIndex + 1);
};

/**
 * remove tailing \n
 *
 * We may have add extra \n when processing child tree, and those \n are too much after process the child
 * @param tokens
 * @returns
 */
export function dropExtraTailingN(tokens: string[]): string[] {
  // our code will only generate \n or \n\n so no need to test more. Add more case when code generating more cases.
  const listWithoutNToken = dropRightWhile(tokens, (token) => token === '\n' || token === '\n\n');
  const lastToken = listWithoutNToken.at(-1);
  // we still need to remove \n from last token
  if (lastToken?.endsWith?.('\n')) {
    listWithoutNToken[listWithoutNToken.length - 1] = lastToken.slice(
      0,
      -1,
    );
  }
  return listWithoutNToken;
}
