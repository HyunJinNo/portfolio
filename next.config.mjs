/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        // src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"
        protocol: "https",
        hostname: "img.shields.io",
        port: "",
        pathname: "/badge/**",
      },
    ],
  },
};

export default nextConfig;
