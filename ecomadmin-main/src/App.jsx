import {
  Category,
  Dashboard,
  Discount,
  ExitToApp,
  Inventory,
  Reviews,
  ShoppingBag,
} from "@mui/icons-material";
import "./App.css";
import {
  Box,
  CssBaseline,
  IconButton,
  ThemeProvider,
  Tooltip,
  Typography,
  createTheme,
} from "@mui/material";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import { routePath } from "./constants/routesPath";

const theme = (themeState = "light") =>
  createTheme({
    components: {
      MuiTextField: {
        defaultProps: {
          variant: "standard",
          size: "small",
        },
      },
      MuiSelect: {
        defaultProps: {
          size: "small",
        },
      },
      MuiBackdrop: {
        styleOverrides: {
          root: {
            backgroundColor: "rgba(0,0,0,0,)",
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            background: themeState === "dark" ? "#1C2536" : "#F3F3F3",
            boxShadow:
              themeState === "dark"
                ? "6px 8px 12px rgba(0,0,0,0.05)"
                : "4px 4px 6px rgba(0,0,0,0.04)",
          },
        },
      },
      MuiDialogContent: {
        styleOverrides: {
          root: {
            padding: "1.5rem",
          },
        },
      },
      MuiDialogActions: {
        styleOverrides: {
          root: {
            paddingInline: "1.5rem",
            paddingBlock: "1.0rem",
          },
        },
      },
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
      },
    },
    palette:
      themeState === "dark"
        ? {
            mode: "dark",
            primary: {
              main: "#fbfbfb",
              bg: "#0E1320",
              light: "#1C2536",
              bright: "#121927",
            },
            secondary: {
              main: "#EE1C23",
            },
            tertiary: {
              purple: "#6366F1",
              white: "#fbfbfb",
              gray: "#9da4ae",
              grayLight: "#252E3E",
              list: "#2E3745",
            },
          }
        : {
            mode: "light",
            primary: {
              main: "#0272f6",
              light: "#F3F3F3",
              bright: "#fbfbfb",
            },
            secondary: {
              main: "#EE1C23",
            },
            tertiary: {
              purple: "#6366F1",
              white: "#111111",
              gray: "#787E87",
              grayLight: "#ECECEC",
              list: "#29354d",
            },
          },
  });

const App = () => {
  const { isLoggedIn, logout } = useAuth();
  return (
    <ThemeProvider theme={theme()}>
      <CssBaseline />
      <Box
        width={"100vw"}
        height={"100vh"}
        display={"flex"}
        alignItems={"start"}
        sx={{
          backgroundColor: "#f0f6ff",
        }}
      >
        {isLoggedIn && <NavBar onLogout={logout} />}
        <Box width={"100vw"} height={"100%"} overflow={"scroll"} flex={1}>
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

const NavBar = ({ onLogout }) => {
  return (
    <Box width={"5%"} padding={0} height={"100%"}>
      <Box
        width={"100%"}
        height={"100%"}
        borderRadius={0}
        sx={{
          backgroundColor: "black",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            justifyContent: "center",
            padding: 2,
          }}
        >
          <Typography color={"white"} fontWeight={900}>
            2.0
          </Typography>
          <NavItem
            IconComp={Dashboard}
            route={routePath.dashboard}
            title={"Dashboard"}
          />
          <NavItem
            IconComp={ShoppingBag}
            route={routePath.products}
            title={"Products"}
          />
          <NavItem
            IconComp={Category}
            route={routePath.categories}
            title={"Categories"}
          />
          <NavItem
            IconComp={Inventory}
            route={routePath.packages}
            title={"Packages"}
          />
          <NavItem
            IconComp={Discount}
            route={routePath.coupons}
            title={"Coupons"}
          />
          <NavItem
            IconComp={Reviews}
            route={routePath.reviews}
            title={"Reviews"}
          />
        </Box>
        <Box flex={1} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            justifyContent: "center",
            padding: 2,
          }}
        >
          <Tooltip title={"Logout"} placement="right">
            <IconButton onClick={onLogout} sx={{ color: "white" }}>
              <ExitToApp color="white" />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
};

const NavItem = ({ route = "", IconComp, title }) => {
  const router = useLocation();
  return (
    <Tooltip title={title} placement="right">
      <Link to={`/${route}`}>
        {router.pathname.includes(`/${route}`) ? (
          <Box sx={{ p: 2, backgroundColor: "white" }}>
            <IconButton sx={{ color: "black" }}>
              <IconComp color="white" />
            </IconButton>
          </Box>
        ) : (
          <IconButton sx={{ color: "white" }}>
            <IconComp color="white" />
          </IconButton>
        )}
      </Link>
    </Tooltip>
  );
};

export default App;
