import type { Document, ObjectId } from 'mongoose';
import type { Benefit } from './benefit';

export interface BenefitDocument extends Benefit, Document<ObjectId> {}
