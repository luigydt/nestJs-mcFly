import { Schema } from 'mongoose';

export const Note = new Schema({
    id: {
        type: String,
        lowercase: true
    },
    description: {
        type: String,
        lowercase: true
    },
    favorite: {
        type: Boolean,
        default: false
    }
});

