import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import PublicRoute from "./publicRoute";
import PrivateRoute from "./privateRoute";
import { routePath } from "../constants/routesPath";
import {
  CategoriesScreen,
  CouponScreen,
  DashboardScreen,
  LoginScreen,
  PackageScreen,
  ProductListScreen,
  ReviewScreen,
} from "../features";

const routes = createRoutesFromElements(
  <Route>
    <Route path={""} element={<App />}>
      <Route
        path={routePath.login}
        element={
          <PublicRoute>
            <LoginScreen />
          </PublicRoute>
        }
      />
      <Route
        index
        path={routePath.products}
        element={
          <PrivateRoute>
            <ProductListScreen />
          </PrivateRoute>
        }
      />
      <Route
        index
        path={routePath.packages}
        element={
          <PrivateRoute>
            <PackageScreen />
          </PrivateRoute>
        }
      />
      <Route
        index
        path={routePath.coupons}
        element={
          <PrivateRoute>
            <CouponScreen />
          </PrivateRoute>
        }
      />
      <Route
        index
        path={routePath.categories}
        element={
          <PrivateRoute>
            <CategoriesScreen />
          </PrivateRoute>
        }
      />
      <Route
        index
        path={routePath.products}
        element={
          <PrivateRoute>
            <ProductListScreen />
          </PrivateRoute>
        }
      />
      <Route
        index
        path={routePath.reviews}
        element={
          <PrivateRoute>
            <ReviewScreen />
          </PrivateRoute>
        }
      />
      <Route
        index
        path={routePath.dashboard}
        element={
          <PrivateRoute>
            <DashboardScreen />
          </PrivateRoute>
        }
      />
    </Route>
  </Route>
);
export const router = createBrowserRouter(routes);
