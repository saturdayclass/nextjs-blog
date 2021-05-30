const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'raihan',
        mongodb_password: 'BUfHtmMEEBWkyoSY',
        mongodb_cluster: 'cluster0',
        mongodb_database: 'nextjs-blog-dev',
      },
    };
  }
  return {
    env: {
      mongodb_username: 'raihan',
      mongodb_password: 'BUfHtmMEEBWkyoSY',
      mongodb_cluster: 'cluster0',
      mongodb_database: 'nextjs-blog',
    },
  };
};
