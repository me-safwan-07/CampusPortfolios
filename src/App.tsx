import MainLayout from './layout/MainLayout';
import AppRouter from './router';
import './App.css'

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