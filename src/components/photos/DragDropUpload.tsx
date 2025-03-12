
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
      className={`relative rounded-lg border-2 border-dashed transition-all duration-300
        ${isDragging 
          ? 'drag-active scale-[0.99] border-primary' 
          : 'border-muted-foreground/25 hover:border-primary/50'
        }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {isDragging && (
        <div className="absolute inset-0 bg-primary/5 rounded-lg flex items-center justify-center z-10 animate-pulse">
          <div className="text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg">
            <Upload className="mx-auto h-12 w-12 text-primary mb-2 animate-bounce" />
            <p className="text-xl font-medium">Drop your photos here</p>
            <p className="text-sm text-muted-foreground mt-1">Release to upload</p>
          </div>
        </div>
      )}
      {children}
    </div>
  );
};

export default DragDropUpload;
