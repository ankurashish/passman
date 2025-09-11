import React, { useEffect } from "react";
import { useRef, useState } from "react";

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
            className="flex justify-center items-center bg-green-500 hover:bg-green-450 hover:scale-102 hover:transition-all rounded-full px-2 py-2 w-fit mt-2 gap-2 cursor-pointer
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
                </tr>
              </thead>
              <tbody>
                {passwordArray.map((item, index) => (
                  <tr key={index}>
                    <td className="flex items-center justify-between gap-2">
                      <a href={item.site} target="_blank">
                        {item.site}
                      </a>
                      <svg 
                        className="cursor-pointer hover:scale-105 hover:transition-all mx-2 my-1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        color="#000000"
                        fill="none"
                      >
                        <path
                          d="M9 15C9 12.1716 9 10.7574 9.87868 9.87868C10.7574 9 12.1716 9 15 9L16 9C18.8284 9 20.2426 9 21.1213 9.87868C22 10.7574 22 12.1716 22 15V16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H15C12.1716 22 10.7574 22 9.87868 21.1213C9 20.2426 9 18.8284 9 16L9 15Z"
                          stroke="#141B34"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16.9999 9C16.9975 6.04291 16.9528 4.51121 16.092 3.46243C15.9258 3.25989 15.7401 3.07418 15.5376 2.90796C14.4312 2 12.7875 2 9.5 2C6.21252 2 4.56878 2 3.46243 2.90796C3.25989 3.07417 3.07418 3.25989 2.90796 3.46243C2 4.56878 2 6.21252 2 9.5C2 12.7875 2 14.4312 2.90796 15.5376C3.07417 15.7401 3.25989 15.9258 3.46243 16.092C4.51121 16.9528 6.04291 16.9975 9 16.9999"
                          stroke="#141B34"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </td>

                    <td>{item.username}</td>
                    <td>{item.password}</td>
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
