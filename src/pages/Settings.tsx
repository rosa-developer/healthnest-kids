
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Settings, 
  User, 
  Bell, 
  Shield, 
  Database, 
  Palette,
  Baby,
  Users,
  Camera,
  Download,
  Upload,
  Trash2,
  Plus,
  Edit,
  Save
} from 'lucide-react';
import { getPhoto } from '@/data/photoAssets';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const settingsCategories = [
    {
      id: 'profile',
      title: 'Profile Settings',
      icon: User,
      color: 'primary-blue',
      image: getPhoto('settings', 'profile'),
      description: 'Manage baby and family profiles'
    },
    {
      id: 'notifications',
      title: 'Notifications',
      icon: Bell,
      color: 'primary-green',
      image: getPhoto('settings', 'family'),
      description: 'Configure app notifications'
    },
    {
      id: 'privacy',
      title: 'Privacy & Security',
      icon: Shield,
      color: 'primary-pink',
      image: getPhoto('settings', 'family'),
      description: 'Manage data privacy settings'
    }
  ];

  const profileSettings = [
    {
      id: 1,
      title: 'Baby Profile',
      description: 'Update baby information and photo',
      icon: Baby,
      action: 'Edit',
      image: getPhoto('settings', 'profile')
    },
    {
      id: 2,
      title: 'Family Members',
      description: 'Manage family member access',
      icon: Users,
      action: 'Manage',
      image: getPhoto('settings', 'family')
    },
    {
      id: 3,
      title: 'Photo Settings',
      description: 'Configure photo storage and sharing',
      icon: Camera,
      action: 'Configure',
      image: getPhoto('memories', 'babyPortrait')
    }
  ];

  const notificationSettings = [
    {
      id: 1,
      title: 'Milestone Reminders',
      description: 'Get notified about upcoming milestones',
      enabled: true,
      icon: Baby
    },
    {
      id: 2,
      title: 'Health Checkups',
      description: 'Reminders for doctor appointments',
      enabled: true,
      icon: Shield
    },
    {
      id: 3,
      title: 'Growth Updates',
      description: 'Weekly growth tracking reminders',
      enabled: false,
      icon: Database
    },
    {
      id: 4,
      title: 'Memory Suggestions',
      description: 'Tips for capturing special moments',
      enabled: true,
      icon: Camera
    }
  ];

  const privacySettings = [
    {
      id: 1,
      title: 'Data Backup',
      description: 'Automatically backup your data',
      enabled: true,
      icon: Upload
    },
    {
      id: 2,
      title: 'Photo Privacy',
      description: 'Control photo sharing settings',
      enabled: true,
      icon: Shield
    },
    {
      id: 3,
      title: 'Analytics',
      description: 'Help improve the app (anonymous)',
      enabled: false,
      icon: Database
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="bg-gradient-to-r from-primary-purple/20 to-primary-blue/20 backdrop-blur-sm rounded-full p-2 border border-white/30">
            <Settings className="h-6 w-6 text-primary-purple" />
          </div>
          <Badge variant="gradient" className="text-sm">
            App Settings
          </Badge>
        </div>
        
        <h1 className="kid-heading text-4xl md:text-5xl">
          Settings
        </h1>
        
        <p className="text-gray-600 max-w-2xl mx-auto">
          Customize your HealthNest Kids experience and manage your family's data and preferences.
        </p>
      </div>

      {/* Settings Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {settingsCategories.map((category) => {
          const Icon = category.icon;
          return (
            <Card 
              key={category.id} 
              className="kid-card-gradient kid-hover-lift cursor-pointer"
              onClick={() => setActiveTab(category.id)}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={category.image}
                    alt={category.title}
                    className="w-12 h-12 rounded-lg object-cover"
                    onError={(e) => {
                      e.currentTarget.src = getPhoto('placeholders', 'family');
                    }}
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{category.title}</h3>
                    <p className="text-sm text-gray-600">{category.description}</p>
                  </div>
                  <div className={`w-10 h-10 rounded-full bg-${category.color}/10 flex items-center justify-center`}>
                    <Icon className={`h-5 w-5 text-${category.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-gray-100 rounded-2xl p-1">
        <Button
          variant={activeTab === 'profile' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setActiveTab('profile')}
          className="flex-1"
        >
          <User className="h-4 w-4 mr-2" />
          Profile
        </Button>
        <Button
          variant={activeTab === 'notifications' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setActiveTab('notifications')}
          className="flex-1"
        >
          <Bell className="h-4 w-4 mr-2" />
          Notifications
        </Button>
        <Button
          variant={activeTab === 'privacy' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setActiveTab('privacy')}
          className="flex-1"
        >
          <Shield className="h-4 w-4 mr-2" />
          Privacy
        </Button>
      </div>

      {/* Content based on active tab */}
      {activeTab === 'profile' && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">Profile Settings</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {profileSettings.map((setting) => {
              const Icon = setting.icon;
              return (
                <Card key={setting.id} className="kid-card-glass kid-hover-scale">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3 mb-3">
                      <img 
                        src={setting.image}
                        alt={setting.title}
                        className="w-12 h-12 rounded-lg object-cover"
                        onError={(e) => {
                          e.currentTarget.src = getPhoto('placeholders', 'family');
                        }}
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">{setting.title}</h4>
                        <p className="text-xs text-gray-600">{setting.description}</p>
                      </div>
                      <div className={`w-8 h-8 rounded-full bg-primary-purple/10 flex items-center justify-center`}>
                        <Icon className="h-4 w-4 text-primary-purple" />
                      </div>
                    </div>
                    
                    <Button variant="outline" size="sm" className="w-full">
                      {setting.action}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      )}

      {activeTab === 'notifications' && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">Notification Settings</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {notificationSettings.map((setting) => {
              const Icon = setting.icon;
              return (
                <Card key={setting.id} className="kid-card-glass kid-hover-scale">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full bg-primary-green/10 flex items-center justify-center`}>
                          <Icon className="h-5 w-5 text-primary-green" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">{setting.title}</h4>
                          <p className="text-xs text-gray-600">{setting.description}</p>
                        </div>
                      </div>
                      <Button 
                        variant={setting.enabled ? 'default' : 'outline'} 
                        size="sm"
                        className="w-16"
                      >
                        {setting.enabled ? 'On' : 'Off'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      )}

      {activeTab === 'privacy' && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">Privacy & Security</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {privacySettings.map((setting) => {
              const Icon = setting.icon;
              return (
                <Card key={setting.id} className="kid-card-glass kid-hover-scale">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full bg-primary-pink/10 flex items-center justify-center`}>
                          <Icon className="h-5 w-5 text-primary-pink" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">{setting.title}</h4>
                          <p className="text-xs text-gray-600">{setting.description}</p>
                        </div>
                      </div>
                      <Button 
                        variant={setting.enabled ? 'default' : 'outline'} 
                        size="sm"
                        className="w-16"
                      >
                        {setting.enabled ? 'On' : 'Off'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      )}

      {/* App Info */}
      <Card className="kid-card-gradient">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5 text-primary-purple" />
            App Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold text-primary-blue">v1.0.0</div>
              <div className="text-sm text-gray-600">App Version</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold text-primary-green">2.4 GB</div>
              <div className="text-sm text-gray-600">Storage Used</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold text-primary-pink">71</div>
              <div className="text-sm text-gray-600">Total Memories</div>
            </div>
          </div>
          
          <div className="mt-6 flex gap-2">
            <Button variant="outline" size="sm" className="flex-1">
              <Download className="h-4 w-4 mr-2" />
              Export Data
            </Button>
            <Button variant="outline" size="sm" className="flex-1">
              <Upload className="h-4 w-4 mr-2" />
              Import Data
            </Button>
            <Button variant="outline" size="sm" className="flex-1">
              <Trash2 className="h-4 w-4 mr-2" />
              Clear Data
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;
