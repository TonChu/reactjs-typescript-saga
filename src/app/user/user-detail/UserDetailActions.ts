import { createAction } from 'redux-actions';
import { User } from '../../../common/types/DataTypes';

const ns = 'user/';

export const ActionsTypes = {
  setUser: `${ns}SET_USER`,
  unSetUser: `${ns}UNSET_USER`,
};

export const setUser = createAction<User>(ActionsTypes.setUser);
export const unSetUser = createAction<User>(ActionsTypes.unSetUser);
