import type { Book } from "~/types/Book";

export const useGoogleBooks = () => {
  /**
   * Fetch book details by book ID
   */
  const getBook = async (book_id: string): Promise<Book | undefined> => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes/${book_id}`
    );
    const data = await response.json();

    if (data.error) return undefined;
    const images = data.volumeInfo.imageLinks;
    const image = images.medium ?? images.small ?? images.thumbnail;
    const book: Book = {
      id: book_id,
      title: data.volumeInfo.title,
      subtitle: data.volumeInfo.subtitle,
      authors: data.volumeInfo.authors,
      publisher: data.volumeInfo.publisher,
      publishedDate: data.volumeInfo.publishedDate,
      description: data.volumeInfo.description,
      image: image,
    };

    return book;
  };

  return { getBook };
};
