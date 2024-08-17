import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
const Template = lazy(() => import("./pages/Template"))
const TemplateDetails = lazy(() => import("./pages/TemplateDetails"))
function router() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Template />} />
        <Route path="/:id" Component={TemplateDetails} />
      </Routes>
    </Suspense>
  )
}

export default router