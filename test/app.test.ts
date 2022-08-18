const request = require('supertest');
const app  =  require('../index');

describe('TODO API',()=>{
    it('GET All Todos',()=>request(app).get('/').expect(200).expect('Content-Type',/json/));

    it('GET Single Todo',()=>{

    });

    it('GET Single Todo if not found',()=>{

    });

    it('POST Add Todo',()=>{

    });

    it('POST Add Todo validate request body',()=>{

    });
});