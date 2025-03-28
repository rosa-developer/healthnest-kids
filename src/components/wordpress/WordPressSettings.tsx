import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, AlertTriangle, Globe, ArrowLeft } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from 'react-router-dom';

const WordPressSettings: React.FC = () => {
  const [wpUrl, setWpUrl] = useState<string>(localStorage.getItem('wp_api_url') || '');
  const [testStatus, setTestStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const { toast } = useToast();
  const navigate = useNavigate();
  
  // Check if we were redirected from another page
  useEffect(() => {
    const redirectUrl = localStorage.getItem('redirect_after_wp_config');
    if (redirectUrl) {
      // Add a prompt to inform the user they were redirected
      toast({
        title: "WordPress Configuration",
        description: "Please configure your WordPress site to see baby advice content.",
      });
    }
  }, [toast]);
  
  const handleReturn = () => {
    const redirectUrl = localStorage.getItem('redirect_after_wp_config');
    if (redirectUrl) {
      window.location.href = redirectUrl;
      localStorage.removeItem('redirect_after_wp_config');
    } else {
      navigate('/');
    }
  };
  
  const saveSettings = () => {
    // Save the WordPress URL to localStorage
    localStorage.setItem('wp_api_url', wpUrl);
    
    // Show success message
    toast({
      title: "Settings Saved",
      description: "Your WordPress configuration has been saved.",
      variant: "success",
    });
    
    // Return to previous page if there's a redirect URL stored
    const redirectUrl = localStorage.getItem('redirect_after_wp_config');
    if (redirectUrl) {
      window.location.href = redirectUrl;
      localStorage.removeItem('redirect_after_wp_config');
    } else {
      // Otherwise just reload the application to use the new settings
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
    
    // Clean the URL to ensure it doesn't have trailing slashes
    const cleanUrl = wpUrl.trim().replace(/\/$/, '');
    
    try {
      // Test the connection by trying to fetch categories
      const response = await fetch(`${cleanUrl}/wp-json/wp/v2/categories`);
      
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      
      await response.json(); // Make sure we can parse the response
      
      setTestStatus('success');
      setWpUrl(cleanUrl); // Update with cleaned URL
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
  
  return (
    <div className="max-w-md mx-auto my-8">
      <Button 
        variant="ghost" 
        className="mb-4 flex items-center gap-2"
        onClick={handleReturn}
      >
        <ArrowLeft className="h-4 w-4" />
        Back to App
      </Button>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-primary-purple" />
            WordPress Integration
          </CardTitle>
          <CardDescription>
            Connect your app to a WordPress site to display baby growth advice and tips.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="wp-url">WordPress Site URL</Label>
            <Input
              id="wp-url"
              placeholder="https://yourdomain.com"
              value={wpUrl}
              onChange={(e) => setWpUrl(e.target.value)}
            />
            <p className="text-xs text-muted-foreground">
              Enter the full URL of your WordPress site (e.g., https://yourdomain.com)
            </p>
            <Button 
              variant="link" 
              className="text-xs p-0 h-auto text-primary-purple" 
              onClick={provideSampleUrl}
            >
              Use demo WordPress URL
            </Button>
          </div>
          
          {testStatus === 'success' && (
            <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg">
              <Check className="h-5 w-5" />
              <span>Connection successful!</span>
            </div>
          )}
          
          {testStatus === 'error' && (
            <div className="flex items-start gap-2 text-red-600 bg-red-50 p-3 rounded-lg">
              <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Connection failed</p>
                <p className="text-sm">{errorMessage || 'Could not connect to WordPress site'}</p>
                <p className="text-sm mt-2">
                  Make sure:
                  <ul className="list-disc list-inside mt-1">
                    <li>The URL is correct</li>
                    <li>The WordPress REST API is enabled</li>
                    <li>Your WordPress site is publicly accessible</li>
                  </ul>
                </p>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button 
            variant="outline" 
            onClick={testConnection}
            disabled={testStatus === 'testing' || !wpUrl}
          >
            {testStatus === 'testing' ? 'Testing...' : 'Test Connection'}
          </Button>
          <Button 
            onClick={saveSettings}
            disabled={!wpUrl || testStatus === 'error'}
          >
            Save Settings
          </Button>
        </CardFooter>
      </Card>
      
      <div className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-4">
        <h3 className="font-medium text-amber-800 mb-2">Don't have a WordPress site?</h3>
        <p className="text-sm text-amber-700 mb-3">
          You can use our demo WordPress URL (https://demo.wp-api.org) for testing, or follow these steps to set up your own:
        </p>
        <ol className="list-decimal list-inside text-sm text-amber-700 space-y-1">
          <li>Create a WordPress site (via wordpress.com or self-hosted)</li>
          <li>Make sure the REST API is enabled</li>
          <li>Create posts with the category "Baby Growth Advice" (or ID 5)</li>
          <li>Enter your site URL above and test the connection</li>
        </ol>
      </div>
    </div>
  );
};

export default WordPressSettings;
