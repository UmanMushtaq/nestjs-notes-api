import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CreateNoteDto } from 'src/presentation/dtos/create-dto';
import { NotesService } from './notes.service';
import { Note } from 'src/infrastructre/Notes';
import { ParseUuidPipe } from 'src/common/pipes/parse-uuid.pipes';
import { ApiKeyGuard } from 'src/common/guards/api-key.guards';


@UseGuards(ApiKeyGuard)
@Controller('notes')
export class NotesController {

    constructor(private readonly notesService:NotesService){}

    @Post('/')
    async createNote(@Body() dto:CreateNoteDto): Promise<Note>{
        return  this.notesService.createNote(dto)
    }

    @Get('/')
    async getNotes():Promise<Note[]>{
        return this.notesService.getNotes()
    }

    @Get('/:id' )
    async getNoteById(@Param('id', ParseUuidPipe) id: string):Promise<Note>{
        return this.notesService.getNoteById(id);
    }   
    @Delete('/:id')
    async deleteNoteById(@Param('id') id: string): Promise<boolean>{
        return this.notesService.deleteNoteById(id);
    }

}
