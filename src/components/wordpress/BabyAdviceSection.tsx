
import React from 'react';
import { useBabyGrowthAdvice } from '@/hooks/useWordPress';
import BabyAdviceCard from './BabyAdviceCard';
import { Skeleton } from "@/components/ui/skeleton";

const BabyAdviceSection: React.FC = () => {
  const { advice, isLoading, error } = useBabyGrowthAdvice();
  
  if (error) {
    return (
      <div className="rounded-lg bg-red-50 p-4 border border-red-200">
        <h3 className="text-xl font-bold text-red-600 mb-2">Unable to load advice</h3>
        <p className="text-gray-700">
          We're having trouble connecting to our WordPress content. Please try again later.
        </p>
      </div>
    );
  }
  
  return (
    <section className="mt-6">
      <h2 className="text-2xl font-bold text-primary-purple mb-4">Growth & Development Tips</h2>
      
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
          <p className="text-yellow-700">
            No baby growth advice articles found. Please make sure you have posts with the appropriate category in your WordPress site.
          </p>
        </div>
      )}
    </section>
  );
};

export default BabyAdviceSection;
