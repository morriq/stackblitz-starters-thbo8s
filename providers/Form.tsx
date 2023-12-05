import { createContext, useContext, useMemo, useState } from 'react';

const FormContext = createContext(null);

export function FormProvider({ children }) {
  const [form, setForm] = useState('');
  const value = useMemo(() => [form, setForm], [form, setForm]);
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}

export default function useForm(): Form {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error('useForm must be used within a FormProvider');
  }

  return context;
}
