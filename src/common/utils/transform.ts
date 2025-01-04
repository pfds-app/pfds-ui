import { v4 as uuid } from "uuid";
import { newDateToISOString } from "./date";

export const createTranform = <T extends object>(object: T) => ({
  ...object,
  id: uuid(),
  createdAt: newDateToISOString(),
  updatedAt: newDateToISOString(),
});

export const updateTranform = <T extends object>(object: T) => ({
  ...object,
  updatedAt: newDateToISOString(),
});
