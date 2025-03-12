
import mongoose from 'mongoose';

/**
 * Define the shape of our cached MongoDB connection
 */
interface MongooseConnection {
  conn: mongoose.Connection | null;
  promise: Promise<mongoose.Connection> | null;
}

/**
 * Global MongoDB connection variable
 */
let cached: MongooseConnection = (global as any).mongoose || { conn: null, promise: null };

if (!(global as any).mongoose) {
  (global as any).mongoose = cached;
}

/**
 * Connects to MongoDB using Mongoose
 */
export async function connectToDatabase() {
  if (cached.conn) {
    console.log('Using existing MongoDB connection');
    return cached.conn;
  }

  if (!cached.promise) {
    const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/healthnest';

    console.log('Connecting to MongoDB...');
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    }).then(mongoose => mongoose.connection);
  }

  try {
    cached.conn = await cached.promise;
    console.log('Connected to MongoDB');
    return cached.conn;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}

/**
 * Disconnects from MongoDB
 */
export async function disconnectFromDatabase() {
  if (cached.conn) {
    await mongoose.disconnect();
    cached.conn = null;
    cached.promise = null;
    console.log('Disconnected from MongoDB');
  }
}
