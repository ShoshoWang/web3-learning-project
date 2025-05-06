let isDone: boolean = false;
let num: number = 0;
let hexLiteral: number = 0xf00d;
let myName: string = '京程一灯';

function alertName(): void {
  alert('测试');
}
// javascript:void(0)
let unusable: void = undefined;

//类型推断
function getString(something: string | number): string {
  return something.toString();
}

getString('文本');

//一些固定的参数集合
enum Days {
  Sun = 7,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}
console.log('🐻', Days['Sun']);

interface Person {
  readonly id: number;
  uname?: string;
  age: number;
  [proName: string]: any;
}
const laoyuan: Person = {
  id: 30,
  age: 20,
};
laoyuan['xx'] = true;
// type
