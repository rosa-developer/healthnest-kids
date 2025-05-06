
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, AlertTriangle, Loader, Globe } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface WordPressConnectionFormProps {
  wpUrl: string;
  setWpUrl: (url: string) => void;
  testStatus: 'idle' | 'testing' | 'success' | 'error';
  errorMessage: string;
  testConnection: () => Promise<void>;
  saveSettings: () => void;
  provideSampleUrl: () => void;
}

const WordPressConnectionForm: React.FC<WordPressConnectionFormProps> = ({
  wpUrl,
  setWpUrl,
  testStatus,
  errorMessage,
  testConnection,
  saveSettings,
  provideSampleUrl
}) => {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Label htmlFor="wp-url" className="text-base font-medium">WordPress Site URL</Label>
        <Input
          id="wp-url"
          placeholder="https://yourdomain.com"
          value={wpUrl}
          onChange={(e) => setWpUrl(e.target.value)}
          className="font-sans text-base"
        />
        <p className="text-sm text-muted-foreground leading-relaxed">
          Enter the full URL of your WordPress site (e.g., https://yourdomain.com)
        </p>
        <Button 
          variant="link" 
          className="text-sm p-0 h-auto text-primary-purple" 
          onClick={provideSampleUrl}
        >
          Use demo WordPress URL
        </Button>
      </div>
      
      {testStatus === 'testing' && (
        <Alert className="bg-blue-50 border-blue-200">
          <Loader className="h-5 w-5 animate-spin text-blue-600" />
          <AlertTitle className="text-blue-600">Testing connection...</AlertTitle>
          <AlertDescription className="text-blue-500">
            Attempting to connect to {wpUrl}
          </AlertDescription>
        </Alert>
      )}
      
      {testStatus === 'success' && (
        <Alert className="bg-green-50 border-green-200">
          <Check className="h-5 w-5 text-green-600" />
          <AlertTitle className="text-green-600">Connection successful!</AlertTitle>
          <AlertDescription className="text-green-500">
            Successfully connected to WordPress API at {wpUrl}
          </AlertDescription>
        </Alert>
      )}
      
      {testStatus === 'error' && (
        <Alert className="bg-red-50 border-red-200">
          <AlertTriangle className="h-5 w-5 text-red-600" />
          <AlertTitle className="text-red-600">Connection failed</AlertTitle>
          <AlertDescription className="text-red-500 mb-4">
            {errorMessage || 'Could not connect to WordPress site'}
          </AlertDescription>
          
          <div className="text-sm space-y-3 pl-2 border-l-2 border-red-200 ml-1">
            <p className="font-medium text-red-700">Troubleshooting tips:</p>
            <ul className="list-disc list-inside ml-2 space-y-1 text-red-600">
              <li>Check that the URL is correct and includes http:// or https://</li>
              <li>Verify the WordPress REST API is enabled on your site</li>
              <li>Make sure your WordPress site is publicly accessible</li>
              <li>Try using the demo URL to test the connection feature</li>
            </ul>
          </div>
        </Alert>
      )}

      <div className="flex justify-between pt-4">
        <Button 
          variant="outline" 
          onClick={testConnection}
          disabled={testStatus === 'testing' || !wpUrl.trim()}
          className="flex items-center gap-2"
        >
          {testStatus === 'testing' ? (
            <>
              <Loader className="h-4 w-4 animate-spin" />
              Testing...
            </>
          ) : (
            <>
              <Globe className="h-4 w-4" />
              Test Connection
            </>
          )}
        </Button>
        <Button 
          onClick={saveSettings}
          disabled={testStatus !== 'success'}
        >
          Save Settings
        </Button>
      </div>
    </div>
  );
};

export default WordPressConnectionForm;
