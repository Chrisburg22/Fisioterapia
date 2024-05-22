const JWT_STORAGE_NAME = 'sens-jwt';

export const getJwt = () => {
	if (typeof window !== 'undefined') {
		return localStorage.getItem(JWT_STORAGE_NAME);
	} else {
		return null;
	}
};

export const setJwt = (token: string | null) => {
	if (typeof window !== 'undefined') {
		return localStorage.setItem(JWT_STORAGE_NAME, token ? token : '');
	} else {
		return null;
	}
};
