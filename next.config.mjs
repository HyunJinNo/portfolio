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
      {
        // rsc="https://www.w3.org/html/logo/downloads/HTML5_Logo.svg"
        protocol: "https",
        hostname: "www.w3.org",
        port: "",
        pathname: "/html/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname: "/wikipedia/**",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/voodootikigod/**",
      },
      {
        protocol: "https",
        hostname: "sass-lang.com",
        port: "",
        pathname: "/assets/**",
      },
    ],
  },
};

export default nextConfig;
