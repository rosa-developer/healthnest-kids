
import React, { useState } from 'react';
import { Baby, Plus, Check } from 'lucide-react';

interface BabyProfile {
  id: string;
  name: string;
  age: string;
  isActive: boolean;
}

const ProfileSelector: React.FC = () => {
  const [profiles, setProfiles] = useState<BabyProfile[]>([
    { id: '1', name: 'Emma', age: '8 months', isActive: true },
    { id: '2', name: 'Noah', age: '2 years', isActive: false },
    { id: '3', name: 'Oliver', age: 'Pregnancy (24 weeks)', isActive: false }
  ]);
  
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newBabyName, setNewBabyName] = useState('');
  const [newBabyAge, setNewBabyAge] = useState('');
  
  const activeProfile = profiles.find(p => p.isActive) || profiles[0];
  
  const handleProfileChange = (profileId: string) => {
    setProfiles(profiles.map(profile => ({
      ...profile,
      isActive: profile.id === profileId
    })));
    setShowProfileMenu(false);
  };
  
  const handleAddProfile = () => {
    if (newBabyName.trim() === '') return;
    
    const newProfile: BabyProfile = {
      id: Date.now().toString(),
      name: newBabyName,
      age: newBabyAge || 'Newborn',
      isActive: false
    };
    
    setProfiles([...profiles, newProfile]);
    setNewBabyName('');
    setNewBabyAge('');
    setShowAddForm(false);
  };
  
  return (
    <div className="relative">
      <button 
        className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-md"
        onClick={() => setShowProfileMenu(!showProfileMenu)}
      >
        <div className="h-8 w-8 rounded-full bg-primary-purple/10 flex items-center justify-center">
          <Baby className="h-5 w-5 text-primary-purple" />
        </div>
        <span className="font-medium">{activeProfile.name}</span>
      </button>
      
      {showProfileMenu && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg z-50 overflow-hidden">
          <div className="p-3 border-b">
            <h3 className="font-bold text-gray-700">Switch Profile</h3>
          </div>
          
          <div className="max-h-60 overflow-y-auto">
            {profiles.map(profile => (
              <div 
                key={profile.id}
                className="flex items-center justify-between p-3 hover:bg-gray-50 cursor-pointer"
                onClick={() => handleProfileChange(profile.id)}
              >
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 rounded-full bg-primary-purple/10 flex items-center justify-center">
                    <Baby className="h-4 w-4 text-primary-purple" />
                  </div>
                  <div>
                    <div className="font-medium">{profile.name}</div>
                    <div className="text-xs text-gray-500">{profile.age}</div>
                  </div>
                </div>
                {profile.isActive && <Check className="h-5 w-5 text-primary-purple" />}
              </div>
            ))}
          </div>
          
          {!showAddForm ? (
            <div 
              className="p-3 border-t flex items-center space-x-2 text-primary-purple hover:bg-gray-50 cursor-pointer"
              onClick={() => setShowAddForm(true)}
            >
              <Plus className="h-5 w-5" />
              <span>Add New Baby</span>
            </div>
          ) : (
            <div className="p-3 border-t">
              <input
                type="text"
                placeholder="Baby's name"
                className="w-full p-2 border rounded-lg mb-2"
                value={newBabyName}
                onChange={(e) => setNewBabyName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Age (e.g., 3 months)"
                className="w-full p-2 border rounded-lg mb-2"
                value={newBabyAge}
                onChange={(e) => setNewBabyAge(e.target.value)}
              />
              <div className="flex justify-end space-x-2">
                <button 
                  className="px-3 py-1 border rounded-lg hover:bg-gray-50"
                  onClick={() => setShowAddForm(false)}
                >
                  Cancel
                </button>
                <button 
                  className="px-3 py-1 bg-primary-purple text-white rounded-lg hover:bg-primary-purple/90"
                  onClick={handleAddProfile}
                >
                  Add
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProfileSelector;
