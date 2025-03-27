
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
  
  return (
    <Card className="h-full flex flex-col hover:shadow-md transition-shadow duration-300">
      {imageUrl && (
        <div className="h-40 overflow-hidden rounded-t-lg">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
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
