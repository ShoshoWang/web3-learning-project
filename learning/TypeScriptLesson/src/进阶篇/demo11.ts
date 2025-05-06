function isString(a: unknown): a is string {
  return typeof a === 'string';
}
type ToArray<T> = T extends unknown[] ? T : T[];
const data3: ToArray<string> = Array.from('1234');
