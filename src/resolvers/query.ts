import {User, Book, Rental } from '../models';

export const Query = {
    users: async () => {
        return await User.where();
    },
    books: async () => {
        return await Book.where();
    },
    rentals: async () => {
        return await Rental.where();
    },
}