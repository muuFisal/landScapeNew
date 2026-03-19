import { useState } from 'react';
import { submitContactForm } from '@/lib/api/endpoints/contact';
import type { ContactFormData } from '@/types/contact';

export function useContactSubmit() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submit = async (data: ContactFormData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      await submitContactForm(data);
      setSuccess(true);
      return true;
    } catch (err: any) {
      setError(err.message || 'Failed to submit form');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { submit, loading, error, success };
}
