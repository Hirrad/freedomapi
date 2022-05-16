'use strict';

/**
 * on-a-hike service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::on-a-hike.on-a-hike');
