import { Link } from "react-router-dom";
import ChatItem from "./ChatItem";

function GroupChat({ id }) {
  return (
    <div className="col-start-5 col-span-8">
      <div className="flex items-center gap-4 p-4 border-b">
        <div className="cursor-pointer">
          <img
            className="w-[44px] h-[44px] rounded-[50%] object-cover"
            src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
          />
        </div>
        <div className="flex flex-col cursor-pointer">
          <span className="text-[16px] font-medium">The</span>
          <span className="text-[12px] text-[#737373]">Active 1m ago</span>
        </div>
        <div className="ml-auto">
          <svg
            aria-label="Conversation information"
            class="x1lliihq x1n2onr6 x5n08af"
            fill="currentColor"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <title>Conversation information</title>
            <circle
              cx="12.001"
              cy="12.005"
              fill="none"
              r="10.5"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></circle>
            <circle cx="11.819" cy="7.709" r="1.25"></circle>
            <line
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              x1="10.569"
              x2="13.432"
              y1="16.777"
              y2="16.777"
            ></line>
            <polyline
              fill="none"
              points="10.569 11.05 12 11.05 12 16.777"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></polyline>
          </svg>
        </div>
      </div>

      <div className="px-4 pt-10 pb-6">
        <div className="flex flex-col justify-center items-center mb-14">
          <img
            className="w-[96px] h-[96px] rounded-[50%] object-cover"
            src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
          />
          <span className="text-[20px] font-medium mt-3">The</span>
          <div className="flex items-center gap-4">
            <span className="text-[#737373] text-[14px] relative after:block after:content-[''] after:w-[3px] after:h-[3px] after:bg-[#737373] after:rounded-[50%] after:absolute after:right-[-10px] after:top-[49%] after:cursor-default">
              _Pbat
            </span>
            <span className="text-[#737373] text-[14px]">Instagram</span>
          </div>
          <Link to="/profile" className="mt-4 cursor-pointer ">
            <span className="block py-1 px-2 rounded-[6px] bg-[#efefef] hover:bg-[#dbdbdb]">
              View Profile
            </span>
          </Link>
        </div>

        <div className="text-center">
          <span className="text-[12px] text-[#656770] font-medium">12:08</span>
        </div>
        <div className="mb-6">
          {/* 1 */}
          <ChatItem left={true} content={"xin chao 2"} />
          <ChatItem left={false} content={"xin chao 1"} />
          <ChatItem left={false} content={"how are you"} />
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Message..."
            className="w-full border-[1px] px-4 py-2 rounded-[999px] outline-none"
          />
          <span className="absolute right-6 top-2 cursor-pointer text-[14px] text-[#0097f7] font-medium">Send</span>
        </div>
      </div>
    </div>
  );
}

export default GroupChat;
