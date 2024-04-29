/** @type {import('next').NextConfig} */
const urlPrefix = process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : ''

const nextConfig = {
    assetPrefix: urlPrefix,
    basePath: urlPrefix,
    output: 'export',
    images: {unoptimized: true},
    trailingSlash: true,
}

export default nextConfig;
