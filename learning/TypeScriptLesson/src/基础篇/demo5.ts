// function getLength(str: string | number): number {
//   return str.length;
// }
// 类型断言
function getLength2(str: string | number): number {
  // if ((str as string).length) {
  if ((<string>str).length) {
    return (<string>str).length;
  } else {
    return str.toString().length;
  }
}
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
  if (typeof n === 'string') {
    return n;
  } else {
    return n();
  }
}

// interface A {
//   msg: string;
// }
// function helper(options: A): A {
//   return options;
// }

// const xxA: A = {};
declare module 'koa-swig' {
  interface Vue {
    a: number;
  }

  interface Vue {
    b: string;
  }
}
