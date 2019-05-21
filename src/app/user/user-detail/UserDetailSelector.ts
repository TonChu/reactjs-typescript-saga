import { IGlobalState } from '../../../redux/rootReducer';

const selectGetUser = (state: IGlobalState) => state.user.userData;

export {
  selectGetUser
}