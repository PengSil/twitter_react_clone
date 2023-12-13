const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
/*
 next -p 3060 하거나 build 할때 next.config가 읽히는데 이때 process.env를 설정하고 싶으면
 ANALYZE=true NODE_ENV=production next build 이런식으로 package.json에 적어준다
 근데 이렇게 설정하면 윈도우 에서는 안돌아가고 맥이나 linux에서만 돌아가서 cross-env 라이브러리를 설치해
 사용한다
*/

module.exports = withBundleAnalyzer({
  compress: true,
  webpack(config, { webpack }) {
    const prod = process.env.NODE_ENV === "production";
    const plugins = [...config.plugins, new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /^\.\/ko$/)];
    return {
      ...config,
      mode: prod ? "production" : "development",
      devtool: prod ? "hidden-source-map" : "eval-source-map",
      plugins,
    };
  },
  swcMinify: true,
  // .babelrc에 swc 강제 적용
  experimental: {
    forceSwcTransforms: true,
  },
  compiler: {
    // ssr, displayName true가 기본값으로 켜진다.
    styledComponents: true,
  },
});
