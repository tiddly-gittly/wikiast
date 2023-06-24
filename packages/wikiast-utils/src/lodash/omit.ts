/**
 * import omit from 'lodash/omit';
 * @url https://stackoverflow.com/a/60469095
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export function omit<T extends object = {}>(object: T, keys: string[]): Partial<T> {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access, unicorn/prevent-abbreviations, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-explicit-any
  return (keys as any).reduce((a: Partial<T>, e: keyof T) => {
    const { [e]: _omitted, ...rest } = a;
    return rest;
  }, object);
}
