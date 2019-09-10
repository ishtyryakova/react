import { AUTH_SUCCESS,
  AUTH_ERROR}  from '../constants/actions';

const initialState = {
  isAuthorized: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {...state, isAuthorized: true};
    // case 'AUTH_ERROR':
    //   return {...state};
    default:
      return state;
  }

};

export default authReducer;