/*
 * @Author: v_vjyuan v_vjyuan@tencent.com
 * @Date: 2022-09-05 20:03:39
 * @LastEditors: lJieYuan 36994097+lJieYuan@users.noreply.github.com
 * @LastEditTime: 2022-09-05 20:16:32
 * @FilePath: /mall/src/mall/webwoket/test.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
console.time('2号任务');
var sum = 0;
for (var index = 0; index < 100000; index++) {
  sum += index;
}
console.timeEnd('2号任务');
postMessage(sum);