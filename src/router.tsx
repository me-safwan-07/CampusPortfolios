import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Template = lazy(() => import('./pages/Template'));
const TemplateDetails = lazy(() => import('./pages/TemplateDetails'));
const About = lazy(() => import('./pages/About'));
const WhyPortfolio = lazy(() => import('./pages/WhyPortfolio'));
function Router() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Template />} />
        <Route path="/templates/:templateSlug" element={<TemplateDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/why-portfolio" element={<WhyPortfolio />} />
      </Routes>
    </Suspense>
  );
}

export default Router;
