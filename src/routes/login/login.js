import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import _ from "lodash";

import Form from '../../components/form';
import Input from '../../components/input';
import FormGroup from '../../components/form-group';

import {
  LOGIN_ERROR_TEXT,
  LOGIN_FORM_FIELDS_CONFIG, USER_DATA
} from '../../constants/auth';
// import {AUTH_ERROR, AUTH_SUCCESS} from "../../constants/actions";


const Login = ({isAuthorized, setAuthorization}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setValidity] = useState(true);

  const submitForm = () => {
    const userData = { email, password },
          isValidForm = _.every(userData, (item, key) => {
      return item === USER_DATA[key];
    });

    if (!isValidForm) {
      setValidity(isValidForm);
      setEmail('');
      setPassword('');
    } else {
      setAuthorization(isValidForm);
    }
  };

  return (
    isAuthorized ? <Redirect to="/profile"/> : <React.Fragment>
      <Form fieldsConfig={LOGIN_FORM_FIELDS_CONFIG} isValid={isValid} errorText={LOGIN_ERROR_TEXT}
            render={(props) => {
              return (
                <React.Fragment>
                  <FormGroup field={props.fieldsConfig.email}>
                    <Input config={props.fieldsConfig.email} value={email} onValueChange={(event) => {setEmail(event.target.value)}}/>
                  </FormGroup>
                  <FormGroup field={props.fieldsConfig.password}>
                    <Input config={props.fieldsConfig.password} value={password} onValueChange={(event) => {setPassword(event.target.value)}}/>
                  </FormGroup>
                </React.Fragment>
              )
            }}
      />
      <button type="submit" onClick={submitForm} className="btn btn-primary ml-3 mt-3">Отправить</button>
    </React.Fragment>
    )
};

export default Login;