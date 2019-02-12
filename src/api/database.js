import shortid from 'shortid';
import low from 'lowdb';
import LocalStorage from 'lowdb/adapters/LocalStorage';

const adapter = new LocalStorage('db');
export const db = low(adapter);

const initMockData = () => {
  db.defaults({
    posts: [{
      id: shortid.generate(),
      title: 'post title',
      content: 'post content',
    }, {
      id: shortid.generate(),
      title: 'post title',
      content: 'post content',
    }, {
      id: shortid.generate(),
      title: 'post title',
      content: 'post content',
    }, {
      id: shortid.generate(),
      title: 'post title',
      content: 'post content',
    }, {
      id: shortid.generate(),
      title: 'post title',
      content: 'post content',
    }, {
      id: shortid.generate(),
      title: 'post title',
      content: 'post content',
    }, {
      id: shortid.generate(),
      title: 'post title',
      content: 'post content',
    }, {
      id: shortid.generate(),
      title: 'post title',
      content: 'post content',
    }, {
      id: shortid.generate(),
      title: 'post title',
      content: 'post content',
    }, {
      id: shortid.generate(),
      title: 'post title',
      content: 'post content',
    }, {
      id: shortid.generate(),
      title: 'post title',
      content: 'post content',
    }, {
      id: shortid.generate(),
      title: 'post title',
      content: 'post content',
    }, {
      id: shortid.generate(),
      title: 'post title',
      content: 'post content',
    }, {
      id: shortid.generate(),
      title: 'post title',
      content: 'post content',
    }, {
      id: shortid.generate(),
      title: 'post title',
      content: 'post content',
    }, {
      id: shortid.generate(),
      title: 'post title',
      content: 'post content',
    }]
  })
  .write();
};

const isEmptyState = Object.entries(db.getState()).length === 0 && db.getState().constructor === Object;
if (isEmptyState) {
  initMockData();
}