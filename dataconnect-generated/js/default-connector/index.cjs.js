const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'FoodOrdering',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

