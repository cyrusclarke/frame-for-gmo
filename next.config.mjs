/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects(){
    return [
      {
        source: '/micromaster',
        destination: '<https://cyrus.website>',
        permanent: false
      },
      {
        source: '/pinatacloud',
        destination: '<http://micromaster-new.vercel.app>',
        permanent: false
      }
    ]
  }
};

export default nextConfig;