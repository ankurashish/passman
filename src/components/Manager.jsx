import React from "react";

const Manager = () => {
  const showPassword = () => {
    alert("show password");
  }
  
  return (
    <>
      <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
      <div className="mycontainer bg-slate-100 rounded-3xl shadow-lg flex flex-col p-4 mt-4">
        <h1 className="text-4xl font-bold text-center">
          <span>&lt;</span>
          PassMan
          <span>/&gt;</span>
        </h1>
        <p className="text-lg text-center">
          Managing your passwords become simple
        </p>
        <div className="text-white flex flex-col items-center p-4 ">
          <div className="input w-full">
            <input
              placeholder="Enter Website URL"
              type="text"
              name=""
              id=""
              className="bg-gray-200 text-black rounded-2xl px-2 py-1 mb-2 w-full"
            />
            <div className="flex">
              <input
                placeholder="Enter Username"
                type="text"
                className="bg-gray-200 text-black rounded-2xl px-2 py-1 mr-2 flex-grow "
              />
              <div className="relative">
                <input
                  placeholder="Enter Password"
                  type="text"
                  className="bg-gray-200 text-black rounded-2xl px-2 py-1 flex-grow min-w-[40%] pr-8"
                />
                <span className="absolute text-black right-0 cursor-pointer "onClick={showPassword}>
                  <svg className="m-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    color="#000000"
                    fill="none"
                  >
                    <path
                      d="M2 8C2 8 6.47715 3 12 3C17.5228 3 22 8 22 8"
                      stroke="#141B34"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M21.544 13.045C21.848 13.4713 22 13.6845 22 14C22 14.3155 21.848 14.5287 21.544 14.955C20.1779 16.8706 16.6892 21 12 21C7.31078 21 3.8221 16.8706 2.45604 14.955C2.15201 14.5287 2 14.3155 2 14C2 13.6845 2.15201 13.4713 2.45604 13.045C3.8221 11.1294 7.31078 7 12 7C16.6892 7 20.1779 11.1294 21.544 13.045Z"
                      stroke="#141B34"
                      stroke-width="1.5"
                    />
                    <path
                      d="M15 14C15 12.3431 13.6569 11 12 11C10.3431 11 9 12.3431 9 14C9 15.6569 10.3431 17 12 17C13.6569 17 15 15.6569 15 14Z"
                      stroke="#141B34"
                      stroke-width="1.5"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <button
            className="flex justify-center items-center bg-green-500 hover:bg-green-400 rounded-full px-2 mt-3 py-2 w-fit mt-2 gap-2
          "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              color="#000000"
              fill="none"
            >
              <path
                d="M4 12.0005L4 14.5446C4 17.7896 4 19.4122 4.88607 20.5111C5.06508 20.7331 5.26731 20.9354 5.48933 21.1144C6.58831 22.0005 8.21082 22.0005 11.4558 22.0005C12.1614 22.0005 12.5141 22.0005 12.8372 21.8865C12.9044 21.8627 12.9702 21.8355 13.0345 21.8047C13.3436 21.6569 13.593 21.4075 14.0919 20.9086L18.8284 16.172C19.4065 15.594 19.6955 15.3049 19.8478 14.9374C20 14.5699 20 14.1611 20 13.3436V10.0005C20 6.22922 20 4.34361 18.8284 3.17203C17.7693 2.11287 16.1265 2.01125 13.0345 2.0015M13 21.5005V21.0005C13 18.172 13 16.7578 13.8787 15.8791C14.7574 15.0005 16.1716 15.0005 19 15.0005H19.5"
                stroke="#141B34"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 5.99954H4M8 1.99954V9.99954"
                stroke="#141B34"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Add Password
          </button>
        </div>
      </div>
    </>
  );
};

export default Manager;
