
import React, { useState, useRef } from 'react';
import PageTransition from '@/components/common/PageTransition';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Camera, Upload, X, Edit2, Trash2 } from 'lucide-react';

const PhotoInsert = () => {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [photos, setPhotos] = useState<{ id: string; src: string; caption: string }[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [editCaption, setEditCaption] = useState<string>('');
  const [showEditModal, setShowEditModal] = useState<boolean>(false);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleCaptureClick = () => {
    toast({
      title: "Capture Photo",
      description: "Camera capture will be available in the next update!",
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    
    if (files && files.length > 0) {
      const newPhotos = Array.from(files).map(file => {
        const id = `photo-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        return {
          id,
          src: URL.createObjectURL(file),
          caption: file.name.split('.')[0] || 'New Photo'
        };
      });
      
      setPhotos(prev => [...prev, ...newPhotos]);
      
      toast({
        title: "Photos Added",
        description: `${files.length} photo(s) have been successfully added.`,
      });
      
      // Reset file input
      e.target.value = '';
    }
  };

  const handleDelete = (id: string) => {
    setPhotos(prev => prev.filter(photo => photo.id !== id));
    toast({
      title: "Photo Deleted",
      description: "The photo has been removed.",
    });
  };

  const handleEdit = (photo: { id: string; src: string; caption: string }) => {
    setSelectedPhoto(photo.id);
    setEditCaption(photo.caption);
    setShowEditModal(true);
  };

  const saveCaption = () => {
    if (selectedPhoto) {
      setPhotos(prev => prev.map(photo => 
        photo.id === selectedPhoto 
          ? { ...photo, caption: editCaption }
          : photo
      ));
      
      setShowEditModal(false);
      setSelectedPhoto(null);
      
      toast({
        title: "Caption Updated",
        description: "Photo caption has been updated successfully.",
      });
    }
  };

  return (
    <div className="main-container">
      <PageTransition>
        <div className="mb-6">
          <div className="chip bg-healthnest-soft-blue text-healthnest-primary mb-4">
            Photo Gallery
          </div>

          {/* Upload Controls */}
          <Card className="border border-border shadow-soft mb-6 p-6">
            <h2 className="text-xl font-semibold mb-4">Add New Photos</h2>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={handleUploadClick}
                className="bg-healthnest-primary text-white hover:bg-healthnest-primary/90"
              >
                <Upload className="h-4 w-4 mr-2" />
                Upload Photos
              </Button>
              <Button 
                variant="outline"
                onClick={handleCaptureClick}
              >
                <Camera className="h-4 w-4 mr-2" />
                Take Photo
              </Button>
              <input 
                type="file" 
                ref={fileInputRef} 
                className="hidden" 
                accept="image/*" 
                multiple
                onChange={handleFileChange}
              />
            </div>
          </Card>

          {/* Photos Grid */}
          {photos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {photos.map(photo => (
                <Card key={photo.id} className="border border-border shadow-soft overflow-hidden">
                  <div className="relative">
                    <img 
                      src={photo.src} 
                      alt={photo.caption} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2 flex gap-2">
                      <button 
                        onClick={() => handleEdit(photo)}
                        className="p-1 bg-white rounded-full shadow-md hover:bg-gray-100"
                      >
                        <Edit2 className="h-4 w-4 text-healthnest-primary" />
                      </button>
                      <button 
                        onClick={() => handleDelete(photo.id)}
                        className="p-1 bg-white rounded-full shadow-md hover:bg-gray-100"
                      >
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="font-medium truncate">{photo.caption}</p>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center p-12 bg-gray-50 rounded-lg border border-dashed border-gray-300">
              <Camera className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-600 mb-2">No Photos Yet</h3>
              <p className="text-gray-500 mb-4">Upload some photos to get started!</p>
              <Button 
                onClick={handleUploadClick}
                className="bg-healthnest-primary text-white hover:bg-healthnest-primary/90"
              >
                <Upload className="h-4 w-4 mr-2" />
                Add Photos
              </Button>
            </div>
          )}

          {/* Edit Modal */}
          {showEditModal && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
              <Card className="w-full max-w-md p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">Edit Caption</h3>
                  <button 
                    onClick={() => setShowEditModal(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <input
                  type="text"
                  value={editCaption}
                  onChange={(e) => setEditCaption(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md mb-4"
                  placeholder="Enter photo caption"
                />
                <div className="flex justify-end gap-2">
                  <Button 
                    variant="outline" 
                    onClick={() => setShowEditModal(false)}
                  >
                    Cancel
                  </Button>
                  <Button 
                    onClick={saveCaption}
                    className="bg-healthnest-primary text-white hover:bg-healthnest-primary/90"
                  >
                    Save
                  </Button>
                </div>
              </Card>
            </div>
          )}
        </div>
      </PageTransition>
    </div>
  );
};

export default PhotoInsert;
