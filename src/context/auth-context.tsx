import React, { createContext } from "react";

const AuthContext = createContext(null);

const AuthContextProvider = ({ children }: React.PropsWithChildren) => {
  return <AuthContext.Provider value={null}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
