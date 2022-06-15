const crypto = require('crypto');
const _ = require('lodash');
const grant = require('grant-koa');
const { sanitizeEntity } = require('strapi-utils');

const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const formatError = error => [
  { messages: [{ id: error.id, message: error.message, field: error.field }] },
];

module.exports = (plugin) => {
    console.log('popal')
    const sanitizeOutput = (user) => {
      const {
        password,
        resetPasswordToken,
        confirmationToken,
        ...sanitizedUser
      } = user; // be careful, you need to omit other private attributes yourself
      return sanitizedUser;
    };
  
    plugin.controllers.user.me = async (ctx) => {
      if (!ctx.state.user) {
        return ctx.unauthorized();
      }
      const user = await strapi.entityService.findOne(
        "plugin::users-permissions.user",
        ctx.state.user.id,
        { populate: ["avatar"] }
      );
  
      ctx.body = sanitizeOutput(user);
    };
  
    plugin.controllers.user.find = async (ctx) => {
      const users = await strapi.entityService.findMany(
        "plugin::users-permissions.user",
        { ...ctx.params, populate: ["avatar"] }
      );
  
      ctx.body = users.map((user) => sanitizeOutput(user));
    };
  
    return plugin;
  };