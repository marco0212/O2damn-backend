import request from 'supertest';
import { expect } from 'chai';
import app from '../app';

describe('GET /', () => {
  it('should response Greeting text', done => {
    request(app)
      .get('/')
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        expect(res.text).to.eql('Hello Stranger?');
        done();
      });
  });
});

describe('GET /songs', () => {
  it('should response song items', done => {
    request(app)
      .get('/songs')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        expect(res.body.status).to.eql('Ok');
        expect(Array.isArray(res.body.items)).to.eql(true);
        done();
      });
  });
});

describe('GET /song/:id', () => {
  it('should response song item detail', done => {
    const sampleSongId = '5eb3c07fe8b8bf40b2b3c0d4';

    request(app)
      .get(`/song/${sampleSongId}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        expect(res.body.status).to.eql('Ok');
        done();
      });
  });
});
