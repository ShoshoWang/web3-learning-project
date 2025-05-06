//1.不要去混淆ES6和TS中 =>
let myNum: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};

//2.函数默认参数
function buildName(firstName: string, lastName: string = 'Cat') {
  return firstName + lastName;
}

//3.剩余参数
function push(array: any[], ...items: any[]) {
  items.forEach((item) => {
    array.push(item);
  });
}
let a = [4];
push(a, 1, 2, 3);
console.log('a: ', a);

//4.可选参数 必须要放到后面
function buildName2(lastName: string, firstName?: string) {
  if (firstName) {
    return firstName + ' ' + lastName;
  } else {
    return lastName;
  }
}
const tom = buildName2('Tom', 'cat');
// const tom2 = buildName2(undefined, 'cat');

//函数
// {
// } //ES代码块 对象 函数
// () => {};
// Function
