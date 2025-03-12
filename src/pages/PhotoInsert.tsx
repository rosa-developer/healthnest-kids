
import React, { useRef } from 'react';
import PageTransition from '@/components/common/PageTransition';
import { useToast } from "@/hooks/use-toast";
import { usePhotoManagement } from '@/hooks/usePhotoManagement';
import { Camera, Search, LayoutGrid, List, Upload, Image as ImageIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

// Importing refactored components
import PhotoGrid from '@/components/photos/PhotoGrid';
import EmptyPhotoState from '@/components/photos/EmptyPhotoState';
import PhotoCategoryTabs from '@/components/photos/PhotoCategoryTabs';
import EditPhotoModal from '@/components/photos/EditPhotoModal';

const PhotoInsert = () => {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const {
    filteredPhotos,
    searchQuery,
    activeCategory,
    showEditModal,
    editCaption,
    editCategory,
    currentPhoto,
    
    setSearchQuery,
    setActiveCategory,
    setShowEditModal,
    setEditCaption,
    setEditCategory,
    
    handleAddPhotos,
    handleDeletePhoto,
    handleEditPhoto,
    saveEditPhoto
  } = usePhotoManagement();

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
      handleAddPhotos(files);
      // Reset file input
      e.target.value = '';
    }
  };

  const renderViewModes = () => (
    <div className="flex items-center space-x-2 bg-muted/50 p-1 rounded-lg">
      <Button variant="ghost" size="sm" className="rounded-md">
        <LayoutGrid className="h-4 w-4 mr-2" />
        Grid
      </Button>
      <Button variant="ghost" size="sm" className="rounded-md">
        <List className="h-4 w-4 mr-2" />
        List
      </Button>
    </div>
  );

  return (
    <div className="main-container">
      <PageTransition>
        <div className="space-y-6">
          {/* Header with background */}
          <div className="relative rounded-xl overflow-hidden h-40 bg-gradient-to-r from-blue-500 to-purple-500 mb-8">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 text-white">
              <h1 className="text-3xl font-bold">Photo Gallery</h1>
              <p className="text-white/80 mt-2">Store and organize your precious memories</p>
            </div>
          </div>

          {/* Search and controls */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search photos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <div className="flex gap-3">
              <Button 
                onClick={handleUploadClick}
                className="bg-primary text-white hover:bg-primary/90"
              >
                <Upload className="h-4 w-4 mr-2" />
                Upload
              </Button>
              <Button 
                variant="outline"
                onClick={handleCaptureClick}
              >
                <Camera className="h-4 w-4 mr-2" />
                Capture
              </Button>
            </div>
          </div>

          {/* Categories and view mode */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <PhotoCategoryTabs 
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
            {renderViewModes()}
          </div>

          {/* Photos Grid/Empty State */}
          <div className="bg-card rounded-xl p-6 shadow-sm">
            <Tabs defaultValue="all" className="w-full">
              <TabsContent value="all" className="mt-0">
                {filteredPhotos.length > 0 ? (
                  <PhotoGrid 
                    photos={filteredPhotos}
                    onEdit={handleEditPhoto}
                    onDelete={handleDeletePhoto}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
                    <div className="bg-muted/40 rounded-full p-4 mb-4">
                      <ImageIcon className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">No photos found</h3>
                    <p className="text-muted-foreground max-w-md mb-6">
                      {searchQuery 
                        ? `No photos match "${searchQuery}". Try another search term.` 
                        : "Upload your first photo to get started."}
                    </p>
                    <Button onClick={handleUploadClick}>
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Photos
                    </Button>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>

          {/* Featured Photos Section */}
          {filteredPhotos.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Featured Photos</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {filteredPhotos.slice(0, 3).map(photo => (
                  <Card key={`featured-${photo.id}`} className="overflow-hidden group">
                    <div className="relative aspect-video">
                      <img 
                        src={photo.src} 
                        alt={photo.caption} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <p className="text-white font-medium truncate">{photo.caption}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          <EditPhotoModal
            open={showEditModal}
            onOpenChange={setShowEditModal}
            photo={currentPhoto}
            editCaption={editCaption}
            editCategory={editCategory}
            onEditCaptionChange={setEditCaption}
            onEditCategoryChange={setEditCategory}
            onSave={saveEditPhoto}
          />

          <input 
            type="file" 
            ref={fileInputRef} 
            className="hidden" 
            accept="image/*" 
            multiple
            onChange={handleFileChange}
          />
        </div>
      </PageTransition>
    </div>
  );
};

export default PhotoInsert;
