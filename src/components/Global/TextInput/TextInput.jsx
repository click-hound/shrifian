import React, { Component } from "react";
import "./TextInput.css";
import { Glyphicon } from "react-bootstrap";
import { isEmail } from "validator";
import ControlLabel from "./ControlLabel/ControlLabel";
import InputIcon from "./InputIcon/InputIcon";
import ValidationIcon from "./ValidationIcon/ValidationIcon";
import FieldMessage from "./FieldMessage/FieldMessage";

export default class TextInput extends Component {
  constructor() {
    super();
    this.state = {
      isFocused: false
    };
  }
  isFocused = boolean => {
    this.setState({
      isFocused: boolean
    });
  };

  render() {
    const {
        className,
        type,
        value,
        onChange,
        placeholder,
        helperText,
        errorMessage,
        successMessage,
        validationState,
        mIcon,
        faIcon,
        gIcon,
        gIconColor,
        iconClassName,
        name
      } = this.props,
      { isFocused } = this.state;

    return (
      <div className="Input-Wrapper">
        <ControlLabel
          value={value}
          placeholder={placeholder}
          isFocused={isFocused}
        />
        <div className="Text-Field-Wrapper">
          <InputIcon
            mIcon={mIcon}
            faIcon={faIcon}
            gIcon={gIcon}
            value={value}
            placeholder={placeholder}
            isFocused={isFocused}
          />
          <input
            className={`Text-Input ${className}`}
            onChange={e => onChange(name, e)}
            type={type}
            value={value}
            onFocus={() => this.isFocused(true)}
            onBlur={() => this.isFocused(false)}
          />
          <ValidationIcon
            value={value}
            isFocused={isFocused}
            validationState={validationState}
          />
        </div>
        <FieldMessage
          helperText={helperText}
          errorMessage={errorMessage}
          successMessage={successMessage}
          validationState={validationState}
          isFocused={isFocused}
        />
      </div>
    );
  }
}
