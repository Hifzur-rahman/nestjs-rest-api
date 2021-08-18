import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { TodoModule } from '../src/todo/todo.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, TodoModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', async () => {
    const test = await request(app.getHttpServer())
      .get('/')
    expect(test.text).toBe('Hello World!')
  });


  it('/todos (GET)', async () => {
    const getAllData = await request(app.getHttpServer())
      .get('/todos')
    expect(getAllData.text)
  });

  it('/todos/:id (GET)', async () => {
    const getIdbyUser = await request(app.getHttpServer())
      .get('/todos/611bf6c5b5a8934b044708ae')
    expect(getIdbyUser.body._id).toBe('611bf6c5b5a8934b044708ae')
  });


  it('/todos/:id (PUT)', async () => {
    const putIdbyUser = await request(app.getHttpServer())
      .put('/todos/611bf6c5b5a8934b044708ae').send({
        "title": "test-e2e",
        "description": "just a new todo",
      })
    expect(putIdbyUser.body._id).toBe('611bf6c5b5a8934b044708ae')
  });


  it('/todos (POST)', async () => {
    const postBody = await request(app.getHttpServer())
      .post('/todos').send({
        "title": "test-e2e",
        "description": "im testing e2e testcase",
      })
    expect(postBody.text)
  });


  it('/todos/:id (DELETE)', async () => {
    const deletebyId = await request(app.getHttpServer())
      .delete('/todos/611ccdd8039e282525f5084d')
    expect(deletebyId.body._id).toBe('611ccdd8039e282525f5084d')
  });

});
