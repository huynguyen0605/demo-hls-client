import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';

export const UserIsAuthenticated = connectedRouterRedirect({
    authenticatedSelector: state => state.user.isLoggedIn,
    wrapperDisplayName: 'UserIsAuthenticated',
    redirectPath: '/login',
});