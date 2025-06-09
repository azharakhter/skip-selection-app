import api from './api';

export const getSkipsByLocation = async (postcode, area) => {
    try {
        const response = await api.get(`/skips/by-location?postcode=${postcode}&area=${area}`);
        return response.map(skip => ({
            ...skip,
            // Normalize data if needed
            features: skip.description ? skip.description.split('. ').filter(f => f) : []
        }));
    } catch (error) {
        throw error;
    }
};