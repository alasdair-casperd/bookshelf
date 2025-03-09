/**
 * A type representing a book.
 */
export type Book = {
  id: string;
  title: string;
  subtitle?: string;
  authors?: string[];
  publisher?: string;
  publishedDate?: string;
  description?: string;
  image?: string;
  isbn?: string;
  page_count?: number;
};
