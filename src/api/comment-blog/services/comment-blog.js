'use strict';

/**
 * comment-blog service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::comment-blog.comment-blog', ({ strapi }) => ({
  // Method 1: Creating an entirely custom service
  // async exampleService(...args) {
  //   let response = { okay: true }

  //   if (response.okay === false) {
  //     return { response, error: true }
  //   }

  //   return response
  // },

  // Method 2: Wrapping a core service (leaves core logic in place)
  async find(...args) {
    // Calling the default core controller
    const { results, pagination } = await super.find(...args);
    console.log(results)
    // some custom logic
    results.forEach(result => {
      const { author: { id, username, confirmed, blocked, avatar: { formats: { thumbnail } } } } = result

      // console.log(result)
      result.user = { id, username, confirmed, blocked, thumbnail };
    });

    return { results, pagination };
  },

  // Method 3: Replacing a core service
  // async findOne(entityId, params = {}) {
  //   return strapi.entityService.findOne('api::restaurant.restaurant', entityId, this.getFetchParams(params));
  // }
}));
