/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  browserNodeBuiltinsPolyfill: {
    modules: {
      console: true
    }
  },
  serverDependenciesToBundle: [
    'react',
    'react-paginate',
    'react-google-autocomplete',
    /~react-icons\/(.*)/,
  ],
  // appDirectory: "app",
  assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildPath: "build/index.js",
  tailwind: true,
};
