'use strict';

/**
 *  comment-on-a-hike controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::comment-on-a-hike.comment-on-a-hike', ({ strapi }) => ({
    async find(ctx) {
      ctx.query = { ...ctx.query, populate: ['author.avatar'] }
      // console.log(ctx.state)
      // Calling the default core action
      const { data, meta } = await super.find(ctx);
  
      // some more custom logic
  
      return { data, meta };
    },
    async findOne(ctx) {
      ctx.query = { ...ctx.query, populate: ['author.avatar','rule'] }
      // console.log(ctx.state)
      // Calling the default core action
      const { data, meta } = await super.findOne(ctx);
      // console.log('dataControler', data)
      // some more custom logic
  
      return { data, meta };
    },
    async update(ctx) {
      // some logic here
      // console.log('ctx', ctx.request.header)
      // console.log('response', ctx.params)
      const { id } = ctx.params
      // console.log('user', ctx.state.user.role.id)
      ctx.query = { ...ctx.query, populate: ['author.avatar'] }
      // ctx.params.populate='author'
      const result = await super.findOne(ctx);
      // console.log('data', result)
      const res = await strapi.entityService.findOne('api::comment-on-a-hike.comment-on-a-hike', id, {
        populate: ["author",'on_a_hike']
      })
      // console.log(res)
      let response;
      // console.log('order', author.id)
      if (!res) {
        return ctx.badRequest(  'Not Found')
      }
      if (res.author.id !== ctx.state.user.id && ctx.state.user.role.id!==1) {
        return ctx.badRequest(  'You have no charters to this action')
      }
      else {
        response = await super.update(ctx);
      }
  
  
      // some more logic
  
      return response;
    },
    async delete(ctx) {
      // some logic here
      // console.log('ctx', ctx.request.header)
      // console.log('response', ctx.params)
      const { id } = ctx.params
      // console.log('user', ctx.state.user.role.id)
      ctx.query = { ...ctx.query, populate: ['author.avatar'] }
      // ctx.params.populate='author'
      const result = await super.findOne(ctx);
      // console.log('data', result)
      const res = await strapi.entityService.findOne('api::comment-on-a-hike.comment-on-a-hike', id, {
        populate: ["author"]
      })
      // console.log(res)
      let response;
      // console.log('order', author.id)
      if (!res) {
        return ctx.badRequest(  'Not Found')
      }
      if (res.author.id !== ctx.state.user.id && ctx.state.user.role.id!==1) {
        return ctx.badRequest(  'You have no charters to this action')
      }
      else {
        response = await super.delete(ctx);
      }
  
  
      // some more logic
  
      return response;
    }
  }));
