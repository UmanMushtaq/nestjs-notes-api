# Day 1 — NestJS Notes API

A clean CRUD API built with NestJS demonstrating:
- Dependency Injection
- Module/Controller/Service separation
- DTO validation with class-validator
- Proper error handling with NotFoundException

## Stack
- NestJS, TypeScript, Node.js

## Run locally
npm install
npm run start:dev

## Endpoints
POST   /notes       → create note
GET    /notes       → get all notes  
GET    /notes/:id   → get note by id
DELETE /notes/:id   → delete note