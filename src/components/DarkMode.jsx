import React, { useState } from "react";

function DarkMode() {
  const [mode, setMode] = useState(false);
  const handleClick = () => {
    if (!mode) {
      document.body.classList.add("dark");
      setMode(true);
    } else {
      document.body.classList.remove("dark");
      setMode(false);
    }
  };

  return (
    <button
      className="flex items-center gap-2"
      onClick={() => {
        handleClick();
      }}
    >
      <svg
        width="18"
        height="17"
        viewBox="0 0 18 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.5532 11.815C8.66857 11.815 5.51929 8.92783 5.51929 5.36821C5.51929 4.0253 5.96679 2.78158 6.73143 1.75C3.69036 2.69515 1.5 5.33122 1.5 8.43807C1.5 12.3385 4.94929 15.5 9.20357 15.5C12.5929 15.5 15.4696 13.4932 16.5 10.7045C15.375 11.4048 14.0161 11.815 12.5532 11.815Z"
          fill="white"
          stroke="#111517"
          stroke-width="1.25"
        />
      </svg>

      <span className="font-semibold text-[12px] sm:text-base dark:text-white">
        Dark Mode
      </span>
    </button>
  );
}

export default DarkMode;
