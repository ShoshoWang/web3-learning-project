type NonNullableType = string | number | null | undefined;
function showType(args: NonNullable<NonNullableType>) {
  console.log(args);
}
showType('京程一灯');
showType(666);

// showType(null);
// showType(undefined);
type StringMap<T> = {
  [P in keyof T]: string;
};
function showType2(args: StringMap<{ id: number; name: string }>) {
  console.log(args);
}

showType2({ id: 'x', name: 'Test' });
