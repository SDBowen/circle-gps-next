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
  }
};

module.exports = Mutations;
