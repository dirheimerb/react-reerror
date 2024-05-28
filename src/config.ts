import 'dotenv/config';

const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;

if(!apiEndpoint) {
    throw new Error('API endpoint not found');
}

const apiKey = process.env.REACT_APP_API_KEY;

if (!apiKey) {
  throw new Error('API key not found');
}

const apiAdmin = process.env.REACT_APP_ADMIN_KEY;
if(!apiAdmin) {
    throw new Error('Admin key not found');
}

const binAPIName = process.env.REACT_APP_BIN_NAME;

export const endpoint = apiEndpoint;
export const xMasterKey = apiKey;
export const xAdminKey = apiAdmin;
export const xBinName = binAPIName;
export const xCollectionId = process.env.REACT_APP_COLLECTION_ID;
export const xBinPrivate = process.env.REACT_APP_BIN_PRIVATE;