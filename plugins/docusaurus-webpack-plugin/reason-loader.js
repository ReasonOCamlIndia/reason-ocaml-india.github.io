const cp = require("child_process");
module.exports = function (source) {
  let file = this.resourcePath;
  console.log(Object.keys(this));
  // return cp
  //   .execSync(
  //     `melc -pp 'refmt --print binary' -impl ${file} -o ${file.replace(
  //       ".re",
  //       ".js",
  //     )}`,
  //   )
  //   .toString();
  return "module.exports = 'todo'";
};
