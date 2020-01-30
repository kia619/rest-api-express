var should = require('chai').should(),
    expect = require('chai').expect,
    supertest = require('supertest');
    api = supertest('http://localhost:5000');

    describe('Admin, on User App, ', function () {

      let userid;

        it('should be able to create a user', function (done) {
          api.post('/user')
              .set('Content-Type', 'application/json')
              .send({
                  first_name: 'Kianoush',
                  last_name: 'Nesvaderani',
                  email: 'kia619@gmail.com',
                  industry: 'Software'
              })
              .expect(201)
              .end(function (err, res) {
                  expect(res.body.success).to.equal('true');
                  userid = res.body.userid;
                  done();
              });
            });

         it('should be able to get the user', function (done) {
          api.get('/user/' + userid)
                  .set('Content-Type', 'application/json')
                  .expect(200)
                  .end(function (err, res) {
                      expect(res.body.first_name).to.equal('Kianoush');
                      expect(res.body.last_name).to.equal('Nesvaderani');
                      expect(res.body.email).to.equal('kia619@gmail.com');
                      done();
                  });
                });

          it('should be able to creat a user without Industry', function (done) {
            api.post('/user')
                .set('Content-Type', 'application/json')
                .send({
                    first_name: 'Kianoush',
                    last_name: 'Nesvaderani',
                    email: 'kia619@gmail.com'
                    })
                    .expect(201)
                    .end(function (err, res) {
                        expect(res.body.success).to.equal('true');
                        done();
                    });
                  });

            it('should NOT be able to creat a user without First Name', function (done) {
              api.post('/user')
                  .set('Content-Type', 'application/json')
                  .send({
                      last_name: 'Nesvaderani',
                      email: 'kia619@gmail.com'
                      })
                      .expect(400)
                      .end(function (err, res) {
                          expect(res.body.error).to.equal('First name required');
                          done();
                      });
                    });

              it('should NOT be able to creat a user without Last Name', function (done) {
                api.post('/user')
                    .set('Content-Type', 'application/json')
                    .send({
                        first_name: 'Kianoush',
                        email: 'kia619@gmail.com'
                        })
                        .expect(400)
                        .end(function (err, res) {
                            expect(res.body.error).to.equal('Last name required');
                            done();
                        });
                      });

                it('should NOT be able to creat a user without Email', function (done) {
                  api.post('/user')
                      .set('Content-Type', 'application/json')
                      .send({
                          first_name: 'Kianoush',
                          last_name: 'Nesvaderani'
                          })
                          .expect(400)
                          .end(function (err, res) {
                              expect(res.body.error).to.equal('Email required');
                              done();
                          });
                        });
       
  });
