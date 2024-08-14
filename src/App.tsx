import { useState } from 'react';
import './App.css'
import MainLayout from './layout/MainLayout';
import AppRouter from './router';

function App() {

  return (
    <>
      <MainLayout>
        <AppRouter />
      </MainLayout>
      
    </>
  )
}

export default App;