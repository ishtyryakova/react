import React from 'react';
import { Redirect } from 'react-router-dom';

const Profile = ({isAuthorized}) => {
  return (
    isAuthorized ? <h3>Профиль</h3> : <Redirect to="/login" />
  )
};

export default Profile;