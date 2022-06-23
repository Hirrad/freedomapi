module.exports = {
    routes: [
        { // Path defined with an URL parameter
          method: 'POST',
          path: '/blogs/:id/comment-blog', 
          handler: 'blog.commentBlog',
        },
        // { // Path defined with an URL parameter
        //     method: 'GET',
        //     path: '/blogs/:id/comment-blog', 
        //     handler: 'blog.commentBlogGet'
        //   }
      ]
}