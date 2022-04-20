module.exports = {
  images: {
    domains: ["res.cloudinary.com","imagesvc.meredithcorp.io","www.allrecipes.com"],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.example.com/:path*',
      },
    ]
  },

};
