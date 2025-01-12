/** @type {import('next').NextConfig} */

// from https://github.com/gregrickaby/nextjs-github-pages

const nextConfig = {
  /**
   * Enable static exports for the App Router.
   * https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
  output: "export",

  /**
   * Set base path. This is the slug of your GitHub repository.
   * https://nextjs.org/docs/app/api-reference/next-config-js/basePath
   */
  //   only for github pages
  basePath: "/nextjs-testing",

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
