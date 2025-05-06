// //===========1.不知道类型是啥的时候===========
// interface LengthWise {
//   length: number;
// }
// function identity<T extends LengthWise>(arg: T): T {
//   console.log(arg.length);
//   return arg;
// }

// const result = identity<string>('京程一灯');
// console.log(result);
// //===========2.demo2 类型 实体类===========
// class GenericNumber<T> {
//   zeroValue: T | undefined;
//   add: ((x: T, y: T) => T) | undefined;
// }

// const myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function (x, y) {
//   return x + y;
// };
// console.log(myGenericNumber.add(30, 50));

//===========3.demo3 使用泛型实现重载机制===========
// function getData(value: string): string {
//   return value;
// }
// function getData1(value: string): string {
//   return value;
// }
// function getData2(value: number): number {
//   return value;
// }
// function add(...rest: number[]): number;
// function add(...rest: string[]): string;
// function add(...rest: any[]) {
//   let first = rest[0];
//   if (typeof first === 'number') {
//     return rest.reduce((pre, cur) => pre + cur);
//   }
//   if (typeof first === 'string') {
//     return rest.join('');
//   }
// }
// console.log(add(1, 2));
// console.log(add('a', 'b', 'c'));

function getData<T>(value: T): T {
  return value;
}
getData<number>(123);
getData<string>('京程一灯666');

//===========4.demo4 泛型接口===========
// interface ConfigFn {
//   <T>(value: T): void;
// }

// const getData2: ConfigFn = function <T>(value: T): void {
//   console.log(value);
// };
// getData2<string>('123');

//===========5.demo5 动态泛型===========
// interface Bookmark {
//   msg: string;
// }
// class BookmarksService<T extends Bookmark> {
//   items: T[] = [];
// }
// class BookmarksService2<T extends Bookmark = Bookmark> {
//   items: T[] = [];
// }
// const s = new BookmarksService2<string>();
// items = [
//   {
//     msg: '一灯',
//   },
// ];

//===========6.demo6 小彩蛋===========
// let err1: readonly Set<number>;
// let err2: readonly Array<number>;

let ok1: readonly boolean[];
let ok2: readonly [number, string];
