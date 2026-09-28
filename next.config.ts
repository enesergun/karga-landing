import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.qrserver.com",
        port: "",
        pathname: "/v1/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/gizlilik-politikasi",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/kullanim-kosullari",
        destination: "/terms",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
