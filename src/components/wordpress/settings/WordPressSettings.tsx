
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, ArrowLeft } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import WordPressConnectionForm from './WordPressConnectionForm';
import WordPressInfoBox from './WordPressInfoBox';
import { useWordPressConnection } from './useWordPressConnection';

const WordPressSettings: React.FC = () => {
  const { 
    wpUrl, 
    setWpUrl, 
    testStatus, 
    errorMessage, 
    handleReturn, 
    saveSettings, 
    testConnection, 
    provideSampleUrl 
  } = useWordPressConnection();
  
  const { toast } = useToast();
  
  // Check if we were redirected from another page
  useEffect(() => {
    const redirectUrl = localStorage.getItem('redirect_after_wp_config');
    if (redirectUrl) {
      toast({
        title: "WordPress Configuration",
        description: "Please configure your WordPress site to see baby advice content.",
      });
    }
  }, [toast]);
  
  return (
    <div className="max-w-md mx-auto my-8 animate-fade-in">
      <Button 
        variant="ghost" 
        className="mb-6 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        onClick={handleReturn}
      >
        <ArrowLeft className="h-4 w-4" />
        Back to App
      </Button>
      
      <Card className="border border-border/50 shadow-sm overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent pb-6">
          <CardTitle className="flex items-center gap-2 text-xl">
            <Globe className="h-5 w-5 text-primary" />
            WordPress Integration
          </CardTitle>
          <CardDescription className="text-sm leading-relaxed mt-1">
            Connect your app to a WordPress site to display baby growth advice and tips.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <WordPressConnectionForm
            wpUrl={wpUrl}
            setWpUrl={setWpUrl}
            testStatus={testStatus}
            errorMessage={errorMessage}
            testConnection={testConnection}
            saveSettings={saveSettings}
            provideSampleUrl={provideSampleUrl}
          />
        </CardContent>
      </Card>
      
      <div className="mt-10">
        <WordPressInfoBox />
      </div>
    </div>
  );
};

export default WordPressSettings;
