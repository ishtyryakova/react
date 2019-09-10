import _ from 'lodash';
import { AUTH_SUCCESS,
  AUTH_ERROR}  from '../constants/actions';
import {USER_DATA} from '../constants/auth';


const setAuthorization = (userData) => {
  const type = _.some(userData, (item, key) => {
    return item !== USER_DATA[key];
  }) ? AUTH_ERROR : AUTH_SUCCESS;

  return dispatch => {
    dispatch({
      type
    })
  }
};

export { setAuthorization };