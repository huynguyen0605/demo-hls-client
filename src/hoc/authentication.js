import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';

export const userIsAuthenticated = connectedRouterRedirect({
    authenticatedSelector: state => state.user.isLoggedIn,
    wrapperDisplayName: 'UserIsAuthenticated',
    redirectPath: '/login',
});