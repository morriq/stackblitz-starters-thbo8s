'use client';

import { useRouter } from 'next/navigation';
import useForm from '../../providers/Form';
import useRuntimeVariables from '../../providers/RuntimeVariables';

export default function FirstStep() {
  const router = useRouter();
  const [form, setForm] = useForm();
  const { gateway } = useRuntimeVariables();

  return (
    <div>
      <div>first step</div>
      <div>variable: {gateway}</div>
      <div>
        <input
          type='text'
          onChange={(e) => setForm(e.target.value)}
          value={form}
        />
      </div>
      <button type='button' onClick={() => router.push('/second-step')}>
        Second step
      </button>
    </div>
  );
}
