export const getTokenFromLocalStorage = () => {
    return localStorage.getItem("token") || "";
  };
  
export const getUserIdFromLocalStorage = () => {
    return localStorage.getItem("uId") || "";
  };
  