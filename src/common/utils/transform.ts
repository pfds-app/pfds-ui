import { v4 as uuid } from "uuid";

export const addId = <T extends object>(object: T) => ({
  ...object,
  id: uuid(),
});
