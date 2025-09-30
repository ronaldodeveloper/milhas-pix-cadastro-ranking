/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        additionalData: `
        @import "@/styles/variables.scss";
    `,
    },
};

export default nextConfig;
