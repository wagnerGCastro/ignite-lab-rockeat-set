module.exports = {
  distDir: 'build',
  images: {
    domains: ['github.com'],
  },
  async redirects() {
    return [
      {
        source: '/event',
        destination: '/event/lesson/aula-01-abertura-do-evento-ignite-lab',
        permanent: true,
      },
    ];
  },
};
