'use strict';

/**
 *  on-a-hike controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::on-a-hike.on-a-hike', ({ strapi }) => ({
    // Method 1: Creating an entirely custom action
    async commentOnAHike(ctx) {
        const body = { ...ctx }
        body.request.body.author = body.state.user.id;
        body.request.body.on_a_hike = body.params.id;
        const entity = await strapi.service('api::comment-on-a-hike.comment-on-a-hike').create({
            data: {
                ...body.request.body,
            }
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
        return this.transformResponse(sanitizedEntity);
    }
}
));
