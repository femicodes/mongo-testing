import BookService from '../services/BookService';
import Response from '../utils/Response';

class BookController {
  static async getAllBooks(req, res) {
    try {
      const book = await BookService.getAllBooks();
      Response.success(res, 200, book, 'Books retrieved');
    } catch (error) {
      Response.error(res, 400, 'An error occured');
    }
  }
}

export default BookController;
