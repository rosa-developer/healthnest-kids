
import React from 'react';
import { Book } from 'lucide-react';
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useBabyGrowthAdvice } from '@/hooks/useWordPress';
import { useNavigate } from 'react-router-dom';

const ResourcesSection = () => {
  const { advice, isLoading } = useBabyGrowthAdvice();
  const navigate = useNavigate();

  const handleConfigureWordPress = () => {
    navigate('/wordpress-settings');
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Book className="h-5 w-5 text-yellow-500" />
          Resources & Tips
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {isLoading ? (
          <div className="flex items-center justify-center h-40">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"></div>
          </div>
        ) : (
          <div className="space-y-4">
            {advice && advice.slice(0, 3).map((post, index) => (
              <div 
                key={index}
                className="p-3 rounded-lg border border-border hover:border-primary-purple/30 dark:hover:border-primary-purple/20 transition-all bg-white/50 dark:bg-gray-900/50"
              >
                <h4 
                  className="font-medium text-sm mb-1"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />
                <p 
                  className="text-xs text-muted-foreground line-clamp-2"
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                />
              </div>
            ))}
          </div>
        )}

        {!isLoading && (!advice || advice.length === 0) && (
          <div className="p-4 rounded-lg border border-yellow-200 bg-yellow-50 dark:bg-yellow-900/10">
            <p className="text-sm text-yellow-700 dark:text-yellow-400 mb-2">
              No resources available. Configure WordPress to see baby development tips.
            </p>
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleConfigureWordPress}
              className="w-full"
            >
              Configure WordPress
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ResourcesSection;
