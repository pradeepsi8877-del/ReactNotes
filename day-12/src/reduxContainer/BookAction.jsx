//Actions

import { BUY_BOOK,SALE_BOOK } from "./BookTypes1";

//action creator for buying a book.

export const buyBook =()=>{
    return{
        type: BUY_BOOK,
    }
}

//Action creator for sale book.

export const saleBook =()=>{
    return{
        type: SALE_BOOK,
    }
}