import { Navbar } from './components';
import MainLayout from './layout/MainLayout';
import AppRouter from './router';
import './App.css'

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