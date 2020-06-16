const componentGenerator = require('./component/index.js');
// const themeGenerator = require('./theme/index.js');

module.exports = (plop) => {
  plop.setGenerator('component', componentGenerator);
  // plop.setGenerator('theme', themeGenerator);
};
