
import React from 'react';

const MilestoneMemories: React.FC = () => {
  return (
    <div className="relative pl-6 border-l-2 border-healthnest-soft-blue">
      <div className="absolute right-0 bottom-0 opacity-30 pointer-events-none">
        <img 
          src="/1.jpg" 
          alt="Pastel baby items" 
          className="w-40"
          onError={(e) => {
            console.error("Failed to load decorative image");
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>
      
      <div className="mb-8 relative">
        <div className="absolute -left-[1.625rem] h-6 w-6 rounded-full bg-healthnest-primary"></div>
        <div className="ml-4 p-4 bg-white rounded-lg border border-border shadow-soft">
          <div className="flex justify-between items-start">
            <div>
              <div className="chip bg-healthnest-soft-purple text-purple-500 mb-2">
                Motor Skill
              </div>
              <h3 className="font-medium text-lg">First Crawl</h3>
            </div>
            <p className="text-sm text-muted-foreground">April 2, 2023</p>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Emma started crawling today! She was so excited to move around on her own.
          </p>
        </div>
      </div>

      <div className="mb-8 relative">
        <div className="absolute -left-[1.625rem] h-6 w-6 rounded-full bg-healthnest-primary"></div>
        <div className="ml-4 p-4 bg-white rounded-lg border border-border shadow-soft">
          <div className="flex justify-between items-start">
            <div>
              <div className="chip bg-healthnest-soft-green text-green-500 mb-2">
                Food
              </div>
              <h3 className="font-medium text-lg">First Solid Food</h3>
            </div>
            <p className="text-sm text-muted-foreground">March 20, 2023</p>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Emma tried sweet potatoes for the first time and loved them!
          </p>
        </div>
      </div>

      <div className="mb-8 relative">
        <div className="absolute -left-[1.625rem] h-6 w-6 rounded-full bg-healthnest-primary"></div>
        <div className="ml-4 p-4 bg-white rounded-lg border border-border shadow-soft">
          <div className="flex justify-between items-start">
            <div>
              <div className="chip bg-healthnest-soft-pink text-pink-500 mb-2">
                Social
              </div>
              <h3 className="font-medium text-lg">First Smile</h3>
            </div>
            <p className="text-sm text-muted-foreground">January 15, 2023</p>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Emma smiled for the first time! It was during her morning feeding.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MilestoneMemories;
