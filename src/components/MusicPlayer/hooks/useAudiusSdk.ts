import { useEffect, useState } from 'react';

export function useAudiusSdk(apiKey: string) {
  const [sdk, setSdk] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!window.audiusSdk) {
      setError('Audius SDK not loaded.');
      return;
    }

    try {
      // Inicializa o SDK com sua API Key (NÃO use o Bearer Token no frontend)[reference:3]
      const audiusSdkInstance = window.audiusSdk({ apiKey });
      setSdk(audiusSdkInstance);
    } catch (err) {
      console.error('Audius SDK error:', err);
      setError('Error to init Audius SDK.');
    }
  }, [apiKey]);

  return { sdk, error };
}