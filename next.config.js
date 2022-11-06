/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['zozotea.com', 'images.foody.vn', 'xanh-coffee.vn', 'cong-news.appwifi.com', 
        'd1sag4ddilekf6.azureedge.net', 'tocotocotea.com'],
      },
};

module.exports = nextConfig;

