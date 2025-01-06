import { User } from "@/gen/jfds-api-client";

export const formatUserName = (user: User) => {
  return `${user.firstName} ${user.lastName}`;
};
