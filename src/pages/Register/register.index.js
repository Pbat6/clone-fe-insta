import { TextField } from "@mui/material";
import { useState } from "react";
import DatePicker from "react-date-picker";
import { Link } from "react-router-dom";

function Register() {
  const [value, onChange] = useState();

  const handleDateChange = (date) => {
    onChange(date);
  };
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex items-center justify-center border-[1px] w-[400px] shadow-2xl">
        <div className=" bg-white p-6 ">
          <div className="mt-14 flex justify-center">
            <i
              data-visualcompletion="css-img"
              aria-label="Instagram"
              className=""
              role="img"
              style={{
                backgroundImage:
                  'url("https://static.cdninstagram.com/rsrc.php/v3/yM/r/8n91YnfPq0s.png")',
                backgroundPosition: "0px -52px",
                backgroundSize: "auto",
                width: "175px",
                height: "51px",
                backgroundRepeat: "no-repeat",
                display: "inline-block",
              }}
            ></i>
          </div>
          <form action="#">
            <div className="mt-6 flex flex-col items-center gap-y-[8px]">
              <input
                type="text"
                className="focus:outline-none focus:border-none rounded-sm h-[38px] w-[260px] border-[1px] border-[#dbdbdb] bg-[#fffefe] p-[8px] pb-[10px] text-[12px] placeholder:text-[12px] placeholder:text-[#737373]"
                placeholder="Username"
              />
              <input
                type="text"
                className="focus:outline-none focus:border-none rounded-sm h-[38px] w-[260px] border-[1px] border-[#dbdbdb] bg-[#fffefe] p-[8px] pb-[10px] text-[12px] placeholder:text-[12px] placeholder:text-[#737373]"
                placeholder="Password"
              />
              <input
                type="text"
                className="focus:outline-none focus:border-none rounded-sm h-[38px] w-[260px] border-[1px] border-[#dbdbdb] bg-[#fffefe] p-[8px] pb-[10px] text-[12px] placeholder:text-[12px] placeholder:text-[#737373]"
                placeholder="Email"
              />
              <input
                type="text"
                className="focus:outline-none focus:border-none rounded-sm h-[38px] w-[260px] border-[1px] border-[#dbdbdb] bg-[#fffefe] p-[8px] pb-[10px] text-[12px] placeholder:text-[12px] placeholder:text-[#737373]"
                placeholder="Full Name"
              />
              <input
                type="text"
                className="focus:outline-none focus:border-none rounded-sm h-[38px] w-[260px] border-[1px] border-[#dbdbdb] bg-[#fffefe] p-[8px] pb-[10px] text-[12px] placeholder:text-[12px] placeholder:text-[#737373]"
                placeholder="Password"
              />

              <div className="h-[38px] w-[260px] bg-[#fffefe]">
                <select
                  id="countries"
                  class=" border border-gray-300 text-gray-900 text-sm rounded-sm focus:border-[#dbdbdb] block w-full p-2.5 "
                >
                  <option selected>Gender</option>
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                </select>
              </div>

              <div className="h-[38px] w-[260px] bg-[#fffefe]">
                <DatePicker
                  dayPlaceholder="dd"
                  monthPlaceholder="mm"
                  yearPlaceholder="yyyy"
                  className="h-[38px] w-[260px] "
                  onChange={handleDateChange}
                  value={value}
                />
              </div>
            </div>
            <span
              onSubmit="#"
              className="flex justify-center items-center mt-[35px] w-[260px] h-[32px] bg-[#4cb5f9] ml-[50%] translate-x-[-50%] cursor-pointer text-[#e2f3fe] font-medium hover:bg-[#1877f2] hover:text-[#f0f8f6] rounded-[8px]"
            >
              Sign up
            </span>
          </form>
          <span className="block text-[12px] text-[#00376b] mt-[20px] w-[260px] ml-[50%] translate-x-[-50%] text-center cursor-pointer">
            Forgot password?
          </span>
          <div className="flex items-center justify-center gap-x-2 text-[14px] mt-4">
            <span>Have an account?</span>
            <Link to="/login" className="font-medium text-[#0095f6]">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
