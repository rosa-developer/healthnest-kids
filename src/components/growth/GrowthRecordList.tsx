
import React from 'react';
import { format } from 'date-fns';
import { GrowthRecord } from '@/types/GrowthRecord';
import { Ruler, Weight, Brain, FileText } from 'lucide-react';

interface GrowthRecordListProps {
  records: GrowthRecord[];
  isLoading: boolean;
}

const GrowthRecordList: React.FC<GrowthRecordListProps> = ({ records, isLoading }) => {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-4 border rounded-lg animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        ))}
      </div>
    );
  }

  if (records.length === 0) {
    return (
      <div className="text-center p-8">
        <p className="text-muted-foreground">No growth records found. Add your first record!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {records.map((record) => (
        <div key={record.id} className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-medium">{format(record.date, 'MMMM d, yyyy')}</h3>
            <span className="text-xs text-muted-foreground">{format(record.date, 'h:mm a')}</span>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mb-3">
            {record.weight && (
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-healthnest-soft-pink flex items-center justify-center mr-2">
                  <Weight className="h-4 w-4 text-pink-500" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Weight</p>
                  <p className="font-medium">{record.weight} kg</p>
                </div>
              </div>
            )}
            
            {record.height && (
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-healthnest-soft-green flex items-center justify-center mr-2">
                  <Ruler className="h-4 w-4 text-green-500" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Height</p>
                  <p className="font-medium">{record.height} cm</p>
                </div>
              </div>
            )}
            
            {record.headCircumference && (
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-healthnest-soft-blue flex items-center justify-center mr-2">
                  <Brain className="h-4 w-4 text-blue-500" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Head</p>
                  <p className="font-medium">{record.headCircumference} cm</p>
                </div>
              </div>
            )}
          </div>
          
          {record.notes && (
            <div className="flex items-start mt-3 pt-3 border-t border-border">
              <FileText className="h-4 w-4 text-muted-foreground mt-0.5 mr-2" />
              <p className="text-sm text-muted-foreground">{record.notes}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default GrowthRecordList;
