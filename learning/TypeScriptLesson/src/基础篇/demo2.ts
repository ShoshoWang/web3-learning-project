//已有数组
let arr: number[] = [1, 2, 2];
let arr2 = new Array<number>(4);
console.log(arr2.length);
interface NumberArray {
  [index: number]: number;
}
let arr3: NumberArray = [1, 2, 2];

//类数组
function sum() {
  let args: IArguments = arguments;
  //   args.callee();
}

//元组
// let arrAny: any[] = [1, '测试'];
let tuple1: [number, string, boolean] = [1, '测试', false];

//区别
function useFetch() {
  const response: string = '京程一灯';
  const age: number = 30;
  return tuplify(response, age);
  //return [response, age];
}
function tuplify<T extends unknown[]>(...elements: T): T {
  return elements;
}
const [response] = useFetch();
