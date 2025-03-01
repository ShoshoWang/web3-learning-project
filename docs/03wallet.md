## 💰 链接web3钱包

### 1.了解Chrome扩展插件

因为大多数web3钱包都是以chrome插件形式存在，所以我们要先了解chrome插件的简单原理。开发过chrome插件的小伙伴肯定知道，开发插件需要安装规定配置以下文件

 ```text
    my-extension/
    ├── manifest.json // 这是插件的核心配置文件
    ├── popup.html // 这个文件定义插件点击时的界面
    ├── popup.js // 编写逻辑脚本
```

以上我们会根据复杂的插件功能做进阶配置，我们的插件在与与网页通信的时候，会调用chrome的API,Chrome插件通过manifest.json中的content_scripts字段，在特定网页（通常是所有网页，即"matches": ["<all_urls>"]）中注入JavaScript代码,比如可以注入你的全局变量,以及Chrome插件通过manifest.json中的background字段添加后台脚本

 ```json
 // manifest.json
"content_scripts": [
  {
    "matches": ["<all_urls>"],
    "js": ["content.js"]
  }
],
"background": {
  "service_worker": "background.js"
}
```
```javascript
// content.js 创建content.js，注入一个全局变量
console.log("Content script injected!");
window.myCustomVariable = "Hello from extension";

// background.js
chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed!");
});
```

🤔总结：在content.js中通过chrome.runtime.sendMessage发送消息，在background.js中用chrome.runtime.onMessage.addListener接收

### 2.Web3钱包链接的原理

#### EIP-1193和EIP-6963协议
我们的DApp想要和web3钱包进行连接，必须要遵循相关的协议。

> EIP-1193定义了DApp与以太坊钱包（如MetaMask）之间通信的标准化JavaScript接口。它规范了“提供者”（Provider）的行为，使DApp可以通过统一的API与钱包交互，而无需关心钱包的具体实现细节

> EIP-6963是为了解决浏览器中多个钱包插件共存时的冲突问题。它定义了一种机制，让DApp可以发现并选择用户安装的所有符合EIP-1193标准的钱包提供者，而不是默认只使用window.ethereum, EIP-6963解决了多钱包环境下的兼容性问题，让用户拥有更多选择权，同时减轻了DApp开发者的适配负担。它是对EIP-1193的补充，而不是替代

了解了以上页面通信协议后，我们就知道如何来实现和设计我们的代码

- 协议规定web3钱包可以将其 provider 对象暴露给页面，然后页面就可以通过这个 provider 对象进行交互。会将其注入到window.ethereum对象中
- 学习使用ethers.js,该库旨在为以太坊区块链及其生态系统提供一个小而完整的 JavaScript API 库
- 主要实现代码如下👇

```javascript
// 在react项目中，判断是否安装了web3钱包环境
if (typeof window.ethereum !== 'undefined'){
    // 请求用户授权连接钱包
    const accounts: string[] = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const web3Provider = new ethers.BrowserProvider(window.ethereum);
}
```

👆以上简要概述，完成代码可学习完04Next.js和Vercel部署后查看demo仓库和线上页面


### 3.Web3钱包与Chrome插件API的关联

Web3钱包作为Chrome插件，其实现依赖于以下几个关键的Chrome插件API特性：

##### Content Scripts（内容脚本）

通过`manifest.json`中的`content_scripts`字段，MetaMask会将`window.ethereum`对象注入到网页的全局作用域中，作为EIP-1193协议规定的Provider。这个Provider对象是DApp与钱包交互的桥梁，DApp可以通过它调用诸如`eth_requestAccounts`（请求账户授权）或`eth_sendTransaction`（发送交易）等方法。

```javascript
// content.js
console.log("Web3 wallet injected!");
window.ethereum = new EthereumProvider(); // 假设这是钱包的Provider实现
```

##### Background Scripts（后台脚本）

通过`manifest.json`中的`background`字段，Web3钱包运行一个持久化的后台脚本（通常是Service Worker），后台脚本通过`chrome.runtime API`与DApp通信。例如，当DApp调用`window.ethereum.request`时，请求会通过消息传递机制（如chrome.runtime.sendMessage）转发到后台脚本处理。

```javascript
// background.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.method === 'eth_requestAccounts') {
    // 模拟请求账户逻辑
    sendResponse({ accounts: ['0x1234...'] });
  }
});
```

### 4.再讲讲EIP-1193和EIP-6963和ethers.js

#### EIP-1193的实现
EIP-1193要求钱包暴露一个标准化的Provider对象（如`window.ethereum`）。Web3钱包通过Chrome插件的`content_scripts`将这个对象注入到网页中。DApp通过调用Provider的方法与钱包交互，而这些方法的具体实现则依赖于后台脚本。例如：

```javascript
// DApp代码
if (typeof window.ethereum !== 'undefined') {
  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  console.log("Connected accounts:", accounts);
}
```
在这个过程中，window.ethereum.request实际上是通过Chrome插件的消息机制，将请求发送到后台脚本，后台脚本处理后返回结果

#### EIP-6963的实现
EIP-6963扩展了EIP-1193，允许多个钱包共存并被DApp发现。Web3钱包通过Chrome插件API监听浏览器环境，并在`content_scripts`中暴露多个Provider。例如，MetaMask可能注入`window.ethereum`，而另一个钱包插件可能注入`window.ethereum.providers`数组中的一个对象。DApp开发者可以遍历这些Provider选择合适的钱包：
```javascript
// DApp代码支持EIP-6963
const providers = window.ethereum?.providers || [window.ethereum];
providers.forEach(async (provider) => {
  const accounts = await provider.request({ method: 'eth_requestAccounts' });
  console.log("Provider accounts:", accounts);
});
```

#### ethers.js
> ethers.js库旨在为以太坊区块链及其生态系统提供一个小而完整的 JavaScript API 库，它最初是与 ethers.io 一起使用，现在已经扩展为更通用的库

在DApp开发中，ethers.js库通过BrowserProvider封装了与window.ethereum的交互。Chrome插件API确保window.ethereum始终可用，而ethers.js则简化了复杂的方法调用

```javascript
// DApp中使用ethers.js连接钱包
import { ethers } from 'ethers';
async function connectWallet() {
  if (typeof window.ethereum !== 'undefined') {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const accounts = await provider.send('eth_requestAccounts', []);
    const signer = await provider.getSigner();
    console.log("Connected account:", await signer.getAddress());
  } else {
    console.log("Please install a Web3 wallet like MetaMask!");
  }
}
```
### 总结

希望通过本篇笔记的介绍能够有所收获
- 大家能够理解web3钱包（一般的插件钱包）在chrome 插件开发上的规范，尝试开发自己的浏览器插件
- web3钱包如何与Dapp遵循EIP-1193和EIP-6963协议通信的原理
- Chrome插件API，ethers.js的了解和学习

