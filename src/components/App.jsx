import { Navigate, Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { refreshUser } from 'redux/auth/operations';
import PrivateRoute from 'guards/PrivateRoute/PrivateRoute';
import PublicRoute from 'guards/PublicRoute/PublicRoute';
import { Loader } from './Loader/Loader';

const Homepage = lazy(() => import('../pages/Home'));
const ContactsPage = lazy(() => import('../pages/Contacts'));
const LoginPage = lazy(() => import('../pages/Login'));
const RegistrationPage = lazy(() => import('../pages/Register'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Homepage />}></Route>
        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegistrationPage />
            </PublicRoute>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        ></Route>
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
          }
        ></Route>
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
