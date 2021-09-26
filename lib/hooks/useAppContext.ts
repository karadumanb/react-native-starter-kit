import { AppContext } from "../../lib/contexts/AppContext";
import { useContext } from "react";

export function useAppContext() {
  const { setLocale, locale, user, setUser, isLoggedIn, logout } = useContext(AppContext);
  return { setLocale, locale, user, setUser, isLoggedIn, logout };
}
