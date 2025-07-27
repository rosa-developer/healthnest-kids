
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Baby, 
  Camera, 
  Heart, 
  TrendingUp, 
  Calendar, 
  Star, 
  Plus,
  ArrowRight,
  Camera as CameraIcon,
  BookOpen,
  Activity
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getPhoto, getRandomPhoto } from '@/data/photoAssets';

const DashboardContent = () => {
  const navigate = useNavigate();

  const recentActivities = [
    {
      id: 1,
      type: 'milestone',
      title: 'First Steps!',
      description: 'Baby took their first steps today',
      time: '2 hours ago',
      icon: Baby,
      color: 'text-primary-pink',
      bgColor: 'bg-primary-pink/10',
      image: getPhoto('milestones', 'firstStep')
    },
    {
      id: 2,
      type: 'photo',
      title: 'New Photo Added',
      description: 'Family picnic at the park',
      time: '1 day ago',
      icon: Camera,
      color: 'text-primary-blue',
      bgColor: 'bg-primary-blue/10',
      image: getPhoto('memories', 'familyPhoto')
    },
    {
      id: 3,
      type: 'growth',
      title: 'Growth Record',
      description: 'Height: 75cm, Weight: 8.5kg',
      time: '3 days ago',
      icon: TrendingUp,
      color: 'text-primary-green',
      bgColor: 'bg-primary-green/10',
      image: getPhoto('growth', 'babyMeasuring')
    }
  ];

  const upcomingMilestones = [
    {
      id: 1,
      title: 'First Words',
      description: 'Expected around 12 months',
      progress: 85,
      image: getPhoto('milestones', 'firstWord'),
      color: 'primary-purple'
    },
    {
      id: 2,
      title: 'Crawling',
      description: 'Expected around 8 months',
      progress: 60,
      image: getPhoto('milestones', 'crawling'),
      color: 'primary-blue'
    },
    {
      id: 3,
      title: 'Sitting Up',
      description: 'Expected around 6 months',
      progress: 90,
      image: getPhoto('milestones', 'sitting'),
      color: 'primary-green'
    }
  ];

  const quickActions = [
    {
      title: 'Add Photo',
      description: 'Capture a moment',
      icon: CameraIcon,
      color: 'primary-blue',
      action: () => navigate('/memories')
    },
    {
      title: 'Record Milestone',
      description: 'Mark an achievement',
      icon: Star,
      color: 'primary-pink',
      action: () => navigate('/milestones')
    },
    {
      title: 'Growth Check',
      description: 'Update measurements',
      icon: TrendingUp,
      color: 'primary-green',
      action: () => navigate('/growth')
    },
    {
      title: 'Learning Activity',
      description: 'Track development',
      icon: BookOpen,
      color: 'primary-orange',
      action: () => navigate('/learning')
    }
  ];

  return (
    <div className="space-y-8">
      {/* Recent Activities */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-gray-800">Recent Activities</h3>
          <Button variant="outline" size="sm" onClick={() => navigate('/memories')}>
            View All
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recentActivities.map((activity) => {
            const Icon = activity.icon;
            return (
              <Card key={activity.id} className="kid-card-glass kid-hover-lift">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="relative">
                      <img 
                        src={activity.image}
                        alt={activity.title}
                        className="w-12 h-12 rounded-lg object-cover"
                        onError={(e) => {
                          e.currentTarget.src = getPhoto('placeholders', 'activity');
                        }}
                      />
                      <div className={`absolute -top-1 -right-1 w-6 h-6 rounded-full ${activity.bgColor} flex items-center justify-center`}>
                        <Icon className={`h-3 w-3 ${activity.color}`} />
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-800 truncate">{activity.title}</h4>
                      <p className="text-sm text-gray-600 truncate">{activity.description}</p>
                      <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Upcoming Milestones */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-800">Upcoming Milestones</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {upcomingMilestones.map((milestone) => (
            <Card key={milestone.id} className="kid-card-gradient kid-hover-scale">
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
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>Progress</span>
                    <span>{milestone.progress}%</span>
                  </div>
                  <Progress value={milestone.progress} className="h-2" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-800">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Card 
                key={index} 
                className="kid-card-glass kid-hover-scale cursor-pointer"
                onClick={action.action}
              >
                <CardContent className="p-4 text-center">
                  <div className={`w-12 h-12 rounded-full bg-${action.color}/10 flex items-center justify-center mx-auto mb-3`}>
                    <Icon className={`h-6 w-6 text-${action.color}`} />
                  </div>
                  <h4 className="font-semibold text-gray-800 text-sm">{action.title}</h4>
                  <p className="text-xs text-gray-600 mt-1">{action.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Recent Photos Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-gray-800">Recent Photos</h3>
          <Button variant="outline" size="sm" onClick={() => navigate('/memories')}>
            View Gallery
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {getPhoto('dashboard', 'recentPhotos').map((photo, index) => (
            <div key={index} className="relative group kid-hover-scale">
              <img 
                src={photo}
                alt={`Recent photo ${index + 1}`}
                className="w-full h-32 object-cover rounded-2xl"
                onError={(e) => {
                  e.currentTarget.src = getPhoto('placeholders', 'baby');
                }}
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center">
                <Camera className="h-6 w-6 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
