import { next } from 'million/compiler';

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
// await import("./env.js");

/** @type {import("next").NextConfig} */
const config = {
  experimental: {
    typedRoutes: true,
    reactCompiler: true,
  },
};

// @ts-ignore
export default next(config, {
  auto: true,
  mute: true,
});
