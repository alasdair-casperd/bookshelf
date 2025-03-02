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

    // This URL gives higher resolution images than the image links returned by the API
    const image = `https://books.google.com/books/publisher/content/images/frontcover/${book_id}?fife=w400-h600&source=gbs_ap`;

    const book: Book = {
      id: book_id,
      title: data.volumeInfo.title,
      subtitle: data.volumeInfo.subtitle,
      authors: data.volumeInfo.authors,
      publisher: data.volumeInfo.publisher,
      publishedDate: data.volumeInfo.publishedDate,
      description: data.volumeInfo.description,
      image: image,
      isbn: data.volumeInfo.industryIdentifiers?.find(
        (identifier: any) => identifier.type === "ISBN_13"
      )?.identifier,
      page_count: data.volumeInfo.pageCount,
    };

    return book;
  };

  return { getBook };
};
