
import mongoose, { Schema, Document } from 'mongoose';

export interface IChildProfile extends Document {
  name: string;
  age: string;
  dateOfBirth?: Date;
  gender?: string;
  weight?: string;
  height?: string;
  bloodType?: string;
  allergies?: string[];
  createdAt: Date;
  updatedAt: Date;
}

const ChildProfileSchema: Schema = new Schema({
  name: { type: String, required: true },
  age: { type: String, required: true },
  dateOfBirth: { type: Date },
  gender: { type: String },
  weight: { type: String },
  height: { type: String },
  bloodType: { type: String },
  allergies: [{ type: String }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}, {
  timestamps: true
});

// Only create the model if it doesn't exist already (for hot reloading)
export default mongoose.models.ChildProfile || 
  mongoose.model<IChildProfile>('ChildProfile', ChildProfileSchema);
