
import React from 'react';
import { useBabyGrowthAdvice } from '@/hooks/useWordPress';
import BabyAdviceCard from './BabyAdviceCard';
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Settings, Globe } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from 'react-router-dom';

const BabyAdviceSection: React.FC = () => {
  const { advice, isLoading, error } = useBabyGrowthAdvice();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleConfigureWordPress = () => {
    // Store the current URL to return after configuration
    localStorage.setItem('redirect_after_wp_config', window.location.href);
    
    // Show configuration toast
    toast({
      title: "WordPress Configuration",
      description: "Let's set up your WordPress connection for baby advice content.",
      duration: 3000,
    });
    
    // Navigate to WordPress settings page
    navigate('/wordpress-settings');
  };
  
  if (error) {
    return (
      <div className="rounded-lg bg-red-50 p-4 border border-red-200">
        <h3 className="text-xl font-bold text-red-600 mb-2">Unable to load advice</h3>
        <p className="text-gray-700 mb-4">
          We're having trouble connecting to our WordPress content. This could be because the WordPress site URL is not configured correctly.
        </p>
        <Button 
          variant="outline" 
          onClick={handleConfigureWordPress}
          className="flex items-center gap-2"
        >
          <Globe className="h-4 w-4" />
          Configure WordPress
        </Button>
      </div>
    );
  }
  
  return (
    <section className="mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-primary-purple">Growth & Development Tips</h2>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={handleConfigureWordPress}
          className="text-gray-500 hover:text-primary-purple"
        >
          <Settings className="h-4 w-4" />
        </Button>
      </div>
      
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2].map((i) => (
            <div key={i} className="rounded-lg border p-4">
              <Skeleton className="h-40 w-full mb-4" />
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-1/3 mb-4" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-2/3 mb-4" />
              <Skeleton className="h-10 w-full" />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {advice.map((post) => (
            <BabyAdviceCard
              key={post.id}
              title={post.title.rendered}
              excerpt={post.excerpt.rendered}
              imageUrl={post._embedded?.['wp:featuredmedia']?.[0]?.source_url}
              date={post.date}
              url={post.link}
            />
          ))}
        </div>
      )}
      
      {!isLoading && advice.length === 0 && (
        <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
          <p className="text-yellow-700 mb-3">
            No baby growth advice articles found. Please make sure you have posts with the appropriate category in your WordPress site.
          </p>
          <Button 
            variant="outline" 
            size="sm"
            onClick={handleConfigureWordPress}
            className="flex items-center gap-2"
          >
            <Settings className="h-4 w-4" />
            Configure WordPress
          </Button>
        </div>
      )}
    </section>
  );
};

export default BabyAdviceSection;
