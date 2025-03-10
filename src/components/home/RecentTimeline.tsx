
import React from 'react';
import { Button } from "@/components/ui/button";
import TimelineCard from '@/components/common/TimelineCard';
import { ArrowRight } from 'lucide-react';

const RecentTimeline = () => {
  return (
    <section className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Recent Timeline</h2>
        <Button variant="link" className="text-healthnest-primary">
          View All <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-4">
        <TimelineCard
          title="First Solid Food"
          date="2 days ago"
          type="milestone"
          description="Emma tried sweet potatoes for the first time and loved them!"
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
