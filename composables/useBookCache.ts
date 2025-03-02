import type { Book } from "~/types/Book";
const { getBook } = useGoogleBooks();

export const useBookCache = () => {
  const cache = ref<Record<string, Ref<Book | undefined>>>({});

  const get = (book_id: string) => {
    if (cache.value[book_id]) {
      return cache.value[book_id];
    }

    const book = ref<Book | undefined>(undefined);
    cache.value[book_id] = book;

    (async () => {
      book.value = await getBook(book_id);
    })();
    return book;
  };

  return { get };
};
