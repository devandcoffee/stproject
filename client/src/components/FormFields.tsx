import * as React from 'react';
import {
  Input as AntInput,
  InputNumber as AntInputNumber,
  DatePicker as AntDatePicker,
} from 'antd';

const AntTextArea = AntInput.TextArea;

export const Input: React.SFC<any> = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <div>
    <label>{label}</label>
    <div>
      <AntInput
        {...input}
        {...custom}
        placeholder={label || custom.placeholder}
      />
      <div className="message">
        {touched && (error && <span>{error}</span>)}
      </div>
    </div>
  </div>
);

export const TextArea: React.SFC<any> = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <div>
    <label>{label}</label>
    <div>
      <AntTextArea
        {...input}
        {...custom}
        placeholder={label || custom.placeholder}
      />
      <div className="message">
        {touched && (error && <span>{error}</span>)}
      </div>
    </div>
  </div>
);

export const InputNumber: React.SFC<any> = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <div>
    <label>{label}</label>
    <div>
      <AntInputNumber
        {...input}
        {...custom}
        style={{ width: '100%' }}
        placeholder={label || custom.placeholder}
      />
      <div className="message">
        {touched && (error && <span>{error}</span>)}
      </div>
    </div>
  </div>
);

export const DatePicker: React.SFC<any> = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <div>
    <label>{label}</label>
    <div>
      <AntDatePicker
        {...input}
        {...custom}
        placeholder={label || custom.placeholder}
        onChange={date => input.onChange(date)}
        style={{ width: '100%' }}
        format="DD/MM/YYYY"
      />
      <div className="message">
        {touched && (error && <span>{error}</span>)}
      </div>
    </div>
  </div>
);
