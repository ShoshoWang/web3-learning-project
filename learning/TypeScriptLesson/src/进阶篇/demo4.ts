// 将属性K 对应的T 转换为U
//string ProductIncart
interface ProductIncart {
  id: number;
  name: string;
  label?: string;
}

type Product = ProductIncart[];
//Record<string, ProductIncart>
interface Test {
  [key: string]: ProductIncart;
}

class CarModel {
  products: Record<string, ProductIncart> = {
    laoyuan: {
      id: 20,
      name: '京程一灯',
    },
  };
}
