import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  errorMessage: "",
  status: "initial",
  user: null,
  isLoggedIn: false,
  // profileMeta: {
  //     isLoading: false,
  //     isError: false,
  //     error: '',
  // },
};
const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setLoadingProfile: (state) => {
      state.errorMessage = "";
      state.status = "loading";
    },
    setSuccessProfile: (state, action) => {
      state.errorMessage = "";
      state.status = "success";
      state.user = action.payload.user;
      state.isLoggedIn = true;
    },
    setErrorProfile: (state, action) => {
      state.errorMessage = action.payload;
      state.status = "error";
      state.isLoggedIn = false;
    },
    setLoggedOut: (state) => {
      state.isLoggedIn = false;
      state.status = "success";
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export default authReducer.reducer;
export const { actions: authActions } = authReducer;
