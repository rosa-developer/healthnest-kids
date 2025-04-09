
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, AlertTriangle, Loader } from 'lucide-react';

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
    <div className="space-y-4">
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
      
      {testStatus === 'testing' && (
        <div className="flex items-center gap-2 text-blue-600 bg-blue-50 p-3 rounded-lg">
          <Loader className="h-5 w-5 animate-spin" />
          <span>Testing connection...</span>
        </div>
      )}
      
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

      <div className="flex justify-between">
        <Button 
          variant="outline" 
          onClick={testConnection}
          disabled={testStatus === 'testing' || !wpUrl}
          className="flex items-center gap-2"
        >
          {testStatus === 'testing' ? (
            <>
              <Loader className="h-4 w-4 animate-spin" />
              Testing...
            </>
          ) : 'Test Connection'}
        </Button>
        <Button 
          onClick={saveSettings}
          disabled={!wpUrl || testStatus === 'error'}
        >
          Save Settings
        </Button>
      </div>
    </div>
  );
};

export default WordPressConnectionForm;
