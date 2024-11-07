import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from "@ngrx/signals";
import { BookData } from "../types";
import { withDevtools } from "@angular-architects/ngrx-toolkit";
import { BookService } from "./books.services";
import { computed, inject } from "@angular/core";
import { rxMethod } from "@ngrx/signals/rxjs-interop";
import { pipe, switchMap } from "rxjs";
import { tapResponse } from "@ngrx/operators";
import { setEntities, withEntities } from "@ngrx/signals/entities";

export const BookStore = signalStore(
    withDevtools('book-store'),
    withEntities<BookData>(),
    withMethods((store) => {
        const service = inject(BookService);
        return {
            _load: rxMethod<void>(
                pipe(
                    switchMap(() =>
                        service.loadBookList().pipe(
                            tapResponse({
                                next(value) {
                                    patchState(store, setEntities((value)));
                                },
                                error(error) {
                                    console.log(error);
                                },
                            }),
                        ),
                    ),
                ),
            ),
        }
    }),
    withComputed((store) => {
        return {
            getBookList: computed(() => store.entities())
        }
    }),
    withHooks({
        onInit(store) {
          store._load();
        },
      }),
);