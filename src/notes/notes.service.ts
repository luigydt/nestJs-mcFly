import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Note } from '../notes/interfaces/Note';
import { Model } from 'mongoose';
import { CreateNoteDto } from '../notes/dto/createNote.dto'

@Injectable()
export class NotesService {

    constructor(@InjectModel('note') private noteModel: Model<Note>) { };

    async getNotes() {
        return await this.noteModel.find();
    }

    async getFavoritesNotes() {

        return await this.noteModel.find({ favorite: true });
    }

    async getNote(desc: string) { //Es una forma// 

        return await this.noteModel.findOne({ $text: { $search: `${desc}`, $caseSensitive: true } })
    }

    async createNote(note: CreateNoteDto) {
        try {
            const newNote = new this.noteModel(note);
            await newNote.save();
            return 'Creado'
        }
        catch {
            return 'No se pudo Crear'
        }
    }

    async markNote(id: string) {
        try {
            await this.noteModel.updateOne(
                { id: id },
                {
                    $set: { "favorite": true }
                }
            )
            return 'Updated'
        }
        catch {

            return 'Cant Updated'
        }
    }
}
