import SideBar from "./SideBar/SideBar.index";

function MessageLayout({ children }) {
  return (
    <div className="grid grid-cols-12 gap-x-2">
      <SideBar />
      {children}
    </div>
  );
}

export default MessageLayout;