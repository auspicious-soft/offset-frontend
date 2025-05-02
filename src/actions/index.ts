

export const getTokenCustom = async () => {
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('Token not found in local storage');
        }
        return token;
    } catch (error) {
        console.error('Error getting token:', error);
        throw error;
    }
};