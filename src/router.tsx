import { ReactElement, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Loading } from "./Components/Loading";

const Home = lazy(() => import("./pages/Home"));

const AppRouter = (): ReactElement => {
    return (
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          </Routes>
    </Suspense>
  );
};

export default AppRouter;