
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  BookOpen, 
  Brain, 
  Lightbulb, 
  Calendar, 
  Plus,
  CheckCircle,
  Clock,
  Target,
  Activity,
  Baby,
  Star,
  Play
} from 'lucide-react';
import { getPhoto } from '@/data/photoAssets';

const LearningTracker = () => {
  const [activeTab, setActiveTab] = useState('activities');

  const learningCategories = [
    {
      id: 'cognitive',
      title: 'Cognitive Development',
      icon: Brain,
      color: 'primary-blue',
      image: getPhoto('learning', 'learning'),
      count: 12,
      completed: 8
    },
    {
      id: 'language',
      title: 'Language Skills',
      icon: BookOpen,
      color: 'primary-green',
      image: getPhoto('learning', 'reading'),
      count: 8,
      completed: 5
    },
    {
      id: 'motor',
      title: 'Motor Skills',
      icon: Play,
      color: 'primary-pink',
      image: getPhoto('learning', 'playing'),
      count: 10,
      completed: 7
    }
  ];

  const learningActivities = [
    {
      id: 1,
      title: 'Reading Time',
      description: 'Read a storybook together',
      category: 'Language',
      duration: '15 minutes',
      image: getPhoto('learning', 'reading'),
      status: 'completed',
      date: '2024-01-15'
    },
    {
      id: 2,
      title: 'Puzzle Play',
      description: 'Simple shape sorting puzzle',
      category: 'Cognitive',
      duration: '20 minutes',
      image: getPhoto('learning', 'learning'),
      status: 'scheduled',
      date: '2024-01-16'
    },
    {
      id: 3,
      title: 'Music & Movement',
      description: 'Dance to nursery rhymes',
      category: 'Motor',
      duration: '10 minutes',
      image: getPhoto('learning', 'playing'),
      status: 'completed',
      date: '2024-01-14'
    },
    {
      id: 4,
      title: 'Art & Craft',
      description: 'Finger painting activity',
      category: 'Motor',
      duration: '25 minutes',
      image: getPhoto('learning', 'activities'),
      status: 'upcoming',
      date: '2024-01-17'
    }
  ];

  const developmentMilestones = [
    {
      id: 1,
      title: 'Recognizes Own Name',
      description: 'Baby responds when called by name',
      category: 'Language',
      expectedAge: '6-9 months',
      image: getPhoto('milestones', 'firstWord'),
      progress: 75,
      status: 'in-progress'
    },
    {
      id: 2,
      title: 'Object Permanence',
      description: 'Understands objects exist when hidden',
      category: 'Cognitive',
      expectedAge: '8-12 months',
      image: getPhoto('learning', 'learning'),
      progress: 60,
      status: 'in-progress'
    },
    {
      id: 3,
      title: 'Pincer Grasp',
      description: 'Can pick up small objects with thumb and finger',
      category: 'Motor',
      expectedAge: '9-12 months',
      image: getPhoto('learning', 'playing'),
      progress: 90,
      status: 'almost-ready'
    }
  ];

  const learningResources = [
    {
      id: 1,
      title: 'Baby Sign Language',
      description: 'Learn basic signs for communication',
      type: 'Video',
      duration: '10 min',
      image: getPhoto('learning', 'learning'),
      difficulty: 'Beginner'
    },
    {
      id: 2,
      title: 'Sensory Play Ideas',
      description: 'Safe sensory activities for babies',
      type: 'Guide',
      duration: '15 min',
      image: getPhoto('learning', 'activities'),
      difficulty: 'Beginner'
    },
    {
      id: 3,
      title: 'Early Reading Tips',
      description: 'How to introduce books to your baby',
      type: 'Article',
      duration: '5 min',
      image: getPhoto('learning', 'reading'),
      difficulty: 'Beginner'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="bg-gradient-to-r from-primary-orange/20 to-primary-blue/20 backdrop-blur-sm rounded-full p-2 border border-white/30">
            <BookOpen className="h-6 w-6 text-primary-orange" />
          </div>
          <Badge variant="gradient" className="text-sm">
            Learning Tracker
          </Badge>
        </div>
        
        <h1 className="kid-heading text-4xl md:text-5xl">
          Learning Journey
        </h1>
        
        <p className="text-gray-600 max-w-2xl mx-auto">
          Track your baby's learning progress, discover fun activities, and support their development with engaging educational content.
        </p>
      </div>

      {/* Learning Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {learningCategories.map((category) => {
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
                      e.currentTarget.src = getPhoto('placeholders', 'activity');
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
          variant={activeTab === 'activities' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setActiveTab('activities')}
          className="flex-1"
        >
          <Play className="h-4 w-4 mr-2" />
          Activities
        </Button>
        <Button
          variant={activeTab === 'milestones' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setActiveTab('milestones')}
          className="flex-1"
        >
          <Target className="h-4 w-4 mr-2" />
          Milestones
        </Button>
        <Button
          variant={activeTab === 'resources' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setActiveTab('resources')}
          className="flex-1"
        >
          <BookOpen className="h-4 w-4 mr-2" />
          Resources
        </Button>
      </div>

      {/* Content based on active tab */}
      {activeTab === 'activities' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-800">Learning Activities</h3>
            <Button variant="outline" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add Activity
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {learningActivities.map((activity) => (
              <Card key={activity.id} className="kid-card-glass kid-hover-scale">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <img 
                      src={activity.image}
                      alt={activity.title}
                      className="w-12 h-12 rounded-lg object-cover"
                      onError={(e) => {
                        e.currentTarget.src = getPhoto('placeholders', 'activity');
                      }}
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">{activity.title}</h4>
                      <p className="text-xs text-gray-600">{activity.description}</p>
                      <Badge variant="outline" className="text-xs mt-1">
                        {activity.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{activity.duration}</span>
                      <Badge 
                        variant={activity.status === 'completed' ? 'success' : 'warning'} 
                        className="text-xs"
                      >
                        {activity.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Calendar className="h-3 w-3" />
                      <span>{activity.date}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'milestones' && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">Development Milestones</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {developmentMilestones.map((milestone) => (
              <Card key={milestone.id} className="kid-card-gradient kid-hover-scale">
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
                    <Badge 
                      variant={milestone.status === 'almost-ready' ? 'success' : 'warning'} 
                      className="text-xs"
                    >
                      {milestone.status}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'resources' && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">Learning Resources</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {learningResources.map((resource) => (
              <Card key={resource.id} className="kid-card-glass kid-hover-scale">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <img 
                      src={resource.image}
                      alt={resource.title}
                      className="w-12 h-12 rounded-lg object-cover"
                      onError={(e) => {
                        e.currentTarget.src = getPhoto('placeholders', 'activity');
                      }}
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">{resource.title}</h4>
                      <p className="text-xs text-gray-600">{resource.description}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {resource.type}
                        </Badge>
                        <Badge variant="success" className="text-xs">
                          {resource.difficulty}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{resource.duration}</span>
                    <Button variant="outline" size="sm" className="h-6 text-xs">
                      Start
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Learning Summary */}
      <Card className="kid-card-gradient">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary-orange" />
            Learning Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary-blue">30</div>
              <div className="text-sm text-gray-600">Activities Completed</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary-green">15</div>
              <div className="text-sm text-gray-600">Skills Developed</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary-pink">8</div>
              <div className="text-sm text-gray-600">Milestones Achieved</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary-orange">85%</div>
              <div className="text-sm text-gray-600">Learning Progress</div>
            </div>
          </div>
          
          <div className="mt-6 space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Overall Progress</span>
              <span>85%</span>
            </div>
            <Progress value={85} className="h-3" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LearningTracker;
