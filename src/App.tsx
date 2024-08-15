
import './App.css'
import { Navbar } from './components';
import MainLayout from './layout/MainLayout';
import AppRouter from './router';

function App() {

  return (
    <>
    {/* <Navbar isLoggedIn={false}/> */}
      <MainLayout>
        <AppRouter />
      </MainLayout>
      
    </>
  )
}

export default App;