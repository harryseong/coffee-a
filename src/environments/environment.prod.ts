export const environment = {
  production: true,
  env: 'prod',
  aws: {
    api: {
      coffee: {
        maker: {
          apiUrl: 'https://api.harryseong.com/prod/v1/coffee/maker'
        },
        grinder: {
          apiUrl: 'https://api.harryseong.com/prod/v1/coffee/grinder'
        }
      }
    }
  }
};
