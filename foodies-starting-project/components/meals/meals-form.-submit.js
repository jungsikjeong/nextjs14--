'use client';

import { useFormStatus } from 'react-dom';

export default function MealsFormSubmit() {
  const { pending } = useFormStatus();
  console.log('pending:', pending);

  return (
    <button disabled={pending}>
      {pending ? 'Submitting...' : 'share Meal'}
    </button>
  );
}
