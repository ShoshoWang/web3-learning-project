const PROD = Symbol('Production mode');
const DEV = Symbol('Development mode');

const obj = {
  [DEV]: 30,
};

function showWarning(msg: string, mode: typeof DEV | typeof PROD) {
  console.log(mode.description, msg);
}
showWarning('出错啦', PROD);
