const posts = [{
  id: 1,
  title: 'post title',
  content: 'post content',
}, {
  id: 2,
  title: 'post title',
  content: 'post content',
}, {
  id: 3,
  title: 'post title',
  content: 'post content',
}, {
  id: 4,
  title: 'post title',
  content: 'post content',
}, {
  id: 5,
  title: 'post title',
  content: 'post content',
}, {
  id: 6,
  title: 'post title',
  content: 'post content',
}, {
  id: 7,
  title: 'post title',
  content: 'post content',
}, {
  id: 8,
  title: 'post title',
  content: 'post content',
}, {
  id: 9,
  title: 'post title',
  content: 'post content',
}, {
  id: 10,
  title: 'post title',
  content: 'post content',
}, {
  id: 11,
  title: 'post title',
  content: 'post content',
}, {
  id: 12,
  title: 'post title',
  content: 'post content',
}, {
  id: 13,
  title: 'post title',
  content: 'post content',
}, {
  id: 14,
  title: 'post title',
  content: 'post content',
}, {
  id: 15,
  title: 'post title',
  content: 'post content',
}, {
  id: 16,
  title: 'post title',
  content: 'post content',
}];

const getPosts = (page = 1, limit = 5) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
        resolve({
          posts: posts.slice((page * limit) - limit, page * limit),
          totalPosts: posts.length,
        });
        // resolve(posts.slice(0, 5));
        // resolve(posts.slice(5, 10));
        // resolve(posts.slice(10, 15));
      },
     	1000,
    );
  });
};


export default {
	getPosts,
};