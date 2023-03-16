import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import 'react-datepicker/dist/react-datepicker.css';

import Input from '@/components/commons/Input';
import InputDatePicker from '@/components/commons/InputDatePicker';

import { personType } from '@/types/types';

function QuittanceModal(tenant: personType) {
  const {
    handleSubmit,
    formState: { errors },
    control,
    register,
  } = useForm();

  const lessor = {
    name: 'Matthieu',
    firstName: 'WANDOLSKI',
    address: '569 rue Léon Gambetta',
    town: 'Fresnes sur Escaut',
    codePost: '59970',
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit: SubmitHandler<any> = async (data) => {
    if (!data.month || !data.paymentDate || data.rent < 0) {
      return;
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, tenant, lessor }),
    };
    const response = await fetch('api/quittance', requestOptions);
    const path = await response.json();

    if (path) {
      const fileName = path.split('/')[2];

      fetch(`api/getpdf?path=${path}`, { method: 'GET' })
        .then((response) => response.blob())
        .then((blob) => {
          const blobUrl = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = blobUrl;
          link.download = fileName;
          link.click();
          URL.revokeObjectURL(blobUrl);
        });
    }
  };

  return (
    <div className='relative h-screen w-full p-4'>
      <h1 className='flex w-full justify-center pt-4 text-xl uppercase text-slate-400'>
        Générer une quittance
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className='flex w-full flex-col'>
        <div className='flex w-full flex-col'>
          <InputDatePicker
            label='Mois de la quittance.'
            control={control}
            dateFormat='MM/yyyy'
            showMonthYearPicker={true}
            name='month'
            required={true}
          />
          <InputDatePicker
            label='Date du paiement.'
            control={control}
            dateFormat='dd/MM/yyyy'
            showMonthYearPicker={false}
            name='paymentDate'
            required={true}
          />
          <Input
            label='Loyer'
            required={true}
            type='number'
            placeholder='450'
            register={register}
            error={errors.rent}
            errorMsg='Le loyer doit être supérieur à 0.'
            name='rent'
            classInput=''
          />
          <Input
            label='Charge'
            required={false}
            type='number'
            placeholder='0'
            register={register}
            name='charge'
            classInput=''
          />
        </div>
        <div className=' absolute right-2 bottom-2 flex w-full justify-end'>
          <button
            type='submit'
            className='btn-primary mt-8 w-1/4 self-center uppercase'
          >
            Générer
          </button>
        </div>
      </form>
    </div>
  );
}

export default QuittanceModal;
