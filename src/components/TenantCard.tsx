import React from 'react';

import QuittanceModal from '@/components/QuittanceModal';

import { useAppDispatch } from '@/store/hook';

import { buildingIcon } from '@/helpers/svgHelpers';
import { setModal } from '@/reducers/appSlice';

import { personType } from '@/types/types';

function TenantCard(tenant: personType) {
  const dispatch = useAppDispatch();
  const { name, firstName } = tenant;

  const showGenerateQuittance = () => {
    dispatch(setModal(<QuittanceModal {...tenant} />));
  };

  return (
    <div
      className='inherit flex h-[100px] w-[250px] cursor-pointer  flex-col items-center justify-around rounded-xl border-2 border-teal-400 p-2 text-teal-500 hover:bg-teal-100'
      onClick={showGenerateQuittance}
    >
      <div>{buildingIcon()}</div>
      <div>
        {name} {firstName}
      </div>
    </div>
  );
}

export default TenantCard;
