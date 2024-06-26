import SideBar from "../DefaultLayout/SideBar/SideBar.index";

function ProfileLayout({ children }) {
  return (
    <div className="grid grid-cols-10 gap-x-2">
      <SideBar />
      {children}
    </div>
  );
}

export default ProfileLayout;