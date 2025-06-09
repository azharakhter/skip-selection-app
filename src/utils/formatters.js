export const formatPrice = (price) => {
    return new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
        minimumFractionDigits: 2,
    }).format(price);
};

export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export const truncateString = (str, maxLength = 50) => {
    if (str.length <= maxLength) return str;
    return str.substring(0, maxLength) + '...';
};