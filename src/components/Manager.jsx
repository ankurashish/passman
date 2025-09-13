import React, { useEffect } from "react";
import { useRef, useState } from "react";
// import React from "react";

import { ToastContainer, toast, Bounce } from "react-toastify";

const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setpasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");

    if (passwords) {
      setpasswordArray(JSON.parse(passwords));
    } //else {
    //   passwordArray = [];
    // }
  }, []);

  const savePassword = () => {
    toast.success("🦄 Password Saved!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    // alert("Password Saved");
    console.log(form);
    setpasswordArray([...passwordArray, form]);
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
    console.log([...passwordArray, form]);
  };
  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  const showPassword = () => {
    // alert("show password");
    // passwordRef.current.type ="text";
    if (ref.current.src.includes("icons/eyecross.svg")) {
      ref.current.src = "icons/eye.svg";
      passwordRef.current.type = "password";
    } else {
      ref.current.src = "icons/eyecross.svg";
      passwordRef.current.type = "text";
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
      <div className="mycontainer bg-slate-100 rounded-3xl shadow-lg flex flex-col p-4 mt-4 ">
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
              value={form.site}
              onChange={handleChange}
              placeholder="Enter Website URL"
              type="text"
              name="site"
              id=""
              className="bg-gray-200 text-black rounded-2xl px-2 py-1 mb-2 w-full"
            />
            <div className="flex">
              <input
                value={form.username}
                onChange={handleChange}
                placeholder="Enter Username"
                type="text"
                name="username"
                className="bg-gray-200 text-black rounded-2xl px-2 py-1 mr-2 flex-grow "
              />
              <div className="relative">
                <input
                  ref={passwordRef}
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter Password"
                  type="password"
                  name="password"
                  className="bg-gray-200 text-black rounded-2xl px-2 py-1 flex-grow min-w-[40%] pr-8"
                />
                <span
                  className="absolute text-black right-0 cursor-pointer "
                  onClick={showPassword}
                >
                  <img ref={ref} className="m-1" src="icons/eye.svg" alt="" />
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={savePassword}
            className="flex justify-center items-center bg-green-500 hover:bg-green-400 hover:scale-102 hover:transition-all rounded-full px-2 py-2 w-fit mt-2 gap-2 cursor-pointer
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
        <h2 className="font-bold text-xl py-4">Your Passwords</h2>
        <div className="passwords max-h-[calc(100vh-420px)] overflow-y-auto">
          {passwordArray.length === 0 && <div>No Passwords Saved</div>}
          {passwordArray.length > 0 && (
            <table className="table-auto w-full text-left whitespace-no-wrap overflow-hidden rounded-lg bg-gray-200 shadow-lg ">
              <thead className="bg-gray-300 text-black font-bold  ">
                <tr>
                  <th>Website</th>
                  <th>Username</th>
                  <th>Password</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {passwordArray.map((item, index) => (
                  <tr key={index}>
                    {/* Website */}
                    <td>
                      <div className="flex items-center justify-between gap-2">
                        <a href={item.site} target="_blank" rel="noreferrer">
                          {item.site}
                        </a>
                        <svg
                          onClick={() =>
                            navigator.clipboard.writeText(item.site)
                          }
                          className="inline-block cursor-pointer hover:scale-105 hover:transition-all"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="20"
                          height="20"
                          fill="none"
                        >
                          <path
                            d="M9 15C9 12.17 9 10.76 9.88 9.88C10.76 9 12.17 9 15 9H16C18.83 9 20.24 9 21.12 9.88C22 10.76 22 12.17 22 15V16C22 18.83 22 20.24 21.12 21.12C20.24 22 18.83 22 16 22H15C12.17 22 10.76 22 9.88 21.12C9 20.24 9 18.83 9 16V15Z"
                            stroke="#141B34"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M17 9C16.99 6.04 16.95 4.51 16.09 3.46C15.93 3.26 15.74 3.07 15.54 2.91C14.43 2 12.79 2 9.5 2C6.21 2 4.57 2 3.46 2.91C3.26 3.07 3.07 3.26 2.91 3.46C2 4.57 2 6.21 2 9.5C2 12.79 2 14.43 2.91 15.54C3.07 15.74 3.26 15.93 3.46 16.09C4.51 16.95 6.04 16.99 9 17"
                            stroke="#141B34"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </td>

                    {/* Username */}
                    <td>
                      <div className="flex items-center justify-between gap-2">
                        {item.username}
                        <svg
                          onClick={() =>
                            navigator.clipboard.writeText(item.username)
                          }
                          className="inline-block cursor-pointer hover:scale-105 hover:transition-all"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="20"
                          height="20"
                          fill="none"
                        >
                          <path
                            d="M9 15C9 12.17 9 10.76 9.88 9.88C10.76 9 12.17 9 15 9H16C18.83 9 20.24 9 21.12 9.88C22 10.76 22 12.17 22 15V16C22 18.83 22 20.24 21.12 21.12C20.24 22 18.83 22 16 22H15C12.17 22 10.76 22 9.88 21.12C9 20.24 9 18.83 9 16V15Z"
                            stroke="#141B34"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M17 9C16.99 6.04 16.95 4.51 16.09 3.46C15.93 3.26 15.74 3.07 15.54 2.91C14.43 2 12.79 2 9.5 2C6.21 2 4.57 2 3.46 2.91C3.26 3.07 3.07 3.26 2.91 3.46C2 4.57 2 6.21 2 9.5C2 12.79 2 14.43 2.91 15.54C3.07 15.74 3.26 15.93 3.46 16.09C4.51 16.95 6.04 16.99 9 17"
                            stroke="#141B34"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </td>

                    {/* Password */}
                    <td>
                      <div className="flex items-center justify-between gap-2">
                        {item.password}
                        <svg
                          onClick={() =>
                            navigator.clipboard.writeText(item.password)
                          }
                          className="inline-block cursor-pointer hover:scale-105 hover:transition-all"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="20"
                          height="20"
                          fill="none"
                        >
                          <path
                            d="M9 15C9 12.17 9 10.76 9.88 9.88C10.76 9 12.17 9 15 9H16C18.83 9 20.24 9 21.12 9.88C22 10.76 22 12.17 22 15V16C22 18.83 22 20.24 21.12 21.12C20.24 22 18.83 22 16 22H15C12.17 22 10.76 22 9.88 21.12C9 20.24 9 18.83 9 16V15Z"
                            stroke="#141B34"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M17 9C16.99 6.04 16.95 4.51 16.09 3.46C15.93 3.26 15.74 3.07 15.54 2.91C14.43 2 12.79 2 9.5 2C6.21 2 4.57 2 3.46 2.91C3.26 3.07 3.07 3.26 2.91 3.46C2 4.57 2 6.21 2 9.5C2 12.79 2 14.43 2.91 15.54C3.07 15.74 3.26 15.93 3.46 16.09C4.51 16.95 6.04 16.99 9 17"
                            stroke="#141B34"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center justify-between gap-2">
                        <button><span>Delete</span></button>
                      </div>
                    </td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
