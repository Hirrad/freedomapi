'use strict';

/**
 *  blog controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::blog.blog', ({ strapi }) => ({
    // Method 1: Creating an entirely custom action
    async commentBlog(ctx) {
        const body = { ...ctx }
        // console.log(ctx.state.user)
        // const { id, username, role, confirmed, blocked } = body.state.user

        // const user = await strapi.entityService.findOne(
        //     'plugin::users-permissions.user',
        //     id,
        //     { populate: ['avatar'] }
        // );
        // const { id: idAvatar,
        //     url: urlAvatar,
        //     ext: extAvatar,
        //     name: nameAvatar } = user.avatar
        // const { small: smallAvatar,
        //     thumbnail: thumbnailAvatar } = user.avatar.formats
        // console.log(user)
        // console.log(body.request)
        body.request.body.author = body.state.user.id;
        body.request.body.blog = body.params.id;
        // body.request.body.authorName = user;
        // body.request.body.user = {
        //     id,
        //     username,
        //     role: role.name,
        //     avatar: body.state.user.avatar,
        //     confirmed,
        //     blocked,
        //     avatar: {
        //         idAvatar,
        //         smallAvatar,
        //         thumbnailAvatar,
        //         urlAvatar,
        //         extAvatar,
        //         nameAvatar
        //     }
        // };

        const entity = await strapi.service('api::comment-blog.comment-blog').create({
            data: {
                ...body.request.body,
            }
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
        return this.transformResponse(sanitizedEntity);
    }
}
))
