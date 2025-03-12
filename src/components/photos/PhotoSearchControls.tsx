
import React from 'react';
import SearchBar from './SearchBar';
import ActionButtons from './ActionButtons';

interface PhotoSearchControlsProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  onUploadClick: () => void;
  onCaptureClick: () => void;
}

const PhotoSearchControls: React.FC<PhotoSearchControlsProps> = ({ 
  searchQuery, 
  setSearchQuery, 
  onUploadClick, 
  onCaptureClick 
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ActionButtons onUploadClick={onUploadClick} onCaptureClick={onCaptureClick} />
    </div>
  );
};

export default PhotoSearchControls;
