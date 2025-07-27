
import React from 'react';
import { useChildProfile } from '@/contexts/ChildProfileContext';
import { Baby, Calendar, MapPin, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface WelcomeSectionProps {
  dbStatus: string;
}

const WelcomeSection: React.FC<WelcomeSectionProps> = ({ dbStatus }) => {
  const { activeProfile } = useChildProfile();

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  };

  const getAgeText = (birthDate: string) => {
    const birth = new Date(birthDate);
    const today = new Date();
    const ageInMonths = (today.getFullYear() - birth.getFullYear()) * 12 + (today.getMonth() - birth.getMonth());
    
    if (ageInMonths < 1) {
      const days = Math.floor((today.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24));
      return `${days} day${days !== 1 ? 's' : ''} old`;
    } else if (ageInMonths < 12) {
      return `${ageInMonths} month${ageInMonths !== 1 ? 's' : ''} old`;
    } else {
      const years = Math.floor(ageInMonths / 12);
      const months = ageInMonths % 12;
      if (months === 0) {
        return `${years} year${years !== 1 ? 's' : ''} old`;
      }
      return `${years} year${years !== 1 ? 's' : ''} and ${months} month${months !== 1 ? 's' : ''} old`;
    }
  };

  return (
    <div className="space-y-6">
      {/* Enhanced header with greeting */}
      <div className="text-center space-y-3">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="bg-gradient-to-r from-primary-purple/20 to-primary-blue/20 backdrop-blur-sm rounded-full p-2 border border-white/30">
            <Baby className="h-6 w-6 text-primary-purple" />
          </div>
          <Badge variant="gradient" className="text-sm">
            <Sparkles className="h-3 w-3 mr-1" />
            Connected
          </Badge>
        </div>
        
        <h2 className="kid-subheading">
          {getGreeting()}, {activeProfile?.name ? `${activeProfile.name}'s Family` : 'Family'}! 👋
        </h2>
        
        <p className="text-gray-600 max-w-md mx-auto">
          Ready to capture another beautiful day in your little one's journey?
        </p>
      </div>

      {/* Enhanced profile information */}
      {activeProfile && (
        <div className="kid-card-gradient">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-purple to-primary-blue rounded-full flex items-center justify-center text-white font-bold text-xl shadow-kid">
                  {activeProfile.name?.charAt(0).toUpperCase() || 'B'}
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary-green rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              </div>
              
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-gray-800">
                  {activeProfile.name || 'Baby'}
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-primary-blue" />
                    <span>{getAgeText(activeProfile.birthDate || new Date().toISOString())}</span>
                  </div>
                  {activeProfile.location && (
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-primary-green" />
                      <span>{activeProfile.location}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-2xl font-bold text-primary-purple">
                {activeProfile.name ? activeProfile.name.length * 2 : 10}
              </div>
              <div className="text-xs text-gray-500">Memories</div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced quick stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Milestones', value: '12', color: 'primary-pink', icon: '🎯' },
          { label: 'Photos', value: '48', color: 'primary-blue', icon: '📸' },
          { label: 'Growth Records', value: '8', color: 'primary-green', icon: '📊' },
          { label: 'Memories', value: '24', color: 'primary-orange', icon: '💝' },
        ].map((stat, index) => (
          <div key={index} className="kid-card-glass text-center kid-hover-scale">
            <div className="text-2xl mb-2">{stat.icon}</div>
            <div className="text-xl font-bold text-gray-800">{stat.value}</div>
            <div className="text-xs text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WelcomeSection;
