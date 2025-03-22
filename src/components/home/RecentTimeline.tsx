
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import TimelineCard from '@/components/common/TimelineCard';
import { ArrowRight, Plus, Filter } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Link } from 'react-router-dom';

const RecentTimeline = () => {
  const { toast } = useToast();
  const [filter, setFilter] = useState<'all' | 'milestone' | 'health' | 'memory'>('all');
  
  const handleAddEvent = () => {
    toast({
      title: "Add Timeline Event",
      description: "This feature will be available in the next update!",
    });
  };
  
  return (
    <section className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <h2 className="text-xl font-semibold mr-2">Recent Timeline</h2>
          <Button variant="ghost" size="sm" className="h-8 text-muted-foreground" onClick={() => toast({ title: "Filter Timeline", description: "This feature will be available soon!" })}>
            <Filter className="h-4 w-4 mr-1" />
            Filter
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-8" onClick={handleAddEvent}>
            <Plus className="h-4 w-4 mr-1" />
            Add
          </Button>
          <Button variant="link" className="text-healthnest-primary" asChild>
            <Link to="/memories">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <TimelineCard
          title="First Solid Food"
          date="2 days ago"
          type="milestone"
          description="Emma tried sweet potatoes for the first time and loved them!"
          imageSrc="https://images.unsplash.com/photo-1598974357809-e6d845686cf2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        />
        <TimelineCard
          title="Pediatrician Visit"
          date="1 week ago"
          type="health"
          description="Regular checkup with Dr. Johnson. Weight and height tracking as expected."
        />
        <TimelineCard
          title="First Crawl"
          date="2 weeks ago"
          type="memory"
          description="Emma started crawling today! She was so excited to move around on her own."
        />
      </div>
    </section>
  );
};

export default RecentTimeline;
