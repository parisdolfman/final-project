export const setCurrentUser = (userinfo) => {
    localStorage.setItem('current_user', JSON.stringify(userinfo));
  };
  export const getCurrentUser = () => {
    const current_user = localStorage.getItem('current_user');
    return JSON.parse(current_user) ?? '';
  };
  
  export const logoutUser = () => {
    localStorage.clear();
    return;
  };
  