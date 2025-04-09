
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
        <div className="flex items-center gap-2 text-blue-600 bg-blue-50 p-4 rounded-lg">
          <Loader className="h-5 w-5 animate-spin" />
          <span className="font-medium">Testing connection...</span>
        </div>
      )}
      
      {testStatus === 'success' && (
        <div className="flex items-center gap-2 text-green-600 bg-green-50 p-4 rounded-lg">
          <Check className="h-5 w-5" />
          <span className="font-medium">Connection successful!</span>
        </div>
      )}
      
      {testStatus === 'error' && (
        <div className="flex items-start gap-3 text-red-600 bg-red-50 p-4 rounded-lg">
          <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5" />
          <div className="space-y-2">
            <p className="font-medium">Connection failed</p>
            <p className="text-sm leading-relaxed">{errorMessage || 'Could not connect to WordPress site'}</p>
            <div className="text-sm mt-3 space-y-1">
              <p className="font-medium">Make sure:</p>
              <ul className="list-disc list-inside ml-2 space-y-1 leading-relaxed">
                <li>The URL is correct</li>
                <li>The WordPress REST API is enabled</li>
                <li>Your WordPress site is publicly accessible</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-between pt-2">
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
