import React from 'react';

const FormGroup = (props) => {
  return (
    <div className="form-group row">
      <label className="col-md-2">{props.field.label}</label>
      {props.children}
    </div>
  )
};

export default FormGroup;