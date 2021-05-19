import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateNoteDto } from '../notes/dto/createNote.dto';
import { NotesService } from './notes.service';
import { Note } from './interfaces/Note'


@Controller('notes')
export class NotesController {


    constructor(private noteService: NotesService) { };
    //Get Todas las Notas (Localhost:port/notes)
    @Get()
    async getNotes(): Promise<Note[]> {
        return this.noteService.getNotes();
    }
    // Get una Nota (Localhost:port/notes)
    @Get('/:desc')
    async getNote(@Param('desc') desc: string) {

        return this.noteService.getNote(desc);
    }

    // Crear nota (Localhost:port/notes)
    @Post()
    async createNote(@Body() note: CreateNoteDto): Promise<string> {

        const { description, favorite } = note;
        if (!description) {
            return 'No existe Descripcion';
        }
        if (favorite == null) {
            return 'No existe favorite';
        }
        return this.noteService.createNote(note);
    }
    // Update Nota Mracar (Localhost:port/notes)
    @Put(':/id')
    async marcarNota(@Param('id') id: string): Promise<string> {

        return this.noteService.markNote(id);
    }
    // Get Favorites (Localhost:port/notes)
    @Get('/favorites')
    async getFavorites(): Promise<Note[]> {

        return this.noteService.getFavoritesNotes();
    }



}
