/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        domains: ['knconsulting.uk', 'images.unsplash.com', 'happyrestaurants.com'],
    },

    async redirects() {
        return [
            {
                source: '/products/kn-loyalty',
                destination: 'https://knloyalty.com/?ref=knconsulting.uk',
                permanent: true,
            },
        ];
    },

};

export default nextConfig;
