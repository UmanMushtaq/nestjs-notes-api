import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Note } from 'src/infrastructre/Notes';
import { CreateNoteDto } from 'src/presentation/dtos/create-dto';


@Injectable()
export class NotesService {
    private notes: Note[] = [];

    async createNote(dto: CreateNoteDto):Promise<Note> {
        const newNote: Note = { id: randomUUID(), title: dto.title, content: dto.content, createdAt: new Date() };
        this.notes.push(newNote);
        return newNote;
    }

    async getNotes() {
        return this.notes;
    }

    async getNoteById(id) {
        const note =this.notes.find(note => note.id === id);
        if (!note){ throw new Error('Note ${id} not found')}
        return note
    }

    async deleteNoteById(id) {
        const index = this.notes.findIndex(note => note.id === id);
        if (index !== -1) {
            this.notes.splice(index, 1);
            return true;
        }
        return false;
    }


}
