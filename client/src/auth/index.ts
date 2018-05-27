export const IS_LOGGED_IN = 'IS_LOGGED_IN';

export const isLoggedIn = () =>
  sessionStorage.getItem('isLoggedIn') === IS_LOGGED_IN;
export const getToken = () => sessionStorage.getItem('token');
