export const environment = {
  production: false,
  env: 'test',
  aws: {
    api: {
      coffee: {
        maker: {
          apiUrl: 'https://api.harryseong.com/test/v1/coffee/maker'
        },
        grinder: {
          apiUrl: 'https://api.harryseong.com/test/v1/coffee/grinder'
        }
      }
    }
  }
};
