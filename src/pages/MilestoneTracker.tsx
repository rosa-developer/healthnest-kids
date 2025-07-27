
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Baby, 
  Star, 
  Trophy, 
  Calendar, 
  Plus,
  CheckCircle,
  Clock,
  Target,
  Activity
} from 'lucide-react';
import { getPhoto } from '@/data/photoAssets';

const MilestoneTracker = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const milestoneCategories = [
    {
      id: 'physical',
      title: 'Physical Development',
      icon: Baby,
      color: 'primary-green',
      image: getPhoto('milestones', 'standing'),
      count: 8,
      completed: 5
    },
    {
      id: 'cognitive',
      title: 'Cognitive Development',
      icon: Star,
      color: 'primary-blue',
      image: getPhoto('milestones', 'firstWord'),
      count: 6,
      completed: 3
    },
    {
      id: 'social',
      title: 'Social & Emotional',
      icon: Trophy,
      color: 'primary-pink',
      image: getPhoto('milestones', 'firstSmile'),
      count: 4,
      completed: 2
    }
  ];

  const upcomingMilestones = [
    {
      id: 1,
      title: 'First Steps',
      description: 'Baby takes their first independent steps',
      category: 'Physical',
      expectedAge: '12-15 months',
      image: getPhoto('milestones', 'firstStep'),
      progress: 85,
      daysLeft: 15
    },
    {
      id: 2,
      title: 'First Words',
      description: 'Baby says their first meaningful word',
      category: 'Cognitive',
      expectedAge: '12-18 months',
      image: getPhoto('milestones', 'firstWord'),
      progress: 60,
      daysLeft: 30
    },
    {
      id: 3,
      title: 'Crawling',
      description: 'Baby starts crawling on hands and knees',
      category: 'Physical',
      expectedAge: '7-10 months',
      image: getPhoto('milestones', 'crawling'),
      progress: 90,
      daysLeft: 5
    }
  ];

  const completedMilestones = [
    {
      id: 1,
      title: 'First Smile',
      description: 'Baby smiled for the first time',
      category: 'Social',
      completedDate: '2024-01-10',
      image: getPhoto('milestones', 'firstSmile'),
      age: '2 months'
    },
    {
      id: 2,
      title: 'Sitting Up',
      description: 'Baby can sit up without support',
      category: 'Physical',
      completedDate: '2024-01-05',
      image: getPhoto('milestones', 'sitting'),
      age: '6 months'
    },
    {
      id: 3,
      title: 'Rolling Over',
      description: 'Baby can roll from back to tummy',
      category: 'Physical',
      completedDate: '2023-12-20',
      image: getPhoto('milestones', 'crawling'),
      age: '4 months'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="bg-gradient-to-r from-primary-pink/20 to-primary-purple/20 backdrop-blur-sm rounded-full p-2 border border-white/30">
            <Baby className="h-6 w-6 text-primary-pink" />
          </div>
          <Badge variant="gradient" className="text-sm">
            Milestone Tracker
          </Badge>
        </div>
        
        <h1 className="kid-heading text-4xl md:text-5xl">
          Baby Milestones
        </h1>
        
        <p className="text-gray-600 max-w-2xl mx-auto">
          Celebrate every achievement and track your baby's development journey with beautiful milestone memories.
        </p>
      </div>

      {/* Milestone Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {milestoneCategories.map((category) => {
          const Icon = category.icon;
          return (
            <Card key={category.id} className="kid-card-gradient kid-hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={category.image}
                    alt={category.title}
                    className="w-12 h-12 rounded-lg object-cover"
                    onError={(e) => {
                      e.currentTarget.src = getPhoto('placeholders', 'baby');
                    }}
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{category.title}</h3>
                    <p className="text-sm text-gray-600">{category.completed}/{category.count} completed</p>
                  </div>
                  <div className={`w-10 h-10 rounded-full bg-${category.color}/10 flex items-center justify-center`}>
                    <Icon className={`h-5 w-5 text-${category.color}`} />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Progress</span>
                    <span>{Math.round((category.completed / category.count) * 100)}%</span>
                  </div>
                  <Progress value={(category.completed / category.count) * 100} className="h-3" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-gray-100 rounded-2xl p-1">
        <Button
          variant={activeTab === 'upcoming' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setActiveTab('upcoming')}
          className="flex-1"
        >
          <Clock className="h-4 w-4 mr-2" />
          Upcoming
        </Button>
        <Button
          variant={activeTab === 'completed' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setActiveTab('completed')}
          className="flex-1"
        >
          <CheckCircle className="h-4 w-4 mr-2" />
          Completed
        </Button>
      </div>

      {/* Content based on active tab */}
      {activeTab === 'upcoming' ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-800">Upcoming Milestones</h3>
            <Button variant="outline" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add Milestone
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {upcomingMilestones.map((milestone) => (
              <Card key={milestone.id} className="kid-card-glass kid-hover-scale">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <img 
                      src={milestone.image}
                      alt={milestone.title}
                      className="w-12 h-12 rounded-lg object-cover"
                      onError={(e) => {
                        e.currentTarget.src = getPhoto('placeholders', 'baby');
                      }}
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">{milestone.title}</h4>
                      <p className="text-xs text-gray-600">{milestone.description}</p>
                      <Badge variant="outline" className="text-xs mt-1">
                        {milestone.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-gray-600">
                      <span>Expected: {milestone.expectedAge}</span>
                      <span>{milestone.progress}% ready</span>
                    </div>
                    <Progress value={milestone.progress} className="h-2" />
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Calendar className="h-3 w-3" />
                      <span>{milestone.daysLeft} days until expected</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">Completed Milestones</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {completedMilestones.map((milestone) => (
              <Card key={milestone.id} className="kid-card-gradient kid-hover-scale">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="relative">
                      <img 
                        src={milestone.image}
                        alt={milestone.title}
                        className="w-12 h-12 rounded-lg object-cover"
                        onError={(e) => {
                          e.currentTarget.src = getPhoto('placeholders', 'baby');
                        }}
                      />
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary-green rounded-full flex items-center justify-center">
                        <CheckCircle className="h-3 w-3 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">{milestone.title}</h4>
                      <p className="text-xs text-gray-600">{milestone.description}</p>
                      <Badge variant="success" className="text-xs mt-1">
                        {milestone.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{milestone.completedDate}</span>
                    </div>
                    <span>Age: {milestone.age}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Milestone Progress Overview */}
      <Card className="kid-card-gradient">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary-pink" />
            Milestone Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary-green">18</div>
              <div className="text-sm text-gray-600">Total Milestones</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary-blue">10</div>
              <div className="text-sm text-gray-600">Completed</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary-pink">8</div>
              <div className="text-sm text-gray-600">Upcoming</div>
            </div>
          </div>
          
          <div className="mt-6 space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Overall Progress</span>
              <span>56%</span>
            </div>
            <Progress value={56} className="h-3" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MilestoneTracker;
