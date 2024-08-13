import { ReactNode, useState } from "react";
import Header  from "../Components/Header";
import FilterSidebar from "../Components/FilterSidebar";
interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return ( 
      <>
            <Header />
            <div className="flex">
                {/* <FilterSidebar selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} /> */}
                {children}
            </div>
            
            
            
        </>
    )
};

export default MainLayout;