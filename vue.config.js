module.exports = {
  devServer: {
    port: 9927,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    before: require("./mock/index")
  }
};
