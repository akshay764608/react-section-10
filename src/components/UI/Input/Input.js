import React, { useImperativeHandle, useRef } from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  return (
    <React.Fragment>
      <div
        className={`${classes.control} ${
          props.state.isValid === false ? classes.invalid : ''
        }`}
      >
        <label htmlFor={props.type}>{props.name}</label>
        <input
          ref={inputRef}
          type={props.type}
          id={props.type}
          value={props.state.value}
          onChange={props.changeHandler}
          onBlur={props.validateHandler}
        />
      </div>
    </React.Fragment>
  );
});

export default Input;
