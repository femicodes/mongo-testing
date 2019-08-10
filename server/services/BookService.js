import Book from '../models/Book';

class BookService {
  static async getAllBooks() {
    try {
      return await Book.find();
    } catch (error) {
      throw error;
    }
  }

  static async addBook(newBook) {
    try {
      const book = new Book(newBook);
      return await book.save();
    } catch (error) {
      throw error;
    }
  }

  static async updateBook(id, bookUpdate) {
    try {
      const bookToUpdate = await Book.findOneAndUpdate(id, bookUpdate, { new: true });
      if (!bookToUpdate) return null;
      return bookToUpdate;
    } catch (error) {
      throw error;
    }
  }

  static async getABook(id) {
    try {
      const theBook = await Book.findById(id).exec();
      return theBook;
    } catch (error) {
      throw error;
    }
  }

  static async deleteBook(id) {
    try {
      const theBook = await Book.findByIdAndDelete(id).exec();
      return theBook;
    } catch (error) {
      throw error;
    }
  }
}

export default BookService;
