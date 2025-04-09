
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, CalendarDays } from 'lucide-react';
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
  Legend
} from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

type ZoomMode = '3m' | '6m' | '1y' | 'all';

interface GrowthChartProps {
  records: GrowthRecord[];
  isLoading: boolean;
  zoomMode: ZoomMode;
  setZoomMode: (mode: ZoomMode) => void;
}

const GrowthChart: React.FC<GrowthChartProps> = ({ 
  records, 
  isLoading, 
  zoomMode, 
  setZoomMode 
}) => {
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
    <Card className="border-none shadow-none overflow-hidden bg-transparent">
      <CardHeader className="pb-4 border-b bg-gradient-to-r from-blue-50/80 to-transparent">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center">
            <TrendingUp className="h-5 w-5 mr-2 text-blue-500" />
            Growth Chart
          </CardTitle>
          <div className="flex space-x-2">
            <Button 
              variant={zoomMode === '3m' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setZoomMode('3m')}
              className={zoomMode === '3m' ? 'bg-blue-500 text-white hover:bg-blue-600' : 'border-blue-200 text-blue-700 hover:bg-blue-50'}
            >
              3M
            </Button>
            <Button 
              variant={zoomMode === '6m' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setZoomMode('6m')}
              className={zoomMode === '6m' ? 'bg-blue-500 text-white hover:bg-blue-600' : 'border-blue-200 text-blue-700 hover:bg-blue-50'}
            >
              6M
            </Button>
            <Button 
              variant={zoomMode === '1y' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setZoomMode('1y')}
              className={zoomMode === '1y' ? 'bg-blue-500 text-white hover:bg-blue-600' : 'border-blue-200 text-blue-700 hover:bg-blue-50'}
            >
              1Y
            </Button>
            <Button 
              variant={zoomMode === 'all' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setZoomMode('all')}
              className={zoomMode === 'all' ? 'bg-blue-500 text-white hover:bg-blue-600' : 'border-blue-200 text-blue-700 hover:bg-blue-50'}
            >
              All
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-6">
        {isLoading ? (
          <div className="h-72 flex items-center justify-center">
            <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
          </div>
        ) : records.length === 0 ? (
          <div className="h-72 flex items-center justify-center bg-muted/20 rounded-xl border border-border">
            <div className="text-center p-6">
              <CalendarDays className="h-14 w-14 mx-auto text-muted-foreground opacity-40" />
              <p className="mt-4 text-muted-foreground font-medium">
                No growth records found
              </p>
              <p className="text-sm text-muted-foreground/70">
                Add your first record to see the chart
              </p>
            </div>
          </div>
        ) : (
          <div className="h-72 bg-gradient-to-br from-white to-blue-50/40 rounded-xl border border-blue-100/50 p-4">
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
                    stroke="#3b82f6"
                  />
                  <YAxis 
                    yAxisId="right"
                    orientation="right"
                    fontSize={12}
                    tickMargin={8}
                    domain={['dataMin - 5', 'dataMax + 5']}
                    stroke="#10b981"
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
                    strokeWidth={2.5}
                    dot={{ r: 4, fill: "#3b82f6", strokeWidth: 1, stroke: "#fff" }}
                    activeDot={{ r: 6, fill: "#3b82f6", stroke: "#fff", strokeWidth: 2 }}
                    name="Weight (kg)"
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="height"
                    stroke="var(--color-height)"
                    strokeWidth={2.5}
                    dot={{ r: 4, fill: "#10b981", strokeWidth: 1, stroke: "#fff" }}
                    activeDot={{ r: 6, fill: "#10b981", stroke: "#fff", strokeWidth: 2 }}
                    name="Height (cm)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default GrowthChart;
