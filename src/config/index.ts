const config = {
  BASE_URL: import.meta.env.VITE_BASE_URL,
  secrets: {
    GQL_TOKEN: import.meta.env.VITE_GQL_TOKEN,
  },

  temp_vars: {
    tenant: import.meta.env.VITE_TEMP_TENANT,
  },
};

export default config;
