/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/Next.js-Project',
    assetPrefix: '/Next.js-Project/',
    images: {
        unoptimized: true, // ⬅️ هذا السطر مهم لتفادي الخطأ
        remotePatterns: [{
            protocol: 'https',
            hostname: '**',
        }],
    },
};

export default nextConfig;