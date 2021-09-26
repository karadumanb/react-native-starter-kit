import React, { useState } from "react";
import useUser from "../hooks/useUser";

type LanguageType = "tr" | "en";

export const AppContext = React.createContext<{
  locale: LanguageType;
  setLocale: (locale: LanguageType) => void;
  setUser: (user: IUser | null) => void;
  user: Partial<IUser>;
  isLoggedIn: boolean | null;
  logout: () => void;
}>({
  locale: "tr",
  setLocale: () => {},
  setUser: () => {},
  // @ts-ignore
  user: null,
  isLoggedIn: false,
  logout: () => {},
});

export default function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [locale, setLocale] = useState<LanguageType>("tr");
  const { user, setUser, isLoggedIn } = useUser();

  const logout = () => setUser(null);

  return (
    <AppContext.Provider
      value={{
        setLocale,
        locale,
        setUser,
        // @ts-ignore
        user,
        isLoggedIn,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
