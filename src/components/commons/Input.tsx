/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

interface propsType {
  label: string;
  classLabel?: string;
  type: string;
  classInput?: string;
  error?: any;
  name: string;
  register: any;
  required?: boolean;
  errorMsg?: string;
  classContainer?: string;
  placeholder?: string;
}

function Input({
  label,
  required,
  classContainer,
  classLabel,
  type,
  placeholder,
  register,
  error,
  errorMsg,
  classInput,
  name,
}: propsType) {
  return (
    <div className={`flex w-full flex-col p-2 ${classContainer}`}>
      <label
        className={`self-start p-2 pb-0 text-center text-sm text-slate-500 ${classLabel}`}
      >
        {label}
        {required && <span className='text-red-600'> *</span>}
      </label>
      <input
        type={type}
        // value={value}
        {...register(name, { required })}
        placeholder={placeholder}
        className={`rounded border-2 border-slate-300 p-2 text-sm text-slate-500 placeholder:italic placeholder:text-slate-400 ${classInput}`}
      />
      {error && <span className='text-red-500'>{errorMsg}</span>}
    </div>
  );
}

export default Input;
