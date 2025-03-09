import type { Collection } from "./Collection";
import type { Read } from "./Read";

/**
 * A type representing a user of the app.
 */
export type User = {
  id: string;
  username: string;
  email: string;
  date_joined: Date;
  reads: Read[];
  collections: Collection[];
};
