import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Template = lazy(() => import("./pages/Template"))
function router() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Template />} />
      </Routes>
    </Suspense>
  )
}

export default router