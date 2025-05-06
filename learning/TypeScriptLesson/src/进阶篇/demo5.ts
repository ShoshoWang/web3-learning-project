// type CoreIconName = 'user' | 'customer';
// const opts: CoreIconName = 'customer';
// Object == {} ts世界中
// type LiteralUnion<T extends U, U = string> = T | (U & {});
// interface GreetSettings {
//   greeting: string;
//   duration: number;
//   color?: false;
// }
// type Color = 'red' | 'black' | keyof GreetSettings;
// const c: Color = 'greeting';

type TYd = string & {};
type TTest = 'foo' | 'bar' | TYd;
type Ttest2 = 'hello' | 'world';
const xx: Ttest2 = 'world';
export { TTest };

// import { TTest } from './demo';
// const xx: TTest = 'bar';
// console.log(xx);
