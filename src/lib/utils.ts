/* eslint-disable @typescript-eslint/no-explicit-any */
export function flip(obj: any): any {
  return Object.assign(
    {},
    ...Object.entries(obj).map(([a, b]) => ({ [b as string]: a }))
  );
}
