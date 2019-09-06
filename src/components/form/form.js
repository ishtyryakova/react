import React from 'react';

import './form.css';

const Form = (props) => {
  return (
    <React.Fragment>
      <form className="col-md-6 auth-form">
        {props.render(props)}
      </form>
      {!props.isValid && <p>{props.errorText}</p>}
    </React.Fragment>
  )
};

export default Form;