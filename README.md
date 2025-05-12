To make `next.js` as a host app:

- install `webpack` as a dependency `npm i webpack`
- run and build with `NEXT_PRIVATE_LOCAL_WEBPACK=true`
  example: `NEXT_PRIVATE_LOCAL_WEBPACK=true next dev --port 3003`
- use this config

```ts
import NextFederationPlugin from "@module-federation/nextjs-mf";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "host_next",
          remotes: {
            child_vue_rspack_app:
              "child_vue_rspack_app@http://localhost:3001/remoteEntry.js",
            child_react_vite_app:
              "child_react_vite_app@http://localhost:3002/mf-manifest.json",
          },
          filename: "static/chunks/remoteEntry.js",
          extraOptions: {
            skipSharingNextInternals: true, // prevents error in runtime
          },
        })
      );
    }

    return config;
  },
};

export default nextConfig;
```
