const { forwardTo } = require('prisma-binding');

const Query = {
  devices: forwardTo('db'),
  device: forwardTo('db')

  // async devices(parent, args, ctx, info) {
  //   const devices = await ctx.db.query.devices();

  //   return devices;
  // }
};

module.exports = Query;
