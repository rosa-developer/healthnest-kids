
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from 'react-router-dom';

export const useWordPressConnection = () => {
  const [wpUrl, setWpUrl] = useState<string>(localStorage.getItem('wp_api_url') || '');
  const [testStatus, setTestStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleReturn = () => {
    const redirectUrl = localStorage.getItem('redirect_after_wp_config');
    if (redirectUrl) {
      navigate(redirectUrl);
      localStorage.removeItem('redirect_after_wp_config');
    } else {
      navigate(-1);
    }
  };
  
  const saveSettings = () => {
    localStorage.setItem('wp_api_url', wpUrl);
    
    toast({
      title: "Settings Saved",
      description: "Your WordPress configuration has been saved.",
      variant: "success",
    });
    
    const redirectUrl = localStorage.getItem('redirect_after_wp_config');
    if (redirectUrl) {
      navigate(redirectUrl);
      localStorage.removeItem('redirect_after_wp_config');
    } else {
      window.location.reload();
    }
  };
  
  const testConnection = async () => {
    setTestStatus('testing');
    setErrorMessage('');
    
    if (!wpUrl) {
      setTestStatus('error');
      setErrorMessage('Please enter a WordPress URL');
      return;
    }
    
    const cleanUrl = wpUrl.trim().replace(/\/$/, '');
    
    try {
      const response = await fetch(`${cleanUrl}/wp-json/wp/v2/categories`);
      
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      
      await response.json();
      
      setTestStatus('success');
      setWpUrl(cleanUrl);
    } catch (error) {
      console.error("WordPress connection test failed:", error);
      setTestStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Unknown error');
    }
  };
  
  const provideSampleUrl = () => {
    setWpUrl('https://demo.wp-api.org');
    setTestStatus('idle');
    setErrorMessage('');
  };

  return {
    wpUrl,
    setWpUrl,
    testStatus,
    errorMessage,
    handleReturn,
    saveSettings,
    testConnection,
    provideSampleUrl
  };
};
