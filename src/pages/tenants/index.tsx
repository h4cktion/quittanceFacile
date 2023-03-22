import React from 'react';

import Tenant from '@/components/TenantCard';

import { tenants } from '@/__data__/data';

function Tenants() {
  return (
    <div className='m-6 flex min-h-[650px] w-9/12 flex-wrap gap-4 rounded-xl bg-white p-4 text-slate-500 shadow-md'>
      {tenants.map((tenant, idx) => (
        <Tenant key={idx} {...tenant} />
      ))}
    </div>
  );
}

export default Tenants;
