
import React, { useCallback, useState } from 'react';
import { Upload, FileImage } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface DragDropUploadProps {
  onFilesAdded: (files: FileList) => void;
  children?: React.ReactNode;
  maxFileSize?: number; // in MB
  acceptedTypes?: string[];
}

const DragDropUpload: React.FC<DragDropUploadProps> = ({ 
  onFilesAdded,
  children,
  maxFileSize = 5, // Default 5MB
  acceptedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp']
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const { toast } = useToast();

  const validateFiles = (files: FileList): boolean => {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      
      // Check file type
      if (!acceptedTypes.includes(file.type)) {
        toast({
          title: "Invalid file type",
          description: `${file.name} is not a supported image type. Please upload only ${acceptedTypes.join(', ')} files.`,
          variant: "destructive"
        });
        return false;
      }

      // Check file size
      if (file.size > maxFileSize * 1024 * 1024) {
        toast({
          title: "File too large",
          description: `${file.name} is larger than ${maxFileSize}MB. Please upload a smaller file.`,
          variant: "destructive"
        });
        return false;
      }
    }
    return true;
  };

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
    
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      if (validateFiles(files)) {
        onFilesAdded(files);
        toast({
          title: "Files accepted",
          description: `${files.length} ${files.length === 1 ? 'file' : 'files'} ready to upload`,
          variant: "success"
        });
      }
    }
  }, [onFilesAdded, maxFileSize, acceptedTypes]);

  return (
    <div
      className={`relative rounded-lg border-2 border-dashed transition-all duration-300
        ${isDragging 
          ? 'border-primary bg-primary/5 scale-[0.99]' 
          : 'border-muted-foreground/25 hover:border-primary/50'
        }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {isDragging && (
        <div className="absolute inset-0 bg-primary/5 rounded-lg flex items-center justify-center z-10">
          <div className="text-center p-6 bg-background/95 backdrop-blur-sm rounded-xl shadow-lg">
            <FileImage className="mx-auto h-12 w-12 text-primary mb-2 animate-bounce" />
            <p className="text-xl font-medium">Drop your photos here</p>
            <p className="text-sm text-muted-foreground mt-1">
              Supports {acceptedTypes.join(', ')} up to {maxFileSize}MB
            </p>
          </div>
        </div>
      )}
      {children}
    </div>
  );
};

export default DragDropUpload;
