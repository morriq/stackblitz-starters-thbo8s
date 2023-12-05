'use client';

import { useRouter } from 'next/navigation';
import useForm from '../../providers/Form';

export default function FirstStep() {
  const router = useRouter();
  const [form, setForm] = useForm();

  return (
    <div>
      <div>first step</div>
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
