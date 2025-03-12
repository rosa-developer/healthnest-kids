
import React, { useCallback, useState } from 'react';
import { Upload, Image } from 'lucide-react';

interface DragDropUploadProps {
  onFilesAdded: (files: FileList) => void;
  children?: React.ReactNode;
}

const DragDropUpload: React.FC<DragDropUploadProps> = ({ 
  onFilesAdded,
  children 
}) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      onFilesAdded(e.dataTransfer.files);
    }
  }, [onFilesAdded]);

  return (
    <div
      className={`relative rounded-lg border-2 border-dashed transition-all
        ${isDragging 
          ? 'border-primary bg-primary/5' 
          : 'border-muted-foreground/25 hover:border-primary/50'
        }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {isDragging && (
        <div className="absolute inset-0 bg-primary/5 rounded-lg flex items-center justify-center z-10">
          <div className="text-center p-4">
            <Upload className="mx-auto h-12 w-12 text-primary mb-2" />
            <p className="text-lg font-medium">Drop your photos here</p>
          </div>
        </div>
      )}
      {children}
    </div>
  );
};

export default DragDropUpload;
