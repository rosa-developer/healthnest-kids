
import { useState } from 'react';
import { testWordPressConnection } from '@/services/wordpressApi';
import { useToast } from "@/hooks/use-toast";

export const useWordPressConnection = () => {
  const [wpUrl, setWpUrl] = useState<string>('');
  const [testStatus, setTestStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const { toast } = useToast();

  const testConnection = async () => {
    if (!wpUrl) return;
    
    setTestStatus('testing');
    try {
      await testWordPressConnection(wpUrl);
      setTestStatus('success');
      setErrorMessage('');
    } catch (error) {
      setTestStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Unknown error occurred');
    }
  };
  
  const saveSettings = () => {
    if (testStatus === 'success') {
      localStorage.setItem('wordpress_url', wpUrl);
      toast({
        title: "Settings Saved",
        description: "WordPress connection has been configured successfully!",
      });
    }
  };
  
  const provideSampleUrl = () => {
    setWpUrl('https://demo.wp-api.org');
  };

  const handleReturn = () => {
    window.history.back();
  };

  return {
    wpUrl,
    setWpUrl,
    testStatus,
    errorMessage,
    testConnection,
    saveSettings,
    provideSampleUrl,
    handleReturn
  };
};
