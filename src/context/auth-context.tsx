import React, { createContext, useEffect, useState } from "react";
import { createClient } from "@/utils";
import { User } from "@supabase/supabase-js";

export const AuthContext =
  createContext<{ user: User | null }>(null as any);

const AuthContextProvider = ({ children }: React.PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);

  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      // console.log({ data, error });
      setUser(data.user);
    };

    getUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
