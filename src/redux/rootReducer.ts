import { combineReducers, AnyAction } from 'redux';
import user from '../app/user/user-detail/UserDetailReducer';
import { unSetUser } from '../app/user/user-detail/UserDetailActions';

export interface IGlobalState {
  user: any;
}

const appReducer = combineReducers<IGlobalState>({
  user,
});

export default (state: IGlobalState | undefined, action: AnyAction) => {
  // reset redux store
  if (action.type === unSetUser.toString()) {
    state = undefined;
  }
  return appReducer(state, action);
};
