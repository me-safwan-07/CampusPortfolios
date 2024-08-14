import { ReactNode } from "react";
import { Navbar} from "../components";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Navbar isLoggedIn={true}/>
      {children}
    </>
  );
};

export default MainLayout;
