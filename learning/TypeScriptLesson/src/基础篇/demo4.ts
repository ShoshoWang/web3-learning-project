// /**
//  * 1.抽象类可以具体实现 也可以定义抽象方法
//  * 2.方法修饰符
//  *   public    共有的 任何地方都可以访问到
//  *   private   私有的 不能在类的外部使用 也就是说内部使用
//  *   protected 保护的子类中是可以使用的
//  * 3. Animal[]
//  */
abstract class Animal {
  abstract makeSound(): void;
  protected move(): void {
    console.log('动物移动');
  }
}
//类即可是实体类 也可以是个类型
class Dog extends Animal {
  #region: string;
  constructor() {
    super();
    this.#region = '测试私有';
  }
  private uname: string = '京程一灯';
  makeSound() {
    // this.move();
    console.log('汪汪汪');
  }
}

const dog: Animal = new Dog();
console.log((dog as any).region);

// dog.move();
// dog.makeSound();

let animals: Animal[] = [dog];
