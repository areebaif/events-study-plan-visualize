// this file contains all the channel names different services will subscribe to recieve, create event
export enum Subjects {
  SkillCreated = "skill:created",
  SkillUpdated = "skill:updated",
  SkillDeleted = "skill:deleted",
  ResourceCreated = "resource:created",
  ResourceUpdated = "resource:updated",
  ResourceDeleted = "resource:deleted",
  UserCreated = "user:created",
  UserUpdated = "user:updated",
  UserDeleted = "user:deleted",
}
