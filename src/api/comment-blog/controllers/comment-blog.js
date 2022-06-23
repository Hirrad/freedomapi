'use strict';

/**
 *  comment-blog controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::comment-blog.comment-blog', ({ strapi }) => ({
    async find(ctx) {
      ctx.query = { ...ctx.query, populate: ['author.avatar'] }
    // console.log(ctx.state)
      // Calling the default core action
      const { data, meta } = await super.find(ctx);

      // some more custom logic
  
      return { data, meta };
    }
}));
