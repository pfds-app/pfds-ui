import { v4 as uuid } from "uuid";

export const add_id = <T extends object>(object: T) => ({ ...object, id: uuid() });
