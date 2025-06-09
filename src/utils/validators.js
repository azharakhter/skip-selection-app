export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

export const validatePhone = (phone) => {
    const re = /^(\+\d{1,3})?\d{10,15}$/;
    return re.test(phone);
};

export const validatePostcode = (postcode) => {
    const re = /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/i;
    return re.test(postcode);
};