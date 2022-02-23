import { Subjects } from "./subjects";

// This file contains all types of data emited by events

///////////////////
// All Events Related to Skills Service
export interface skillCreatedEvent {
  subject: Subjects.SkillCreated;
  data: {
    _id: string;
    userId: string;
    name: string;
    version: number;
    course?: string[] | undefined;
    book?: string | undefined;
  };
}

export interface skillUpdatedEvent {
  subject: Subjects.SkillUpdated;
  data: {
    _id: string;
    userId: string;
    name: string;
    version: number;
    course?: string[] | undefined;
    book?: string | undefined;
  };
}

export interface skillDeletedEvent {
  subject: Subjects.SkillDeleted;
  data: {
    _id: string;
    userId: string;
    name: string;
    version: number;
    course?: string[] | undefined;
    book?: string | undefined;
  };
}

///////////////////
// All Events Related to Programming Language Service
export interface programmingLngCreatedEvent {
  subject: Subjects.ProgrammingLanguageCreated;
  data: {
    _id: string;
    userId: string;
    name: string;
    version: number;
    course?: string | undefined;
    book?: string | undefined;
  };
}

export interface programmingLngUpdatedEvent {
  subject: Subjects.ProgrammingLanguageUpdated;
  data: {
    _id: string;
    userId: string;
    name: string;
    version: number;
    course?: string | undefined;
    book?: string | undefined;
  };
}

export interface programmingLngDeletedEvent {
  subject: Subjects.ProgrammingLanguageDeleted;
  data: {
    _id: string;
    userId: string;
    name: string;
    version: number;
    course?: string | undefined;
    book?: string | undefined;
  };
}

///////////////////
// All Events Related to Course Service
export interface courseCreatedEvent {
  subject: Subjects.CourseCreated;
  data: {
    _id: string;
    userId: string;
    name: string;
    courseURL?: string;
    learningStatus: number;
    skillId?: string[] | undefined;
    languageId?: string[] | undefined;
    version: number;
    description?: string | undefined;
    type?: string | undefined;
  };
}

export interface courseUpdatedEvent {
  subject: Subjects.CourseUpdated;
  data: {
    _id: string;
    userId: string;
    name: string;
    courseURL?: string;
    learningStatus: number;
    skillId?: string[] | undefined;
    languageId?: string[] | undefined;
    version: number;
    description?: string | undefined;
    type?: string | undefined;
  };
}

export interface courseDeletedEvent {
  subject: Subjects.CourseDeleted;
  data: {
    _id: string;
    userId: string;
    name: string;
    courseURL?: string;
    learningStatus: number;
    skillId?: string[] | undefined;
    languageId?: string[] | undefined;
    version: number;
    description?: string | undefined;
    type?: string | undefined;
  };
}

///////////////////
// All Events Related to Book Service
export interface bookCreatedEvent {
  subject: Subjects.BookCreated;
  data: {
    _id: string;
    userId: string;
    name: string;
    learningStatus: number;
    version: number;
    skillId?: string[] | undefined;
    languageId?: string[] | undefined;
    bookAuthor?: string;
    bookVersion?: number;
  };
}

export interface bookUpdatedEvent {
  subject: Subjects.BookUpdated;
  data: {
    _id: string;
    userId: string;
    name: string;
    learningStatus: number;
    version: number;
    skillId?: string[] | undefined;
    languageId?: string[] | undefined;
    bookAuthor?: string;
    bookVersion?: number;
  };
}

export interface bookDeletedEvent {
  subject: Subjects.BookDeleted;
  data: {
    _id: string;
    userId: string;
    name: string;
    learningStatus: number;
    version: number;
    skillId?: string[] | undefined;
    languageId?: string[] | undefined;
    bookAuthor?: string;
    bookVersion?: number;
  };
}

///////////////////
// All Events Related to Expereince Service
export interface projectCreatedEvent {
  subject: Subjects.ProjectCreated;
  data: {
    _id: string;
    userId: string;
    name: string;
    version: number;
    learningStatus: number;
    skillId?: string[] | undefined;
    languageId?: string[] | undefined;
  };
}

export interface projectUpdatedEvent {
  subject: Subjects.ProjectUpdated;
  data: {
    _id: string;
    userId: string;
    name: string;
    version: number;
    learningStatus: number;
    skillId?: string[] | undefined;
    languageId?: string[] | undefined;
  };
}

export interface projectDeletedEvent {
  subject: Subjects.ProjectDeleted;
  data: {
    _id: string;
    userId: string;
    name: string;
    version: number;
    learningStatus: number;
    skillId?: string[] | undefined;
    languageId?: string[] | undefined;
  };
}
