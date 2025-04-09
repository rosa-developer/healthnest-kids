
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Weight, 
  Ruler, 
  ArrowRight, 
  TrendingUp,
  ZoomIn,
  ZoomOut,
  Calendar
} from 'lucide-react';
import { useGrowthRecords } from '@/hooks/useGrowthRecords';
import { GrowthRecord } from '@/types/GrowthRecord';
import { format } from 'date-fns';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine
} from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const GrowthTab = () => {
  const { records, isLoading } = useGrowthRecords('1'); // Default to first child
  const [zoomMode, setZoomMode] = useState<'3m' | '6m' | '1y' | 'all'>('6m');

  // Prepare data for the chart
  const chartData = records.map(record => ({
    date: format(record.date, 'MMM dd'),
    weight: record.weight,
    height: record.height,
    fullDate: record.date
  }));

  // Filter data based on zoom mode
  const getFilteredData = () => {
    if (zoomMode === 'all') return chartData;
    
    const now = new Date();
    const cutoffDate = new Date();
    
    if (zoomMode === '3m') cutoffDate.setMonth(now.getMonth() - 3);
    else if (zoomMode === '6m') cutoffDate.setMonth(now.getMonth() - 6);
    else if (zoomMode === '1y') cutoffDate.setFullYear(now.getFullYear() - 1);
    
    return chartData.filter(item => 
      new Date(item.fullDate) >= cutoffDate
    );
  };

  const filteredData = getFilteredData();
  
  // Calculate current values and changes
  const currentWeight = records.length > 0 ? records[0].weight : null;
  const previousWeight = records.length > 1 ? records[1].weight : null;
  const weightChange = (currentWeight && previousWeight) 
    ? (currentWeight - previousWeight).toFixed(1) 
    : null;
  
  const currentHeight = records.length > 0 ? records[0].height : null;
  const previousHeight = records.length > 1 ? records[1].height : null;
  const heightChange = (currentHeight && previousHeight) 
    ? (currentHeight - previousHeight).toFixed(1) 
    : null;

  // Custom chart configurations
  const chartConfig = {
    weight: {
      label: "Weight (kg)",
      theme: {
        light: "#3b82f6",
        dark: "#60a5fa"
      }
    },
    height: {
      label: "Height (cm)",
      theme: {
        light: "#10b981",
        dark: "#34d399"
      }
    }
  };

  return (
    <div className="space-y-8">
      <Card className="border border-border shadow-soft overflow-hidden">
        <CardHeader className="pb-2 border-b bg-gradient-to-r from-healthnest-soft-blue/50 to-muted">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-healthnest-primary" />
              Growth Chart
            </CardTitle>
            <div className="flex space-x-2">
              <Button 
                variant={zoomMode === '3m' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setZoomMode('3m')}
                className={zoomMode === '3m' ? 'bg-healthnest-primary text-white' : ''}
              >
                3M
              </Button>
              <Button 
                variant={zoomMode === '6m' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setZoomMode('6m')}
                className={zoomMode === '6m' ? 'bg-healthnest-primary text-white' : ''}
              >
                6M
              </Button>
              <Button 
                variant={zoomMode === '1y' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setZoomMode('1y')}
                className={zoomMode === '1y' ? 'bg-healthnest-primary text-white' : ''}
              >
                1Y
              </Button>
              <Button 
                variant={zoomMode === 'all' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setZoomMode('all')}
                className={zoomMode === 'all' ? 'bg-healthnest-primary text-white' : ''}
              >
                All
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                className="h-9 w-9"
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                className="h-9 w-9"
              >
                <ZoomOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          {isLoading ? (
            <div className="h-64 flex items-center justify-center">
              <div className="animate-spin h-8 w-8 border-4 border-healthnest-primary border-t-transparent rounded-full"></div>
            </div>
          ) : records.length === 0 ? (
            <div className="h-64 flex items-center justify-center bg-muted/30 rounded-xl border border-healthnest-neutral-dark/30">
              <div className="text-center p-4">
                <Calendar className="h-12 w-12 mx-auto text-muted-foreground opacity-40" />
                <p className="mt-3 text-muted-foreground">
                  No growth records found. Add your first record to see the chart.
                </p>
              </div>
            </div>
          ) : (
            <div className="h-64">
              <ChartContainer 
                className="h-full w-full"
                config={chartConfig}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={filteredData}
                    margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis 
                      dataKey="date" 
                      fontSize={12}
                      tickMargin={8}
                    />
                    <YAxis 
                      yAxisId="left"
                      orientation="left"
                      fontSize={12}
                      tickMargin={8}
                      domain={['dataMin - 1', 'dataMax + 1']}
                    />
                    <YAxis 
                      yAxisId="right"
                      orientation="right"
                      fontSize={12}
                      tickMargin={8}
                      domain={['dataMin - 5', 'dataMax + 5']}
                    />
                    <ChartTooltip
                      content={<ChartTooltipContent />}
                    />
                    <Legend />
                    <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="weight"
                      stroke="var(--color-weight)"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                      name="Weight (kg)"
                    />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="height"
                      stroke="var(--color-height)"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                      name="Height (cm)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <GrowthStatCard 
          title="Weight Tracking"
          icon={<Weight className="h-5 w-5 mr-2 text-healthnest-primary" />}
          currentValue={currentWeight ? `${currentWeight} kg` : "N/A"}
          change={weightChange ? `${weightChange.startsWith('-') ? '' : '+'}${weightChange} kg` : "N/A"}
          percentage={75}
          colorClass="from-healthnest-primary to-blue-400"
        />

        <GrowthStatCard 
          title="Height Tracking"
          icon={<Ruler className="h-5 w-5 mr-2 text-healthnest-primary" />}
          currentValue={currentHeight ? `${currentHeight} cm` : "N/A"}
          change={heightChange ? `${heightChange.startsWith('-') ? '' : '+'}${heightChange} cm` : "N/A"}
          percentage={80}
          colorClass="from-healthnest-secondary to-yellow-400"
        />
      </div>
    </div>
  );
};

interface GrowthStatCardProps {
  title: string;
  icon: React.ReactNode;
  currentValue: string;
  change: string;
  percentage: number;
  colorClass: string;
}

const GrowthStatCard: React.FC<GrowthStatCardProps> = ({ 
  title, 
  icon, 
  currentValue, 
  change, 
  percentage, 
  colorClass 
}) => {
  return (
    <Card className="border border-border shadow-soft overflow-hidden">
      <CardHeader className="pb-2 bg-gradient-to-r from-healthnest-soft-blue/40 to-transparent border-b">
        <CardTitle className="text-base flex items-center">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex justify-between items-end">
          <div>
            <p className="text-3xl font-semibold bg-gradient-to-br from-healthnest-primary to-blue-500 bg-clip-text text-transparent">{currentValue}</p>
            <p className="text-sm text-muted-foreground">Current {title.toLowerCase().replace(' tracking', '')}</p>
          </div>
          <div className="text-right">
            <p className="text-healthnest-primary font-medium flex items-center justify-end">
              <TrendingUp className="h-4 w-4 mr-1" />
              {change}
            </p>
            <p className="text-sm text-muted-foreground">from last measurement</p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-muted">
          <div className="relative h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className={`absolute top-0 left-0 h-full bg-gradient-to-r ${colorClass} rounded-full`}
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-xs text-muted-foreground">6 months</span>
            <span className="text-xs text-muted-foreground">18 months</span>
          </div>
        </div>
        <Button variant="link" size="sm" className="px-0 mt-3 text-healthnest-primary">
          View History <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default GrowthTab;
