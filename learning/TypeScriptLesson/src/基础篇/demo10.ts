/**
 *一个方法：生成错误提示信息 tsdocs
 *
 * @param message {string}提示信息
 * @param code {number | string}错误码
 * @param type type类型，请写`demo1`或者`demo2`
 * @returns 错误信息
 *
 * [还不懂？点击这里吧](https://www.google.com)
 *
 * ```js
 * // demo
 * getErrorMessage('demo', 10086)
 * ```
 */
function getErrorMessage(
  message: string,
  code: number | string,
  type?: 'demo1' | 'demo2'
): string {
  return message || '网络繁忙，请稍后~' + code;
}

// getErrorMessage()
