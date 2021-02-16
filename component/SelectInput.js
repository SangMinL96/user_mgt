import React from 'react';
import { Icon, DatePicker } from '@99xt/first-born';
import { Controller } from 'react-hook-form';

import moment from 'moment';
function SelectInput({ control, label, name, rule }) {
  return (
    <Controller
      control={control}
      render={({ onChange }) => (
        <DatePicker
          locale="ko"
          display="spinner"
          placeholder={label}
          onDateChange={(value) => onChange(moment(value).format('YYYY-MM-DD'))}
        />
      )}
      name={name}
      defaultValue=""
      rules={{ required: rule }}
    />
  );
}

export default SelectInput;
