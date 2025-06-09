export const handleApiError = (error) => {
    let errorMessage = 'An unexpected error occurred. Please try again.';

    if (error.response) {
        // Server responded with error status
        if (error.response.status === 404) {
            errorMessage = 'Resource not found.';
        } else if (error.response.status >= 500) {
            errorMessage = 'Server error. Please try again later.';
        } else if (error.response.data && error.response.data.message) {
            errorMessage = error.response.data.message;
        }
    } else if (error.request) {
        // No response received
        errorMessage = 'Network error. Please check your connection.';
    } else {
        // Other errors
        errorMessage = error.message || errorMessage;
    }

    return errorMessage;
};

export const logError = (error, context) => {
    console.error(`[${context}]`, error);
    // Here you could send the error to a logging service
};