interface User {
  id: number;
  age: number;
  name: string;
}
//必须的字段变成可选
// type PartialUser = Partial<User>;
// //去掉问号
// type PullDownRefresh = Required<PartialUser>;
// //选择一些必选字段
// type PickUser = Pick<User, 'id' | 'age'>;
// //排除掉一些字段
// type OmitUser = Omit<User, 'id' | 'age'>;
// //排除掉两个类型的交集
// type A = Exclude<'x' | 'a', 'x' | 'y' | 'z'>;
// type Select = 'id' | 'age';
// type PartialSelect = Partial<Pick<User, Select>>;
// type OmitUser = Omit<User, Select>;

// type Final = PartialSelect & OmitUser;
// const s: Final = {
//   name: '一灯',
//   age: 30,
// };
//一段小代码 让部分可选 再让部分不可选
type SelectPartial<T, V extends keyof T> = Partial<Pick<T, V>> & Omit<T, V>;
type Final = SelectPartial<User, 'id' | 'age'>;

interface FirstType {
  id: number;
  firstName: string;
  lastName: string;
}

interface SecondType {
  id: number;
  address: string;
  city: string;
}

//Extract
type ExtractType = Extract<keyof FirstType, keyof SecondType>;
type ExcludeType = Exclude<keyof FirstType, keyof SecondType>;
