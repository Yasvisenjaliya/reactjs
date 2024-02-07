import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import React from "react";
import { Google } from "@mui/icons-material";
import loginBg from "../../assets/login-bg.png";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
const LoginScreen = () => {
  const { login, isLoading, redirectToUrl } = useAuth();
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      width={"100%"}
      height={"100%"}
      sx={{
        backgroundColor: "#0272f6",
      }}
    >
      <Box
        flex={1}
        height={"100%"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{
          backgroundColor: "white",
        }}
      >
        <Box
          display={"flex"}
          width={"70%"}
          flexDirection={"column"}
          alignItems={"start"}
          gap={2}
        >
          <Typography variant="h4" mb={4} fontWeight={"800"}>
            Ecom Platform
          </Typography>
          <Button variant="outlined" startIcon={<Google />} fullWidth>
            Login with google
          </Button>
          <Box width={"100%"} display={"flex"} alignItems={"center"} gap={2}>
            {/* <Box flex={1}>
              <Divider variant="fullWidth" />
            </Box> */}
            <Typography variant="caption">Or use Email and Password</Typography>
            <Box flex={1}>
              {/* <Box width={"100%"}> */}
              <Divider variant="fullWidth" />
              {/* </Box> */}
            </Box>
          </Box>
          <TextField variant="outlined" fullWidth label={"Username/Email"} />
          <TextField variant="outlined" fullWidth label={"Password"} />
          <Typography ml={"auto"} variant="body2">
            Forgot password?
          </Typography>
          <Button
            fullWidth
            variant="contained"
            onClick={login}
            disabled={isLoading}
          >
            Login
          </Button>
          <Typography mx={"auto"}>
            Don&apos;t have account?{" "}
            <Link
              to={`/dashboard/sign-up?redirectTo=${redirectToUrl}`}
              style={{
                marginInline: "auto",
              }}
            >
              <Typography
                mx={"auto"}
                variant="body1"
                component={"span"}
                // fontWeight={"600"}
              >
                Sign Up
              </Typography>
            </Link>
          </Typography>
        </Box>
      </Box>
      <Box
        flex={1}
        height={"100%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box
          sx={{
            backgroundColor: "#2788ff",
            width: "70%",
            height: "80%",
            boxShadow: "6px 26px 31px -3px rgba(39,136,255,0.75)",
            padding: 10,
            position: "relative",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontWeight: "700",
              fontSize: "30px",
            }}
          >
            Good learnings
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontWeight: "700",
              fontSize: "30px",
            }}
          >
            are waiting for you
          </Typography>
          <Box
            sx={{
              position: "absolute",
              bottom: -70,
              right: -70,
            }}
          >
            <img
              src={loginBg}
              style={{
                width: "400px",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginScreen;
