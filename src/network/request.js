import axios from "axios";

export function request(config) {
    const instance = axios.create({
        // baseURL:"http://123.207.32.32:8000",
        baseURL:"http://152.136.185.210:7878/api/m5",
        timeout:5000
    })
    //请求拦截器
    // instance.interceptors.request.use((config)=>{
    //     return config;
    // },error => {
    //
    // })
    //相应拦截器
    // instance.interceptors.response.use((res)=>{
    //
    // },error => {
    //
    // })
    return instance(config);
}