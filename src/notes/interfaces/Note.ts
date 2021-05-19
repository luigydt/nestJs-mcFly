import { Document } from 'mongoose';

export interface Note extends Document {
    id: string
    description: string,
    favorite: boolean
}