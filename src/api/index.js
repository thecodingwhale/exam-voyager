import { db } from './database';

const getPost = (postId) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
        const posts = db.get('posts');
        const post = posts.find({ id: postId });
        const isPostIdDoesNotExists = post.size().value() === 0;
        if (isPostIdDoesNotExists) {
          reject({
            message: 'No post id found',
          });
          return false;
        }
        resolve({
          data: post.value(),
        })
      },
      1000,
    );
  });
};

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

const deletePostById = (postId) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
        const posts = db.get('posts');
        const post = posts.find({ id: postId });
        const isPostIdDoesNotExists = post.size().value() === 0;
        if (isPostIdDoesNotExists) {
          reject({
            message: 'No post id found',
          });
          return false;
        }
        post.remove({ id: postId }).write();
        resolve(true);
      },
      1000,
    );
  });
};

export default {
  getPost,
	getPosts,
  deletePostById,
};