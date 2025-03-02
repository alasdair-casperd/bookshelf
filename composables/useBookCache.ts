import type { Book } from "~/types/Book";
const { getBook } = useGoogleBooks();
const cache = ref<Record<string, Book>>({});

export const useBookCache = () => {
  const get = async (book_id: string) => {
    if (cache.value[book_id]) {
      return cache.value[book_id];
    }

    const book = await getBook(book_id);
    if (!book) return undefined;
    cache.value[book_id] = book;
    return book;
  };

  return { get };
};
