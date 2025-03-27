
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, AlertTriangle } from 'lucide-react';

const WordPressSettings: React.FC = () => {
  const [wpUrl, setWpUrl] = useState<string>(localStorage.getItem('wp_api_url') || '');
  const [testStatus, setTestStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  
  const saveSettings = () => {
    // Save the WordPress URL to localStorage
    localStorage.setItem('wp_api_url', wpUrl);
    
    // Reload the application to use the new settings
    window.location.reload();
  };
  
  const testConnection = async () => {
    setTestStatus('testing');
    setErrorMessage('');
    
    try {
      // Test the connection by trying to fetch categories
      const response = await fetch(`${wpUrl}/wp-json/wp/v2/categories`);
      
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      
      await response.json(); // Make sure we can parse the response
      
      setTestStatus('success');
    } catch (error) {
      console.error("WordPress connection test failed:", error);
      setTestStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Unknown error');
    }
  };
  
  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>WordPress Integration</CardTitle>
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
  );
};

export default WordPressSettings;
