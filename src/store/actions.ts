import { handleActions, Action, createActions, createAction } from 'redux-actions';
import { StoreTypes } from './types';
import { getStorage } from '@utils/utils';

const TOKEN = handleActions({
    [StoreTypes.TOKEN]: (state: string, actions: Action<string>) => actions.payload
}, getStorage(StoreTypes.TOKEN));

export {
    TOKEN, 
}
