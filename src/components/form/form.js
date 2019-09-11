import React from 'react';

import './form.css';

const Form = (props) => {
  return (
    <React.Fragment>
      <form className="col-md-6 auth-form">
        {props.render(props)}
      </form>
      {!props.isValid && <div className="ml-3">{props.errorText}</div>}
    </React.Fragment>
  )
};

export default Form;