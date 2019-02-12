import { db } from './database';

const getPosts = (page = 1, limit = 5) => {
  return new Promise((resolve, reject) => {
    const start = (page * limit) - limit;
    const end = page * limit;
    const posts = db.get('posts').slice(start, end).value();
    const totalPosts = db.get('posts').size().value();

    setTimeout(
      () => {
        resolve({
          data: posts,
          meta: {
            total: totalPosts,
            limit: limit,
          }
        });
      },
     	1000,
    );
  });
};

export default {
	getPosts,
};