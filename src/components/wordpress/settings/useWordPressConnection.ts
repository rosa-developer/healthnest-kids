
import { useState, useCallback } from 'react';
import { testWordPressConnection } from '../../../services/wordpressApi';
import { useToast } from "../../../hooks/use-toast";

export const useWordPressConnection = () => {
  const [wpUrl, setWpUrl] = useState<string>(() => localStorage.getItem('wordpress_url') || '');
  const [testStatus, setTestStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const { toast } = useToast();

  // Normalize URL function
  const normalizeUrl = useCallback((url: string): string => {
    let normalizedUrl = url.trim();
    if (normalizedUrl && !normalizedUrl.startsWith('http://') && !normalizedUrl.startsWith('https://')) {
      normalizedUrl = `https://${normalizedUrl}`;
    }
    // Remove trailing slash if present
    if (normalizedUrl.endsWith('/')) {
      normalizedUrl = normalizedUrl.slice(0, -1);
    }
    return normalizedUrl;
  }, []);

  const testConnection = async () => {
    if (!wpUrl) {
      toast({
        title: "URL Required",
        description: "Please enter a WordPress site URL",
        variant: "destructive"
      });
      return;
    }
    
    // Normalize URL before testing
    const normalizedUrl = normalizeUrl(wpUrl);
    setWpUrl(normalizedUrl);
    
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
    toast({
      title: "Demo URL Added",
      description: "We've added a demo WordPress URL for testing purposes",
    });
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
    handleReturn,
    normalizeUrl
  };
};
