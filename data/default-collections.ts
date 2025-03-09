import type { Collection } from "~/types/Collection";
import { v4 as uuid } from "uuid";

export const default_collections: Collection[] = [
  {
    id: uuid(),
    name: "To Read",
    book_ids: ["xbIbEAAAQBAJ", "4OJyDwAAQBAJ", "j1y9DwAAQBAJ", "bkiZDwAAQBAJ"],
  },
  {
    id: uuid(),
    name: "Reading",
    book_ids: ["uW_8EAAAQBAJ", "4E9bDwAAQBAJ", "KsyZEAAAQBAJ", "MDksDwAAQBAJ"],
  },
  {
    id: uuid(),
    name: "Finished",
    book_ids: ["fasaphktJ8IC", "x3tgDwAAQBAJ", "WbtvDgAAQBAJ", "caumEAAAQBAJ"],
  },
];
