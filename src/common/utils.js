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

   // 2、时间戳转换成时间格式
   export const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    const formatNumber = n => {
        n = n.toString()
        return n[1] ? n : '0' + n
    }
    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}