
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  Ruler, 
  Weight, 
  Baby, 
  Plus,
  Calendar,
  Target,
  Activity
} from 'lucide-react';
import { getPhoto } from '@/data/photoAssets';

const GrowthTracker = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const growthData = {
    height: { current: 75, target: 80, unit: 'cm' },
    weight: { current: 8.5, target: 9.0, unit: 'kg' },
    headCircumference: { current: 45, target: 47, unit: 'cm' }
  };

  const recentMeasurements = [
    {
      id: 1,
      type: 'Height',
      value: '75 cm',
      date: '2024-01-15',
      trend: 'up',
      image: getPhoto('growth', 'babyMeasuring'),
      icon: Ruler,
      color: 'primary-blue'
    },
    {
      id: 2,
      type: 'Weight',
      value: '8.5 kg',
      date: '2024-01-15',
      trend: 'up',
      image: getPhoto('growth', 'weightScale'),
      icon: Weight,
      color: 'primary-green'
    },
    {
      id: 3,
      type: 'Head Circumference',
      value: '45 cm',
      date: '2024-01-15',
      trend: 'stable',
      image: getPhoto('growth', 'babyFeet'),
      icon: Baby,
      color: 'primary-pink'
    }
  ];

  const growthMilestones = [
    {
      id: 1,
      title: 'Doubled Birth Weight',
      description: 'Achieved at 4 months',
      date: '2024-01-10',
      image: getPhoto('milestones', 'sitting'),
      completed: true
    },
    {
      id: 2,
      title: 'Tripled Birth Weight',
      description: 'Expected at 12 months',
      date: '2024-07-15',
      image: getPhoto('milestones', 'standing'),
      completed: false
    },
    {
      id: 3,
      title: 'Height Growth Spurt',
      description: 'Expected at 6 months',
      date: '2024-03-15',
      image: getPhoto('growth', 'heightChart'),
      completed: false
    }
  ];

  const getProgressPercentage = (current: number, target: number) => {
    return Math.min((current / target) * 100, 100);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="bg-gradient-to-r from-primary-green/20 to-primary-blue/20 backdrop-blur-sm rounded-full p-2 border border-white/30">
            <TrendingUp className="h-6 w-6 text-primary-green" />
          </div>
          <Badge variant="gradient" className="text-sm">
            Growth Tracker
          </Badge>
        </div>
        
        <h1 className="kid-heading text-4xl md:text-5xl">
          Growth Journey
        </h1>
        
        <p className="text-gray-600 max-w-2xl mx-auto">
          Track your baby's growth milestones, measurements, and development progress with beautiful visualizations.
        </p>
      </div>

      {/* Growth Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(growthData).map(([key, data]) => (
          <Card key={key} className="kid-card-gradient kid-hover-lift">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={getPhoto('growth', key === 'height' ? 'babyMeasuring' : key === 'weight' ? 'weightScale' : 'babyFeet')}
                  alt={key}
                  className="w-12 h-12 rounded-lg object-cover"
                  onError={(e) => {
                    e.currentTarget.src = getPhoto('placeholders', 'activity');
                  }}
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</h3>
                  <p className="text-2xl font-bold text-primary-green">{data.current} {data.unit}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Target: {data.target} {data.unit}</span>
                  <span>{getProgressPercentage(data.current, data.target).toFixed(0)}%</span>
                </div>
                <Progress value={getProgressPercentage(data.current, data.target)} className="h-3" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Measurements */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-gray-800">Recent Measurements</h3>
          <Button variant="outline" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Measurement
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recentMeasurements.map((measurement) => {
            const Icon = measurement.icon;
            return (
              <Card key={measurement.id} className="kid-card-glass kid-hover-scale">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="relative">
                      <img 
                        src={measurement.image}
                        alt={measurement.type}
                        className="w-12 h-12 rounded-lg object-cover"
                        onError={(e) => {
                          e.currentTarget.src = getPhoto('placeholders', 'activity');
                        }}
                      />
                      <div className={`absolute -top-1 -right-1 w-6 h-6 rounded-full bg-${measurement.color}/10 flex items-center justify-center`}>
                        <Icon className={`h-3 w-3 text-${measurement.color}`} />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">{measurement.type}</h4>
                      <p className="text-lg font-bold text-primary-green">{measurement.value}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Calendar className="h-3 w-3 text-gray-500" />
                        <span className="text-xs text-gray-500">{measurement.date}</span>
                        <Badge 
                          variant={measurement.trend === 'up' ? 'success' : 'warning'} 
                          className="text-xs"
                        >
                          {measurement.trend === 'up' ? '↗' : measurement.trend === 'down' ? '↘' : '→'}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Growth Milestones */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-800">Growth Milestones</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {growthMilestones.map((milestone) => (
            <Card key={milestone.id} className="kid-card-glass kid-hover-scale">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <img 
                    src={milestone.image}
                    alt={milestone.title}
                    className="w-10 h-10 rounded-lg object-cover"
                    onError={(e) => {
                      e.currentTarget.src = getPhoto('placeholders', 'baby');
                    }}
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">{milestone.title}</h4>
                    <p className="text-xs text-gray-600">{milestone.description}</p>
                  </div>
                  {milestone.completed && (
                    <div className="w-6 h-6 bg-primary-green rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Calendar className="h-3 w-3" />
                  <span>{milestone.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Growth Chart Placeholder */}
      <Card className="kid-card-gradient">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary-green" />
            Growth Chart
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-gradient-to-br from-primary-green/10 to-primary-blue/10 rounded-2xl flex items-center justify-center">
            <div className="text-center space-y-2">
              <Activity className="h-12 w-12 text-primary-green mx-auto" />
              <p className="text-gray-600">Growth chart visualization coming soon</p>
              <p className="text-sm text-gray-500">Track height, weight, and head circumference over time</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GrowthTracker;
