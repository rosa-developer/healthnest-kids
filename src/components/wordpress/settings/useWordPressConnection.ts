
import { useState } from 'react';
import { testWordPressConnection } from '../../../services/wordpressApi';
import { useToast } from "../../../hooks/use-toast";

export const useWordPressConnection = () => {
  const [wpUrl, setWpUrl] = useState<string>(() => localStorage.getItem('wordpress_url') || '');
  const [testStatus, setTestStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const { toast } = useToast();

  const testConnection = async () => {
    if (!wpUrl) {
      toast({
        title: "URL Required",
        description: "Please enter a WordPress site URL",
        variant: "destructive"
      });
      return;
    }
    
    // Normalize URL - ensure it has http/https prefix
    let normalizedUrl = wpUrl.trim();
    if (!normalizedUrl.startsWith('http://') && !normalizedUrl.startsWith('https://')) {
      normalizedUrl = `https://${normalizedUrl}`;
      setWpUrl(normalizedUrl);
    }
    
    setTestStatus('testing');
    try {
      console.log(`Testing connection to: ${normalizedUrl}`);
      await testWordPressConnection(normalizedUrl);
      setTestStatus('success');
      setErrorMessage('');
      toast({
        title: "Connection Successful",
        description: "Successfully connected to WordPress site!",
      });
    } catch (error) {
      console.error("WordPress connection error:", error);
      setTestStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Unknown error occurred');
      toast({
        title: "Connection Failed",
        description: error instanceof Error ? error.message : 'Could not connect to WordPress site',
        variant: "destructive"
      });
    }
  };
  
  const saveSettings = () => {
    if (testStatus === 'success') {
      localStorage.setItem('wordpress_url', wpUrl);
      toast({
        title: "Settings Saved",
        description: "WordPress connection has been configured successfully!",
      });
    } else {
      toast({
        title: "Test Connection First",
        description: "Please test the connection before saving",
        variant: "destructive"
      });
    }
  };
  
  const provideSampleUrl = () => {
    setWpUrl('https://demo.wp-api.org');
    setTestStatus('idle');
    setErrorMessage('');
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
