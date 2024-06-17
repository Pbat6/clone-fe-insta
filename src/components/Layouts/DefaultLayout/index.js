import SideBar from "./SideBar/SideBar.index";
import Suggest from "./Suggest/Suggest.index";
import * as React from "react";

export const MyContext = React.createContext();

function DefaultLayout({ children }) {
  const [sharedWidth, setShareWidth] = React.useState(649);
  return (
    <MyContext.Provider value={{ sharedWidth, setShareWidth }}>
      <div className="relative grid grid-cols-10 gap-x-2">
        <SideBar />
        {children}
        <Suggest />
      </div>
    </MyContext.Provider>
  );
}

export default DefaultLayout;
