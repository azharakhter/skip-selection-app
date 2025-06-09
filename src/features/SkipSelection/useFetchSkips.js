import { useState, useEffect } from 'react';
import { getSkipsByLocation } from '../../services/skipService';
import { handleApiError } from '../../utils/errorHandler';

export default function useFetchSkips(postcode = 'NR32', area = 'Lowestoft') {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await getSkipsByLocation(postcode, area);
            setData(response);
        } catch (err) {
            const errorMessage = handleApiError(err);
            setError(errorMessage);
            console.error('Failed to fetch skips:', err);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {

        fetchData();
    }, [postcode, area]);

    return {
        data,
        loading,
        error,
        refetch: () => {
            setLoading(true);
            fetchData();
        }
    };
}