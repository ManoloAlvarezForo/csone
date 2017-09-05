/**
 * The API configuration for the host and port.
 */
export let API_CONFIG_URL = {
  host: 'https://localhost:',
  port:'8443'
}

/**
 * The URLs (routes) related to the client in the API.
 */
export let API_URLs = {
  clientsApiUrls: {
    clients: API_CONFIG_URL.host + API_CONFIG_URL.port + '/clients',
    clientsFilterSize: API_CONFIG_URL.host + API_CONFIG_URL.port + '/clients/size',
    clientsFilter: API_CONFIG_URL.host + API_CONFIG_URL.port + '/clients/filter'
  }
};
