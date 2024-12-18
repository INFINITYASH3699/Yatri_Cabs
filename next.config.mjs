/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: ["s3-alpha-sig.figma.com"],
  },
};

export default nextConfig;
