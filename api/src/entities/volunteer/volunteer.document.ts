import type { Document, ObjectId } from 'mongoose';
import type { Volunteer } from './volunteer';

export interface VolunteerDocument extends Volunteer, Document<ObjectId> {}
