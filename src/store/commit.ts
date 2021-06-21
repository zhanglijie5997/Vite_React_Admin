import { createAction } from 'redux-actions';

import { StoreTypes } from './types';

export const createToken = createAction(StoreTypes.TOKEN, (status: string) => status);


