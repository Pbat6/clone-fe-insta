import { Button, Dialog, DialogContent } from "@mui/material";
import * as React from "react";
import DefaultGroupChat from "./DefaultGroupChat.index";
import GroupChat from "./GroupChat";

function Chat() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [id, setId] = React.useState("");

  return (
    <React.Fragment>
      <div class="col-span-3 col-start-2 border-r border-[#dbdbdb]">
        <div class="px-[24px]">
          <div class="flex items-center justify-between pb-[12px] pt-[36px]">
            <span class="text-[20px] font-medium">_Pbat</span>

            <Button
              variant="outlined"
              onClick={handleClickOpen}
              sx={{
                fontWeight: "600",
                border: "none",
                lineHeight: "0",
                letterSpacing: "0px",
                textTransform: "none",
                minWidth: "0",
                padding: "0",
                color: "black",
                ":hover": {
                  border: "none",
                  padding: "0",
                },
              }}
            >
              <svg
                aria-label="New message"
                class="x1lliihq x1n2onr6 x5n08af"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <title>New message</title>
                <path
                  d="M12.202 3.203H5.25a3 3 0 0 0-3 3V18.75a3 3 0 0 0 3 3h12.547a3 3 0 0 0 3-3v-6.952"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
                <path
                  d="M10.002 17.226H6.774v-3.228L18.607 2.165a1.417 1.417 0 0 1 2.004 0l1.224 1.225a1.417 1.417 0 0 1 0 2.004Z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="16.848"
                  x2="20.076"
                  y1="3.924"
                  y2="7.153"
                ></line>
              </svg>
            </Button>
          </div>
          <div class="flex items-center justify-between mb-4">
            <span class="text-[16px] font-medium">Messages</span>
            <span class="text-[14px]">Requests</span>
          </div>

          <div className="w-full h-[520px] overflow-auto">
            {/* <!-- friend 1 --> */}
            <div
              onClick={() => setId("1")}
              class="cursor-pointer hover:bg-slate-50"
            >
              <div class="flex items-center py-[8px] gap-x-4">
                <div>
                  <img
                    class="w-[56px] h-[56px] object-cover rounded-[50%]"
                    src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                    alt=""
                  />
                </div>
                <div class="flex flex-col">
                  <span class="text-[14px]">The</span>
                  <span class="text-[12px]">Active 6m ago</span>
                </div>
              </div>
            </div>

            {/* <!-- friend 2 --> */}
            <div
              onClick={() => setId("2")}
              class="cursor-pointer hover:bg-slate-50"
            >
              <div class="flex items-center py-[8px] gap-x-4">
                <div>
                  <img
                    class="w-[56px] h-[56px] object-cover rounded-[50%]"
                    src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                    alt=""
                  />
                </div>
                <div class="flex flex-col">
                  <span class="text-[14px]">The</span>
                  <span class="text-[12px]">Active 6m ago</span>
                </div>
              </div>
            </div>

            {/* <!-- friend 3 --> */}
            <div class="cursor-pointer hover:bg-slate-50">
              <div class="flex items-center py-[8px] gap-x-4">
                <div>
                  <img
                    class="w-[56px] h-[56px] object-cover rounded-[50%]"
                    src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                    alt=""
                  />
                </div>
                <div class="flex flex-col">
                  <span class="text-[14px]">The</span>
                  <span class="text-[12px]">Active 6m ago</span>
                </div>
              </div>
            </div>
            <div class="cursor-pointer hover:bg-slate-50">
              <div class="flex items-center py-[8px] gap-x-4">
                <div>
                  <img
                    class="w-[56px] h-[56px] object-cover rounded-[50%]"
                    src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                    alt=""
                  />
                </div>
                <div class="flex flex-col">
                  <span class="text-[14px]">The</span>
                  <span class="text-[12px]">Active 6m ago</span>
                </div>
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
            <div className="w-[548px] h-[418px] bg-[#fff]">
              <div className="relative py-4 border-b px-6">
                <div className="text-center">
                  <span className="text-[16px] font-bold">New message</span>
                </div>
                <div
                  onClick={handleClose}
                  className="absolute right-6 top-5 cursor-pointer"
                >
                  <svg
                    aria-label="Close"
                    class="x1lliihq x1n2onr6 x5n08af"
                    fill="currentColor"
                    height="18"
                    role="img"
                    viewBox="0 0 24 24"
                    width="18"
                  >
                    <title>Close</title>
                    <polyline
                      fill="none"
                      points="20.643 3.357 12 12 3.353 20.647"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                    ></polyline>
                    <line
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      x1="20.649"
                      x2="3.354"
                      y1="20.649"
                      y2="3.354"
                    ></line>
                  </svg>
                </div>
              </div>
              <div className="py-2 border-b px-6 flex items-center gap-x-4">
                <div>
                  <span className="text-[16px] font-medium">To:</span>
                </div>
                <form>
                  <input
                    type="text"
                    className="border-none outline-none placeholder:text-[14px]"
                    placeholder="Search..."
                  ></input>
                </form>
              </div>
              <div className="mt-2">
                <div className="flex items-center gap-x-3 px-6 py-2 hover:bg-slate-100 cursor-pointer">
                  <div>
                    <img
                      className="w-[44px] h-[44px] rounded-[50%] object-cover"
                      src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[14px]">The</span>
                    <span className="text-[14px]">_Pbat</span>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      {id === "" ? <DefaultGroupChat /> : <GroupChat id={id} />}
    </React.Fragment>
  );
}

export default Chat;
