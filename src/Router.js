import { Route, Routes, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routerPaths";

export const AppRouter = () => {
  const isAuth = false;
  return isAuth ? (
    <Routes>
      {privateRoutes.map(({ path, Component }) => {
        return (
          <Route path={path} element={<Component />} exact={true} key={path} />
        );
      })}
      <Route path="*" element={<Navigate to="/chat" replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, Component }) => {
        return (
          <Route path={path} element={<Component />} exact={true} key={path} />
        );
      })}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};
