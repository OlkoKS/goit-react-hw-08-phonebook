import { Suspense } from 'react';
import { AppBar } from './AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Loader } from './Loader/Loader';
// import { useSelector } from 'react-redux';
// import { selectIsLoading } from 'redux/selectors';

export const SharedLayout = () => {
  // const isLoading = useSelector(selectIsLoading);
  return (
    <div>
      {/* {isLoading && <Loader />} */}
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
