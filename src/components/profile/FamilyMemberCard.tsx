
import React from 'react';
import { Baby } from 'lucide-react';

interface FamilyMemberCardProps {
  name: string;
  age: string;
  photoSrc?: string;
}

const FamilyMemberCard: React.FC<FamilyMemberCardProps> = ({ name, age, photoSrc }) => {
  return (
    <div className="p-4 border border-border rounded-lg">
      <div className="flex items-center">
        <div className="h-12 w-12 rounded-full bg-healthnest-soft-purple flex items-center justify-center mr-4 overflow-hidden">
          {photoSrc ? (
            <img src={photoSrc} alt={name} className="w-full h-full object-cover" />
          ) : (
            <Baby className="h-6 w-6 text-purple-500" />
          )}
        </div>
        <div>
          <h3 className="font-medium">{name}</h3>
          <p className="text-sm text-muted-foreground">{age}</p>
        </div>
      </div>
    </div>
  );
};

export default FamilyMemberCard;
