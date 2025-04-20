
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from 'lucide-react';

interface BabyAdviceCardProps {
  title: string;
  excerpt: string;
  imageUrl?: string;
  date: string;
  url: string;
}

const BabyAdviceCard: React.FC<BabyAdviceCardProps> = ({
  title,
  excerpt,
  imageUrl,
  date,
  url,
}) => {
  // Format date
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  
  // Remove HTML tags from excerpt
  const cleanExcerpt = excerpt.replace(/<\/?[^>]+(>|$)/g, "");
  
  // Default image if none provided
  const displayImage = imageUrl || '/lovable-uploads/40981d4d-5381-44c9-a78f-c22d7a65cdcf.png';
  
  return (
    <Card className="h-full flex flex-col hover:shadow-md transition-shadow duration-300">
      <div className="h-40 overflow-hidden rounded-t-lg">
        <img 
          src={displayImage} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          onError={(e) => {
            // Fallback image if the provided URL fails to load
            (e.target as HTMLImageElement).src = '/lovable-uploads/09704aa0-0bda-4497-942b-b783bd82f948.png';
          }}
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold line-clamp-2">{title}</CardTitle>
        <CardDescription className="text-xs">{formattedDate}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm line-clamp-3">{cleanExcerpt}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full" onClick={() => window.open(url, '_blank')}>
          <span>Read More</span>
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BabyAdviceCard;
