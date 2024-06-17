import { Button, Dialog, DialogContent } from "@mui/material";
import * as React from "react";

function Profile() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="col-start-3 col-span-8 p-8 flex justify-center">
      <div className="w-[930px]">
        <div className="flex items-center gap-x-20 pb-12 border-b">
          <div>
            <img
              className="w-[150px] h-[150px] object-cover rounded-[50%]"
              src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-x-4">
              <span className="text-[20px]">_Pbat</span>

              <Button
                variant="outlined"
                onClick={handleClickOpen}
                sx={{
                  fontSize: "14px",
                  color: "black",
                  fontWeight: "500",
                  border: "none",
                  padding: "14px 12px",
                  lineHeight: "0",
                  letterSpacing: "0px",
                  textTransform: "none",
                  minWidth: "0",
                  backgroundColor: "#efefef",
                  borderRadius: "8px",
                  ":hover": {
                    border: "none",
                    color: "black",
                    backgroundColor: "#efefef"
                  },
                }}
              >
                Edit profile
              </Button>

              <div className="cursor-pointer">
                <svg
                  aria-label="Options"
                  class="x1lliihq x1n2onr6 x5n08af"
                  fill="currentColor"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <title>Options</title>
                  <circle
                    cx="12"
                    cy="12"
                    fill="none"
                    r="8.635"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></circle>
                  <path
                    d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096"
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="flex items-center gap-x-10 mt-10">
              <span className="text-[16px]">
                <span className="font-medium">0</span> posts
              </span>
              <span>
                <span className="font-medium">19</span> follower
              </span>
              <span>
                <span className="font-medium">22</span> following
              </span>
            </div>
          </div>
        </div>

        <div>
          <div className="relative cursor-pointer flex items-center justify-center gap-x-1 py-4 after:block after:content-[''] after:w-[3rem] after:h-[1px] after:bg-black after:absolute after:right-auto after:left-auto after:top-0 after:cursor-default">
            <div>
              <svg
                aria-label=""
                class="x1lliihq x1n2onr6 x5n08af"
                fill="currentColor"
                height="12"
                role="img"
                viewBox="0 0 24 24"
                width="12"
              >
                <title></title>
                <rect
                  fill="none"
                  height="18"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  width="18"
                  x="3"
                  y="3"
                ></rect>
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="9.015"
                  x2="9.015"
                  y1="3"
                  y2="21"
                ></line>
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="14.985"
                  x2="14.985"
                  y1="3"
                  y2="21"
                ></line>
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="21"
                  x2="3"
                  y1="9.015"
                  y2="9.015"
                ></line>
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="21"
                  x2="3"
                  y1="14.985"
                  y2="14.985"
                ></line>
              </svg>
            </div>
            <div>
              <span>POSTS</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {/* 1 */}
            <div className="aspect">
              <img
                className="object-cover aspect-square"
                src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
              />
            </div>

            {/* 1 */}
            <div className="aspect">
              <img
                className="object-cover aspect-square"
                src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
              />
            </div>

            {/* 1 */}
            <div className="aspect">
              <img
                className="object-cover aspect-square"
                src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
              />
            </div>

            {/* 1 */}
            <div className="aspect">
              <img
                className="object-cover aspect-square"
                src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
              />
            </div>

            {/* 1 */}
            <div className="aspect">
              <img
                className="object-cover aspect-square"
                src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
              />
            </div>

            {/* 1 */}
            <div className="aspect">
              <img
                className="object-cover aspect-square"
                src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
              />
            </div>

            {/* 1 */}
            <div className="aspect">
              <img
                className="object-cover aspect-square"
                src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
              />
            </div>
          </div>
        </div>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
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
          <div className="flex items-center justify-center">
            
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Profile;
