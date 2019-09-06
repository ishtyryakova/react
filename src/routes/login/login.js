import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import Form from '../../components/form';
import Input from '../../components/input';
import FormGroup from '../../components/form-group';

import {LOGIN_ERROR_TEXT,
        USER_DATA,
        LOGIN_FORM_FIELDS_CONFIG} from '../../constants/constants';


const Login = ({isAuthorized, setAuthorization}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitForm = () => {
    setAuthorization(email !== USER_DATA.email || password !== USER_DATA.password);
  };

  return (
    isAuthorized ? <Redirect to="/profile"/> : <React.Fragment>
      <Form fieldsConfig={LOGIN_FORM_FIELDS_CONFIG} isValid="true" errorText={LOGIN_ERROR_TEXT}
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
      <button type="submit" onClick={submitForm} className="btn btn-primary ml-3">Отправить</button>
    </React.Fragment>
    )
};

export default Login;