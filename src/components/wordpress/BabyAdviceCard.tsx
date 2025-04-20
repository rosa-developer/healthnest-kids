
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Image } from 'lucide-react';

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
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  
  const cleanExcerpt = excerpt.replace(/<\/?[^>]+(>|$)/g, "");
  
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 group">
      <div className="relative h-48 overflow-hidden rounded-t-lg">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.src = "/lovable-uploads/40981d4d-5381-44c9-a78f-c22d7a65cdcf.png";
            }}
          />
        ) : (
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <Image className="h-12 w-12 text-muted-foreground/50" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold line-clamp-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </CardTitle>
        <CardDescription className="text-xs">{formattedDate}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm line-clamp-3 text-muted-foreground">{cleanExcerpt}</p>
      </CardContent>
      <CardFooter>
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300" 
          onClick={() => window.open(url, '_blank')}
        >
          <span>Read More</span>
          <ExternalLink className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BabyAdviceCard;
