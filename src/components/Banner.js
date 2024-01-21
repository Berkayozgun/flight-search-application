import React, { useState } from "react";

function Banner() {
  const [isBannerVisible, setIsBannerVisible] = React.useState(true);
  const closeBanner = () => {
    setIsBannerVisible(false);
  };
  return (
    <div>
      {isBannerVisible && (
        <div className="bg-[#605DEC] text-white p-4 flex justify-between items-center">
          <div className="w-full text-center text-violet-50 text-lg font-semibold">
            Join CheapFlight today and save up to 30% on your flight using code
            2024 at checkout. Promotion valid for new users only.
          </div>
          <button onClick={closeBanner} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M14.5858 16L10.3431 11.7574C9.95261 11.3668 9.95261 10.7337 10.3431 10.3431C10.7337 9.95262 11.3668 9.95262 11.7573 10.3431L16 14.5858L20.2426 10.3431C20.6332 9.95262 21.2663 9.95262 21.6568 10.3431C22.0474 10.7337 22.0474 11.3668 21.6568 11.7574L17.4142 16L21.6568 20.2426C22.0474 20.6332 22.0474 21.2663 21.6568 21.6569C21.2663 22.0474 20.6332 22.0474 20.2426 21.6569L16 17.4142L11.7573 21.6569C11.3668 22.0474 10.7337 22.0474 10.3431 21.6569C9.95261 21.2663 9.95261 20.6332 10.3431 20.2426L14.5858 16Z"
                fill="#F6F6FE"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default Banner;
