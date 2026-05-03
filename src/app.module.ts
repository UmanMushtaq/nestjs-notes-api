import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesModule } from './notes/notes.module';
import { NotesController } from './notes/notes.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    NotesModule],
  controllers: [AppController, NotesController],
  providers: [AppService],
})
export class AppModule {}
