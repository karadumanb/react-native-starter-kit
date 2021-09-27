import { useEffect, useState } from "react";
import { getFromStorage, resetStorage, setToStorage } from "services/storage";

const userAttributes: Array<keyof Partial<IUser>> = [
  "firstName",
  "id",
  "lastName",
  "phone",
  "token",
];

export default function useUser() {
  const [user, setUser] = useState<Partial<IUser> | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    checkStorage();
  }, []);

  const checkStorage = async () => {
    try {
      const userInfo: any = {};

      for (const key of userAttributes) {
        const value = await getFromStorage(key);
        userInfo[key] = value;
      }

      setUser(userInfo?.token ? userInfo : null);
      setIsLoggedIn(Boolean(userInfo?.token));
    } catch (err) {
      setIsLoggedIn(false);
    }
  };

  const setUserInfo = (user: IUser | null) => {
    if (user) {
      try {
        userAttributes.forEach((key) => {
          const value = user[key as keyof typeof user];
          if (typeof value === "string" || typeof value === "number") {
            setToStorage(String(value), key);
          }
        });
      } catch (err) {}
      setUser(user);
      setIsLoggedIn(Boolean(user?.token));
    } else {
      setIsLoggedIn(false);
      resetStorage();
    }
  };

  return { user, setUser: setUserInfo, isLoggedIn };
}
