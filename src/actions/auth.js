// import _ from 'lodash';
import { AUTH_SUCCESS,
  AUTH_ERROR}  from '../constants/actions';
// import {USER_DATA} from '../constants/auth';


const setAuthorization = (isValid) => {
  const type = isValid ? AUTH_SUCCESS : AUTH_ERROR;

  return dispatch => {
    dispatch({
      type
    })
  }
};

export { setAuthorization };