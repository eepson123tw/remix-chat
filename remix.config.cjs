/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  tailwind: true,
  postcss: true,
  dev: {
    // ...any other options you want to set go here...
    manual: true,
    port: 8080,
  },
};
