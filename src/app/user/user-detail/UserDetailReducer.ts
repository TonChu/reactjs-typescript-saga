import { ReducerFactory } from 'redux-actions-ts-reducer';
import { setUser, unSetUser } from './UserDetailActions';
import { User } from '../../../common/types/DataTypes';

class State {
  userData : User | undefined;
}

export default new ReducerFactory(new State())
  .addReducer(
    setUser,
    (state, action): State => {
      return {
        ...state,
        userData: action.payload
      };
    }
  )
  .addReducer(
    unSetUser,
    (state): State => {
      return {
        ...state,
        userData: undefined
      };
    }
  )
  .toReducer();

export { State as UserState };
