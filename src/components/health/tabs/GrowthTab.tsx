
import React, { useState } from 'react';
import { useGrowthRecords } from '@/hooks/useGrowthRecords';
import GrowthChart from './growth/GrowthChart';
import GrowthStats from './growth/GrowthStats';

const GrowthTab = () => {
  const { records, isLoading } = useGrowthRecords('1'); // Default to first child
  const [zoomMode, setZoomMode] = useState<'3m' | '6m' | '1y' | 'all'>('6m');

  return (
    <div className="p-6 space-y-8">
      <GrowthChart 
        records={records}
        isLoading={isLoading}
        zoomMode={zoomMode}
        setZoomMode={setZoomMode}
      />

      <GrowthStats records={records} />
    </div>
  );
};

export default GrowthTab;
