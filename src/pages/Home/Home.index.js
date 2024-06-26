import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import * as React from "react";
import { Button, Dialog, DialogContent, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import { MyContext } from "../../components/Layouts/DefaultLayout";
import Post from "./Post";
import Story from "./Story";

function Home() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // check width of the screen
  const { setShareWidth } = React.useContext(MyContext);
  const targetRef = React.useRef(null);
  const checkDivWidth = () => {
    const targetDiv = targetRef.current;
    if (targetDiv) {
      const newWidth = targetDiv.offsetWidth;
      setShareWidth(newWidth);
    }
  };

  React.useEffect(() => {
    // Kiểm tra khi tải trang
    checkDivWidth();

    // Đăng ký sự kiện resize
    window.addEventListener("resize", checkDivWidth);

    // Cleanup: Hủy đăng ký sự kiện khi component bị unmount
    return () => {
      window.removeEventListener("resize", checkDivWidth);
    };
  }, []);

  

  return (
    <div ref={targetRef} class="container col-start-3 col-span-5 mt-4">
      <div class="flex items-center gap-x-3">
        {/* <!-- 1 --> */}
        <Story storyId={1}/>
        <Story storyId={2}/>
        <Story />
        <Story />
        <Story />
        <Story />
      </div>

      {/* Post */}
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  );
}

export default Home;
