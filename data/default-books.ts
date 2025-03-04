import type { Book } from "~/types/Book";

// An array of google books IDs for particularly aesthetic books
export const default_book_ids = [
  "xbIbEAAAQBAJ",
  "4OJyDwAAQBAJ",
  "JAzxznMKiq4C",
  "j1y9DwAAQBAJ",
  "bkiZDwAAQBAJ",
  "uW_8EAAAQBAJ",
  "4E9bDwAAQBAJ",
  "KsyZEAAAQBAJ",
  "MDksDwAAQBAJ",
  "fasaphktJ8IC",
  "x3tgDwAAQBAJ",
  "WbtvDgAAQBAJ",
  "caumEAAAQBAJ",
];

const default_book_images = [
  "https://books.google.com/books/publisher/content/images/frontcover/xbIbEAAAQBAJ?fife=w400-h600&source=gbs_ap",
  "https://books.google.com/books/publisher/content/images/frontcover/4OJyDwAAQBAJ?fife=w400-h600&source=gbs_ap",
  "https://books.google.com/books/publisher/content/images/frontcover/JAzxznMKiq4C?fife=w400-h600&source=gbs_ap",
  "https://books.google.com/books/publisher/content/images/frontcover/bkiZDwAAQBAJ?fife=w400-h600&source=gbs_ap",
  "https://books.google.com/books/publisher/content/images/frontcover/uW_8EAAAQBAJ?fife=w400-h600&source=gbs_ap",
  "https://books.google.com/books/publisher/content/images/frontcover/KsyZEAAAQBAJ?fife=w400-h600&source=gbs_ap",
  "https://books.google.com/books/publisher/content/images/frontcover/MDksDwAAQBAJ?fife=w400-h600&source=gbs_ap",
  "https://books.google.com/books/content?id=fasaphktJ8IC&printsec=frontcover&img=1&zoom=6&edge=curl&imgtk=AFLRE70taBJVyOAmhRv0S_3Uc9pduRPdZnsr0B0DP30Z-6BtSmiGgG4vKYOeZnan-Kn4hp7kSYS97e19pS2HONV8_U3WhoNWDBIbN4nLY0pFGRNCoEvEPhocBnN2Qi6k9uIE-S9ppLDP&source=gbs_api",
  "http://books.google.com/books/publisher/content?id=x3tgDwAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE70vgGfxylyhnELf9uIpQyZdLrkr19yoCpkgj5YqAjrfP6Jsi3iWp_uOyU6O7S1J9H5lpFLqeV32cyz6am3Jvnl__fJmz_Ha0rt68E7_iTpGI8yubwdf_4IXssncW1yiO9MFiV5y&source=gbs_api",
  "http://books.google.com/books/publisher/content?id=WbtvDgAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE71wAVq_aOou6vzOQgS1psLFbVBUbEdzpp-Fdcg8YUvqKoKets1xBYACdHC0EG_Xm2obtrdJ_k7d9EqaiAiIiYnMPE5OOemJx-O1kFwpj2hsGgZ9BuGBzEeA8vjjepqSLoozK9qi&source=gbs_api",
];

export const default_books: Book[] = default_book_images.map(
  (image, index) => ({
    id: index.toString(),
    title: "Book Title",
    image: image,
  })
);
