import { ReactNode } from "react";
import { Navbar, Footer} from "../components";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Navbar isLoggedIn={false}/>
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
