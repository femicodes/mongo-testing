import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';
import Book from '../models/Book';

chai.use(chaiHttp);

const { expect } = chai;
const baseURI = '/api/v1';

describe('Books', () => {
  beforeEach((done) => {
    const newBook = new Book({
      title: 'Oliver twist',
      author: 'Charles Dickens',
      pages: 200,
      language: 'English',
    });
    newBook.save(() => {
      done();
    });
  });
  afterEach((done) => {
    Book.collection.drop();
    done();
  });

  it('should return all books', (done) => {
    chai
      .request(app)
      .get(`${baseURI}/books`)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('Books retrieved');
        expect(res.body).to.be.an('object');
        done();
      });
  });
});
