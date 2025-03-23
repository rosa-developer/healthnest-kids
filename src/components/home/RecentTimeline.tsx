
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
  
  const handleFilterChange = (newFilter: 'all' | 'milestone' | 'health' | 'memory') => {
    setFilter(newFilter);
    toast({
      title: `Filter: ${newFilter.charAt(0).toUpperCase() + newFilter.slice(1)}`,
      description: "Timeline filtered successfully!",
      variant: "success",
    });
  };

  return (
    <section className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <h2 className="text-xl font-semibold mr-2">Recent Timeline</h2>
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

      <div className="flex gap-2 mb-4 overflow-x-auto pb-2 hide-scrollbar">
        <Button
          variant={filter === 'all' ? "default" : "outline"} 
          size="sm"
          className={`rounded-full ${filter === 'all' ? 'bg-primary text-white' : ''}`}
          onClick={() => handleFilterChange('all')}
        >
          All
        </Button>
        <Button
          variant={filter === 'milestone' ? "default" : "outline"} 
          size="sm"
          className={`rounded-full ${filter === 'milestone' ? 'bg-purple-500 text-white' : ''}`}
          onClick={() => handleFilterChange('milestone')}
        >
          Milestones
        </Button>
        <Button
          variant={filter === 'health' ? "default" : "outline"} 
          size="sm"
          className={`rounded-full ${filter === 'health' ? 'bg-blue-500 text-white' : ''}`}
          onClick={() => handleFilterChange('health')}
        >
          Health
        </Button>
        <Button
          variant={filter === 'memory' ? "default" : "outline"} 
          size="sm"
          className={`rounded-full ${filter === 'memory' ? 'bg-amber-500 text-white' : ''}`}
          onClick={() => handleFilterChange('memory')}
        >
          Memories
        </Button>
      </div>

      <div className="space-y-4">
        {(filter === 'all' || filter === 'milestone') && (
          <TimelineCard
            title="First Solid Food"
            date="2 days ago"
            type="milestone"
            description="Emma tried sweet potatoes for the first time and loved them!"
            imageSrc="https://images.unsplash.com/photo-1598974357809-e6d845686cf2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
          />
        )}
        {(filter === 'all' || filter === 'health') && (
          <TimelineCard
            title="Pediatrician Visit"
            date="1 week ago"
            type="health"
            description="Regular checkup with Dr. Johnson. Weight and height tracking as expected."
          />
        )}
        {(filter === 'all' || filter === 'memory') && (
          <TimelineCard
            title="First Crawl"
            date="2 weeks ago"
            type="memory"
            description="Emma started crawling today! She was so excited to move around on her own."
          />
        )}
      </div>
    </section>
  );
};

export default RecentTimeline;
