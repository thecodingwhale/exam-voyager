import shortid from 'shortid';
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
        });
      },
      500,
    );
  });
};

const getPosts = (page = 1, limit = 5) => {
  return new Promise((resolve, reject) => {
    const start = (page * limit) - limit;
    const end = page * limit;
    const posts = db.get('posts').reverse().slice(start, end).value();
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
     	500,
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
            message: 'No post id found.',
          });
          return false;
        }
        posts.remove({ id: postId }).write();
        resolve(true);
      },
      500,
    );
  });
};

const validatePost = (id, title) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
        const post = db.get('posts').find({ title });
        const isPostTitleExists = post.size().value() !== 0;
        if (isPostTitleExists && post.value().id !== id) {
          reject({
            message: 'Title was already added.',
          });
          return false;
        }
        resolve(true);
      },
      500,
    );
  });
}

const createPost = ({ title, content }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const posts = db.get('posts');
      const post = posts.find({ title: title });
      const isPostTitleExists = post.size().value() !== 0;
      if (isPostTitleExists) {
        reject({
          message: 'Title was already added.',
        });
        return false;
      }
      const newPost = {
        id: shortid.generate(),
        title,
        content
      }
      db.get('posts')
        .push(newPost)
        .write();
      resolve({
        data: newPost,
      });
    }, 500);
  });
}

const updatePost = (id , { title, content }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const post = db.get('posts').find({ title });
      const isPostTitleExists = post.size().value() !== 0;
      if (isPostTitleExists && post.value().id !== id) {
        reject({
          message: 'Title was already added.',
        });
        return false;
      }
      db.get('posts')
        .find({ id })
        .assign({ title, content })
        .write();
      resolve(true);
    }, 500);
  });
}

export default {
  getPost,
	getPosts,
  deletePostById,
  validatePost,
  createPost,
  updatePost,
};