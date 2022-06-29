module.exports = {
    routes: [
        { // Path defined with an URL parameter
          method: 'POST',
          path: '/on-a-hikes/:id/comments', 
          handler: 'on-a-hike.commentOnAHike',
        }
        
      ]
}