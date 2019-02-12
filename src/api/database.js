import shortid from 'shortid';
import faker from 'faker';
import low from 'lowdb';
import LocalStorage from 'lowdb/adapters/LocalStorage';

const adapter = new LocalStorage('db');
export const db = low(adapter);

const initMockData = () => {
  db.defaults({
    posts: [{
      id: shortid.generate(),
      title: faker.lorem.sentence(),
      content: faker.lorem.text(),
    }, {
      id: shortid.generate(),
      title: faker.lorem.sentence(),
      content: faker.lorem.text(),
    }, {
      id: shortid.generate(),
      title: faker.lorem.sentence(),
      content: faker.lorem.text(),
    }, {
      id: shortid.generate(),
      title: faker.lorem.sentence(),
      content: faker.lorem.text(),
    }, {
      id: shortid.generate(),
      title: faker.lorem.sentence(),
      content: faker.lorem.text(),
    }, {
      id: shortid.generate(),
      title: faker.lorem.sentence(),
      content: faker.lorem.text(),
    }, {
      id: shortid.generate(),
      title: faker.lorem.sentence(),
      content: faker.lorem.text(),
    }, {
      id: shortid.generate(),
      title: faker.lorem.sentence(),
      content: faker.lorem.text(),
    }, {
      id: shortid.generate(),
      title: faker.lorem.sentence(),
      content: faker.lorem.text(),
    }, {
      id: shortid.generate(),
      title: faker.lorem.sentence(),
      content: faker.lorem.text(),
    }, {
      id: shortid.generate(),
      title: faker.lorem.sentence(),
      content: faker.lorem.text(),
    }, {
      id: shortid.generate(),
      title: faker.lorem.sentence(),
      content: faker.lorem.text(),
    }, {
      id: shortid.generate(),
      title: faker.lorem.sentence(),
      content: faker.lorem.text(),
    }, {
      id: shortid.generate(),
      title: faker.lorem.sentence(),
      content: faker.lorem.text(),
    }, {
      id: shortid.generate(),
      title: faker.lorem.sentence(),
      content: faker.lorem.text(),
    }, {
      id: shortid.generate(),
      title: faker.lorem.sentence(),
      content: faker.lorem.text(),
    }]
  })
  .write();
};

const isEmptyState = Object.entries(db.getState()).length === 0 && db.getState().constructor === Object;
if (isEmptyState) {
  initMockData();
}