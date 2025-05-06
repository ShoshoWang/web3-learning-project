//元编程
import 'reflect-metadata';
function inject(serviceIdentifier: string) {
  return function (target: Object, targetKey: string, index: number) {
    Reflect.defineMetadata(serviceIdentifier, '老袁666', target);
  };
}
class IndexController {
  public indexService: string;
  constructor(@inject('xxx') indexService: string) {
    this.indexService = indexService;
  }
}
const indexController = new IndexController('京程一灯');
console.log('🍎', indexController.indexService);
//JavaScript 元编程
console.log('🍊', Reflect.getMetadata('xxx', IndexController));
