import Chat from "../pages/Chat/Chat.index";
import Home from "../pages/Home/Home.index";
import Profile from "../pages/Profile/Profile.index";
import Story from "../pages/Story/Story.index";

export const publicRoutes = [
    { path: "/", component: Home, layout: null },
    { path: "/story", component: Story, layout: "" },
    { path: "/chat", component: Chat, layout: "Chat" },
    { path: "/profile", component: Profile, layout: "Profile" },

];
  
export const privateRoute = [];