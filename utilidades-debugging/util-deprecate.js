const util = require("util");

const helloPluton = util.deprecate(() => {
  console.log("hello pluton");
}, 'pluton is deprecated. It is not a planet anymore');

helloPluton();