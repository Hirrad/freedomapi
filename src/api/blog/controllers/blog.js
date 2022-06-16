'use strict';

/**
 *  blog controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::blog.blog',({ strapi }) =>  ({
    // Method 1: Creating an entirely custom action
    async commentBlog(ctx) {
        console.log(ctx)
        ctx.request.body.author=ctx.state.user;
        ctx.request.body.blog=ctx.params.id
        // ctx.request.body.publishedAt=new Date();
        const entity = await strapi.service('api::comment-blog.comment-blog').create({
            data:{
                // publishedAt: new Date(),
                ...ctx.request.body
            }
        });
        
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);
        // return entity;
    
    // //   try {
        
    // //   } catch (err) {
    // //     ctx.body = err;
    // //   }
    // }

    }

}
))
