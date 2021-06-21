/**
 * 获取本地存储值
 * @param k key
 */
 export const getStorage = (k: string) => JSON.parse(localStorage.getItem(k) ?? 'null'); 

 /**
  * 存储本地
  * @param k key
  * @param v value
  */
 export const setStorage = (k: string, v: any) => localStorage.setItem(k, JSON.stringify(v));
 
 /**
  * 金钱格式化
  * @param v value
  */
 export const moneyFormat = (v: number) => {
     if(v > 100000000) {
         return  '$' + (v / 100000000).toFixed(2).toLocaleString() + '亿';
     }
 
     if(v > 10000) {
         return  '$' + (v / 1000000).toFixed(2).toLocaleString() + '万';
     }
     return  '$' + (v).toFixed(4).toLocaleString();
 }
 
 /**
  * 节流
  * @param func  callback
  * @param delay duration
  */
 export const throttle = function(func: Function, delay: number) {
     let time = Date.now();
     return function() {
         const ctx = throttle;
         const args = arguments;
         const now = Date.now();
         if(time - now >= delay) {
             func.apply(throttle, args);
             time = Date.now();
         }
     }
 } 
 
 /**
  * 防抖
  * @param func 
  * @param delay 
  */
 export const debounce = function(func: Function, delay: number) {
     // eslint-disable-next-line no-undef
     let timer: null | NodeJS.Timeout = null;
     return function() {
         const ctx = debounce;
         const args = arguments;
         if(timer) {
             clearTimeout(timer);
             timer = null;
         }
         timer = setTimeout(() => {
             func.apply(ctx, args);
         }, delay)
     }
 }
 
 /**
  * 获取query参数
  * @param path 
  * @param name 
  * @returns 
  */
 export const getQueryName = (path: string, name: string) => {
     if(path === '') {
         return '';
     }
     const res = path.split('?')[1];
     const _arr = res.split('&').reduce((p: any, c) => {
         return {...p,[c.split('=')[0]]: c.split('=')[1]}
     }, {});
     return _arr[name];
 }