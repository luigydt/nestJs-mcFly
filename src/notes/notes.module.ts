import { Module } from '@nestjs/common';
import { NotesService } from './notes.service'
import { NotesController } from './notes.controller'
import { MongooseModule } from '@nestjs/mongoose';
import { Note } from '../schemas/note.schema'

@Module({
    imports: [MongooseModule.forFeature([
        {
            name: 'Note',
            schema: Note
        }
    ])],
    controllers: [NotesController],
    providers: [NotesService]
})
export class NotesModule { }
