import { Subjects } from "./subjects";

// This file contains all types of data emited by events
export interface skillCreatedEvent {
  // TODO: there should be a transaction number
  subject: Subjects.SkillCreated;
  data: {
    _id: string;
    name: string;
    version: number;
  };
}

export interface skillDeletedEvent {
  // TODO: there should be a transaction number
  subject: Subjects.SkillDeleted;
  data: {
    _id: string;
    version: number;
  };
}
