const chai = require('chai');
const chaiHttp = require('chai-http');

const expect = chai.expect;

const siteURL = 'https://pai-test.herokuapp.com';

chai.use(chaiHttp);

describe('Sign In',function(){
  it('GET returns valid web page',function(done){
    chai.request(siteURL).get('/users/sign_in').end(function(err,res){
      console.log(res);
      expect(res).to.have.status(200);
      expect(res).to.be.html;
      done();
    });
  });
});
