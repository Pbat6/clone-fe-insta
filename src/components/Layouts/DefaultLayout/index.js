
import SideBar from "./SideBar/SideBar.index";
import Suggest from "./Suggest/Suggest.index";

function DefaultLayout({children}){
    return <div className="grid grid-cols-10 gap-x-2">
        <SideBar/>
        {children}
        <Suggest/>  
    </div>
}

export default DefaultLayout;