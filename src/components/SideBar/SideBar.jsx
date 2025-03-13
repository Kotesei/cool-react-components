import { useState } from "react";
function DropDownSVG({ rotation }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`size-5 ${rotation ? `rotate-${rotation}` : ""}`}
    >
      <path
        fillRule="evenodd"
        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function SideBar() {
  const [openDropdown, setOpenDropdown] = useState(false);
  function toggleHandler(index) {
    setOpenDropdown(openDropdown === index ? false : index);
  }
  return (
    <div className="bg-[#00000094] border-r-1 shadow-lg shadow-black h-full w-90 z-10 backdrop-blur-[5px] absolute top-0 left-0 flex flex-col items-center p-5 gap-2">
      <h2 className="text-[2rem] mb-5">Sidebar</h2>
      <div key="1" id="sideBarElement" className="w-full">
        <label
          className="bg-white p-2 pl-5 text-black rounded flex justify-between items-center gap-1"
          htmlFor="dropdown"
          onClick={() => toggleHandler(1)}
        >
          <p>Example Drop Down</p>
          {openDropdown !== 1 ? (
            <DropDownSVG />
          ) : (
            <DropDownSVG rotation="180" />
          )}
        </label>
        <ul
          className={`overflow-hidden ${openDropdown === 1 ? `h-fit` : "h-0"}`}
          id="dropdown"
        >
          <li>Hi</li>
          <li>Uh</li>
          <li>Test</li>
          <li>Example</li>
        </ul>
      </div>
      <div key="2" id="sideBarElement" className="w-full">
        <label
          className="bg-white p-2 pl-5 text-black rounded flex justify-between items-center gap-1"
          htmlFor="dropdown"
          onClick={() => toggleHandler(2)}
        >
          <p>Example Drop Down</p>
          {openDropdown !== 2 ? (
            <DropDownSVG />
          ) : (
            <DropDownSVG rotation="180" />
          )}
        </label>
        <ul
          className={`overflow-hidden ${openDropdown === 2 ? `h-fit` : "h-0"}`}
          id="dropdown"
        >
          <li>Hi</li>
          <li>Uh</li>
          <li>Test</li>
          <li>Example</li>
        </ul>
      </div>
    </div>
  );
}
