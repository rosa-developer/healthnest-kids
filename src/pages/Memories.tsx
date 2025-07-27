
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Camera, 
  Heart, 
  Calendar, 
  Plus,
  Star,
  Clock,
  Target,
  Activity,
  Baby,
  Play,
  Download,
  Share2,
  Eye
} from 'lucide-react';
import { getPhoto } from '@/data/photoAssets';

const Memories = () => {
  const [activeTab, setActiveTab] = useState('photos');

  const memoryCategories = [
    {
      id: 'photos',
      title: 'Photo Memories',
      icon: Camera,
      color: 'primary-blue',
      image: getPhoto('memories', 'babyPortrait'),
      count: 48,
      recent: 12
    },
    {
      id: 'videos',
      title: 'Video Memories',
      icon: Play,
      color: 'primary-pink',
      image: getPhoto('memories', 'specialMoment'),
      count: 15,
      recent: 3
    },
    {
      id: 'audio',
      title: 'Audio Memories',
      icon: Heart,
      color: 'primary-green',
      image: getPhoto('memories', 'familyPhoto'),
      count: 8,
      recent: 2
    }
  ];

  const recentPhotos = [
    {
      id: 1,
      title: 'First Steps',
      description: 'Baby took their first steps today!',
      date: '2024-01-15',
      image: getPhoto('milestones', 'firstStep'),
      category: 'Milestone',
      favorite: true
    },
    {
      id: 2,
      title: 'Family Picnic',
      description: 'Beautiful day at the park',
      date: '2024-01-14',
      image: getPhoto('memories', 'familyPhoto'),
      category: 'Family',
      favorite: false
    },
    {
      id: 3,
      title: 'Bath Time Fun',
      description: 'Splashing and playing in the bath',
      date: '2024-01-13',
      image: getPhoto('memories', 'babyPortrait'),
      category: 'Daily',
      favorite: true
    },
    {
      id: 4,
      title: 'Reading Together',
      description: 'Story time with mom and dad',
      date: '2024-01-12',
      image: getPhoto('learning', 'reading'),
      category: 'Learning',
      favorite: false
    }
  ];

  const memoryAlbums = [
    {
      id: 1,
      title: 'First Year',
      description: 'Baby\'s first year milestones',
      photoCount: 24,
      coverImage: getPhoto('memories', 'babyPortrait'),
      date: '2023-2024'
    },
    {
      id: 2,
      title: 'Family Moments',
      description: 'Special family memories',
      photoCount: 18,
      coverImage: getPhoto('memories', 'familyPhoto'),
      date: '2024'
    },
    {
      id: 3,
      title: 'Milestones',
      description: 'Important developmental milestones',
      photoCount: 12,
      coverImage: getPhoto('milestones', 'firstSmile'),
      date: '2024'
    }
  ];

  const featuredMemories = [
    {
      id: 1,
      title: 'First Smile',
      description: 'The moment baby smiled for the first time',
      date: '2024-01-10',
      image: getPhoto('milestones', 'firstSmile'),
      type: 'Milestone',
      views: 45
    },
    {
      id: 2,
      title: 'Family Vacation',
      description: 'Our first family trip to the beach',
      date: '2024-01-05',
      image: getPhoto('memories', 'specialMoment'),
      type: 'Family',
      views: 32
    },
    {
      id: 3,
      title: 'Learning to Crawl',
      description: 'Baby\'s first crawling attempts',
      date: '2024-01-08',
      image: getPhoto('milestones', 'crawling'),
      type: 'Development',
      views: 28
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="bg-gradient-to-r from-primary-pink/20 to-primary-purple/20 backdrop-blur-sm rounded-full p-2 border border-white/30">
            <Camera className="h-6 w-6 text-primary-pink" />
          </div>
          <Badge variant="gradient" className="text-sm">
            Memory Keeper
          </Badge>
        </div>
        
        <h1 className="kid-heading text-4xl md:text-5xl">
          Precious Memories
        </h1>
        
        <p className="text-gray-600 max-w-2xl mx-auto">
          Capture and cherish every precious moment of your baby's journey with beautiful photos, videos, and audio memories.
        </p>
      </div>

      {/* Memory Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {memoryCategories.map((category) => {
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
                    <p className="text-sm text-gray-600">{category.count} total memories</p>
                  </div>
                  <div className={`w-10 h-10 rounded-full bg-${category.color}/10 flex items-center justify-center`}>
                    <Icon className={`h-5 w-5 text-${category.color}`} />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Recent</span>
                    <span>{category.recent} new</span>
                  </div>
                  <Progress value={(category.recent / category.count) * 100} className="h-3" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-gray-100 rounded-2xl p-1">
        <Button
          variant={activeTab === 'photos' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setActiveTab('photos')}
          className="flex-1"
        >
          <Camera className="h-4 w-4 mr-2" />
          Photos
        </Button>
        <Button
          variant={activeTab === 'albums' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setActiveTab('albums')}
          className="flex-1"
        >
          <Star className="h-4 w-4 mr-2" />
          Albums
        </Button>
        <Button
          variant={activeTab === 'featured' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setActiveTab('featured')}
          className="flex-1"
        >
          <Heart className="h-4 w-4 mr-2" />
          Featured
        </Button>
      </div>

      {/* Content based on active tab */}
      {activeTab === 'photos' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-800">Recent Photos</h3>
            <Button variant="outline" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add Photo
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentPhotos.map((photo) => (
              <Card key={photo.id} className="kid-card-glass kid-hover-scale">
                <CardContent className="p-4">
                  <div className="relative mb-3">
                    <img 
                      src={photo.image}
                      alt={photo.title}
                      className="w-full h-32 object-cover rounded-lg"
                      onError={(e) => {
                        e.currentTarget.src = getPhoto('placeholders', 'baby');
                      }}
                    />
                    {photo.favorite && (
                      <div className="absolute top-2 right-2">
                        <Heart className="h-5 w-5 text-primary-pink fill-current" />
                      </div>
                    )}
                    <div className="absolute bottom-2 left-2">
                      <Badge variant="glass" className="text-xs">
                        {photo.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800">{photo.title}</h4>
                    <p className="text-xs text-gray-600">{photo.description}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{photo.date}</span>
                      </div>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                          <Download className="h-3 w-3" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                          <Share2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'albums' && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">Memory Albums</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {memoryAlbums.map((album) => (
              <Card key={album.id} className="kid-card-gradient kid-hover-scale">
                <CardContent className="p-4">
                  <div className="relative mb-3">
                    <img 
                      src={album.coverImage}
                      alt={album.title}
                      className="w-full h-32 object-cover rounded-lg"
                      onError={(e) => {
                        e.currentTarget.src = getPhoto('placeholders', 'baby');
                      }}
                    />
                    <div className="absolute top-2 right-2">
                      <Badge variant="glass" className="text-xs">
                        {album.photoCount} photos
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800">{album.title}</h4>
                    <p className="text-xs text-gray-600">{album.description}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{album.date}</span>
                      <Button variant="outline" size="sm" className="h-6 text-xs">
                        View
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'featured' && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">Featured Memories</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredMemories.map((memory) => (
              <Card key={memory.id} className="kid-card-glass kid-hover-scale">
                <CardContent className="p-4">
                  <div className="relative mb-3">
                    <img 
                      src={memory.image}
                      alt={memory.title}
                      className="w-full h-32 object-cover rounded-lg"
                      onError={(e) => {
                        e.currentTarget.src = getPhoto('placeholders', 'baby');
                      }}
                    />
                    <div className="absolute top-2 right-2">
                      <Badge variant="glass" className="text-xs">
                        {memory.type}
                      </Badge>
                    </div>
                    <div className="absolute bottom-2 left-2">
                      <div className="flex items-center gap-1 text-white text-xs">
                        <Eye className="h-3 w-3" />
                        <span>{memory.views}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800">{memory.title}</h4>
                    <p className="text-xs text-gray-600">{memory.description}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{memory.date}</span>
                      </div>
                      <Button variant="outline" size="sm" className="h-6 text-xs">
                        View
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Memory Summary */}
      <Card className="kid-card-gradient">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary-pink" />
            Memory Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary-blue">71</div>
              <div className="text-sm text-gray-600">Total Memories</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary-green">17</div>
              <div className="text-sm text-gray-600">This Month</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary-pink">8</div>
              <div className="text-sm text-gray-600">Favorites</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary-orange">3</div>
              <div className="text-sm text-gray-600">Albums</div>
            </div>
          </div>
          
          <div className="mt-6 space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Storage Used</span>
              <span>2.4 GB / 10 GB</span>
            </div>
            <Progress value={24} className="h-3" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Memories;
