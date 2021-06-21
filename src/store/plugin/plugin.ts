import { setStorage } from '@utils/utils';
import { AnyAction, Dispatch, MiddlewareAPI } from 'redux';

/**
* 中间件，本地存储数据
* @returns 
*/
export function reduxSetStore() {
 return (ctx: MiddlewareAPI) => (next: Dispatch<AnyAction>) => (action: AnyAction) => {
   setStorage(action.type, action.payload);
   return next(action);
 };
}