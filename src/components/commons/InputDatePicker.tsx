/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import DatePicker from 'react-datepicker';
import { Controller } from 'react-hook-form';

import 'react-datepicker/dist/react-datepicker.css';

function InputDatePicker({
  label,
  required,
  classInput,
  dateFormat,
  showMonthYearPicker,
  control,
  name,
}: any) {
  return (
    <div className='flex w-full flex-col p-2'>
      <label className='self-start p-2 pb-0 text-center text-sm text-slate-500'>
        {label}
        {required && <span className='text-red-600'> *</span>}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <DatePicker
            selected={value}
            onChange={onChange}
            dateFormat={dateFormat}
            showMonthYearPicker={showMonthYearPicker}
            className={`w-full rounded border-2 border-slate-300 p-2 text-sm text-slate-500 placeholder:italic ${classInput}`}
          />
        )}
      />
    </div>
  );
}

export default InputDatePicker;
