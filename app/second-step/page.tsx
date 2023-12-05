'use client';

import { useRouter } from 'next/navigation';
import useForm from '../../providers/Form';

export default function SecondStep() {
  const router = useRouter();
  const [form] = useForm();

  return (
    <div>
      <div>second step</div>
      <div>value from first step {form}</div>
      <button type='button' onClick={() => router.push('/')}>
        first step
      </button>
      <button type='button' onClick={() => router.push('/third-step')}>
        third step
      </button>
    </div>
  );
}
