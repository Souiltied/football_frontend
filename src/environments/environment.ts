import { apiConfigVariables } from './api-config-variables';

export const environment = {
  production: false,
  api: {
    baseUrl: 'http://localhost:3000/', 
    ...apiConfigVariables
  }
};
