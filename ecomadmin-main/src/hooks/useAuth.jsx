import { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/authSlice";
import { DEFAULT_ERROR_MESSAGE } from "../constants/labels";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { routePath } from "../constants/routesPath";

export const useAuth = (autoFetch = false) => {
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const redirectToUrl = useMemo(() => {
    const redirectTo = String(searchParams.get("redirectTo")).trim();
    const valuesKey = Object.values(routePath);
    console.log(redirectTo, valuesKey, "valKeys");
    if (redirectTo.startsWith("/")) {
      const fRedirectTo = redirectTo.substring(1);
      if (valuesKey.includes(fRedirectTo)) {
        return `/${fRedirectTo}`;
      } else {
        const redirectUrl = routePath.dashboard;
        return `/${redirectUrl}`;
      }
    } else {
      if (valuesKey.includes(redirectTo)) {
        return `/${redirectTo}`;
      } else {
        const redirectUrl = routePath.dashboard;
        return `/${redirectUrl}`;
      }
    }
  }, [searchParams]);
  const {
    isLoading,
    isError,
    error,
    isInitialState,
    isLoggedIn,
    user,
    userRole,
  } = useMemo(() => formatLoginResponse(authState), [authState]);

  const fetchProfile = useCallback(async () => {
    if (isLoggedIn) {
      try {
        const user = localStorage.getItem("user");
        if (user) {
          const parsedUser = JSON.parse(user);
          const data = {
            user: parsedUser,
          };
          dispatch(authActions.setSuccessProfile(data));
        } else {
          dispatch(authActions.setLoadingProfile());
        }
        // } else {
        const dataCall = {
          user: dummyUser,
        };
        await new Promise((res) =>
          setTimeout(() => {
            return res("");
          }, 300)
        );
        localStorage.setItem("auth-token", "token@123@dummy");
        localStorage.setItem("user", JSON.stringify(dataCall?.user));
        dispatch(authActions.setSuccessProfile(dataCall));
        // }
        // dispatch(authActions.setLoadingProfile());
      } catch (error) {
        dispatch(
          authActions.setErrorProfile(error?.message || DEFAULT_ERROR_MESSAGE)
        );
      }
    }
  }, [isLoggedIn, dispatch]);

  const setSkip = useCallback((skipLogin = false) => {
    if (skipLogin) {
      localStorage.removeItem("skipLogin");
    } else {
      localStorage.setItem("skipLogin", "true");
    }
  }, []);

  const login = useCallback(
    async (payload) => {
      // if(isLoggedIn){
      try {
        dispatch(authActions.setLoadingProfile());
        const data = {
          user: dummyUser,
        };
        console.log(payload);
        await new Promise((res) =>
          setTimeout(() => {
            return res("");
          }, 3000)
        );
        localStorage.setItem("user", JSON.stringify(data?.user));
        localStorage.setItem("auth-token", "token@123@dummy");
        setSkip();
        dispatch(authActions.setSuccessProfile(data));
      } catch (error) {
        dispatch(
          authActions.setErrorProfile(error?.message || DEFAULT_ERROR_MESSAGE)
        );
      }
      // }
    },
    [dispatch, setSkip]
  );
  // const nav = useNavigate();

  const signUp = useCallback(
    async (payload) => {
      // if(isLoggedIn){
      try {
        dispatch(authActions.setLoadingProfile());
        const data = {
          user: dummyUser,
        };
        console.log(payload);
        await new Promise((res) =>
          setTimeout(() => {
            return res("");
          }, 3000)
        );
        console.log(
          "called",
          `/dashboard/${routePath.completeProfile}?mode=completeProfile`
        );
        localStorage.setItem("auth-token", "token@123@dummy");
        localStorage.setItem("user", JSON.stringify(data?.user));
        dispatch(authActions.setSuccessProfile(data));
        setSkip();
        // nav(`/dashboard/${routePath.completeProfile}?mode=completeProfile`, {
        //   replace: true,
        // });
        // setTimeout(() => {
        // });
      } catch (error) {
        dispatch(
          authActions.setErrorProfile(error?.message || DEFAULT_ERROR_MESSAGE)
        );
      }
      // }
    },
    [dispatch, setSkip]
  );
  const profileUpdateSkip = localStorage.getItem("skipLogin") === "true";
  const path = useLocation();
  const checkProfileComplete = useMemo(() => {
    if (!profileUpdateSkip) {
      // if (path.pathname.includes(routePath.completeProfile)) {
      //   console.log(path.pathname, "pathName");
      //   return false;
      // }
      return checkUserFieldEmpty(user);
    }
    return false;
  }, [profileUpdateSkip, user]);
  const showProfileComplete = useMemo(() => {
    if (path.pathname.includes(routePath.completeProfile)) {
      console.log(path.pathname, "pathName");
      return false;
    }
    return checkProfileComplete;
  }, [checkProfileComplete, path.pathname]);

  const logout = useCallback(() => {
    localStorage.removeItem("auth-token");
    localStorage.removeItem("user");
    setSkip(false);
    dispatch(authActions.setLoggedOut());
  }, [dispatch, setSkip]);

  useEffect(() => {
    if (autoFetch) {
      fetchProfile();
    }
  }, [autoFetch, fetchProfile]);

  const isActive = useMemo(() => {
    if (user?.role === "admin") {
      return true;
    }
    if (user?.active) {
      return true;
    }
    return false;
  }, [user]);

  return {
    showProfileComplete,
    checkProfileComplete,
    setSkip,
    profileUpdateSkip,
    userRole,
    isError,
    isLoading,
    error,
    isInitialState,
    user,
    isLoggedIn,
    fetchProfile,
    login,
    redirectToUrl,
    logout,
    signUp,
    isActive,
  };
};

export const dummyUser = {
  name: "",
  _id: "",
  role: "admin",
  active: true,
};

export const checkUserFieldEmpty = (user) => {
  if (user) {
    const checkKeys = [
      "firstName",
      "lastName",
      "email",
      "phoneNumber",
      "address",
      "profile",
      "category",
    ];
    if (user?.role === "company") {
      const objectKeys = Object.keys(user);
      const completeProfileKeys = [];
      const keysNotExist = [];
      checkKeys.forEach((key) => {
        if (!objectKeys.includes(key)) {
          keysNotExist.push(key);
        }
      });
      if (keysNotExist.length) {
        return true;
      }
      objectKeys.forEach((key) => {
        console.log(key, "userUserData");
        if (checkKeys.includes(key)) {
          if (!user[key]) {
            completeProfileKeys(key);
          }
        }
      });

      return Boolean(completeProfileKeys.length);
    }
    return false;
  }
  return false;
};

export const formatLoginResponse = (authState) => {
  const isLoading = authState?.status === "loading";
  const isError = authState?.status === "error";
  const error = authState?.errorMessage;
  const isInitialState = authState?.status === "initial";
  const user = authState?.user;
  const token = localStorage.getItem("auth-token");
  const isLoggedIn = authState?.isLoggedIn || Boolean(token);
  const userRole = user?.role;
  return {
    isError,
    isLoading,
    error,
    isInitialState,
    user,
    isLoggedIn,
    userRole,
  };
};
