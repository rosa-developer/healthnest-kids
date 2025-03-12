
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Photo, photoCategories } from '@/types/photo';

interface EditPhotoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  photo: Photo | null;
  editCaption: string;
  editCategory: string;
  onEditCaptionChange: (caption: string) => void;
  onEditCategoryChange: (category: string) => void;
  onSave: () => void;
}

const EditPhotoModal: React.FC<EditPhotoModalProps> = ({
  open,
  onOpenChange,
  photo,
  editCaption,
  editCategory,
  onEditCaptionChange,
  onEditCategoryChange,
  onSave
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit Photo Details</DialogTitle>
        </DialogHeader>
        
        {photo && (
          <div className="grid gap-4 py-2">
            <div className="mb-2">
              <img 
                src={photo.src} 
                alt={photo.caption} 
                className="w-full h-40 object-cover rounded-md"
              />
            </div>
            
            <div className="grid gap-2">
              <label htmlFor="caption" className="text-sm font-medium">Caption</label>
              <Input
                id="caption"
                value={editCaption}
                onChange={(e) => onEditCaptionChange(e.target.value)}
                className="w-full"
                placeholder="Enter photo caption"
              />
            </div>
            
            <div className="grid gap-2">
              <label htmlFor="category" className="text-sm font-medium">Category</label>
              <Select
                value={editCategory}
                onValueChange={onEditCategoryChange}
              >
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {photoCategories.slice(1).map(category => (
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
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>
          <Button
            onClick={onSave}
            className="bg-healthnest-primary text-white hover:bg-healthnest-primary/90"
          >
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditPhotoModal;
