export const selectUser = state => state.userAuth.user;
export const selectToken = state => state.userAuth.token;
export const selectIsLoggedIn = state => state.userAuth.isLoggedIn;
export const selectError = state => state.userAuth.error;
export const selectLoading = state => state.userAuth.loading;
export const selectIsRefresh = state => state.userAuth.isRefresh;
