/*公共的方法
 * @Author: your name
 * @Date: 2021-05-16 15:54:58
 * @LastEditTime: 2021-05-16 15:54:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE\StudyVueProject\src\common\utils.js
 */
export function max() {
    console.log("操作");
}

export function devounce(func,delay) {
    let timer = null;
    return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(()=>{
            func.apply(this.args)
        },delay)

    }

}