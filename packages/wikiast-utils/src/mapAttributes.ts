/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type IParseTreeAttribute } from 'tiddlywiki';

export function removeTypeFromAttributes(attributes?: Record<string, IParseTreeAttribute>): Record<string, any> | undefined {
  if (attributes === undefined) {
    return;
  }
  return Object.keys(attributes).reduce<Record<string, any>>((accumulator, key) => {
    const value = attributes[key];
    if (value.type === 'string') {
      accumulator[key] = value.value;
    }
    return accumulator;
  }, {});
}

// export function addTypeToAttributes(attributes?: Record<string, any>): Record<string, IParseTreeAttribute> | undefined {
//   if (attributes === undefined) {
//     return;
//   }
//   return Object.keys(attributes).reduce<Record<string, IParseTreeAttribute>>((accumulator, key) => {
//     const value = attributes[key];
//     accumulator[key] = {
//       // not accurate, will make 'link' to 'string', so this function is not used anymore
//       /**
//        * Type '"string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function"' is not assignable to type '"string" | "number" | "bigint" | "boolean" | "macro" | "macro-parameter"'.
//   Type '"symbol"' is not assignable to type '"string" | "number" | "bigint" | "boolean" | "macro" | "macro-parameter"'.ts(2322)
//        */
//       type: typeof value,
//       value,
//     };
//     return accumulator;
//   }, {});
// }
