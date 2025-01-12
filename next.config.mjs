/** @type {import('next').NextConfig} */

// from https://github.com/gregrickaby/nextjs-github-pages

const nextConfig = {
  /**
   * Enable static exports for the App Router.
   * https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
  output: "export",

  basePath: "/nextjs-testing",

  // TODO doesn't work:
  assetPrefix: "/nextjs-testing/", // needs trailing slash!
  
  // https://nextjs.org/docs/app/api-reference/next-config-js/basePath
  // https://stackoverflow.com/a/67971972
  // https://wallis.dev/blog/next-js-basepath-and-assetprefix

  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   * https://nextjs.org/docs/app/api-reference/components/image#unoptimized
   */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
