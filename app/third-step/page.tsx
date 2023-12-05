'use client';

import { useRouter } from 'next/navigation';
import useForm from '../../providers/Form';

export default function ThirdStep() {
  const router = useRouter();
  const [form] = useForm();

  return (
    <div>
      <div>third step</div>
      <div>value from first step {form}</div>
      <button type='button' onClick={() => router.push('/second-step')}>
        second step
      </button>
    </div>
  );
}
