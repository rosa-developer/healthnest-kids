
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
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            <Globe className="h-4 w-4" />
          </div>
          <Input
            id="wp-url"
            placeholder="https://yourdomain.com"
            value={wpUrl}
            onChange={(e) => setWpUrl(e.target.value)}
            className="font-sans text-base pl-10 border-border/60 focus-visible:ring-primary-purple/20 shadow-sm"
          />
        </div>
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
        <Alert className="bg-blue-50 border-blue-200 border-2 shadow-sm">
          <Loader className="h-5 w-5 animate-spin text-blue-600" />
          <AlertTitle className="text-blue-600 font-medium">Testing connection...</AlertTitle>
          <AlertDescription className="text-blue-500">
            Attempting to connect to <span className="font-medium">{wpUrl}</span>
          </AlertDescription>
        </Alert>
      )}
      
      {testStatus === 'success' && (
        <Alert className="bg-green-50 border-green-200 border-2 shadow-sm">
          <Check className="h-5 w-5 text-green-600" />
          <AlertTitle className="text-green-600 font-medium">Connection successful!</AlertTitle>
          <AlertDescription className="text-green-500">
            Successfully connected to WordPress API at <span className="font-medium">{wpUrl}</span>
          </AlertDescription>
        </Alert>
      )}
      
      {testStatus === 'error' && (
        <Alert className="bg-red-50 border-red-200 border-2 shadow-sm">
          <AlertTriangle className="h-5 w-5 text-red-600" />
          <AlertTitle className="text-red-600 font-medium">Connection failed</AlertTitle>
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

      <div className="flex justify-between pt-4 gap-3">
        <Button 
          variant="outline" 
          onClick={testConnection}
          disabled={testStatus === 'testing' || !wpUrl.trim()}
          className="flex items-center gap-2 border-border/60 hover:bg-primary-blue/5 hover:border-primary-blue/30 transition-all"
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
          className="bg-gradient-to-r from-primary-purple to-primary-blue text-white transition-all hover:shadow-md"
        >
          Save Settings
        </Button>
      </div>
    </div>
  );
};

export default WordPressConnectionForm;
