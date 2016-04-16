import _ from 'lodash';

let config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  graphql: {
<<<<<<< Updated upstream
    port: 9090
=======
    port: 8181
>>>>>>> Stashed changes
  }
};

export default _.extend(config, require(`./${config.env}`).default);
