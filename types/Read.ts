/**
 * A 'read' represents a record that a user has read a particular book, along with a date and any review information provided.
 */
export type Read = {
  id: string;
  book_id: string;
  date: Date;
  rating?: number;
  review?: string;
};
