import axios from 'axios';

const api = axios.create({
    baseURL: 'https://app.wewantwaste.co.uk/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

// Request interceptor
api.interceptors.request.use(
    (config) => {
        // Add authentication tokens here if needed
        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
    (response) => response.data,
    (error) => {
        // Handle global errors
        if (error.response) {
            return Promise.reject({
                response: {
                    status: error.response.status,
                    data: error.response.data,
                }
            });
        } else if (error.request) {
            return Promise.reject({ request: error.request });
        } else {
            return Promise.reject({ message: error.message });
        }
    }
);

export default api;