import { Subjects } from "./subjects";

// This file contains all types of data emited by events

///////////////////
export enum skillActiveStatus {
  active = "active",
  inactive = "inactive",
}

export enum resourceActiveStatus {
  active = "active",
  inactive = "inactive",
}

export enum userActiveStatus {
  active = "active",
  inactive = "inactive",
}

export interface UserCreated {
  subject: Subjects.UserCreated;
  data: {
    _id: string;
    email: string;
    dbStatus?: userActiveStatus;
  };
}

export interface UserUpdated {
  subject: Subjects.UserUpdated;
  data: {
    _id: string;
    email: string;
    dbStatus?: userActiveStatus;
  };
}

export interface UserDeleted {
  subject: Subjects.UserDeleted;
  data: {
    _id: string;
    email: string;
    dbStatus?: userActiveStatus;
  };
}

// All Events Related to Skills Service
export interface SkillCreatedEvent {
  subject: Subjects.SkillCreated;
  data: {
    _id: string;
    userId: string;
    name: string;
    version: number;
    resourceId?: string[] | undefined;
    dbStatus?: skillActiveStatus;
  };
}

export interface SkillUpdatedEvent {
  subject: Subjects.SkillUpdated;
  data: {
    _id: string;
    userId: string;
    name: string;
    version: number;
    resourceId?: string[] | undefined;
    dbStatus?: skillActiveStatus;
  };
}

export interface SkillDeletedEvent {
  subject: Subjects.SkillDeleted;
  data: {
    _id: string;
    userId: string;
    name: string;
    version: number;
    resourceId?: string[] | undefined;
    dbStatus?: skillActiveStatus;
  };
}

///////////////////
// All Events Related to Resource Service
export interface ResourceCreatedEvent {
  subject: Subjects.ResourceCreated;
  data: {
    _id: string;
    userId: string;
    name: string;
    learningStatus: number;
    version: number;
    type: string | undefined;
    skillId?: string[] | undefined;
    description?: string | undefined;
    dbStatus?: resourceActiveStatus;
  };
}

export interface ResourceUpdatedEvent {
  subject: Subjects.ResourceUpdated;
  data: {
    _id: string;
    userId: string;
    name: string;
    learningStatus: number;
    version: number;
    type: string | undefined;
    skillId?: string[] | undefined;
    description?: string | undefined;
    dbStatus?: resourceActiveStatus;
  };
}

export interface ResourceDeletedEvent {
  subject: Subjects.ResourceDeleted;
  data: {
    _id: string;
    userId: string;
    name: string;
    learningStatus: number;
    version: number;
    type: string | undefined;
    skillId?: string[] | undefined;
    description?: string | undefined;
    dbStatus?: resourceActiveStatus;
  };
}
