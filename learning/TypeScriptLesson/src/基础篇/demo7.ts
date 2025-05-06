/**
 * 1.interface和type区别（资料包）
 * 相同点
 * 1-1.都可以描述一个对象或者函数
 * 1-2.都允许进行扩展
 * 不同点
 * 2-1.type 声明基本类型别名、联合类型、元组等
 * 2-2.typeof获取实例的对象
 * 2-3.interface可以被合并
 */

/**
 * 1.有关于后台的接口 愿意去使用interface
 * 2.第三方的和开发的SDK 比如Vue
 * 3.前端的库 laoyuan.min.js laoyuan.d.ts
 * 4.正常的开发任务 type直接用更方便直接一些
 */
// 前端的业务开发中
// interface IPriceData {
//   id: number;
//   m: string;
// }
// type IPriceDataArray = IPriceData[];

// function getPriceData() {
//   return new Promise<IPriceDataArray>((resolve, reject) => {
//     fetch('url')
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (myJson) {
//         const data: IPriceDataArray = [];
//         resolve(data);
//       });
//   });
// }
// getPriceData().then((data) => {
//   console.log(data[0].id);
// });

//nodejs BFF架构模式
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
  tick(): void;
}

class DigitalClock implements ClockInterface {
  public tick(): void {
    console.log('beep beep');
  }
}
class AnalogClock implements ClockInterface {
  public tick(): void {
    console.log('ding ding');
  }
}

function createClock(
  ctor: ClockConstructor,
  hour: number,
  minute: number
): ClockInterface {
  return new ctor(hour, minute);
}

const digital = createClock(DigitalClock, 12, 17);
const analog = createClock(AnalogClock, 7, 30);
digital.tick();
analog.tick();
