const yd = (yideng: string, user: number) => {};
type yideng = Parameters<typeof yd>;
const x = (...data: yideng) => {
  const [yideng] = data;
  console.log('yideng: ', yideng);
};
x('测试', 20);
