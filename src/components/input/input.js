import React from "react";

const Input = ({config, value, onValueChange}) => {

  return <input type={config.type}
                className="form-control col-md-4"
                placeholder={config.label}
                name={config.name}
                value={value}
                onChange={onValueChange} />
};

export default Input;