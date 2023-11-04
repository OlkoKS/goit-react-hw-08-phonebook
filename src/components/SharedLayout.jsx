import { Suspense } from 'react';
import { AppHeader } from './AppHeader/AppHeader';
import { Outlet } from 'react-router-dom';
import { Loader } from './Loader/Loader';

export const SharedLayout = () => {
  return (
    <div>
      <AppHeader />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
