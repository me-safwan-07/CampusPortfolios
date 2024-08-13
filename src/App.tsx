import React from 'react';
import MainLayout from './layouts/MainLayout';
import AppRouter from './router';
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <MainLayout>
        <AppRouter />
      </MainLayout>
      
    </div>
  );
}

export default App;
