import type { Document, ObjectId } from 'mongoose';
import type { Shelter } from './shelter';

export interface ShelterDocument extends Shelter, Document<ObjectId> {}
