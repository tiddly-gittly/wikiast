/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/**
 * import dropRightWhile from 'lodash/dropRightWhile';
 * prevent importing tons of lodash helpers
 * @url https://www.30secondsofcode.org/js/s/drop-array-elements-from-right-while/
 */
export const dropRightWhile = (array: string[], function_: (token: string) => boolean) => {
  let rightIndex = array.length;
  while (rightIndex-- && function_(array[rightIndex]));
  return array.slice(0, rightIndex + 1);
};
