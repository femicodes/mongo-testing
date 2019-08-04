import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);

const { expect } = chai;
const baseURI = '/api/v1';

describe('main app', () => {
  it('should exist', () => {
    expect(app).to.be.a('function');
  });

  it('should return the API page', (done) => {
    chai
      .request(app)
      .get(baseURI)
      .end((err, res) => {
        expect(res).to.have.status(200);
        done(err);
      });
  });

  it('should return error for any invalid route', (done) => {
    chai
      .request(app)
      .get('/404')
      .end((err, res) => {
        expect(res).to.have.status(404);
        done(err);
      });
  });
});
