import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesController } from './notes/notes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { NotesService } from './notes/notes.service';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [ MongooseModule.forRoot('mongodb://localhost/notes'), NotesModule],
  controllers: [AppController, NotesController],
  providers: [AppService, NotesService],
})
export class AppModule { }
