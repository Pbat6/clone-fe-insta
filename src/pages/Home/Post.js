import { Button, Dialog, DialogContent, Tooltip, styled } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import * as React from "react";
import Comment from "./Comment";
import Thumb from "./Thumb";

// Custom tooltip
export const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .MuiTooltip-tooltip`]: {
    padding: 0, // Bỏ padding mặc định
    borderRadius: "8px", // Bo góc
  },
});

function Post() {
  // dialog more option
  const [openMoreOption, setOpenMoreOption] = React.useState(false);

  const handleClickOpenMoreOption = () => {
    setOpenMoreOption(true);
  };

  const handleCloseMoreOption = () => {
    setOpenMoreOption(false);
  };

  // dialog unfollow
  const [openUnfollow, setOpenUnfollow] = React.useState(false);
  const handleClickOpenUnfollow = () => {
    setOpenUnfollow(true);
  };

  const handleCloseUnfollow = () => {
    setOpenUnfollow(false);
  };

  // like
  const [liked, setLiked] = React.useState(false);
  const [currentLike, setCurrentLike] = React.useState(0);
  const toggleLike = () => {
    setLiked(!liked);
    setCurrentLike(liked ? currentLike - 1 : currentLike + 1);
  };

  // Follow
  const [followed, setFollowed] = React.useState(false);
  const toggleFollow = () => {
    if (followed) {
      handleClickOpenUnfollow();
    } else {
      setFollowed(true);
    }
  };
  const handleUnfollow = () => {
    setFollowed(false);
    handleCloseUnfollow();
  };

  return (
    <div class="mt-12 px-[80px]">
      <div class="flex items-center mb-[12px]">
        <div class="w-[42px] h-[42px] flex items-center justify-center mr-2 cursor-pointer">
          <CustomTooltip title={<Thumb />} placement="bottom-start">
            <div>
              <img
                class="w-[32px] h-[32px] rounded-[50%] object-cover"
                src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                alt="asd"
              />
            </div>
          </CustomTooltip>
        </div>

        <div class="relative text-[14px] font-medium mr-4 after:block after:content-[''] after:w-[4px] after:h-[4px] after:bg-slate-500 after:rounded-[50%] after:absolute after:right-[-10px] after:top-[50%] after:cursor-default cursor-pointer">
          <CustomTooltip title={<Thumb />} placement="bottom-start">
            _Pbat
          </CustomTooltip>
        </div>
        <span class="text-[14px] mr-4 cursor-pointer">2w</span>
        <span
          onClick={toggleFollow}
          class="relative text-[14px] font-semibold text-[#0095f6] before:block before:content-[''] before:w-[4px] before:h-[4px] before:bg-slate-500 before:rounded-[50%] before:absolute before:left-[-10px] before:top-[50%] before:cursor-default cursor-pointer"
        >
          {followed ? "Following" : "Follow"}
        </span>
        <Button
          variant="outlined"
          onClick={handleClickOpenMoreOption}
          sx={{
            marginLeft: "auto",
            fontSize: "12px",
            color: "black",
            fontWeight: "600",
            border: "none",
            padding: "0",
            lineHeight: "0",
            letterSpacing: "0px",
            textTransform: "none",
            minWidth: "0",
            ":hover": {
              border: "none",
              backgroundColor: "white",
            },
          }}
        >
          <svg
            aria-label="More options"
            class="x1lliihq x1n2onr6 x5n08af"
            fill="currentColor"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <title>More options</title>
            <circle cx="12" cy="12" r="1.5"></circle>
            <circle cx="6" cy="12" r="1.5"></circle>
            <circle cx="18" cy="12" r="1.5"></circle>
          </svg>
        </Button>
      </div>

      {/* <!-- image --> */}
      <Carousel showThumbs={false} showStatus={false}>
        <div class="flex select-none">
          <img
            class="w-full h-[585px] rounded-[4px] object-cover"
            src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
            alt=""
          />
        </div>
        <div class="flex select-none">
          <img
            class="w-full h-[585px] rounded-[4px] object-cover"
            src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
            alt=""
          />
        </div>
        <div class="flex select-none">
          <img
            class="w-full h-[585px] rounded-[4px] object-cover"
            src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
            alt=""
          />
        </div>
        <div class="flex select-none">
          <img
            class="w-full h-[585px] rounded-[4px] object-cover"
            src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
            alt=""
          />
        </div>
        <div class="flex select-none">
          <img
            class="w-full h-[585px] rounded-[4px] object-cover"
            src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
            alt=""
          />
        </div>
        <div class="flex select-none">
          <img
            class="w-full h-[585px] rounded-[4px] object-cover"
            src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
            alt=""
          />
        </div>
        <div class="flex select-none">
          <img
            class="w-full h-[585px] rounded-[4px] object-cover"
            src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
            alt=""
          />
        </div>
        <div class="flex select-none">
          <img
            class="w-full h-[585px] rounded-[4px] object-cover"
            src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
            alt=""
          />
        </div>
      </Carousel>
      <div class="mt-5 flex gap-x-4 mb-2">
        {/* <!-- like --> */}
        <div onClick={toggleLike} className="cursor-pointer">
          {liked ? (
            <svg
              aria-label="Unlike"
              class="x1lliihq x1n2onr6 xxk16z8 text-red-600"
              fill="currentColor"
              height="24"
              role="img"
              viewBox="0 0 48 48"
              width="24"
            >
              <title>Unlike</title>
              <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
            </svg>
          ) : (
            <svg
              aria-label="Like"
              class="x1lliihq x1n2onr6 xyb1xck"
              fill="currentColor"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <title>Like</title>
              <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
            </svg>
          )}
        </div>

        {/* <!-- comment --> */}
        <div class="cursor-pointer">
          <div>
            <svg
              aria-label="Comment"
              class="x1lliihq x1n2onr6 x5n08af"
              fill="currentColor"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <title>Comment</title>
              <path
                d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                fill="none"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
            </svg>
          </div>
        </div>

        {/* <!-- share --> */}
        <div class="cursor-pointer">
          <div>
            <svg
              aria-label="Share Post"
              class="x1lliihq x1n2onr6 x1roi4f4"
              fill="currentColor"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <title>Share Post</title>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="2"
                x1="22"
                x2="9.218"
                y1="3"
                y2="10.083"
              ></line>
              <polygon
                fill="none"
                points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="2"
              ></polygon>
            </svg>
          </div>
        </div>

        {/* <!-- save --> */}
        <div class="ml-auto cursor-pointer">
          <div>
            <svg
              aria-label="Save"
              class="x1lliihq x1n2onr6 x5n08af"
              fill="currentColor"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <title>Save</title>
              <polygon
                fill="none"
                points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></polygon>
            </svg>
          </div>
        </div>
      </div>
      <div class="">
        <span class="text-[14px] font-semibold">{currentLike} likes</span>
      </div>

      <Comment />
      <div class="w-full h-[1px] bg-[#dbdbdb] my-6"></div>

      {/* Show dialog more option */}
      <Dialog
        open={openMoreOption}
        onClose={handleCloseMoreOption}
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: "8px",
          },
        }}
      >
        <DialogContent
          sx={{
            padding: "0",
          }}
        >
          <div class="container">
            <div class="grid grid-cols-1 w-[384px] bg-[#fff]">
              {followed ? (
                <span
                  onClick={handleClickOpenUnfollow}
                  class="cursor-pointer text-[14px] w-full h-[50px] flex items-center justify-center border-y-[1px] border-[#dbdbdb] text-[#ed4956] font-medium"
                >
                  Unfollow
                </span>
              ) : (
                ""
              )}
              <span
                onClick={handleCloseMoreOption}
                class="cursor-pointer text-[14px] w-full h-[50px] flex items-center justify-center border-y-[1px] border-[#dbdbdb]"
              >
                Add to favorites
              </span>
              <span
                onClick={handleCloseMoreOption}
                class="cursor-pointer text-[14px] w-full h-[50px] flex items-center justify-center border-y-[1px] border-[#dbdbdb]"
              >
                Go to post
              </span>
              <span
                onClick={handleCloseMoreOption}
                class="cursor-pointer text-[14px] w-full h-[50px] flex items-center justify-center border-y-[1px] border-[#dbdbdb]"
              >
                Copy link
              </span>
              <span
                onClick={handleCloseMoreOption}
                class="cursor-pointer text-[14px] w-full h-[50px] flex items-center justify-center border-y-[1px] border-[#dbdbdb]"
              >
                Cancel
              </span>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Show dialog unfollow */}
      <Dialog
        open={openUnfollow}
        onClose={handleCloseUnfollow}
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: "8px",
          },
        }}
      >
        <DialogContent
          sx={{
            padding: "0",
          }}
        >
          <div className="w-[400px] ">
            <div className="p-[32px] flex flex-col items-center gap-y-6">
              <div className="flex justify-center items-center">
                <img
                  className="w-[90px] h-[90px] rounded-[50%] object-cover"
                  src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                />
              </div>
              <div>
                <span className="text-[14px]">Unfollow _Pbat?</span>
              </div>
            </div>
            <div
              onClick={handleUnfollow}
              className="flex items-center justify-center py-3 border-y cursor-pointer"
            >
              <span className="text-[14px] font-medium text-red-600">
                Unfollow
              </span>
            </div>
            <div
              onClick={handleCloseUnfollow}
              className="flex items-center justify-center py-3 border-b cursor-pointer"
            >
              <span className="text-[14px]">Cancel</span>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Post;