'use strict';

/**
 * comment-blog service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::comment-blog.comment-blog');
