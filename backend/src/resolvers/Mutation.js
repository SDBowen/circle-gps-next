const Mutations = {
  async createDevice(parent, args, ctx, info) {
    // TODO check if user logged in

    const device = await ctx.db.mutation.createDevice(
      {
        data: { ...args }
      },
      info
    );

    console.log(device);

    return device;
  },
  updateDevice(parent, args, ctx, info) {
    const deviceUpdates = { ...args };

    delete deviceUpdates.id;

    return ctx.db.mutation.updateDevice(
      {
        data: deviceUpdates,
        where: { id: args.id }
      },
      info
    );
  },
  async deleteDevice(parent, args, ctx, info) {
    const where = { id: args.id };

    const device = await ctx.db.query.device({ where }, '{id deviceName}');

    // TODO check if device belongs to user

    return ctx.db.mutation.deleteDevice({ where }, info);
  }
};

module.exports = Mutations;
