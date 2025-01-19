import { Route, RouteProps, Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  component: React.ComponentType<any>;
  routeProps?: RouteProps;
}
const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, routeProps, ...rest }) => {
  const isAuthenticated = localStorage.getItem('id') !== null;

  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;
