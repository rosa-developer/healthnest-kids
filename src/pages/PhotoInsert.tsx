
import React, { useState, useRef } from 'react';
import PageTransition from '@/components/common/PageTransition';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Camera, Upload, Search, X, Edit2, Trash2, FolderPlus } from 'lucide-react';

// Define the photo type
interface Photo {
  id: string;
  src: string;
  caption: string;
  category: string;
  date: string;
}

const categories = [
  { id: 'all', name: 'All Photos' },
  { id: 'favorites', name: 'Favorites' },
  { id: 'family', name: 'Family' },
  { id: 'milestones', name: 'Milestones' },
  { id: 'activities', name: 'Activities' },
  { id: 'other', name: 'Other' },
];

const PhotoInsert = () => {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [editCaption, setEditCaption] = useState<string>('');
  const [editCategory, setEditCategory] = useState<string>('other');
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

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
          caption: file.name.split('.')[0] || 'New Photo',
          category: 'other',
          date: new Date().toISOString(),
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

  const handleEdit = (photo: Photo) => {
    setSelectedPhoto(photo.id);
    setEditCaption(photo.caption);
    setEditCategory(photo.category);
    setShowEditModal(true);
  };

  const saveEdit = () => {
    if (selectedPhoto) {
      setPhotos(prev => prev.map(photo => 
        photo.id === selectedPhoto 
          ? { ...photo, caption: editCaption, category: editCategory }
          : photo
      ));
      
      setShowEditModal(false);
      setSelectedPhoto(null);
      
      toast({
        title: "Photo Updated",
        description: "Photo details have been updated successfully.",
      });
    }
  };

  // Filter photos based on active category and search query
  const filteredPhotos = photos.filter(photo => {
    const matchesCategory = activeCategory === 'all' || photo.category === activeCategory;
    const matchesSearch = photo.caption.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const currentPhoto = selectedPhoto 
    ? photos.find(photo => photo.id === selectedPhoto)
    : null;

  return (
    <div className="main-container">
      <PageTransition>
        <div className="mb-6">
          <div className="chip bg-healthnest-soft-blue text-healthnest-primary mb-4">
            Photo Gallery
          </div>

          {/* Search and Filter Bar */}
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
                className="bg-healthnest-primary text-white hover:bg-healthnest-primary/90"
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
              <input 
                type="file" 
                ref={fileInputRef} 
                className="hidden" 
                accept="image/*" 
                multiple
                onChange={handleFileChange}
              />
            </div>
          </div>

          {/* Photo Categories */}
          <Tabs 
            defaultValue="all" 
            value={activeCategory}
            onValueChange={setActiveCategory}
            className="mb-6"
          >
            <TabsList className="w-full overflow-x-auto flex justify-start sm:justify-center no-scrollbar p-1">
              {categories.map(category => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="min-w-24"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* Photos Grid */}
          {filteredPhotos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPhotos.map(photo => (
                <Card key={photo.id} className="border border-border shadow-soft overflow-hidden group hover:shadow-medium transition-all duration-300">
                  <div className="relative">
                    <img 
                      src={photo.src} 
                      alt={photo.caption} 
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button 
                        onClick={() => handleEdit(photo)}
                        className="p-1.5 bg-white/90 rounded-full shadow-md hover:bg-white"
                        aria-label="Edit photo"
                      >
                        <Edit2 className="h-4 w-4 text-healthnest-primary" />
                      </button>
                      <button 
                        onClick={() => handleDelete(photo.id)}
                        className="p-1.5 bg-white/90 rounded-full shadow-md hover:bg-white"
                        aria-label="Delete photo"
                      >
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="font-medium truncate">{photo.caption}</p>
                    <p className="text-xs text-muted-foreground">
                      {categories.find(c => c.id === photo.category)?.name || 'Uncategorized'}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center p-12 bg-gray-50 rounded-lg border border-dashed border-gray-300">
              <Camera className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-600 mb-2">
                {searchQuery ? 'No matching photos found' : 'No Photos Yet'}
              </h3>
              <p className="text-gray-500 mb-4">
                {searchQuery 
                  ? 'Try changing your search or uploading new photos.' 
                  : 'Upload some photos to get started!'}
              </p>
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
          <Dialog
            open={showEditModal}
            onOpenChange={(open) => {
              if (!open) setShowEditModal(false);
            }}
          >
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Edit Photo Details</DialogTitle>
              </DialogHeader>
              
              {currentPhoto && (
                <div className="grid gap-4 py-2">
                  <div className="mb-2">
                    <img 
                      src={currentPhoto.src} 
                      alt={currentPhoto.caption} 
                      className="w-full h-40 object-cover rounded-md"
                    />
                  </div>
                  
                  <div className="grid gap-2">
                    <label htmlFor="caption" className="text-sm font-medium">Caption</label>
                    <Input
                      id="caption"
                      value={editCaption}
                      onChange={(e) => setEditCaption(e.target.value)}
                      className="w-full"
                      placeholder="Enter photo caption"
                    />
                  </div>
                  
                  <div className="grid gap-2">
                    <label htmlFor="category" className="text-sm font-medium">Category</label>
                    <Select
                      value={editCategory}
                      onValueChange={setEditCategory}
                    >
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.slice(1).map(category => (
                          <SelectItem key={category.id} value={category.id}>
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}
              
              <DialogFooter>
                <Button
                  variant="outline"
                  onClick={() => setShowEditModal(false)}
                >
                  Cancel
                </Button>
                <Button
                  onClick={saveEdit}
                  className="bg-healthnest-primary text-white hover:bg-healthnest-primary/90"
                >
                  Save Changes
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </PageTransition>
    </div>
  );
};

export default PhotoInsert;
