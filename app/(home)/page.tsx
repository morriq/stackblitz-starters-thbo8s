'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import useForm from '../../providers/Form';
import useRuntimeVariables from '../../providers/RuntimeVariables';

const LazyComponent = dynamic(() => import('../components/LazyComponent'), {
  ssr: false,
});

export default function FirstStep() {
  const router = useRouter();
  const [form, setForm] = useForm();
  const { gateway } = useRuntimeVariables();
  const [isLazy, setIsLazy] = useState(false);

  useEffect(() => {
    setIsLazy(true);
  }, []);

  return (
    <div>
      <div>first step</div>
      <div>variable: {gateway}</div>
      {isLazy && <LazyComponent />}
      <div>
        <input
          type='text'
          onChange={(e) => setForm(e.target.value)}
          value={form}
        />
      </div>
      <Image src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/cz.svg`} alt='foo' />
      <button type='button' onClick={() => router.push('/second-step')}>
        Second step
      </button>
    </div>
  );
}
