import { User, Book, Rental } from '../models';

export const Mutation = {
    addUser: async (_, args) => {
        return await User.create(args);
    },
    editUser: async (_, args) => {
        return await User.find(args.id).update(args);
    },
    deleteUser: async (_, args) => {
        return await User.delete(args.id);
    },
    addBook: async (_, args) => {
        return await Book.create(args);
    },
    rentABook: async (_, args) => {
        return await Rental.create(args);
    }
}